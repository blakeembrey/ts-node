import { diffLines } from 'diff';
import { homedir } from 'os';
import { join } from 'path';
import { Recoverable, ReplOptions, REPLServer, start } from 'repl';
import { Context, createContext, Script } from 'vm';
import { Service, CreateOptions, TSError, env } from './index';
import { readFileSync, statSync } from 'fs';
import { Console } from 'console';
import type * as tty from 'tty';
import Module = require('module');

// Lazy-loaded.
let processTopLevelAwait: (src: string) => string | null;

/** @internal */
export const EVAL_FILENAME = `[eval].ts`;
/** @internal */
export const EVAL_NAME = `[eval]`;
/** @internal */
export const STDIN_FILENAME = `[stdin].ts`;
/** @internal */
export const STDIN_NAME = `[stdin]`;
/** @internal */
export const REPL_FILENAME = '<repl>.ts';
/** @internal */
export const REPL_NAME = '<repl>';

export interface ReplService {
  readonly state: EvalState;
  /**
   * Bind this REPL to a ts-node compiler service.  A compiler service must be bound before `eval`-ing code or starting the REPL
   */
  setService(service: Service): void;
  evalCode(code: string): any;
  /** @internal */
  evalCodeInternal(
    code: string,
    context?: Context
  ): {
    containsTLA: boolean;
    commands: Array<{ mustAwait?: true; caller: () => any }>;
  };
  /**
   * `eval` implementation compatible with node's REPL API
   */
  nodeEval(
    code: string,
    context: Context,
    _filename: string,
    callback: (err: Error | null, result?: any) => any
  ): void;
  evalAwarePartialHost: EvalAwarePartialHost;
  /** Start a node REPL */
  start(code?: string): void;
  /** @internal */
  startInternal(opts?: ReplOptions & { code?: string }): REPLServer;
  /** @internal */
  readonly stdin: NodeJS.ReadableStream;
  /** @internal */
  readonly stdout: NodeJS.WritableStream;
  /** @internal */
  readonly stderr: NodeJS.WritableStream;
  /** @internal */
  readonly console: Console;
}

export interface CreateReplOptions {
  service?: Service;
  state?: EvalState;
  stdin?: NodeJS.ReadableStream;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
  /** @internal */
  composeWithEvalAwarePartialHost?: EvalAwarePartialHost;
}

/**
 * Create a ts-node REPL instance.
 *
 * Usage example:
 *
 *     const repl = tsNode.createRepl()
 *     const service = tsNode.create({...repl.evalAwarePartialHost})
 *     repl.setService(service)
 *     repl.start()
 */
export function createRepl(options: CreateReplOptions = {}) {
  let service = options.service;
  let server: REPLServer;
  const state =
    options.state ?? new EvalState(join(process.cwd(), REPL_FILENAME));
  const evalAwarePartialHost = createEvalAwarePartialHost(
    state,
    options.composeWithEvalAwarePartialHost
  );
  const stdin = options.stdin ?? process.stdin;
  const stdout = options.stdout ?? process.stdout;
  const stderr = options.stderr ?? process.stderr;
  const _console =
    stdout === process.stdout && stderr === process.stderr
      ? console
      : new Console(stdout, stderr);

  const replService: ReplService = {
    state: options.state ?? new EvalState(join(process.cwd(), EVAL_FILENAME)),
    setService,
    evalCode,
    evalCodeInternal,
    nodeEval,
    evalAwarePartialHost,
    start,
    startInternal,
    stdin,
    stdout,
    stderr,
    console: _console,
  };
  return replService;

  function setService(_service: Service) {
    service = _service;
  }

  function evalCode(code: string) {
    const { commands } = _eval(service!, state, code);

    return commands.reduce<any>((_, { caller }) => caller(), undefined);
  }

  function evalCodeInternal(code: string, context: Context | undefined) {
    return _eval(service!, state, code, context);
  }

  function nodeEval(
    code: string,
    context: Context,
    _filename: string,
    callback: (err: Error | null, result?: any) => any
  ) {
    let err: Error | null = null;
    let result: any;

    // TODO: Figure out how to handle completion here.
    if (code === '.scope') {
      callback(err);
      return;
    }

    function handleError(error: unknown) {
      if (error instanceof TSError) {
        // Support recoverable compilations using >= node 6.
        if (Recoverable && isRecoverable(error)) {
          err = new Recoverable(error);
        } else {
          _console.error(error);
        }
      } else {
        err = error as any;
      }
    }

    try {
      const { containsTLA, commands } = evalCodeInternal(
        code,
        server.useGlobal ? undefined : context
      );

      if (containsTLA) {
        return (async () => {
          try {
            for (const { mustAwait, caller } of commands) {
              if (mustAwait) {
                result = await caller();
              } else {
                result = caller();
              }
            }
          } catch (promiseError) {
            handleError(promiseError);
          }

          callback(err, result);
        })();
      }

      result = commands.reduce((_, { caller }) => caller(), undefined);
    } catch (error) {
      handleError(error);
    }

    return callback(err, result);
  }

  function start(code?: string) {
    // TODO assert that service is set; remove all ! postfixes
    server = startRepl(replService, service!, state, code);
  }

  function startInternal({
    code,
    ...optionsOverride
  }: ReplOptions & { code?: string } = {}) {
    // TODO assert that service is set; remove all ! postfixes
    return (server = startRepl(
      replService,
      service!,
      state,
      code,
      optionsOverride
    ));
  }
}

