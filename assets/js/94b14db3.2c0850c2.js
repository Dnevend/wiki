"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6710],{9132:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=s(4848),t=s(8453);const l={slug:"debug-mobile-web",title:"\u79fb\u52a8\u7aef\u8c03\u8bd5\u6307\u5357",description:"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5",date:new Date("2024-06-01T00:00:00.000Z"),authors:["Dnevend"],tags:["tech"]},d="\u79fb\u52a8\u7aef\u8c03\u8bd5",r={permalink:"/blog/debug-mobile-web",source:"@site/blog/debug-mobile-web/index.md",title:"\u79fb\u52a8\u7aef\u8c03\u8bd5\u6307\u5357",description:"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5",date:"2024-06-01T00:00:00.000Z",tags:[{inline:!0,label:"tech",permalink:"/blog/tags/tech"}],readingTime:4.09,hasTruncateMarker:!1,authors:[{name:"\u5c0f\u5b66\u540e\u751f",title:"Full Stack Developer",url:"https://dnevend.github.io",imageURL:"https://github.com/Dnevend.png",key:"Dnevend"}],frontMatter:{slug:"debug-mobile-web",title:"\u79fb\u52a8\u7aef\u8c03\u8bd5\u6307\u5357",description:"\u4f7f\u7528 `chrome://inspect` \u548c `whistle` \u8fdb\u884c\u79fb\u52a8\u7aef\u8c03\u8bd5",date:"2024-06-01T00:00:00.000Z",authors:["Dnevend"],tags:["tech"]},unlisted:!1,prevItem:{title:"\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5",permalink:"/blog/parallax-scrolling-effect"}},c={authorsImageUrls:[void 0]},o=[{value:"\u4f7f\u7528 chrome://inspect",id:"\u4f7f\u7528-chromeinspect",level:2},{value:"\u8bbe\u5907\u5f00\u542f USB \u8c03\u8bd5",id:"\u8bbe\u5907\u5f00\u542f-usb-\u8c03\u8bd5",level:3},{value:"\u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177",id:"\u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177",level:3},{value:"\u4f7f\u7528 Whistle",id:"\u4f7f\u7528-whistle",level:2},{value:"\u5b98\u65b9\u4ecb\u7ecd",id:"\u5b98\u65b9\u4ecb\u7ecd",level:3},{value:"\u5b89\u88c5&amp;\u542f\u52a8",id:"\u5b89\u88c5\u542f\u52a8",level:3},{value:"\u4ee3\u7406&amp;\u8bc1\u4e66\u914d\u7f6e",id:"\u4ee3\u7406\u8bc1\u4e66\u914d\u7f6e",level:3},{value:"\u539f\u7406&amp;\u6d41\u7a0b",id:"\u539f\u7406\u6d41\u7a0b",level:3},{value:"\u5e38\u7528\u89c4\u5219",id:"\u5e38\u7528\u89c4\u5219",level:3},{value:"\u5f15\u7528\u53c2\u8003",id:"\u5f15\u7528\u53c2\u8003",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5f53\u79fb\u52a8\u7aef web \u9879\u76ee\u90e8\u7f72\u5728\u751f\u4ea7\u73af\u5883\uff0c\u9879\u76ee\u90e8\u7f72\u5728 Android/iOS \u6216\u5176\u4ed6\u79fb\u52a8\u8bbe\u5907\u4e0b\u53d1\u751f\u95ee\u9898, \u6216\u60f3\u8981\u6a21\u62df\u8bf7\u6c42\u4e0e\u62e6\u622a\u54cd\u5e94\u6570\u636e\u65f6\uff0c\u4f60\u4f1a\u901a\u8fc7\u4ec0\u4e48\u65b9\u5f0f\u6765\u8fdb\u884c\u5904\u7406\u4e0e\u8c03\u8bd5\uff1f"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u9879\u76ee\u662f\u79fb\u52a8\u7aef\u7684\u666e\u901a\u7f51\u9875\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chrome \u6d4f\u89c8\u5668\u81ea\u5e26\u7684 ",(0,i.jsx)(n.code,{children:"chrome://inspect"})," \u529f\u80fd\uff0c\u901a\u8fc7\u6570\u636e\u7ebf\u8fde\u63a5\u771f\u673a\u8bbe\u5907\u4ee5\u5b9e\u73b0\u5f00\u53d1\u8c03\u8bd5\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u5f53\u9047\u5230\u9700\u8981\u6a21\u62df\u7279\u5b9a\u8bf7\u6c42\u6216\u54cd\u5e94\u5185\u5bb9\u3001\u6ce8\u5165\u811a\u672c\u3001\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u5934\u7684\u573a\u666f\u65f6\uff0cinspect \u5c31\u96be\u4ee5\u5e94\u5bf9\u4e86\u3002\u53c8\u6216\u8005\uff0c\u4f60\u7684\u9879\u76ee\u4f5c\u4e3a WebView \u6216 JsBridge \u9875\u9762\u5d4c\u5165\u5728\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u5185\uff0c\u5728\u8fd9\u51e0\u79cd\u573a\u666f\u4e0b\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u6293\u5305\u5de5\u5177\u6765\u5b8c\u6210\u66f4\u9ad8\u7ea7\u7684\u8c03\u8bd5\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5e38\u89c1\u7684\u4e3b\u6d41\u4ee3\u7406\u5de5\u5177\u6709\uff1aFiddler\u3001Charles\uff0c\u672c\u6587\u4e3b\u8981\u8bb2\u8ff0\u5229\u7528",(0,i.jsx)(n.code,{children:"Whistle"}),"\u8fdb\u884c\u8c03\u8bd5\u64cd\u4f5c\uff0cWhistle \u57fa\u4e8e Node \u5b9e\u73b0\u8de8\u5e73\u53f0\uff0c\u65e0\u9700\u7b2c\u4e09\u65b9\u5b89\u88c5\u5305\uff0c\u66f4\u7b26\u5408\u524d\u7aef\u7684\u64cd\u4f5c\u4e60\u60ef\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528-chromeinspect",children:"\u4f7f\u7528 chrome://inspect"}),"\n",(0,i.jsx)(n.h3,{id:"\u8bbe\u5907\u5f00\u542f-usb-\u8c03\u8bd5",children:"\u8bbe\u5907\u5f00\u542f USB \u8c03\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5bf9\u8bbe\u5907\u5f00\u653e\u57fa\u7840\u7684\u8c03\u8bd5\u914d\u7f6e\uff0c\u5728 Android \u548c iOS \u4e0b\u6709\u4e0d\u540c\u7684\u5f00\u542f\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee\u4e0b\u9762\u94fe\u63a5\u4e86\u89e3\u66f4\u591a\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.android.com/studio/debug/dev-options?hl=zh-cn#Enable-debugging",children:"Android \u914d\u7f6e\u5f00\u53d1\u8005\u9009\u9879"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://dev.to/nimajafari/remote-debugging-using-google-chrome-on-ios-devices-with-macos-ca9",children:"iOS \u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177",children:"\u8bbf\u95ee\u8c03\u8bd5\u5de5\u5177"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b8c\u6210\u8bbe\u5907\u7684\u914d\u7f6e\u540e\uff0c\u8bf7\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u4e2d\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"chrome://inspect"})," \u8bbf\u95ee\u5f00\u53d1\u8005\u5de5\u5177\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"inspect page",src:s(6579).A+"",width:"1240",height:"720"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"dev-tools",src:s(9612).A+"",width:"1269",height:"812"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528-whistle",children:"\u4f7f\u7528 Whistle"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b98\u65b9\u4ecb\u7ecd",children:"\u5b98\u65b9\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"whistle(\u8bfb\u97f3[\u02c8w\u026as\u0259l]\uff0c\u62fc\u97f3[w\u0113is\u01d2u]) \u57fa\u4e8e Node \u5b9e\u73b0\u7684\u8de8\u5e73\u53f0 web \u8c03\u8bd5\u4ee3\u7406\u5de5\u5177\uff0c\u7c7b\u4f3c\u7684\u5de5\u5177\u6709 Windows \u5e73\u53f0\u4e0a\u7684 Fiddler\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u770b\u3001\u4fee\u6539 HTTP\u3001HTTPS\u3001Websocket \u7684\u8bf7\u6c42\u3001\u54cd\u5e94\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668\u4f7f\u7528\uff0c\u4e0d\u540c\u4e8e Fiddler \u901a\u8fc7\u65ad\u70b9\u4fee\u6539\u8bf7\u6c42\u54cd\u5e94\u7684\u65b9\u5f0f\uff0cwhistle \u91c7\u7528\u7684\u662f\u7c7b\u4f3c\u914d\u7f6e\u7cfb\u7edf hosts \u7684\u65b9\u5f0f\uff0c\u4e00\u5207\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u5b9e\u73b0\uff0c\u652f\u6301\u57df\u540d\u3001\u8def\u5f84\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u3001\u901a\u914d\u7b26\u3001\u901a\u914d\u8def\u5f84\u7b49\u591a\u79cd\u5339\u914d\u65b9\u5f0f\uff0c\u4e14\u53ef\u4ee5\u901a\u8fc7 Node \u6a21\u5757\u6269\u5c55\u529f\u80fd"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5\u542f\u52a8",children:"\u5b89\u88c5&\u542f\u52a8"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6b65\u9aa4: \u5b89\u88c5 Node > \u5b89\u88c5 whistle > \u542f\u52a8 whistle > \u914d\u7f6e\u4ee3\u7406 > \u5b89\u88c5\u6839\u8bc1\u4e66"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u5b89\u88c5\nnpm install -g whistle\n\n# \u68c0\u67e5: \u6267\u884c\u4e0b\u65b9\u547d\u4ee4\u540e\u5982\u679c\u6b63\u5e38\u8f93\u51fawhistle\u5e2e\u52a9\u4fe1\u606f, \u4ee3\u8868\u5b89\u88c5\u6210\u529f\nw2 help\n\n# \u542f\u52a8: \u8fd0\u884c\u540e\u9ed8\u8ba4\u8bbf\u95ee\u5730\u5740\u4e3a http://127.0.0.1:8899/\nw2 start\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u547d\u4ee4\u89c1 ",(0,i.jsx)(n.a,{href:"https://wproxy.org/whistle/options.html",children:"\u5b98\u65b9\u6587\u6863"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7406\u8bc1\u4e66\u914d\u7f6e",children:"\u4ee3\u7406&\u8bc1\u4e66\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u5de5\u5177\u524d\uff0c\u8bf7\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u5b89\u88c5\u5de5\u5177\u7684 HTTPS \u8bc1\u4e66\uff0c\u4ee5\u83b7\u53d6\u5b8c\u6574\u7684\u8c03\u8bd5\u80fd\u529b\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5f53\u4ee3\u7406\u5de5\u5177\u62e6\u622a HTTPS \u8bf7\u6c42\u65f6\uff0c\u5b83\u4f1a\u5145\u5f53\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u4e2d\u95f4\u4eba\uff08MITM\uff09\uff0c\u5e76\u751f\u6210\u4e00\u4e2a\u4f2a\u9020\u7684\u8bc1\u4e66\u6765\u66ff\u6362\u539f\u6709\u7684\u670d\u52a1\u5668\u8bc1\u4e66\u3002\u5982\u679c\u5ba2\u6237\u7aef\u6ca1\u6709\u4fe1\u4efb\u8fd9\u4e2a\u4f2a\u9020\u7684\u8bc1\u4e66\uff0c\u5c31\u4f1a\u51fa\u73b0\u8bc1\u4e66\u9519\u8bef\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"qrcode",src:s(1105).A+"",width:"3094",height:"1790"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"network",src:s(4285).A+"",width:"3096",height:"1960"})}),"\n",(0,i.jsx)(n.h3,{id:"\u539f\u7406\u6d41\u7a0b",children:"\u539f\u7406&\u6d41\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"principle",src:s(5075).A+"",width:"1310",height:"608"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5e38\u7528\u89c4\u5219",children:"\u5e38\u7528\u89c4\u5219"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u4fee\u6539\u8bf7\u6c42\u5217\u8868\u663e\u793aStyle\n    style://color=@fff&fontStyle=italic&bgColor=red\n# \u4fee\u6539UserAgent\n\tua://{ua}\n# \u4fee\u6539\u72b6\u6001\u7801\n\tstatusCode://[statusCode]\n# \u4fee\u6539\u8bf7\u6c42\u5934/\u54cd\u5e94\u5934\n\treqHeaders://{value}  resHeaders://{value}\n# \u4fee\u6539\u8bf7\u6c42\u5185\u5bb9\n\treqBody://{request.json}\n# \u4fee\u6539\u54cd\u5e94\u5185\u5bb9\n\tresBody://{response.json}\n# \u6a21\u62df\u5ef6\u65f6\n\treqDelay://[delayTime]\n# \u5904\u7406\u8de8\u57df\n\tresCors://*\n# \u4fee\u6539Host\u914d\u7f6e\n\t[originHost] [targetHost]\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5f15\u7528\u53c2\u8003",children:"\u5f15\u7528\u53c2\u8003"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://wproxy.org/whistle/",children:"Whistle"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9612:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dev-tools-4ee6e26577cb7e4e52e61369b72e0bad.png"},6579:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/inspect-8aa66edf7f7db21cb2a04bd1a42d99c6.png"},4285:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/network-15b7fcd5244b87d1cdcf6c927051b1fb.png"},5075:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/principle-6ba5d13a27791ef4c7608da82fbbbca8.png"},1105:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/qrcode-fb8d8e8fee30d38252a36ca6db6e3c52.png"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var i=s(6540);const t={},l=i.createContext(t);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);