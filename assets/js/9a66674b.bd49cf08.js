"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[912],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return N}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),N=n,k=m["".concat(p,".").concat(N)]||m[N]||d[N]||s;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5440:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=["components"],l={title:"Mocha"},p=void 0,i={unversionedId:"recipes/mocha",id:"recipes/mocha",title:"Mocha",description:"Mocha 7 and newer",source:"@site/docs/recipes/mocha.md",sourceDirName:"recipes",slug:"/recipes/mocha",permalink:"/ts-node/docs/recipes/mocha",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/recipes/mocha.md",tags:[],version:"current",frontMatter:{title:"Mocha"},sidebar:"primarySidebar",previous:{title:"IntelliJ and Webstorm",permalink:"/ts-node/docs/recipes/intellij"},next:{title:"Tape",permalink:"/ts-node/docs/recipes/tape"}},c={},d=[{value:"Mocha 7 and newer",id:"mocha-7-and-newer",level:2},{value:"Mocha &lt;=6",id:"mocha-6",level:2}],m={toc:d};function N(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"mocha-7-and-newer"},"Mocha 7 and newer"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"mocha --require ts-node/register --extensions ts,tsx --watch --watch-files src "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},"'tests/**/*.{ts,tsx}'"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}}," [...args]"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"mocha --require ts-node/register --extensions ts,tsx --watch --watch-files src "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"tests/**/*.{ts,tsx}"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"...args"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")))))),(0,s.kt)("p",null,"Or specify options via your mocha config file."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:".mocharc.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},".mocharc.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},'// Specify "require" for CommonJS')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"require"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts-node/register"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},'// Specify "loader" for native ESM')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"loader"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts-node/esm"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"extensions"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ["),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"tsx"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"],")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"spec"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"tests/**/*.spec.*"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  ],")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"watch-files"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"src"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  ]")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:".mocharc.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},".mocharc.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},'// Specify "require" for CommonJS')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"require"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts-node/register"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},'// Specify "loader" for native ESM')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"loader"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts-node/esm"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"extensions"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"tsx"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"],")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"spec"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"tests/**/*.spec.*"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"],")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"watch-files"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"src"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.kt)("p",null,"See also: ",(0,s.kt)("a",{parentName:"p",href:"https://mochajs.org/#configuring-mocha-nodejs"},"https://mochajs.org/#configuring-mocha-nodejs")),(0,s.kt)("h2",{id:"mocha-6"},"Mocha <=6"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"mocha --require ts-node/register --watch-extensions ts,tsx "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"test/**/*.{ts,tsx}"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}}," [...args]"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"mocha --require ts-node/register --watch-extensions ts,tsx "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"test/**/*.{ts,tsx}"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"...args"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"--watch-extensions")," is only used in ",(0,s.kt)("inlineCode",{parentName:"p"},"--watch")," mode."))}N.isMDXComponent=!0}}]);