/**
 * Eval state management. Stores virtual `[eval].ts` file
 */
export class EvalState {
  /** @internal */
  input = '';
  /** @internal */
  output = '';
  /** @internal */
  version = 0;
  /** @internal */
  lines = 0;

  __tsNodeEvalStateBrand: unknown;

  constructor(public path: string) {}
}

/**
 * Filesystem host functions which are aware of the "virtual" [eval].ts file used to compile REPL inputs.
 * Must be passed to `create()` to create a ts-node compiler service which can compile REPL inputs.
 */
export type EvalAwarePartialHost = Pick<
  CreateOptions,
  'readFile' | 'fileExists'
>;

export function createEvalAwarePartialHost(
  state: EvalState,
  composeWith?: EvalAwarePartialHost
): EvalAwarePartialHost {
  function readFile(path: string) {
    if (path === state.path) return state.input;

    if (composeWith?.readFile) return composeWith.readFile(path);

    try {
      return readFileSync(path, 'utf8');
    } catch (err) {
      /* Ignore. */
    }
  }
  function fileExists(path: string) {
    if (path === state.path) return true;

    if (composeWith?.fileExists) return composeWith.fileExists(path);

    try {
      const stats = statSync(path);
      return stats.isFile() || stats.isFIFO();
    } catch (err) {
      return false;
    }
  }
  return { readFile, fileExists };
}

/**
 * Evaluate the code snippet.
 */
function _eval(
  service: Service,
  state: EvalState,
  input: string,
  context?: Context
) {
  const lines = state.lines;
  const isCompletion = !/\n$/.test(input);
  const undo = appendEval(state, input);
  let output: string;

  // Based on https://github.com/nodejs/node/blob/92573721c7cff104ccb82b6ed3e8aa69c4b27510/lib/repl.js#L457-L461
  function adjustUseStrict(code: string) {
    // "void 0" keeps the repl from returning "use strict" as the result
    // value for statements and declarations that don't return a value.
    return code.replace(/^"use strict";/, '"use strict"; void 0;');
  }

  try {
    output = service.compile(state.input, state.path, -lines);
  } catch (err) {
    undo();
    throw err;
  }

  output = adjustUseStrict(output);

  // Use `diff` to check for new JavaScript to execute.
  const changes = diffLines(state.output, output);

  if (isCompletion) {
    undo();
  } else {
    state.output = output;
  }

  let commands: Array<{ mustAwait?: true; caller: () => any }> = [];
  let containsTLA = false;

  for (const change of changes) {
    if (change.added) {
      if (
        /\bawait\b/.test(change.value) &&
        service.options.experimentalReplAwait
      ) {
        if (processTopLevelAwait === undefined) {
          ({ processTopLevelAwait } = require('../dist-raw/node-repl-await'));
        }

        // Neline prevents comments to mess with wrapper
        const wrappedResult = processTopLevelAwait(change.value + '\n');
        if (wrappedResult !== null) {
          containsTLA = true;
          commands.push({
            mustAwait: true,
            caller: () => exec(wrappedResult, state.path, context),
          });
          continue;
        }
      }
      commands.push({ caller: () => exec(change.value, state.path, context) });
    }
  }

  return { containsTLA, commands };
}

/**
 * Execute some code.
 */
function exec(code: string, filename: string, context?: Context) {
  const script = new Script(code, { filename });

  if (context === undefined) {
    return script.runInThisContext();
  } else {
    return script.runInContext(context);
  }
}

/**
 * Start a CLI REPL.
 */
