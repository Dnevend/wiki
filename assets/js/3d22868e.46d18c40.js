"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3689],{5501:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=r(4848),s=r(8453);const l={slug:"tg-payment-guide",title:"Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0",description:"\u57fa\u4e8eGrammy\u6846\u67b6 Telegram Bot \u5f00\u53d1\u4e0e\u652f\u4ed8\uff08TON\u3001Star\uff09\u5f00\u53d1\u5c0f\u8bb0",authors:["Dnevend"],tags:["telegram"]},i="Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0",a={permalink:"/blog/tg-payment-guide",source:"@site/blog/tg-payments-guide/index.md",title:"Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0",description:"\u57fa\u4e8eGrammy\u6846\u67b6 Telegram Bot \u5f00\u53d1\u4e0e\u652f\u4ed8\uff08TON\u3001Star\uff09\u5f00\u53d1\u5c0f\u8bb0",date:"2024-08-07T09:12:33.000Z",tags:[{inline:!0,label:"telegram",permalink:"/blog/tags/telegram"}],readingTime:3.525,hasTruncateMarker:!1,authors:[{name:"\u5c0f\u5b66\u540e\u751f",title:"Full Stack Developer",url:"https://dnevend.github.io",imageURL:"https://github.com/Dnevend.png",key:"Dnevend"}],frontMatter:{slug:"tg-payment-guide",title:"Telegram \u652f\u4ed8\u673a\u5668\u4eba\u5f00\u53d1\u5c0f\u8bb0",description:"\u57fa\u4e8eGrammy\u6846\u67b6 Telegram Bot \u5f00\u53d1\u4e0e\u652f\u4ed8\uff08TON\u3001Star\uff09\u5f00\u53d1\u5c0f\u8bb0",authors:["Dnevend"],tags:["telegram"]},unlisted:!1,prevItem:{title:"\u89c6\u5dee\u6eda\u52a8\u5b9e\u8df5",permalink:"/blog/parallax-scrolling-effect"}},c={authorsImageUrls:[void 0]},d=[{value:"\u652f\u4ed8",id:"\u652f\u4ed8",level:2},{value:"Pay With Telegram Stars",id:"pay-with-telegram-stars",level:3},{value:"Pay With TON",id:"pay-with-ton",level:3},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:2},{value:"\u5f15\u7528\u53c2\u8003",id:"\u5f15\u7528\u53c2\u8003",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u968f\u7740 Telegram \u8fc8\u5411\u533a\u5757\u94fe&\u5c0f\u7a0b\u5e8f\u65f6\u4ee3\uff0cTG \u5185\u90e8\u5df2\u7ecf\u4e0e TON \u94b1\u5305\u505a\u4e86\u96c6\u6210\uff0c\u5e76\u4e3a\u4e86\u5e94\u7528\u5546\u5e97\u76d1\u7ba1\u9700\u8981\u4e0a\u7ebf\u4e86 Telegram Stars \u4f5c\u4e3a\u652f\u4ed8\u65b9\u5f0f\u3002\u6b63\u4e3a\u533a\u5757\u94fe\u8d70\u5411 Mass Adoption \u94fa\u8bbe\u4e86\u4e00\u6761\u65b0\u7684\u9ad8\u901f\u516c\u8def\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5b9e\u8df5\u4e2d\u5b66\u4e60\uff0c\u672c\u6587\u8bb0\u5f55\u4e86 Telegram \u673a\u5668\u4eba\u4e0e\u652f\u4ed8\u73af\u8282\u7684\u5f00\u53d1\u8fc7\u7a0b\u548c\u4e00\u4e9b\u7ecf\u9a8c\u63d0\u793a\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Dnevend/tg-payment-bot",children:"\u70b9\u51fb\u6b64\u5904\u8bbf\u95ee\u5b8c\u6574 Demo \u5730\u5740"})}),"\n",(0,t.jsx)(n.h2,{id:"\u652f\u4ed8",children:"\u652f\u4ed8"}),"\n",(0,t.jsx)(n.h3,{id:"pay-with-telegram-stars",children:"Pay With Telegram Stars"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"sendInvoice"})," \u53d1\u9001\u53d1\u7968\uff0ccurrency \u53c2\u6570\u6307\u5b9a\u4e3a",(0,t.jsx)(n.code,{children:"XTR"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7b49\u5f85\u5b57\u6bb5 ",(0,t.jsx)(n.code,{children:"pre_checkout_query"})," \u7684\u66f4\u65b0"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"answerPreCheckoutQuery"})," \u6279\u51c6\u6216\u53d6\u6d88\u8ba2\u5355"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7b49\u5f85\u5b57\u6bb5 ",(0,t.jsx)(n.code,{children:"successful_payment"})," \u7684\u66f4\u65b0"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5b58\u50a8\u6210\u529f\u652f\u4ed8\u7684 ",(0,t.jsx)(n.code,{children:"telegram_payment_charge_id"}),"\uff08\u672a\u6765\u53ef\u80fd\u9700\u8981\u7528\u5b83\u6765\u53d1\u8d77\u9000\u6b3e\uff09"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5411\u7528\u6237\u4ea4\u4ed8\u5176\u6240\u8d2d\u4e70\u7684\u5546\u54c1\u548c\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pay-with-ton",children:"Pay With TON"}),"\n",(0,t.jsx)(n.p,{children:"TODO:"}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u70b9",children:"\u6ce8\u610f\u70b9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6d4b\u8bd5\u73af\u5883\u8d26\u53f7\u6ce8\u518c"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Telegram \u7684\u8d26\u53f7\u4f53\u7cfb\u4e2d\uff0c\u6d4b\u8bd5\u73af\u5883\u4e0e\u4e3b\u73af\u5883\u5b8c\u5168\u9694\u79bb\uff0c\u56e0\u6b64\u5728\u8fdb\u884c\u6d4b\u8bd5\u73af\u5883\u767b\u5f55\u65f6\uff0c\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u73b0\u6709\u8d26\u53f7\u8fdb\u884c\u767b\u5f55\uff0c\u5728\u626b\u7801\u65f6\u4f1a\u63d0\u793a",(0,t.jsx)(n.code,{children:"AUTH_TOKEN_INVALID2"}),"\u9519\u8bef\uff0c\u4ee5\u53ca\u65e0\u6cd5\u6536\u5230\u9a8c\u8bc1\u7801\u7684\u60c5\u51b5\u3002\n\u6240\u4ee5\u4f60\u9700\u8981\u5148\u6ce8\u518c\u4e00\u4e2a\u6d4b\u8bd5\u8d26\u53f7\uff0c\u622a\u6b62 2024 \u5e74 8 \u6708\uff0c\u6d4b\u8bd5\u8d26\u53f7\u53ea\u80fd\u901a\u8fc7 iPhone \u7aef Telegram \u8fdb\u884c\u3002\u5177\u4f53\u64cd\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["1\u3001\u767b\u5f55 Telegram iPhone",(0,t.jsx)(n.br,{}),"\n","2\u3001\u591a\u6b21\u70b9\u51fb\u53f3\u4e0b\u89d2",(0,t.jsx)(n.code,{children:"Setting"}),"Tab \u8fdb\u5165 Debug \u9875\u9762",(0,t.jsx)(n.br,{}),"\n","3\u3001\u70b9\u51fb\u64cd\u4f5c\u5217\u8868\u4e2d\u7684",(0,t.jsx)(n.code,{children:"Accounts"}),"\u9879",(0,t.jsx)(n.br,{}),"\n","4\u3001\u70b9\u51fb",(0,t.jsx)(n.code,{children:"Login to another account"}),"\u9009\u62e9",(0,t.jsx)(n.code,{children:"Test"}),"\u73af\u5883\uff0c\u5b8c\u6210\u8d26\u53f7\u6ce8\u518c"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8d26\u53f7\u6ce8\u518c\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u6309\u5b98\u65b9\u6d41\u7a0b\u8fdb\u5165\u6d4b\u8bd5\u73af\u5883\u3002\u5728\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u65f6\uff0c\u60a8\u53ef\u4ee5\u91c7\u7528\u672a\u52a0\u5bc6\u7684 HTTP \u94fe\u63a5\u6765\u6d4b\u8bd5\u60a8\u7684 Web \u5e94\u7528\u6216 Web \u767b\u5f55\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u5916\u6d4b\u8bd5\u73af\u5883\u7684 Telegram Star \u4e5f\u9700\u8981\u8fdb\u884c\u8d2d\u4e70\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u53c2\u8003\u4e0b\u6587\u4f7f\u7528 stripe \u63d0\u4f9b\u7684\u6d4b\u8bd5\u4fe1\u7528\u5361\u65e0\u9650\u5236\u8fdb\u884c\u8d2d\u4e70\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4fe1\u7528\u5361\u6d4b\u8bd5\u652f\u4ed8"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u60a8\u7684\u673a\u5668\u4eba\u652f\u4ed8\u529f\u80fd\u4ecd\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u9636\u6bb5\u65f6\uff0c\u8bf7\u4f7f\u7528 ",(0,t.jsx)(n.strong,{children:"\u201cStripe \u6d4b\u8bd5\u6a21\u5f0f\u201d"})," \u63d0\u4f9b\u5546\u3002\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u8fdb\u884c\u652f\u4ed8\u64cd\u4f5c\u800c\u4e0d\u4f1a\u5b9e\u9645\u8ba1\u8d39\u4efb\u4f55\u8d26\u6237\u3002\u6d4b\u8bd5\u6a21\u5f0f\u4e2d\u65e0\u6cd5\u4f7f\u7528\u771f\u5b9e\u4fe1\u7528\u5361\uff0c\u4f46\u60a8\u53ef\u4ee5\u4f7f\u7528\u6d4b\u8bd5\u5361\uff0c\u5982 ",(0,t.jsx)(n.code,{children:"4242 4242 4242 4242"})," ",(0,t.jsx)(n.a,{href:"https://docs.stripe.com/testing#cards",children:"(\u5b8c\u6574\u6d4b\u8bd5\u5361\u5217\u8868)"}),"\u3002\u60a8\u53ef\u4ee5\u968f\u610f\u5728\u6d4b\u8bd5\u6a21\u5f0f\u4e0e\u5b9e\u65f6\u6a21\u5f0f\u95f4\u5207\u6362\uff0c\u4f46\u5728\u6b63\u5f0f\u4e0a\u7ebf\u524d\uff0c\u8bf7\u52a1\u5fc5\u67e5\u9605",(0,t.jsx)(n.a,{href:"https://core.telegram.org/bots/payments#going-live",children:"\u4e0a\u7ebf\u68c0\u67e5\u6e05\u5355"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5f15\u7528\u53c2\u8003",children:"\u5f15\u7528\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://grammy.dev/zh/guide/",children:"grammY"})}),"\n",(0,t.jsx)(n.p,{children:"grammY \u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa Telegram Bot \u7684\u6846\u67b6\u3002\u5b83\u53ef\u4ee5\u4ece TypeScript \u548c JavaScript \u4e2d\u4f7f\u7528\uff0c\u5728 Node.js\u3001 Deno \u548c\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://core.telegram.org/bots/payments-stars",children:"Bot Payments API for Digital Goods and Services"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.ton.org/mandarin/develop/dapps/tutorials/accept-payments-in-a-telegram-bot-js",children:"\u51fa\u552e\u997a\u5b50\u7684\u673a\u5668\u4eba"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b98\u65b9 Demo\uff0c\u4e00\u4e2a\u7b80\u5355\u7684 Telegram \u673a\u5668\u4eba\uff0c\u7528\u4e8e\u63a5\u6536 TON \u652f\u4ed8\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://medium.com/@Asher_Tan/telegram-test-server%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C-24b0d424a2ff",children:"Telegram test server \u8d26\u53f7\u6ce8\u518c"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://teletype.in/@alteregor/how-to-integrate-telegram-stars",children:"How to integrate Telegram Stars Payment to your bot"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);