const e=JSON.parse('{"key":"v-0cb20606","path":"/zh/front-end/advanced-js/jses12.html","title":"12.异步编程","lang":"zh-CN","frontmatter":{"icon":"js","category":"Web前端","tag":"JS进阶教程","time":"2021-8-1","footer":"一切都是最好的安排","title":"12.异步编程","description":"异步编程存在的意义 JS是单线程模型 单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。 注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/advanced-js/jses12.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"12.异步编程"}],["meta",{"property":"og:description","content":"异步编程存在的意义 JS是单线程模型 单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。 注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://harryxiong24.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"12.异步编程"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"JS进阶教程"}],["meta",{"property":"article:published_time","content":"2021-07-31T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12.异步编程\\",\\"image\\":[\\"https://harryxiong24.github.io/\\"],\\"datePublished\\":\\"2021-07-31T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"异步编程存在的意义","slug":"异步编程存在的意义","link":"#异步编程存在的意义","children":[{"level":3,"title":"JS是单线程模型","slug":"js是单线程模型","link":"#js是单线程模型","children":[]},{"level":3,"title":"同步任务和异步任务","slug":"同步任务和异步任务","link":"#同步任务和异步任务","children":[]},{"level":3,"title":"任务队列和事件循环","slug":"任务队列和事件循环","link":"#任务队列和事件循环","children":[]}]},{"level":2,"title":"控制异步操作的本质","slug":"控制异步操作的本质","link":"#控制异步操作的本质","children":[{"level":3,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]},{"level":3,"title":"事件监听","slug":"事件监听","link":"#事件监听","children":[]},{"level":3,"title":"发布/订阅","slug":"发布-订阅","link":"#发布-订阅","children":[]}]},{"level":2,"title":"异步操作的流程控制","slug":"异步操作的流程控制","link":"#异步操作的流程控制","children":[{"level":3,"title":"串行执行","slug":"串行执行","link":"#串行执行","children":[]},{"level":3,"title":"并行执行","slug":"并行执行","link":"#并行执行","children":[]},{"level":3,"title":"并行与串行的结合","slug":"并行与串行的结合","link":"#并行与串行的结合","children":[]}]},{"level":2,"title":"Promise 对象","slug":"promise-对象","link":"#promise-对象","children":[{"level":3,"title":"Promise 存在的意义","slug":"promise-存在的意义","link":"#promise-存在的意义","children":[]},{"level":3,"title":"Promise 的概念","slug":"promise-的概念","link":"#promise-的概念","children":[]},{"level":3,"title":"Promise 对象的状态","slug":"promise-对象的状态","link":"#promise-对象的状态","children":[]},{"level":3,"title":"Promise 构造函数","slug":"promise-构造函数","link":"#promise-构造函数","children":[]},{"level":3,"title":"Promise 实例方法","slug":"promise-实例方法","link":"#promise-实例方法","children":[]},{"level":3,"title":"Promise 静态方法","slug":"promise-静态方法","link":"#promise-静态方法","children":[]},{"level":3,"title":"Promise 作为微任务","slug":"promise-作为微任务","link":"#promise-作为微任务","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"Generator 函数","slug":"generator-函数","link":"#generator-函数","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"yield 表达式","slug":"yield-表达式","link":"#yield-表达式","children":[]},{"level":3,"title":"与 Iterator 接口的关系","slug":"与-iterator-接口的关系","link":"#与-iterator-接口的关系","children":[]},{"level":3,"title":"for...of 循环","slug":"for-of-循环","link":"#for-of-循环","children":[]},{"level":3,"title":"Generator 实例方法","slug":"generator-实例方法","link":"#generator-实例方法","children":[]},{"level":3,"title":"yield* 表达式","slug":"yield-表达式-1","link":"#yield-表达式-1","children":[]},{"level":3,"title":"Generator 函数作为对象属性","slug":"generator-函数作为对象属性","link":"#generator-函数作为对象属性","children":[]},{"level":3,"title":"Generator 函数的 this","slug":"generator-函数的-this","link":"#generator-函数的-this","children":[]},{"level":3,"title":"利用Generator实现一些机制","slug":"利用generator实现一些机制","link":"#利用generator实现一些机制","children":[]},{"level":3,"title":"Generator应用","slug":"generator应用","link":"#generator应用","children":[]},{"level":3,"title":"Generator 改进异步编程","slug":"generator-改进异步编程","link":"#generator-改进异步编程","children":[]},{"level":3,"title":"Thunk 函数","slug":"thunk-函数","link":"#thunk-函数","children":[]},{"level":3,"title":"co 模块","slug":"co-模块","link":"#co-模块","children":[]}]},{"level":2,"title":"async 函数","slug":"async-函数","link":"#async-函数","children":[{"level":3,"title":"本质","slug":"本质","link":"#本质","children":[]},{"level":3,"title":"基本用法","slug":"基本用法-2","link":"#基本用法-2","children":[]},{"level":3,"title":"语法详解","slug":"语法详解","link":"#语法详解","children":[]},{"level":3,"title":"async 函数的实现原理","slug":"async-函数的实现原理","link":"#async-函数的实现原理","children":[]},{"level":3,"title":"与其他异步处理方法的比较","slug":"与其他异步处理方法的比较","link":"#与其他异步处理方法的比较","children":[]},{"level":3,"title":"顶层 await","slug":"顶层-await","link":"#顶层-await","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":113.95,"words":34186},"filePathRelative":"zh/front-end/advanced-js/jses12.md","excerpt":"","autoDesc":true}');export{e as data};