function startRepl(
  replService: ReplService,
  service: Service,
  state: EvalState,
  code?: string,
  optionsOverride?: ReplOptions
) {
  let context: Context | undefined;
  if (optionsOverride?.useGlobal === false) {
    context = createContext();
    setContext(
      context,
      createNodeModuleForContext('repl', process.cwd()),
      'repl'
    );
  }

  // Eval incoming code before the REPL starts.
  if (code) {
    try {
      replService.evalCodeInternal(`${code}\n`, context);
    } catch (err) {
      replService.console.error(err);
      process.exit(1);
    }
  }

  const repl = start({
    prompt: '> ',
    input: replService.stdin,
    output: replService.stdout,
    // Mimicking node's REPL implementation: https://github.com/nodejs/node/blob/168b22ba073ee1cbf8d0bcb4ded7ff3099335d04/lib/internal/repl.js#L28-L30
    terminal:
      (replService.stdout as tty.WriteStream).isTTY &&
      !parseInt(env.NODE_NO_READLINE!, 10),
    eval: replService.nodeEval,
    useGlobal: true,
    ...optionsOverride,
  });

  if (context !== undefined) {
    Object.assign(repl.context, context);
  }

  // Bookmark the point where we should reset the REPL state.
  const resetEval = appendEval(state, '');

  function reset() {
    resetEval();

    // Hard fix for TypeScript forcing `Object.defineProperty(exports, ...)`.
    exec('exports = module.exports', state.path, context);
  }

  reset();
  repl.on('reset', reset);

  repl.defineCommand('type', {
    help: 'Check the type of a TypeScript identifier',
    action: function (identifier: string) {
      if (!identifier) {
        repl.displayPrompt();
        return;
      }

      const undo = appendEval(state, identifier);
      const { name, comment } = service.getTypeInfo(
        state.input,
        state.path,
        state.input.length
      );

      undo();

      if (name) repl.outputStream.write(`${name}\n`);
      if (comment) repl.outputStream.write(`${comment}\n`);
      repl.displayPrompt();
    },
  });

  // Set up REPL history when available natively via node.js >= 11.
  if (repl.setupHistory) {
    const historyPath =
      env.TS_NODE_HISTORY || join(homedir(), '.ts_node_repl_history');

    repl.setupHistory(historyPath, (err) => {
      if (!err) return;

      replService.console.error(err);
      process.exit(1);
    });
  }

  return repl;
}

/**
 * Append to the eval instance and return an undo function.
 */
function appendEval(state: EvalState, input: string) {
  const undoInput = state.input;
  const undoVersion = state.version;
  const undoOutput = state.output;
  const undoLines = state.lines;

  // Handle ASI issues with TypeScript re-evaluation.
  if (
    undoInput.charAt(undoInput.length - 1) === '\n' &&
    /^\s*[\/\[(`-]/.test(input) &&
    !/;\s*$/.test(undoInput)
  ) {
    state.input = `${state.input.slice(0, -1)};\n`;
  }

  state.input += input;
  state.lines += lineCount(input);
  state.version++;

  return function () {
    state.input = undoInput;
    state.output = undoOutput;
    state.version = undoVersion;
    state.lines = undoLines;
  };
}

/**
 * Count the number of lines.
 */
function lineCount(value: string) {
  let count = 0;

  for (const char of value) {
    if (char === '\n') {
      count++;
    }
  }

  return count;
}

const RECOVERY_CODES: Set<number> = new Set([
  1003, // "Identifier expected."
  1005, // "')' expected."
  1109, // "Expression expected."
  1126, // "Unexpected end of text."
  1160, // "Unterminated template literal."
  1161, // "Unterminated regular expression literal."
  2355, // "A function whose declared type is neither 'void' nor 'any' must return a value."
]);

/**
 * Check if a function can recover gracefully.
 */
function isRecoverable(error: TSError) {
  return error.diagnosticCodes.every((code) => RECOVERY_CODES.has(code));
}

/** @internal */
export function setContext(
  context: any,
  module: Module,
  filenameAndDirname: 'eval' | 'stdin' | 'repl' | null
) {
  if (filenameAndDirname) {
    context.__dirname = '.';
    context.__filename = `[${filenameAndDirname}]`;
  }
  context.module = module;
  context.exports = module.exports;
  context.require = module.require.bind(module);
}

/** @internal */
export function createNodeModuleForContext(
  type: 'eval' | 'stdin' | 'repl',
  cwd: string
) {
  // Create a local module instance based on `cwd`.
  const module = new Module(`[${type}]`);
  module.filename = join(cwd, module.id) + '.ts';
  module.paths = (Module as any)._nodeModulePaths(cwd);
  return module;
}
