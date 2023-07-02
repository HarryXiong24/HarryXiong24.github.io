const e=JSON.parse('{"key":"v-5f446a96","path":"/zh/front-end/pre-css/sass.html","title":"Sass","lang":"zh-CN","frontmatter":{"tag":"Sass","category":"Web 前端","date":"2020-06-03T00:00:00.000Z","description":"CSS with superpowers [[toc]] 1. 认识 Sass 1.1 特色功能 (Features) 完全兼容 CSS3; 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能; 通过函数进行颜色值与属性值的运算; 提供控制指令 (control directives)等高级功能; 自定义输出格式; 1...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/pre-css/sass.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"Sass"}],["meta",{"property":"og:description","content":"CSS with superpowers [[toc]] 1. 认识 Sass 1.1 特色功能 (Features) 完全兼容 CSS3; 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能; 通过函数进行颜色值与属性值的运算; 提供控制指令 (control directives)等高级功能; 自定义输出格式; 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-02T08:03:04.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"Sass"}],["meta",{"property":"article:published_time","content":"2020-06-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-02T08:03:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sass\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-02T08:03:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1. 认识 Sass","slug":"_1-认识-sass","link":"#_1-认识-sass","children":[{"level":3,"title":"1.1 特色功能 (Features)","slug":"_1-1-特色功能-features","link":"#_1-1-特色功能-features","children":[]},{"level":3,"title":"1.2 语法格式 (Syntax)","slug":"_1-2-语法格式-syntax","link":"#_1-2-语法格式-syntax","children":[]}]},{"level":2,"title":"2. 使用 Sass","slug":"_2-使用-sass","link":"#_2-使用-sass","children":[{"level":3,"title":"2.1 Rack/Rails/Merb Plugin","slug":"_2-1-rack-rails-merb-plugin","link":"#_2-1-rack-rails-merb-plugin","children":[]},{"level":3,"title":"2.2 缓存 (Caching)","slug":"_2-2-缓存-caching","link":"#_2-2-缓存-caching","children":[]},{"level":3,"title":"2.3 配置选项 (Options)","slug":"_2-3-配置选项-options","link":"#_2-3-配置选项-options","children":[]},{"level":3,"title":"2.4 判断语法格式 (Syntax Selection)","slug":"_2-4-判断语法格式-syntax-selection","link":"#_2-4-判断语法格式-syntax-selection","children":[]},{"level":3,"title":"2.5 编码格式 (Encodings)","slug":"_2-5-编码格式-encodings","link":"#_2-5-编码格式-encodings","children":[]}]},{"level":2,"title":"3. Sass 注释","slug":"_3-sass-注释","link":"#_3-sass-注释","children":[]},{"level":2,"title":"4. Sass 对 css 功能的拓展","slug":"_4-sass-对-css-功能的拓展","link":"#_4-sass-对-css-功能的拓展","children":[{"level":3,"title":"4.1 嵌套规则 (Nested Rules)","slug":"_4-1-嵌套规则-nested-rules","link":"#_4-1-嵌套规则-nested-rules","children":[]},{"level":3,"title":"4.2 父选择器 & (Referencing Parent Selectors: &)","slug":"_4-2-父选择器-referencing-parent-selectors","link":"#_4-2-父选择器-referencing-parent-selectors","children":[]},{"level":3,"title":"4.3 属性嵌套 (Nested Properties)","slug":"_4-3-属性嵌套-nested-properties","link":"#_4-3-属性嵌套-nested-properties","children":[]},{"level":3,"title":"4.4 占位符选择器 %foo (Placeholder Selectors: %foo)","slug":"_4-4-占位符选择器-foo-placeholder-selectors-foo","link":"#_4-4-占位符选择器-foo-placeholder-selectors-foo","children":[]}]},{"level":2,"title":"5. SassScript","slug":"_5-sassscript","link":"#_5-sassscript","children":[{"level":3,"title":"5.1 Interactive Shell","slug":"_5-1-interactive-shell","link":"#_5-1-interactive-shell","children":[]},{"level":3,"title":"5.2 变量 $ (Variables: $)","slug":"_5-2-变量-variables","link":"#_5-2-变量-variables","children":[]},{"level":3,"title":"5.3 数据类型 (Data Types)","slug":"_5-3-数据类型-data-types","link":"#_5-3-数据类型-data-types","children":[]},{"level":3,"title":"5.4 运算 (Operations)","slug":"_5-4-运算-operations","link":"#_5-4-运算-operations","children":[]},{"level":3,"title":"5.5 括号 (Parentheses)","slug":"_5-5-括号-parentheses","link":"#_5-5-括号-parentheses","children":[]},{"level":3,"title":"5.6 函数 (Functions)","slug":"_5-6-函数-functions","link":"#_5-6-函数-functions","children":[]},{"level":3,"title":"5.7 插值语句 #{} (Interpolation: #{})","slug":"_5-7-插值语句-interpolation","link":"#_5-7-插值语句-interpolation","children":[]},{"level":3,"title":"5.8 & in SassScript","slug":"_5-8-in-sassscript","link":"#_5-8-in-sassscript","children":[]},{"level":3,"title":"5.9 变量定义 !default (Variable Defaults: !default)","slug":"_5-9-变量定义-default-variable-defaults-default","link":"#_5-9-变量定义-default-variable-defaults-default","children":[]}]},{"level":2,"title":"6. @-Rules 与指令 (@-Rules and Directives)","slug":"_6-rules-与指令-rules-and-directives","link":"#_6-rules-与指令-rules-and-directives","children":[{"level":3,"title":"6.1 @import","slug":"_6-1-import","link":"#_6-1-import","children":[]},{"level":3,"title":"6.2. @media","slug":"_6-2-media","link":"#_6-2-media","children":[]},{"level":3,"title":"6.3 @extend","slug":"_6-3-extend","link":"#_6-3-extend","children":[]},{"level":3,"title":"6.4 @at-root","slug":"_6-4-at-root","link":"#_6-4-at-root","children":[]},{"level":3,"title":"6.5 @debug","slug":"_6-5-debug","link":"#_6-5-debug","children":[]},{"level":3,"title":"6.6 @warn","slug":"_6-6-warn","link":"#_6-6-warn","children":[]},{"level":3,"title":"6.7 @warn","slug":"_6-7-warn","link":"#_6-7-warn","children":[]}]},{"level":2,"title":"7. 控制指令 (Control Directives)","slug":"_7-控制指令-control-directives","link":"#_7-控制指令-control-directives","children":[{"level":3,"title":"7.1 if()","slug":"_7-1-if","link":"#_7-1-if","children":[]},{"level":3,"title":"7.2. @if","slug":"_7-2-if","link":"#_7-2-if","children":[]},{"level":3,"title":"7.3 @for","slug":"_7-3-for","link":"#_7-3-for","children":[]},{"level":3,"title":"7.4 @each","slug":"_7-4-each","link":"#_7-4-each","children":[]},{"level":3,"title":"7.5 @while","slug":"_7-5-while","link":"#_7-5-while","children":[]}]},{"level":2,"title":"8. 混合指令 (Mixin Directives)","slug":"_8-混合指令-mixin-directives","link":"#_8-混合指令-mixin-directives","children":[{"level":3,"title":"8.1 定义混合指令 @mixin (Defining a Mixin: @mixin)","slug":"_8-1-定义混合指令-mixin-defining-a-mixin-mixin","link":"#_8-1-定义混合指令-mixin-defining-a-mixin-mixin","children":[]},{"level":3,"title":"8.2 引用混合样式 @include (Including a Mixin: @include)","slug":"_8-2-引用混合样式-include-including-a-mixin-include","link":"#_8-2-引用混合样式-include-including-a-mixin-include","children":[]},{"level":3,"title":"8.3 参数 (Arguments)","slug":"_8-3-参数-arguments","link":"#_8-3-参数-arguments","children":[]},{"level":3,"title":"8.4 向混合样式中导入内容 (Passing Content Blocks to a Mixin)","slug":"_8-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin","link":"#_8-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin","children":[]}]},{"level":2,"title":"9. 函数指令 (Function Directives)","slug":"_9-函数指令-function-directives","link":"#_9-函数指令-function-directives","children":[]},{"level":2,"title":"10. 输出格式 (Output Style)","slug":"_10-输出格式-output-style","link":"#_10-输出格式-output-style","children":[{"level":3,"title":"10.1 :nested","slug":"_10-1-nested","link":"#_10-1-nested","children":[]},{"level":3,"title":"10.2 :expanded","slug":"_10-2-expanded","link":"#_10-2-expanded","children":[]},{"level":3,"title":"10.3 :compact","slug":"_10-3-compact","link":"#_10-3-compact","children":[]},{"level":3,"title":"10.4 :compressed","slug":"_10-4-compressed","link":"#_10-4-compressed","children":[]}]}],"git":{"createdTime":1686825018000,"updatedTime":1688284984000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":2}]},"readingTime":{"minutes":39.07,"words":11720},"filePathRelative":"zh/front-end/pre-css/sass.md","localizedDate":"2020年6月3日","excerpt":"","autoDesc":true}');export{e as data};
