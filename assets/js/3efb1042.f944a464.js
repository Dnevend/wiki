"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2,tags:["git","standard"]},l="\u63d0\u4ea4\u89c4\u8303",i={unversionedId:"git/standard",id:"git/standard",title:"\u63d0\u4ea4\u89c4\u8303",description:"\u8bf4\u660e",source:"@site/docs/git/standard.md",sourceDirName:"git",slug:"/git/standard",permalink:"/docs/git/standard",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/standard.md",tags:[{label:"git",permalink:"/docs/tags/git"},{label:"standard",permalink:"/docs/tags/standard"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["git","standard"]},sidebar:"wikiSidebar",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs/git/command"},next:{title:"\u524d\u7aef\u5de5\u7a0b\u5316",permalink:"/docs/category/\u524d\u7aef\u5de5\u7a0b\u5316"}},s={},m=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:2},{value:'<a name="commit-header"></a>Commit Message Header',id:"commit-message-header",level:3},{value:"type \u63d0\u4ea4\u7c7b\u578b",id:"type-\u63d0\u4ea4\u7c7b\u578b",level:4},{value:"scope \u5f71\u54cd\u8303\u56f4",id:"scope-\u5f71\u54cd\u8303\u56f4",level:4},{value:"short summary",id:"short-summary",level:4},{value:"Commit Message Body",id:"commit-message-body",level:3},{value:"Commit Message Footer",id:"commit-message-footer",level:3},{value:"\u751f\u6210 Change Log",id:"\u751f\u6210-change-log",level:2},{value:"\u5f15\u7528\u53c2\u8003",id:"\u5f15\u7528\u53c2\u8003",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u63d0\u4ea4\u89c4\u8303"},"\u63d0\u4ea4\u89c4\u8303"),(0,n.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,n.kt)("p",null,"\u6bcf\u6b21\u63d0\u4ea4\u65f6\u5e94\u8be5\u5305\u542b\u9488\u5bf9\u67d0\u4e00\u529f\u80fd\u6216\u573a\u666f\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"\u539f\u5b50\u6027"),"\u4fee\u6539\u5185\u5bb9. \u907f\u514d\u65e0\u610f\u4e49\u7684\u4fdd\u5b58\u548c\u65e0\u6548\u7684 Message \u5185\u5bb9."),(0,n.kt)("p",null,"\u6709\u6548\u7684 Message \u5e94\u8be5\u5305\u542b\u6b64\u6b21\u63d0\u4ea4\u7684\u7c7b\u578b\u548c\u5185\u5bb9\u7b80\u4ecb. \u5185\u5bb9\u5e94\u6e05\u6670\u660e\u4e86, \u5728\u56de\u6eaf\u65f6\u80fd\u591f\u89c1 Message \u77e5\u5185\u5bb9."),(0,n.kt)("p",null,"\u89c4\u8303\u7684 Message \u53ef\u4ee5\u901a\u8fc7\u811a\u672c\u5e2e\u52a9\u751f\u6210\u6bcf\u6b21\u7248\u672c\u53d1\u5e03\u65f6\u7684 ChangeLog."),(0,n.kt)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,n.kt)("p",null,"\u6bcf\u6761\u63d0\u4ea4\u6d88\u606f\u7531\u6807\u5934\u3001\u6b63\u6587\u548c\u9875\u811a\u7ec4\u6210\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"header \u662f\u5f3a\u5236\u6027\u7684, \u5fc5\u987b\u7b26\u5408",(0,n.kt)("a",{parentName:"p",href:"#commit-header"},"Commit Message Header"),"\u683c\u5f0f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"body \u5bf9\u4e8e\u9664\u201cdocs\u201d\u7c7b\u578b\u4e4b\u5916\u7684\u6240\u6709\u63d0\u4ea4\u90fd\u662f\u5f3a\u5236\u6027\u7684.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"footer \u53ef\u9009."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<header>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),(0,n.kt)("h3",{id:"commit-message-header"},(0,n.kt)("a",{name:"commit-header"}),"Commit Message Header"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<type>(<scope>): <short summary>\n  \u2502       \u2502             \u2502\n  \u2502       \u2502             \u2514\u2500\u2af8 \u7528\u73b0\u5728\u65f6\u8fdb\u884c\u603b\u7ed3\u3002 \u6ca1\u6709\u5927\u5199\u3002 \u672b\u5c3e\u6ca1\u6709\u53e5\u53f7\u3002\n  \u2502       \u2502\n  \u2502       \u2514\u2500\u2af8 \u5f71\u54cd\u8303\u56f4: animations|bazel|benchpress|common|compiler|compiler-cli|core|\n  \u2502                          elements|forms|http|language-service|localize|platform-browser|\n  \u2502                          platform-browser-dynamic|platform-server|router|service-worker|\n  \u2502                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|\n  \u2502                          devtools\n  \u2502\n  \u2514\u2500\u2af8 \u63d0\u4ea4\u7c7b\u578b: feat|fix|docs|style|refactor|test|chore\n")),(0,n.kt)("h4",{id:"type-\u63d0\u4ea4\u7c7b\u578b"},"type \u63d0\u4ea4\u7c7b\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat\uff1a\u65b0\u529f\u80fd\uff08feature\uff09"),(0,n.kt)("li",{parentName:"ul"},"fix\uff1a\u4fee\u8865 bug"),(0,n.kt)("li",{parentName:"ul"},"docs\uff1a\u6587\u6863\uff08documentation\uff09"),(0,n.kt)("li",{parentName:"ul"},"style\uff1a \u683c\u5f0f\uff08\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8\uff09"),(0,n.kt)("li",{parentName:"ul"},"refactor\uff1a\u91cd\u6784\uff08\u5373\u4e0d\u662f\u65b0\u589e\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u6539 bug \u7684\u4ee3\u7801\u53d8\u52a8\uff09"),(0,n.kt)("li",{parentName:"ul"},"test\uff1a\u589e\u52a0\u6d4b\u8bd5"),(0,n.kt)("li",{parentName:"ul"},"chore\uff1a\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8")),(0,n.kt)("h4",{id:"scope-\u5f71\u54cd\u8303\u56f4"},"scope \u5f71\u54cd\u8303\u56f4"),(0,n.kt)("p",null,"scope \u7528\u4e8e\u8bf4\u660e commit \u5f71\u54cd\u7684\u8303\u56f4\uff0c\u6bd4\u5982\u6570\u636e\u5c42\u3001\u63a7\u5236\u5c42\u3001\u89c6\u56fe\u5c42\u6216\u67d0\u4e2a\u6a21\u5757\u7684\u4fee\u6539\u7b49\u7b49\uff0c\u89c6\u9879\u76ee\u4e0d\u540c\u800c\u4e0d\u540c."),(0,n.kt)("h4",{id:"short-summary"},"short summary"),(0,n.kt)("p",null,"\u5bf9\u6b64\u6b21\u63d0\u4ea4\u5185\u5bb9\u7b80\u5355\u7684\u63cf\u8ff0."),(0,n.kt)("h3",{id:"commit-message-body"},"Commit Message Body"),(0,n.kt)("p",null,"Body \u90e8\u5206\u662f\u5bf9\u672c\u6b21 commit \u7684\u8be6\u7ec6\u63cf\u8ff0\uff0c\u53ef\u4ee5\u5206\u6210\u591a\u884c."),(0,n.kt)("h3",{id:"commit-message-footer"},"Commit Message Footer"),(0,n.kt)("p",null,"TODO:"),(0,n.kt)("h2",{id:"\u751f\u6210-change-log"},"\u751f\u6210 Change Log"),(0,n.kt)("p",null,"TODO:"),(0,n.kt)("h2",{id:"\u5f15\u7528\u53c2\u8003"},"\u5f15\u7528\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html"},"Commit message \u548c Change log \u7f16\u5199\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit"},"Commit Message Format"))))}u.isMDXComponent=!0}}]);