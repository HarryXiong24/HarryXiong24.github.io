const e=JSON.parse('{"key":"v-3e2e9009","path":"/zh/front-end/advanced-js/jses20.html","title":"20.模块加载的实现","lang":"zh-CN","frontmatter":{"icon":"js","category":"Web 前端","tag":"JS 进阶教程","date":"2021-08-01T00:00:00.000Z","title":"20.模块加载的实现","description":"ESM VS CJS 它们有三个重大差异。 CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。; CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。; CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。; 第二个差异是因为 Comm...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/advanced-js/jses20.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"20.模块加载的实现"}],["meta",{"property":"og:description","content":"ESM VS CJS 它们有三个重大差异。 CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。; CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。; CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。; 第二个差异是因为 Comm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T14:05:05.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"JS 进阶教程"}],["meta",{"property":"article:published_time","content":"2021-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T14:05:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20.模块加载的实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-15T14:05:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"ESM VS CJS","slug":"esm-vs-cjs","link":"#esm-vs-cjs","children":[]},{"level":2,"title":"浏览器加载","slug":"浏览器加载","link":"#浏览器加载","children":[{"level":3,"title":"模块加载规则","slug":"模块加载规则","link":"#模块加载规则","children":[]},{"level":3,"title":"ES6 模块加载规则","slug":"es6-模块加载规则","link":"#es6-模块加载规则","children":[]}]},{"level":2,"title":"Node.js 的模块加载方法","slug":"node-js-的模块加载方法","link":"#node-js-的模块加载方法","children":[{"level":3,"title":"模块引用","slug":"模块引用","link":"#模块引用","children":[]},{"level":3,"title":"package.json文件","slug":"package-json文件","link":"#package-json文件","children":[]},{"level":3,"title":"CommonJS 模块加载 ES6 模块","slug":"commonjs-模块加载-es6-模块","link":"#commonjs-模块加载-es6-模块","children":[]},{"level":3,"title":"ES6 模块加载 CommonJS 模块","slug":"es6-模块加载-commonjs-模块","link":"#es6-模块加载-commonjs-模块","children":[]},{"level":3,"title":"同时支持两种格式的模块","slug":"同时支持两种格式的模块","link":"#同时支持两种格式的模块","children":[]},{"level":3,"title":"Node.js 的内置模块","slug":"node-js-的内置模块","link":"#node-js-的内置模块","children":[]},{"level":3,"title":"加载路径","slug":"加载路径","link":"#加载路径","children":[]},{"level":3,"title":"内部变量","slug":"内部变量","link":"#内部变量","children":[]}]},{"level":2,"title":"循环加载","slug":"循环加载","link":"#循环加载","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"CommonJS 模块的加载原理","slug":"commonjs-模块的加载原理","link":"#commonjs-模块的加载原理","children":[]},{"level":3,"title":"CommonJS 模块的循环加载","slug":"commonjs-模块的循环加载","link":"#commonjs-模块的循环加载","children":[]},{"level":3,"title":"ES6 模块的循环加载","slug":"es6-模块的循环加载","link":"#es6-模块的循环加载","children":[]}]}],"git":{"createdTime":1686825018000,"updatedTime":1686837905000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":2}]},"readingTime":{"minutes":20.85,"words":6254},"filePathRelative":"zh/front-end/advanced-js/jses20.md","localizedDate":"2021年8月1日","excerpt":"","autoDesc":true}');export{e as data};