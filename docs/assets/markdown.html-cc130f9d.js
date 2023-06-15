import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,a,d as t,w as l,b as e,e as o}from"./app-a63d3fdb.js";const p="/assets/image-20200308191149927-8fc2743e.png",u={},h=a("h1",{id:"markdown基本语法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#markdown基本语法","aria-hidden":"true"},"#"),e(" Markdown基本语法")],-1),g={class:"table-of-contents"},_=o(`<hr><h2 id="_1-标题" tabindex="-1"><a class="header-anchor" href="#_1-标题" aria-hidden="true">#</a> 1. 标题</h2><h3 id="_1-1-使用-号标记" tabindex="-1"><a class="header-anchor" href="#_1-1-使用-号标记" aria-hidden="true">#</a> 1.1 使用#号标记</h3><div class="language-text" data-ext="text"><pre class="language-text"><code># 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
</code></pre></div><h3 id="_1-2-使用-和-号标记一级和二级标题" tabindex="-1"><a class="header-anchor" href="#_1-2-使用-和-号标记一级和二级标题" aria-hidden="true">#</a> 1.2 使用=和-号标记一级和二级标题</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>我展示的是一级标题
=================

我展示的是二级标题
-----------------
</code></pre></div><p>效果如下：</p><p><img src="`+p+`" alt="image-20200308191149927" loading="lazy"></p><h2 id="_2-段落" tabindex="-1"><a class="header-anchor" href="#_2-段落" aria-hidden="true">#</a> 2. 段落</h2><h3 id="_2-1-字体" tabindex="-1"><a class="header-anchor" href="#_2-1-字体" aria-hidden="true">#</a> 2.1 字体</h3><div class="language-chinese" data-ext="chinese"><pre class="language-chinese"><code>*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
</code></pre></div><p>效果如下：</p><p><em>斜体文本</em><em>斜体文本</em><strong>粗体文本</strong><strong>粗体文本</strong><em><strong>粗斜体文本</strong></em><em><strong>粗斜体文本</strong></em></p><p>注：一般加粗不要包括到标点符号</p><h3 id="_2-2-分割线" tabindex="-1"><a class="header-anchor" href="#_2-2-分割线" aria-hidden="true">#</a> 2.2 分割线</h3><p>你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>***

* * *

*****

- - -

----------
</code></pre></div><h3 id="_2-3-删除线" tabindex="-1"><a class="header-anchor" href="#_2-3-删除线" aria-hidden="true">#</a> 2.3 删除线</h3><p>如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 <strong>~~</strong> 即可，实例如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
</code></pre></div><p>效果如下：</p><p>RUNOOB.COM GOOGLE.COM <s>BAIDU.COM</s></p><h3 id="_2-4-下划线" tabindex="-1"><a class="header-anchor" href="#_2-4-下划线" aria-hidden="true">#</a> 2.4 下划线</h3><p>下划线可以通过 HTML 的 <code>&lt;u&gt;</code>标签来实现：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;u&gt;带下划线文本&lt;/u&gt;
</code></pre></div><p>效果如下：</p><p><u>带下划线文本</u></p><h3 id="_2-5-注脚" tabindex="-1"><a class="header-anchor" href="#_2-5-注脚" aria-hidden="true">#</a> 2.5 注脚</h3><p>脚注是对文本的补充说明。</p><p>Markdown 脚注的格式如下:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>[^要注明的文本]
</code></pre></div><p>以下实例演示了脚注的用法：</p><p>Markdown <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="_3-列表" tabindex="-1"><a class="header-anchor" href="#_3-列表" aria-hidden="true">#</a> 3. 列表</h2><h3 id="_3-1-无序列表" tabindex="-1"><a class="header-anchor" href="#_3-1-无序列表" aria-hidden="true">#</a> 3.1 无序列表</h3><p>无序列表使用星号(<em><strong><strong>)、加号(</strong>+</strong>)或是减号(</em><em>-</em>*)作为列表标记：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><ul><li><p>第一项</p></li><li><p>第二项</p></li><li><p>第三项</p></li><li><p>第一项</p></li><li><p>第二项</p></li><li><p>第三项</p></li><li><p>第一项</p></li><li><p>第二项</p></li><li><p>第三项</p></li></ul><h3 id="_3-2-有序列表" tabindex="-1"><a class="header-anchor" href="#_3-2-有序列表" aria-hidden="true">#</a> 3.2 有序列表</h3><p>有序列表使用数字并加上 <strong>.</strong> 号来表示，如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 第一项
2. 第二项
3. 第三项
</code></pre></div><ol><li>第一项</li><li>第二项</li><li>第三项</li></ol><h3 id="_3-3-列表嵌套" tabindex="-1"><a class="header-anchor" href="#_3-3-列表嵌套" aria-hidden="true">#</a> 3.3 列表嵌套</h3><p>列表嵌套只需在子列表中的选项添加四个空格即可：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
</code></pre></div><p>效果如下：</p><ol><li>第一项： <ul><li>第一项嵌套的第一个元素</li><li>第一项嵌套的第二个元素</li></ul></li><li>第二项： <ul><li>第二项嵌套的第一个元素</li><li>第二项嵌套的第二个元素</li></ul></li></ol><h2 id="_4-区块引用" tabindex="-1"><a class="header-anchor" href="#_4-区块引用" aria-hidden="true">#</a> 4. 区块引用</h2><h3 id="_4-1-引用" tabindex="-1"><a class="header-anchor" href="#_4-1-引用" aria-hidden="true">#</a> 4.1 引用</h3><p>Markdown 区块引用是在段落开头使用 <strong>&gt;</strong> 符号 ，然后后面紧跟一个<strong>空格</strong>符号：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; 区块引用
&gt; 菜鸟教程
&gt; 学的不仅是技术更是梦想
</code></pre></div><blockquote><p>区块引用 菜鸟教程 学的不仅是技术更是梦想</p></blockquote><p>另外区块是可以嵌套的，一个 <strong>&gt;</strong> 符号是最外层，两个 <strong>&gt;</strong> 符号是第一层嵌套，以此类推：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; 最外层
&gt; &gt; 第一层嵌套
&gt; &gt; &gt; 第二层嵌套
</code></pre></div><blockquote><p>最外层</p><blockquote><p>第一层嵌套</p><blockquote><p>第二层嵌套</p></blockquote></blockquote></blockquote><h3 id="_4-2-区块中使用列表" tabindex="-1"><a class="header-anchor" href="#_4-2-区块中使用列表" aria-hidden="true">#</a> 4.2 区块中使用列表</h3><p>区块中使用列表实例如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; 区块中使用列表
&gt; 1. 第一项
&gt; 2. 第二项
&gt; + 第一项
&gt; + 第二项
&gt; + 第三项
</code></pre></div><p>显示结果如下：</p><blockquote><p>区块中使用列表</p><ol><li>第一项</li><li>第二项</li></ol><ul><li>第一项</li><li>第二项</li><li>第三项</li></ul></blockquote><h3 id="_4-3-列表中使用区块" tabindex="-1"><a class="header-anchor" href="#_4-3-列表中使用区块" aria-hidden="true">#</a> 4.3 列表中使用区块</h3><p>如果要在列表项目内放进区块，那么就需要在 <strong>&gt;</strong> 前添加四个空格的缩进。</p><p>区块中使用列表实例如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>* 第一项
    &gt; 菜鸟教程
    &gt; 学的不仅是技术更是梦想
* 第二项
</code></pre></div><p>显示结果如下：</p><ul><li>第一项 <blockquote><p>菜鸟教程 学的不仅是技术更是梦想</p></blockquote></li><li>第二项</li></ul><h2 id="_5-功能块" tabindex="-1"><a class="header-anchor" href="#_5-功能块" aria-hidden="true">#</a> 5. 功能块</h2><h3 id="_5-1-代码块" tabindex="-1"><a class="header-anchor" href="#_5-1-代码块" aria-hidden="true">#</a> 5.1 代码块</h3><p>如果是段落上的一个函数或片段的代码可以用反引号把它包起来（<strong>\`</strong>），例如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>\`printf()\` 函数
</code></pre></div><p>显示结果如下：</p><p><code>printf()</code> 函数</p><p>代码区块使用 <strong>\`\`\`</strong> 包裹一段代码，并指定一种语言（也可以不指定）：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>​\`\`\`javascript
$(document).ready(function () {
    alert(&#39;RUNOOB&#39;);
});
​\`\`\`
</code></pre></div><p>显示结果如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;RUNOOB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_5-2-公式块" tabindex="-1"><a class="header-anchor" href="#_5-2-公式块" aria-hidden="true">#</a> 5.2 公式块</h3><p>当你需要在编辑器中插入数学公式时，可以使用两个美元符 $$ 包裹 TeX 或 LaTeX 格式的数学公式来实现。提交后，问答和文章页会根据需要加载 Mathjax 对数学公式进行渲染。如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$$
\\mathbf{V}_1 \\times \\mathbf{V}_2 =  \\begin{vmatrix} 
\\mathbf{i} &amp; \\mathbf{j} &amp; \\mathbf{k} \\\\
\\frac{\\partial X}{\\partial u} &amp;  \\frac{\\partial Y}{\\partial u} &amp; 0 \\\\
\\frac{\\partial X}{\\partial v} &amp;  \\frac{\\partial Y}{\\partial v} &amp; 0 \\\\
\\end{vmatrix}
\${$tep1}{\\style{visibility:hidden}{(x+1)(x+1)}}
$$
</code></pre></div><h2 id="_6-链接" tabindex="-1"><a class="header-anchor" href="#_6-链接" aria-hidden="true">#</a> 6. 链接</h2><p>链接使用方法如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>[链接名称](链接地址)

或者

&lt;链接地址&gt;
</code></pre></div><p>例如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>这是一个链接 [Google](https://www.google.com)
</code></pre></div><p>显示结果如下：</p>`,86),x={href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer"},f=a("p",null,"链接也可以用变量来代替，文档末尾附带变量地址：",-1),v=a("div",{class:"language-text","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`这个链接用 1 作为网址变量 [Google][1]

  [1]: http://www.google.com/
`)])],-1),m={href:"http://www.google.com/",target:"_blank",rel:"noopener noreferrer"},b=o('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>It is really easy! <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function k(w,O){const n=i("router-link"),s=i("ExternalLinkIcon");return r(),c("div",null,[h,a("nav",g,[a("ul",null,[a("li",null,[t(n,{to:"#_1-标题"},{default:l(()=>[e("1. 标题")]),_:1}),a("ul",null,[a("li",null,[t(n,{to:"#_1-1-使用-号标记"},{default:l(()=>[e("1.1 使用#号标记")]),_:1})]),a("li",null,[t(n,{to:"#_1-2-使用-和-号标记一级和二级标题"},{default:l(()=>[e("1.2 使用=和-号标记一级和二级标题")]),_:1})])])]),a("li",null,[t(n,{to:"#_2-段落"},{default:l(()=>[e("2. 段落")]),_:1}),a("ul",null,[a("li",null,[t(n,{to:"#_2-1-字体"},{default:l(()=>[e("2.1 字体")]),_:1})]),a("li",null,[t(n,{to:"#_2-2-分割线"},{default:l(()=>[e("2.2 分割线")]),_:1})]),a("li",null,[t(n,{to:"#_2-3-删除线"},{default:l(()=>[e("2.3 删除线")]),_:1})]),a("li",null,[t(n,{to:"#_2-4-下划线"},{default:l(()=>[e("2.4 下划线")]),_:1})]),a("li",null,[t(n,{to:"#_2-5-注脚"},{default:l(()=>[e("2.5 注脚")]),_:1})])])]),a("li",null,[t(n,{to:"#_3-列表"},{default:l(()=>[e("3. 列表")]),_:1}),a("ul",null,[a("li",null,[t(n,{to:"#_3-1-无序列表"},{default:l(()=>[e("3.1 无序列表")]),_:1})]),a("li",null,[t(n,{to:"#_3-2-有序列表"},{default:l(()=>[e("3.2 有序列表")]),_:1})]),a("li",null,[t(n,{to:"#_3-3-列表嵌套"},{default:l(()=>[e("3.3 列表嵌套")]),_:1})])])]),a("li",null,[t(n,{to:"#_4-区块引用"},{default:l(()=>[e("4. 区块引用")]),_:1}),a("ul",null,[a("li",null,[t(n,{to:"#_4-1-引用"},{default:l(()=>[e("4.1 引用")]),_:1})]),a("li",null,[t(n,{to:"#_4-2-区块中使用列表"},{default:l(()=>[e("4.2 区块中使用列表")]),_:1})]),a("li",null,[t(n,{to:"#_4-3-列表中使用区块"},{default:l(()=>[e("4.3 列表中使用区块")]),_:1})])])]),a("li",null,[t(n,{to:"#_5-功能块"},{default:l(()=>[e("5. 功能块")]),_:1}),a("ul",null,[a("li",null,[t(n,{to:"#_5-1-代码块"},{default:l(()=>[e("5.1 代码块")]),_:1})]),a("li",null,[t(n,{to:"#_5-2-公式块"},{default:l(()=>[e("5.2 公式块")]),_:1})])])]),a("li",null,[t(n,{to:"#_6-链接"},{default:l(()=>[e("6. 链接")]),_:1})])])]),_,a("p",null,[e("这是一个链接 "),a("a",x,[e("Google"),t(s)])]),f,v,a("p",null,[e("显示结果如下： 这个链接用 1 作为网址变量 "),a("a",m,[e("Google"),t(s)])]),b])}const $=d(u,[["render",k],["__file","markdown.html.vue"]]);export{$ as default};
