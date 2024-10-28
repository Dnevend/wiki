"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6629],{4882:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(4848),s=i(8453);const r={sidebar_position:4,tags:["blockchain","eip"]},c="EIP",o={id:"blockchain/eip",title:"EIP",description:"\u4ee5\u592a\u574a\u6539\u8fdb\u63d0\u6848 (EIP) \u662f\u4e3a\u4ee5\u592a\u574a\u6f5c\u5728\u65b0\u529f\u80fd\u6216\u6d41\u7a0b\u63d0\u51fa\u5efa\u8bae\u7684\u6807\u51c6\u3002 EIP \u5305\u542b\u63d0\u8bae\u6539\u8fdb\u7684\u6280\u672f\u89c4\u8303\uff0c\u5e76\u4f5c\u4e3a\u793e\u533a\u7684\u201c\u771f\u76f8\u6765\u6e90\u201d\u3002 \u5728 EIP \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u4f1a\u8ba8\u8bba\u548c\u5236\u5b9a\u4ee5\u592a\u574a\u7684\u7f51\u7edc\u5347\u7ea7\u548c\u5e94\u7528\u6807\u51c6\u3002",source:"@site/docs/blockchain/eip.md",sourceDirName:"blockchain",slug:"/blockchain/eip",permalink:"/docs/blockchain/eip",draft:!1,unlisted:!1,tags:[{inline:!0,label:"blockchain",permalink:"/docs/tags/blockchain"},{inline:!0,label:"eip",permalink:"/docs/tags/eip"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["blockchain","eip"]},sidebar:"wikiSidebar",previous:{title:"HDWallet",permalink:"/docs/blockchain/hdwallet"},next:{title:"\u9ed8\u514b\u5c14\u6811",permalink:"/docs/blockchain/merkle-tree"}},a={},l=[{value:"EIP-6963",id:"eip-6963",level:2},{value:"EIP-1193",id:"eip-1193",level:2},{value:"EIP-4361",id:"eip-4361",level:2},{value:"Template",id:"template",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"eip",children:"EIP"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/",children:"\u4ee5\u592a\u574a\u6539\u8fdb\u63d0\u6848 (EIP)"})," \u662f\u4e3a\u4ee5\u592a\u574a\u6f5c\u5728\u65b0\u529f\u80fd\u6216\u6d41\u7a0b\u63d0\u51fa\u5efa\u8bae\u7684\u6807\u51c6\u3002 EIP \u5305\u542b\u63d0\u8bae\u6539\u8fdb\u7684\u6280\u672f\u89c4\u8303\uff0c\u5e76\u4f5c\u4e3a\u793e\u533a\u7684\u201c\u771f\u76f8\u6765\u6e90\u201d\u3002 \u5728 EIP \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u4f1a\u8ba8\u8bba\u548c\u5236\u5b9a\u4ee5\u592a\u574a\u7684\u7f51\u7edc\u5347\u7ea7\u548c\u5e94\u7528\u6807\u51c6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"eip-6963",children:"EIP-6963"}),"\n",(0,t.jsx)(n.p,{children:"\u591a\u94b1\u5305\u81ea\u52a8\u53d1\u73b0\u53ca\u89e3\u51b3\u6ce8\u5165\u51b2\u7a81\u7684\u65b9\u6848\u3002\u5f53\u591a\u4e2a\u6d4f\u89c8\u5668\u63d2\u4ef6\u94b1\u5305\u8bd5\u56fe\u5c06\u5b83\u4eec\u7684\u4ee5\u592a\u574a\u63d0\u4f9b\u8005\u6ce8\u5165\u5230 window.ethereum \u65f6\uff0c\u4f1a\u5bfc\u81f4\u8986\u76d6\u548c\u6076\u610f\u7ade\u4e89\u3002EIP-6963 \u5f15\u5165\u4e86\u6807\u51c6\u5316\u7684\u63a5\u53e3\u548c\u4e8b\u4ef6\uff0c\u4ee5\u4fbf DApps \u65e0\u7f1d\u8bc6\u522b\u548c\u4e0e\u591a\u4e2a\u94b1\u5305\u4ea4\u4e92\uff0c\u65e8\u5728\u89e3\u51b3\u63d0\u4f9b\u8005\u6ce8\u5165\u51b2\u7a81\u95ee\u9898\uff0c\u6539\u5584 DApps \u548c\u94b1\u5305\u63d0\u4f9b\u8005\u7684\u751f\u6001\u7cfb\u7edf\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7319781980974448675",children:"\u591a\u94b1\u5305\u81ea\u52a8\u53d1\u73b0\u4ee5\u53ca\u6ce8\u5165\u51b2\u7a81\u89e3\u51b3\u65b9\u6848: EIP-6963 \u8c03\u7814"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/wevm/mipd",children:"mipd - Github"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/providers/blob/v14.0.2/src/EIP6963.ts",children:"Metamask \u5b9e\u73b0 - Github"})}),"\n",(0,t.jsx)(n.h2,{id:"eip-1193",children:"EIP-1193"}),"\n",(0,t.jsx)(n.p,{children:"EIP-1193 \u65e8\u5728\u4e3a\u4ee5\u592a\u574a\u94b1\u5305\u548c DApps \u4e4b\u95f4\u7684\u901a\u4fe1\u63d0\u4f9b\u4e00\u81f4\u7684\u63a5\u53e3\u3002\u8fd9\u4e2a\u63d0\u6848\u5b9a\u4e49\u4e86\u4e00\u79cd JavaScript API\uff0c\u901a\u8fc7\u8fd9\u4e2a API\uff0cDApps \u53ef\u4ee5\u8bf7\u6c42\u7528\u6237\u7684\u8d26\u6237\u4fe1\u606f\u3001\u8ba2\u9605\u94b1\u5305\u7684\u4e8b\u4ef6\uff0c\u4ee5\u53ca\u5411\u4ee5\u592a\u574a\u7f51\u7edc\u53d1\u9001\u4ea4\u6613\u3002EIP-1193 \u7684\u76ee\u6807\u662f\u63d0\u9ad8\u5f00\u53d1\u8005\u5728\u4e0d\u540c\u94b1\u5305\u63d0\u4f9b\u8005\u4e4b\u95f4\u6784\u5efa\u5e94\u7528\u7684\u517c\u5bb9\u6027\u548c\u7528\u6237\u4f53\u9a8c\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7176218426061357115",children:"Ethereum Provider"})}),"\n",(0,t.jsx)(n.h2,{id:"eip-4361",children:"EIP-4361"}),"\n",(0,t.jsx)(n.p,{children:"\u300c\u4f7f\u7528\u4ee5\u592a\u574a\u767b\u5f55\u300d(Sign-In with Ethereum, SIWE)\uff0c\u5b83\u5b9a\u4e49\u4e86\u4ee5\u592a\u574a\u7528\u6237\u4f7f\u7528\u5176\u4ee5\u592a\u574a\u94b1\u5305\u767b\u5f55\u7f51\u7ad9\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u6807\u51c6\u65b9\u5f0f\u3002\u8fd9\u521b\u5efa\u4e86\u4e00\u79cd\u81ea\u6258\u7ba1\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u53ef\u4ee5\u66ff\u4ee3\u4f9d\u8d56\u4e8e\u4e2d\u5fc3\u5316\u8eab\u4efd\u63d0\u4f9b\u5546\u7684\u4f20\u7edf\u767b\u5f55\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"template",children:"Template"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"${scheme}:// ${domain} wants you to sign in with your Ethereum account:\n${address}\n\n${statement}\n\nURI: ${uri}\nVersion: ${version}\nChain ID: ${chain-id}\nNonce: ${nonce}\nIssued At: ${issued-at}\nExpiration Time: ${expiration-time}\nNot Before: ${not-before}\nRequest ID: ${request-id}\nResources:\n- ${resources[0]}\n- ${resources[1]}\n...\n- ${resources[n]}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"example.com wants you to sign in with your Ethereum account:\n0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\n\nI accept the ExampleOrg Terms of Service: https://example.com/tos\n\nURI: https://example.com/login\nVersion: 1\nChain ID: 1\nNonce: 32891756\nIssued At: 2021-09-30T16:25:24Z\nResources:\n- ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/\n- https://example.com/my-web2-claim.json\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4361",children:"ERC-4361: Sign-In with Ethereum"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://foresightnews.pro/article/detail/21548",children:"\u8be6\u89e3 EIP-4361\uff1a\u4ec0\u4e48\u662f\u4ee5\u592a\u574a\u767b\u5f55\uff1f"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.theblockbeats.info/news/29865",children:"\u300c\u4f7f\u7528\u4ee5\u592a\u574a\u767b\u5f55\u300d\u2500\u2500 \u98a0\u8986\u4e92\u8054\u7f51\u7528\u6237\u7684\u9009\u62e9"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.chaincatcher.com/article/2090328",children:"\u4e07\u7269\u7814\u7a76\u9662\uff1a\u4ece EIP4361\uff0c\u63a2\u7d22 Web2 \u5230 Web3 \u8d26\u6237\u4f53\u7cfb\u53d8\u9769"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);