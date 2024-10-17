"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4911],{6110:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(4848),t=r(8453);const a={sidebar_position:1,tags:["engineering","webpack"]},s="Webpack",o={id:"engineering/webpack",title:"Webpack",description:"\u5e38\u7528\u914d\u7f6e",source:"@site/docs/engineering/webpack.md",sourceDirName:"engineering",slug:"/engineering/webpack",permalink:"/docs/engineering/webpack",draft:!1,unlisted:!1,tags:[{inline:!0,label:"engineering",permalink:"/docs/tags/engineering"},{inline:!0,label:"webpack",permalink:"/docs/tags/webpack"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["engineering","webpack"]},sidebar:"wikiSidebar",previous:{title:"\u524d\u7aef\u5de5\u7a0b\u5316",permalink:"/docs/category/\u524d\u7aef\u5de5\u7a0b\u5316"},next:{title:"Vite",permalink:"/docs/engineering/vite"}},l={},c=[{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:2},{value:"\u6784\u5efa\u6d41\u7a0b",id:"\u6784\u5efa\u6d41\u7a0b",level:2},{value:"Loader",id:"loader",level:2},{value:"Plugin",id:"plugin",level:2},{value:"Tree Shaking",id:"tree-shaking",level:2},{value:"\u5f15\u7528\u53c2\u8003",id:"\u5f15\u7528\u53c2\u8003",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"webpack",children:"Webpack"}),"\n",(0,i.jsx)(e.h2,{id:"\u5e38\u7528\u914d\u7f6e",children:"\u5e38\u7528\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Entry\uff1a\u5165\u53e3\uff0cWebpack \u6267\u884c\u6784\u5efa\u7684\u7b2c\u4e00\u6b65\u5c06\u4ece Entry \u5f00\u59cb\uff0c\u53ef\u62bd\u8c61\u6210\u8f93\u5165\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Module\uff1a\u6a21\u5757\uff0c\u5728 Webpack \u91cc\u4e00\u5207\u7686\u6a21\u5757\uff0c\u4e00\u4e2a\u6a21\u5757\u5bf9\u5e94\u7740\u4e00\u4e2a\u6587\u4ef6\u3002Webpack \u4f1a\u4ece\u914d\u7f6e\u7684 Entry \u5f00\u59cb\u9012\u5f52\u627e\u51fa\u6240\u6709\u4f9d\u8d56\u7684\u6a21\u5757\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Chunk\uff1a\u4ee3\u7801\u5757\uff0c\u4e00\u4e2a Chunk \u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u800c\u6210\uff0c\u7528\u4e8e\u4ee3\u7801\u5408\u5e76\u4e0e\u5206\u5272\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Loader\uff1a\u6a21\u5757\u8f6c\u6362\u5668\uff0c\u7528\u4e8e\u628a\u6a21\u5757\u539f\u5185\u5bb9\u6309\u7167\u9700\u6c42\u8f6c\u6362\u6210\u65b0\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Plugin\uff1a\u6269\u5c55\u63d2\u4ef6\uff0c\u5728 Webpack \u6784\u5efa\u6d41\u7a0b\u4e2d\u7684\u7279\u5b9a\u65f6\u673a\u6ce8\u5165\u6269\u5c55\u903b\u8f91\u6765\u6539\u53d8\u6784\u5efa\u7ed3\u679c\u6216\u505a\u4f60\u60f3\u8981\u7684\u4e8b\u60c5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Output\uff1a\u8f93\u51fa\u7ed3\u679c\uff0c\u5728 Webpack \u7ecf\u8fc7\u4e00\u7cfb\u5217\u5904\u7406\u5e76\u5f97\u51fa\u6700\u7ec8\u60f3\u8981\u7684\u4ee3\u7801\u540e\u8f93\u51fa\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Webpack \u542f\u52a8\u540e\u4f1a\u4ece Entry \u91cc\u914d\u7f6e\u7684 Module \u5f00\u59cb\u9012\u5f52\u89e3\u6790 Entry \u4f9d\u8d56\u7684\u6240\u6709 Module\u3002 \u6bcf\u627e\u5230\u4e00\u4e2a Module\uff0c \u5c31\u4f1a\u6839\u636e\u914d\u7f6e\u7684 Loader \u53bb\u627e\u51fa\u5bf9\u5e94\u7684\u8f6c\u6362\u89c4\u5219\uff0c\u5bf9 Module \u8fdb\u884c\u8f6c\u6362\u540e\uff0c \u518d\u89e3\u6790\u51fa\u5f53\u524d Module \u4f9d\u8d56\u7684 Module\u3002 \u8fd9\u4e9b\u6a21\u5757\u4f1a\u4ee5 Entry \u4e3a\u5355\u4f4d\u8fdb\u884c\u5206\u7ec4\uff0c\u4e00\u4e2a Entry \u548c\u5176\u6240\u6709\u4f9d\u8d56\u7684 Module \u88ab\u5206\u5230\u4e00\u4e2a\u7ec4\u4e5f\u5c31\u662f\u4e00\u4e2a Chunk\u3002 \u6700\u540e Webpack \u4f1a\u628a\u6240\u6709 Chunk \u8f6c\u6362\u6210\u6587\u4ef6\u8f93\u51fa\u3002 \u5728\u6574\u4e2a\u6d41\u7a0b\u4e2d Webpack \u4f1a\u5728\u6070\u5f53\u7684\u65f6\u673a\u6267\u884c Plugin \u91cc\u5b9a\u4e49\u7684\u903b\u8f91\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",metastring:'title="webpack.config.js"',children:'const path = require("path");\n\nmodule.exports = {\n  // entry \u8868\u793a \u5165\u53e3\uff0cWebpack \u6267\u884c\u6784\u5efa\u7684\u7b2c\u4e00\u6b65\u5c06\u4ece Entry \u5f00\u59cb\uff0c\u53ef\u62bd\u8c61\u6210\u8f93\u5165\u3002\n  // \u7c7b\u578b\u53ef\u4ee5\u662f string | object | array\n  entry: "./app/entry", // \u53ea\u67091\u4e2a\u5165\u53e3\uff0c\u5165\u53e3\u53ea\u67091\u4e2a\u6587\u4ef6\n  entry: ["./app/entry1", "./app/entry2"], // \u53ea\u67091\u4e2a\u5165\u53e3\uff0c\u5165\u53e3\u67092\u4e2a\u6587\u4ef6\n  entry: {\n    // \u67092\u4e2a\u5165\u53e3\n    a: "./app/entry-a",\n    b: ["./app/entry-b1", "./app/entry-b2"],\n  },\n\n  // \u5982\u4f55\u8f93\u51fa\u7ed3\u679c\uff1a\u5728 Webpack \u7ecf\u8fc7\u4e00\u7cfb\u5217\u5904\u7406\u540e\uff0c\u5982\u4f55\u8f93\u51fa\u6700\u7ec8\u60f3\u8981\u7684\u4ee3\u7801\u3002\n  output: {\n    // \u8f93\u51fa\u6587\u4ef6\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u5fc5\u987b\u662f string \u7c7b\u578b\u7684\u7edd\u5bf9\u8def\u5f84\u3002\n    path: path.resolve(__dirname, "dist"),\n\n    // \u8f93\u51fa\u6587\u4ef6\u7684\u540d\u79f0\n    filename: "bundle.js", // \u5b8c\u6574\u7684\u540d\u79f0\n    filename: "[name].js", // \u5f53\u914d\u7f6e\u4e86\u591a\u4e2a entry \u65f6\uff0c\u901a\u8fc7\u540d\u79f0\u6a21\u7248\u4e3a\u4e0d\u540c\u7684 entry \u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6\u540d\u79f0\n    filename: "[chunkhash].js", // \u6839\u636e\u6587\u4ef6\u5185\u5bb9 hash \u503c\u751f\u6210\u6587\u4ef6\u540d\u79f0\uff0c\u7528\u4e8e\u6d4f\u89c8\u5668\u957f\u65f6\u95f4\u7f13\u5b58\u6587\u4ef6\n\n    // \u53d1\u5e03\u5230\u7ebf\u4e0a\u7684\u6240\u6709\u8d44\u6e90\u7684 URL \u524d\u7f00\uff0cstring \u7c7b\u578b\n    publicPath: "/assets/", // \u653e\u5230\u6307\u5b9a\u76ee\u5f55\u4e0b\n    publicPath: "", // \u653e\u5230\u6839\u76ee\u5f55\u4e0b\n    publicPath: "https://cdn.example.com/", // \u653e\u5230 CDN \u4e0a\u53bb\n\n    // \u5bfc\u51fa\u5e93\u7684\u540d\u79f0\uff0cstring \u7c7b\u578b\n    // \u4e0d\u586b\u5b83\u65f6\uff0c\u9ed8\u8ba4\u8f93\u51fa\u683c\u5f0f\u662f\u533f\u540d\u7684\u7acb\u5373\u6267\u884c\u51fd\u6570\n    library: "MyLibrary",\n\n    // \u5bfc\u51fa\u5e93\u7684\u7c7b\u578b\uff0c\u679a\u4e3e\u7c7b\u578b\uff0c\u9ed8\u8ba4\u662f var\n    // \u53ef\u4ee5\u662f umd | umd2 | commonjs2 | commonjs | amd | this | var | assign | window | global | jsonp \uff0c\n    libraryTarget: "umd",\n\n    // \u662f\u5426\u5305\u542b\u6709\u7528\u7684\u6587\u4ef6\u8def\u5f84\u4fe1\u606f\u5230\u751f\u6210\u7684\u4ee3\u7801\u91cc\u53bb\uff0cboolean \u7c7b\u578b\n    pathinfo: true,\n\n    // \u9644\u52a0 Chunk \u7684\u6587\u4ef6\u540d\u79f0\n    chunkFilename: "[id].js",\n    chunkFilename: "[chunkhash].js",\n\n    // JSONP \u5f02\u6b65\u52a0\u8f7d\u8d44\u6e90\u65f6\u7684\u56de\u8c03\u51fd\u6570\u540d\u79f0\uff0c\u9700\u8981\u548c\u670d\u52a1\u7aef\u642d\u914d\u4f7f\u7528\n    jsonpFunction: "myWebpackJsonp",\n\n    // \u751f\u6210\u7684 Source Map \u6587\u4ef6\u540d\u79f0\n    sourceMapFilename: "[file].map",\n\n    // \u6d4f\u89c8\u5668\u5f00\u53d1\u8005\u5de5\u5177\u91cc\u663e\u793a\u7684\u6e90\u7801\u6a21\u5757\u540d\u79f0\n    devtoolModuleFilenameTemplate: "webpack:///[resource-path]",\n\n    // \u5f02\u6b65\u52a0\u8f7d\u8de8\u57df\u7684\u8d44\u6e90\u65f6\u4f7f\u7528\u7684\u65b9\u5f0f\n    crossOriginLoading: "use-credentials",\n    crossOriginLoading: "anonymous",\n    crossOriginLoading: false,\n  },\n\n  // \u914d\u7f6e\u6a21\u5757\u76f8\u5173\n  module: {\n    rules: [\n      // \u914d\u7f6e Loader\n      {\n        test: /\\.jsx?$/, // \u6b63\u5219\u5339\u914d\u547d\u4e2d\u8981\u4f7f\u7528 Loader \u7684\u6587\u4ef6\n        include: [\n          // \u53ea\u4f1a\u547d\u4e2d\u8fd9\u91cc\u9762\u7684\u6587\u4ef6\n          path.resolve(__dirname, "app"),\n        ],\n        exclude: [\n          // \u5ffd\u7565\u8fd9\u91cc\u9762\u7684\u6587\u4ef6\n          path.resolve(__dirname, "app/demo-files"),\n        ],\n        use: [\n          // \u4f7f\u7528\u90a3\u4e9b Loader\uff0c\u6709\u5148\u540e\u6b21\u5e8f\uff0c\u4ece\u540e\u5f80\u524d\u6267\u884c\n          "style-loader", // \u76f4\u63a5\u4f7f\u7528 Loader \u7684\u540d\u79f0\n          {\n            loader: "css-loader",\n            options: {\n              // \u7ed9 html-loader \u4f20\u4e00\u4e9b\u53c2\u6570\n            },\n          },\n        ],\n      },\n    ],\n    noParse: [\n      // \u4e0d\u7528\u89e3\u6790\u548c\u5904\u7406\u7684\u6a21\u5757\n      /special-library\\.js$/, // \u7528\u6b63\u5219\u5339\u914d\n    ],\n  },\n\n  // \u914d\u7f6e\u63d2\u4ef6\n  plugins: [],\n\n  // \u914d\u7f6e\u5bfb\u627e\u6a21\u5757\u7684\u89c4\u5219\n  resolve: {\n    modules: [\n      // \u5bfb\u627e\u6a21\u5757\u7684\u6839\u76ee\u5f55\uff0carray \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4ee5 node_modules \u4e3a\u6839\u76ee\u5f55\n      "node_modules",\n      path.resolve(__dirname, "app"),\n    ],\n    extensions: [".js", ".json", ".jsx", ".css"], // \u6a21\u5757\u7684\u540e\u7f00\u540d\n    alias: {\n      // \u6a21\u5757\u522b\u540d\u914d\u7f6e\uff0c\u7528\u4e8e\u6620\u5c04\u6a21\u5757\n      // \u628a \'module\' \u6620\u5c04 \'new-module\'\uff0c\u540c\u6837\u7684 \'module/path/file\' \u4e5f\u4f1a\u88ab\u6620\u5c04\u6210 \'new-module/path/file\'\n      module: "new-module",\n      // \u4f7f\u7528\u7ed3\u5c3e\u7b26\u53f7 $ \u540e\uff0c\u628a \'only-module\' \u6620\u5c04\u6210 \'new-module\'\uff0c\n      // \u4f46\u662f\u4e0d\u50cf\u4e0a\u9762\u7684\uff0c\'module/path/file\' \u4e0d\u4f1a\u88ab\u6620\u5c04\u6210 \'new-module/path/file\'\n      "only-module$": "new-module",\n    },\n    alias: [\n      // alias \u8fd8\u652f\u6301\u4f7f\u7528\u6570\u7ec4\u6765\u66f4\u8be6\u7ec6\u7684\u914d\u7f6e\n      {\n        name: "module", // \u8001\u7684\u6a21\u5757\n        alias: "new-module", // \u65b0\u7684\u6a21\u5757\n        // \u662f\u5426\u662f\u53ea\u6620\u5c04\u6a21\u5757\uff0c\u5982\u679c\u662f true \u53ea\u6709 \'module\' \u4f1a\u88ab\u6620\u5c04\uff0c\u5982\u679c\u662f false \'module/inner/path\' \u4e5f\u4f1a\u88ab\u6620\u5c04\n        onlyModule: true,\n      },\n    ],\n    symlinks: true, // \u662f\u5426\u8ddf\u968f\u6587\u4ef6\u8f6f\u94fe\u63a5\u53bb\u641c\u5bfb\u6a21\u5757\u7684\u8def\u5f84\n    descriptionFiles: ["package.json"], // \u6a21\u5757\u7684\u63cf\u8ff0\u6587\u4ef6\n    mainFields: ["main"], // \u6a21\u5757\u7684\u63cf\u8ff0\u6587\u4ef6\u91cc\u7684\u63cf\u8ff0\u5165\u53e3\u7684\u6587\u4ef6\u7684\u5b57\u6bb5\u540d\u79f0\n    enforceExtension: false, // \u662f\u5426\u5f3a\u5236\u5bfc\u5165\u8bed\u53e5\u5fc5\u987b\u8981\u5199\u660e\u6587\u4ef6\u540e\u7f00\n  },\n\n  // \u8f93\u51fa\u6587\u4ef6\u6027\u80fd\u68c0\u67e5\u914d\u7f6e\n  performance: {\n    hints: "warning", // \u6709\u6027\u80fd\u95ee\u9898\u65f6\u8f93\u51fa\u8b66\u544a\n    hints: "error", // \u6709\u6027\u80fd\u95ee\u9898\u65f6\u8f93\u51fa\u9519\u8bef\n    hints: false, // \u5173\u95ed\u6027\u80fd\u68c0\u67e5\n    maxAssetSize: 200000, // \u6700\u5927\u6587\u4ef6\u5927\u5c0f (\u5355\u4f4d bytes)\n    maxEntrypointSize: 400000, // \u6700\u5927\u5165\u53e3\u6587\u4ef6\u5927\u5c0f (\u5355\u4f4d bytes)\n    assetFilter: function (assetFilename) {\n      // \u8fc7\u6ee4\u8981\u68c0\u67e5\u7684\u6587\u4ef6\n      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");\n    },\n  },\n\n  devtool: "source-map", // \u914d\u7f6e source-map \u7c7b\u578b\n\n  context: __dirname, // Webpack \u4f7f\u7528\u7684\u6839\u76ee\u5f55\uff0cstring \u7c7b\u578b\u5fc5\u987b\u662f\u7edd\u5bf9\u8def\u5f84\n\n  // \u914d\u7f6e\u8f93\u51fa\u4ee3\u7801\u7684\u8fd0\u884c\u73af\u5883\n  target: "web", // \u6d4f\u89c8\u5668\uff0c\u9ed8\u8ba4\n  target: "webworker", // WebWorker\n  target: "node", // Node.js\uff0c\u4f7f\u7528 `require` \u8bed\u53e5\u52a0\u8f7d Chunk \u4ee3\u7801\n  target: "async-node", // Node.js\uff0c\u5f02\u6b65\u52a0\u8f7d Chunk \u4ee3\u7801\n  target: "node-webkit", // nw.js\n  target: "electron-main", // electron, \u4e3b\u7ebf\u7a0b\n  target: "electron-renderer", // electron, \u6e32\u67d3\u7ebf\u7a0b\n\n  externals: {\n    // \u4f7f\u7528\u6765\u81ea JavaScript \u8fd0\u884c\u73af\u5883\u63d0\u4f9b\u7684\u5168\u5c40\u53d8\u91cf\n    jquery: "jQuery",\n  },\n\n  stats: {\n    // \u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7\u63a7\u5236\n    assets: true,\n    colors: true,\n    errors: true,\n    errorDetails: true,\n    hash: true,\n  },\n\n  devServer: {\n    // DevServer \u76f8\u5173\u7684\u914d\u7f6e\n    proxy: {\n      // \u4ee3\u7406\u5230\u540e\u7aef\u670d\u52a1\u63a5\u53e3\n      "/api": "http://localhost:3000",\n    },\n    contentBase: path.join(__dirname, "public"), // \u914d\u7f6e DevServer HTTP \u670d\u52a1\u5668\u7684\u6587\u4ef6\u6839\u76ee\u5f55\n    compress: true, // \u662f\u5426\u5f00\u542f gzip \u538b\u7f29\n    historyApiFallback: true, // \u662f\u5426\u5f00\u53d1 HTML5 History API \u7f51\u9875\n    hot: true, // \u662f\u5426\u5f00\u542f\u6a21\u5757\u70ed\u66ff\u6362\u529f\u80fd\n    https: false, // \u662f\u5426\u5f00\u542f HTTPS \u6a21\u5f0f\n  },\n\n  profile: true, // \u662f\u5426\u6355\u6349 Webpack \u6784\u5efa\u7684\u6027\u80fd\u4fe1\u606f\uff0c\u7528\u4e8e\u5206\u6790\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u6784\u5efa\u6027\u80fd\u4e0d\u4f73\n\n  cache: false, // \u662f\u5426\u542f\u7528\u7f13\u5b58\u63d0\u5347\u6784\u5efa\u901f\u5ea6\n\n  watch: true, // \u662f\u5426\u5f00\u59cb\n  watchOptions: {\n    // \u76d1\u542c\u6a21\u5f0f\u9009\u9879\n    // \u4e0d\u76d1\u542c\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u652f\u6301\u6b63\u5219\u5339\u914d\u3002\u9ed8\u8ba4\u4e3a\u7a7a\n    ignored: /node_modules/,\n    // \u76d1\u542c\u5230\u53d8\u5316\u53d1\u751f\u540e\u4f1a\u7b49300ms\u518d\u53bb\u6267\u884c\u52a8\u4f5c\uff0c\u9632\u6b62\u6587\u4ef6\u66f4\u65b0\u592a\u5feb\u5bfc\u81f4\u91cd\u65b0\u7f16\u8bd1\u9891\u7387\u592a\u9ad8\n    // \u9ed8\u8ba4\u4e3a300ms\n    aggregateTimeout: 300,\n    // \u5224\u65ad\u6587\u4ef6\u662f\u5426\u53d1\u751f\u53d8\u5316\u662f\u4e0d\u505c\u7684\u53bb\u8be2\u95ee\u7cfb\u7edf\u6307\u5b9a\u6587\u4ef6\u6709\u6ca1\u6709\u53d8\u5316\uff0c\u9ed8\u8ba4\u6bcf\u96941000\u6beb\u79d2\u8be2\u95ee\u4e00\u6b21\n    poll: 1000,\n  },\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u6784\u5efa\u6d41\u7a0b",children:"\u6784\u5efa\u6d41\u7a0b"}),"\n",(0,i.jsx)(e.h2,{id:"loader",children:"Loader"}),"\n",(0,i.jsxs)(e.admonition,{title:"\u5982\u4f55\u6269\u5c55 Webpack\uff1f",type:"tip",children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Loader"})," \u2014\u2014 \u4e3b\u8981\u8d1f\u8d23\u5c06\u8d44\u6e90\u5185\u5bb9\u7ffb\u8bd1\u6210 Webpack \u80fd\u591f\u7406\u89e3\u3001\u5904\u7406\u7684 JavaScript \u4ee3\u7801"]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Plugin"})," \u2014\u2014 \u6df1\u5ea6\u4ecb\u5165 Webpack \u6784\u5efa\u8fc7\u7a0b\uff0c\u91cd\u5851 \u6784\u5efa\u903b\u8f91"]})]}),"\n",(0,i.jsx)(e.h2,{id:"plugin",children:"Plugin"}),"\n",(0,i.jsx)(e.h2,{id:"tree-shaking",children:"Tree Shaking"}),"\n",(0,i.jsx)(e.h2,{id:"\u5f15\u7528\u53c2\u8003",children:"\u5f15\u7528\u53c2\u8003"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/dhj9/blog/issues/4",children:"webpack \u7f16\u8bd1\u6d41\u7a0b\u6f2b\u8c08"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6949040393165996040",children:"Webpack \u6838\u5fc3\u539f\u7406 - \u6398\u91d1"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://jonny-wei.github.io/blog/devops/",children:"Webpack \u5e38\u7528\u914d\u7f6e"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var i=r(6540);const t={},a=i.createContext(t);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);