const e=JSON.parse(`{"key":"v-14066bb0","path":"/zh/front-end/typescript/engineering/lint.html","title":"代码检查","lang":"zh-CN","frontmatter":{"title":"代码检查","icon":"style","time":"2020-6-9","category":"Web前端","tags":"TypeScript","footer":"给我再去相信的勇气, 越过谎言去拥抱你","description":"TypeScript 的代码检查应当使用 ESLint + typescript-eslint-parser。 什么是代码检查 代码检查主要是用来发现代码错误、统一代码风格。 在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint-parser 之后...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/typescript/engineering/lint.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"代码检查"}],["meta",{"property":"og:description","content":"TypeScript 的代码检查应当使用 ESLint + typescript-eslint-parser。 什么是代码检查 代码检查主要是用来发现代码错误、统一代码风格。 在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint-parser 之后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:published_time","content":"2020-06-08T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码检查\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-08T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"什么是代码检查","slug":"什么是代码检查","link":"#什么是代码检查","children":[]},{"level":2,"title":"为什么需要代码检查","slug":"为什么需要代码检查","link":"#为什么需要代码检查","children":[]},{"level":2,"title":"在 TypeScript 中使用 ESLint","slug":"在-typescript-中使用-eslint","link":"#在-typescript-中使用-eslint","children":[{"level":3,"title":"安装 ESLint","slug":"安装-eslint","link":"#安装-eslint","children":[]},{"level":3,"title":"创建配置文件","slug":"创建配置文件","link":"#创建配置文件","children":[]},{"level":3,"title":"检查一个 ts 文件","slug":"检查一个-ts-文件","link":"#检查一个-ts-文件","children":[]},{"level":3,"title":"检查整个项目的 ts 文件","slug":"检查整个项目的-ts-文件","link":"#检查整个项目的-ts-文件","children":[]},{"level":3,"title":"在 VS Code 中集成 ESLint 检查","slug":"在-vs-code-中集成-eslint-检查","link":"#在-vs-code-中集成-eslint-检查","children":[]},{"level":3,"title":"使用 AlloyTeam 的 ESLint 配置","slug":"使用-alloyteam-的-eslint-配置","link":"#使用-alloyteam-的-eslint-配置","children":[]},{"level":3,"title":"使用 ESLint 检查 tsx 文件","slug":"使用-eslint-检查-tsx-文件","link":"#使用-eslint-检查-tsx-文件","children":[]}]},{"level":2,"title":"Troubleshootings","slug":"troubleshootings","link":"#troubleshootings","children":[{"level":3,"title":"Cannot find module 'typescript-eslint-parser'","slug":"cannot-find-module-typescript-eslint-parser","link":"#cannot-find-module-typescript-eslint-parser","children":[]},{"level":3,"title":"cannot read property type of null","slug":"cannot-read-property-type-of-null","link":"#cannot-read-property-type-of-null","children":[]},{"level":3,"title":"VS Code 没有显示出 ESLint 的报错","slug":"vs-code-没有显示出-eslint-的报错","link":"#vs-code-没有显示出-eslint-的报错","children":[]},{"level":3,"title":"为什么 ESLint 无法检查出使用了未定义的变量(no-undef 规则为什么被关闭了)","slug":"为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了","link":"#为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了","children":[]},{"level":3,"title":"为什么有些定义了的变量(比如使用 enum 定义的变量)未使用，ESLint 却没有报错","slug":"为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错","link":"#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错","children":[]},{"level":3,"title":"启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了","slug":"启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了","link":"#启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了","children":[]},{"level":3,"title":"为什么有的错误 TSLint 可以检查出来，vscode 里的 TSLint 却检查不出来","slug":"为什么有的错误-tslint-可以检查出来-vscode-里的-tslint-却检查不出来","link":"#为什么有的错误-tslint-可以检查出来-vscode-里的-tslint-却检查不出来","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.03,"words":2710},"filePathRelative":"zh/front-end/typescript/engineering/lint.md","excerpt":"","autoDesc":true}`);export{e as data};
