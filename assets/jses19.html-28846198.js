const e=JSON.parse('{"key":"v-18a3f25f","path":"/zh/front-end/advanced-js/jses19.html","title":"19.Module模块化","lang":"zh-CN","frontmatter":{"icon":"js","category":"Web 前端","tag":"JS 进阶教程","date":"2021-08-01T00:00:00.000Z","title":"19.Module模块化","description":"设计原因 历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的require、Python 的import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/advanced-js/jses19.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"19.Module模块化"}],["meta",{"property":"og:description","content":"设计原因 历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的require、Python 的import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T14:05:05.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"JS 进阶教程"}],["meta",{"property":"article:published_time","content":"2021-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T14:05:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"19.Module模块化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-15T14:05:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"设计原因","slug":"设计原因","link":"#设计原因","children":[]},{"level":2,"title":"严格模式","slug":"严格模式","link":"#严格模式","children":[]},{"level":2,"title":"基本命令","slug":"基本命令","link":"#基本命令","children":[{"level":3,"title":"export 命令","slug":"export-命令","link":"#export-命令","children":[]},{"level":3,"title":"import 命令","slug":"import-命令","link":"#import-命令","children":[]}]},{"level":2,"title":"跨模块常量","slug":"跨模块常量","link":"#跨模块常量","children":[]},{"level":2,"title":"模块的整体加载","slug":"模块的整体加载","link":"#模块的整体加载","children":[]},{"level":2,"title":"export default","slug":"export-default","link":"#export-default","children":[]},{"level":2,"title":"export 与 import 的复合写法","slug":"export-与-import-的复合写法","link":"#export-与-import-的复合写法","children":[]},{"level":2,"title":"模块的继承","slug":"模块的继承","link":"#模块的继承","children":[]},{"level":2,"title":"import()","slug":"import","link":"#import","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"适用场合","slug":"适用场合","link":"#适用场合","children":[]},{"level":3,"title":"注意点","slug":"注意点-2","link":"#注意点-2","children":[]}]}],"git":{"createdTime":1686825018000,"updatedTime":1686837905000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":2}]},"readingTime":{"minutes":19.33,"words":5798},"filePathRelative":"zh/front-end/advanced-js/jses19.md","localizedDate":"2021年8月1日","excerpt":"","autoDesc":true}');export{e as data};