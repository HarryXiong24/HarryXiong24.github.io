import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c,a as n,d as p,w as t,b as s,e as i}from"./app-932220eb.js";const u={},r=n("h1",{id:"less",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#"),s(" Less")],-1),d=n("p",null,[n("strong",null,"It's CSS, with just a little more.")],-1),k={class:"table-of-contents"},v=i(`<h2 id="_1-认识-less" tabindex="-1"><a class="header-anchor" href="#_1-认识-less" aria-hidden="true">#</a> 1. 认识 less</h2><p>**less 是一种动态样式语言,属于 CSS 预处理器的范畴,它拓展了 CSS 语言,**其余的 CSS 预处理器有 sass 和 stylus 等</p><p>less 增加了变量,MIxin,函数等特性,使 CSS 更易维护和扩展,less 既可以在客户端上运行,也可以借助 node.js 在服务端</p><p>运行</p><p><strong>less 的编译工具</strong></p><p>koala 官网:www.koala-app.com</p><h2 id="_2-less-的引入" tabindex="-1"><a class="header-anchor" href="#_2-less-的引入" aria-hidden="true">#</a> 2.less 的引入</h2><p>less 可以通过多种方式引入具体在http://lesscss.cn/中有详细说明</p><p>这里主要说明<strong>浏览器端的用法:</strong></p><p>在上面的网址中下载 less 的 js 文件,然后放入项目中引入,然后在前面引入已经编写的 less 文件</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>less引入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet/less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css/less.less<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/less.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--引入less的地址--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
    引入less文件的时候和引入普通外部CSS文件类似,只是需要在rel=&quot;stylesheet&quot;后面加上/less表明引入的    是less样式
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:less 在引入的时候 js 文件一定要写在引入的 less 文件的后面,这样才能实现 less 的编译</strong></p><h2 id="_3-less-的注释" tabindex="-1"><a class="header-anchor" href="#_3-less-的注释" aria-hidden="true">#</a> 3.less 的注释</h2><p>less 中的注释和 CSS 一样有两种单行注释//，多行注释/**/</p><p><strong>注意:通过编译器转换的时候,以//开头的注释不会被编译到 CSS 文件中,而已/ /包裹的注释才会被编译在 CSS 文件中</strong></p><h2 id="_4-less-的变量" tabindex="-1"><a class="header-anchor" href="#_4-less-的变量" aria-hidden="true">#</a> 4.less 的变量</h2><p><strong>less 中使用@来申明和使用一个变量</strong></p><p>具体用法为:@变量名:属性值</p><p>@pink:pink//在以后的使用中就可以用@pink 来代替 pink</p><ul><li>变量作为普通的属性值使用,直接用这个变量:@变量名</li><li>变量作为选择器或者属性名来使用,需要在变量两边加上{}</li></ul><p>{变量名}</p><ul><li>变量作为 url，使用是也需要在两边加上{}</li></ul><p>{url}</p><ul><li>变量的加载会有延迟效果,当整个文件的所有东西被加载完时才会将变量赋值给对应的属性</li><li>变量运用的时候会现在自身的作用域里面找到是否定义了该变量,如果定义了就直接用自身作用域中的,如果没 有才会在外层逐层寻找,如果在最外层都没有找到对应的变量就会报错</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@var<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> 1<span class="token punctuation">;</span>
  <span class="token selector">.brass</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 2<span class="token punctuation">;</span>
    <span class="token property">three</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">one</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
      最终的结果为one:1;
      three:3;
      变量在最后赋完所有值才会赋值给属性,而且这个赋值也是只针对自身的作用域
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-嵌套规则" tabindex="-1"><a class="header-anchor" href="#_5-嵌套规则" aria-hidden="true">#</a> 5.嵌套规则</h2><h3 id="_5-1-基本嵌套规则" tabindex="-1"><a class="header-anchor" href="#_5-1-基本嵌套规则" aria-hidden="true">#</a> 5.1 基本嵌套规则</h3><p><strong>less 中可以在父选择器中包含有子选择器,在转换为 CSS 文件的时候会自动用空格来隔开</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
   通过上方的写法可以分别对父元素和子元素进行样式设置
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-符号的使用" tabindex="-1"><a class="header-anchor" href="#_5-2-符号的使用" aria-hidden="true">#</a> 5.2 &amp;符号的使用</h3><p>**&amp;符号能取消默认的嵌套关系的中的空格,**从而从父子关系变成兄弟关系,这个兄弟关系是本身拓展出的一些兄弟关</p><p>系,如伪类选择器等，可以理解为&amp;符号就是这个选择器本身</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
   如果在:hover前面没有写&amp;符合,hover的效果就不能起作用
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-less-的混合" tabindex="-1"><a class="header-anchor" href="#_6-less-的混合" aria-hidden="true">#</a> 6.less 的混合</h2><p><strong>混合就是将一系列属性从一个规则集引入到另外一个规则集的方式</strong></p><h3 id="_6-1-普通混合与不带输出混合" tabindex="-1"><a class="header-anchor" href="#_6-1-普通混合与不带输出混合" aria-hidden="true">#</a> 6.1 普通混合与不带输出混合</h3><p>把样式中共同的代码单独提出来在最上方,单独的用一个类名或 ID 名来定义(因为在开头用了点号和#号,暂且叫作是类名和 ID 名),然后在下面输入的时候通过 .类名/ID 名;来调用</p><p><strong>注意:混合中写样式代码的方式和写普通 CSS 或 less 文件是一样的,混合的名字也是可以用选择器的方式的,只不过所有混合的名字都必须是看起来相识类名或者 ID 名,下面先统一说成是类名</strong></p><p><strong>普通混合定义的类名是会被编译到 CSS 文件中的,如果不想被编译到 CSS 文件中,需要使用不带输出的混合在名字后面再加上()</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*这是不混合的写法*/</span>
<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child1</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child2</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*这是混合后的写法*/</span>
<span class="token selector">.mix()</span> <span class="token punctuation">{</span>
  <span class="token comment">//不加()是普通混合,会被编译到CSS文件中</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child1</span> <span class="token punctuation">{</span>
    <span class="token mixin-usage function">.mix</span><span class="token punctuation">;</span> <span class="token comment">//调用混合样式</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child2</span> <span class="token punctuation">{</span>
    <span class="token mixin-usage function">.mix</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-带参数的混合" tabindex="-1"><a class="header-anchor" href="#_6-2-带参数的混合" aria-hidden="true">#</a> 6.2 带参数的混合</h3><p>混合的参数也是<strong>通过变量使用的形式来定义</strong>的,混合中加参数的用法和函数类似,为了方便记忆可以理解为函数,但是不是函数,同时这个参数还可以有默认的值,默认值的定义也是和变量的定义相同</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*定义形参*/</span>
<span class="token selector">.mix(<span class="token variable">@w</span>:100px,<span class="token variable">@h</span>:100px,<span class="token variable">@b</span>:pink)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*这是定义的默认参数的写法,如果不定义默认的参数就是直接@w,@h,@b*/</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@b</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child1</span> <span class="token punctuation">{</span>
    <span class="token mixin-usage function">.mix</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child2</span> <span class="token punctuation">{</span>
    <span class="token mixin-usage function">.mix</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 200px<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:定义在外部的类并且后面加了()的时候，如果不传入参数在写实参的时候也应该写.mix</strong></p><h3 id="_6-3-命名参数" tabindex="-1"><a class="header-anchor" href="#_6-3-命名参数" aria-hidden="true">#</a> 6.3 命名参数</h3><p>在实参传递给形参值的时候可以不用按照顺序进行传递,而是<strong>直接通过参数的指定进行传参</strong>,这样就能够实现当只想传递某些参数而不是所有参数的时候参数的值不产生混乱</p><p><strong>实参传入命名参数的时候和变量定义的时候是一样的</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child1</span> <span class="token punctuation">{</span>
    <span class="token mixin-usage function">.mix</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.child2</span> <span class="token punctuation">{</span>
    <span class="token mixin-usage function">.mix</span><span class="token punctuation">(</span><span class="token variable">@b<span class="token punctuation">:</span></span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*直接通过命名参数传递*/</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-匹配模式" tabindex="-1"><a class="header-anchor" href="#_6-4-匹配模式" aria-hidden="true">#</a> 6.4 匹配模式</h3><p>用一些专门的标识符放在形参的首位用做匹配,注意<strong>这个是标识符不用@符号</strong>,当使用的时候会根据传入的第一个参数,匹配到那个,就使用哪一个样式</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/* 很像函数重构的写法 */</span>
<span class="token selector">.float(l,<span class="token variable">@w</span>)</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>left
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">@w</span>
<span class="token punctuation">}</span>
<span class="token selector">.float(r,<span class="token variable">@w</span>)</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>right
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">@w</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token mixin-usage function">.float</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token selector">.box2</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token mixin-usage function">.float</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token comment">/*
    匹配模式相当于if从句,当匹配到哪个正确的时候就会使用哪一个样式
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-arguments-变量" tabindex="-1"><a class="header-anchor" href="#_6-5-arguments-变量" aria-hidden="true">#</a> 6.5 arguments 变量</h3><p>**arguments 相当于是类中所有实参的集合,**其作用和 js 中的 arguments 类似</p><p>这个变量是 less 已经设置了的,<strong>可以直接调用</strong>它来使用,调用它的时候它包含了所有传入的实参,同时每个实参是通过空格隔开的</p><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@size</span>,<span class="token variable">@style</span>,<span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>注意:<strong>和 js 中不一样的是这个属性虽然保留着所有实参但是</strong>在命名类的时候还是需要写入对应的形参</strong>,不然会出现报错</p><h2 id="_7-less-的运算" tabindex="-1"><a class="header-anchor" href="#_7-less-的运算" aria-hidden="true">#</a> 7.less 的运算</h2><p>在 less 中可以进行加减乘除的运算</p><p><strong>注意:在 less 的计算中计算的双方只需要一方带单位,最后再计算的时候单位会保留下来加在新值的后面</strong></p><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">widht</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>100<span class="token operator">+</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_8-less-的继承" tabindex="-1"><a class="header-anchor" href="#_8-less-的继承" aria-hidden="true">#</a> 8.less 的继承</h2><p>less 的继承性能上高于 less 的混合,但是灵活性弱于混合,继承不支持参数的形式,同时后面也不加(),继承的类是需要被编译到 CSS 文件中的</p><p><strong>less 的继承用关键词&amp;:extend()函数来实现</strong>,下面是一种用法</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
    &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.center<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">&amp;:nth-child(1)</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;:nth-child(2)</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    上面的.child通过继承效果能够得到.center里面的样式
    转换为CSS样式如下
*/</span>
<span class="token selector">.center,
.father .child</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father .child:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father .child:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    实质上继承是让两个选择器之间通过并集选择器把公共的代码合并起来
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意:**继承如果只是传入了一个需要被继承的参数到 extend 函数里面,只会接受这一个选择器,与它相关的兄弟选择器如<code>:hover</code>等是不会继承的,如果想要继承所有,需要在后面加上:空格 all</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> black <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token comment">/*因为权重不够,就这样写了*/</span>
<span class="token punctuation">}</span>

<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token selector">.child</span> <span class="token punctuation">{</span>
    &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.center all<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">&amp;:nth-child(1)</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;:nth-child(2)</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
    最终.child能继承到:hover中的样式
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-less-的避免编译" tabindex="-1"><a class="header-anchor" href="#_9-less-的避免编译" aria-hidden="true">#</a> 9.less 的避免编译</h2><p><strong>在 less 中如果想要一些值不被运算想要原封不动的变成 CSS 文件</strong>,可以用~&quot;值&quot;的方式直接将值原封传递给 CSS 文件</p><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> ~<span class="token string">&quot;calc(100px + 100)&quot;</span><span class="token punctuation">;</span> <span class="token comment">//calc()是CSS中本来就有的计算形式的函数</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_10-less-的导入" tabindex="-1"><a class="header-anchor" href="#_10-less-的导入" aria-hidden="true">#</a> 10.less 的导入</h2><p><strong>在 less 中使用@import 关键字能够将需要的文件中的代码导入到当前的 less 文件中</strong></p><ul><li>导入 less 文件可一直接导入</li></ul><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;a.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>导入 CSS 文件时需要申明这是 CSS 文件</li></ul><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>CSS<span class="token punctuation">)</span> <span class="token string">&quot;b.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_11-条件语句" tabindex="-1"><a class="header-anchor" href="#_11-条件语句" aria-hidden="true">#</a> 11.条件语句</h2><p><strong>less 没有 if / else 但是 less 具有一个 when，and，not 与&quot;,&quot;语法。</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/* Less */</span>
<span class="token selector">#card</span> <span class="token punctuation">{</span>
  <span class="token comment">// and 运算符 ，相当于 与运算 &amp;&amp;，必须条件全部符合才会执行</span>
  <span class="token selector">.border(<span class="token variable">@width</span>,<span class="token variable">@color</span>,<span class="token variable">@style</span>) when (<span class="token variable">@width</span>&gt;100px) and(<span class="token variable">@color</span>=#999)</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@style</span> <span class="token variable">@color</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// not 运算符，相当于 非运算 !，条件为 不符合才会执行</span>
  <span class="token selector">.background(<span class="token variable">@color</span>) when not (<span class="token variable">@color</span>&gt;=#222)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// , 逗号分隔符：相当于 或运算 ||，只要有一个符合条件就会执行</span>
  <span class="token selector">.font(<span class="token variable">@size</span>:20px) when (<span class="token variable">@size</span>&gt;50px) , (<span class="token variable">@size</span>&lt;100px)</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">#card&gt;.border</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> #999<span class="token punctuation">,</span> solid<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">#card .background</span><span class="token punctuation">(</span>#111<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">#card &gt; .font</span><span class="token punctuation">(</span>40px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 生成后的 CSS */</span>
<span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid #999 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-1-条件运算符" tabindex="-1"><a class="header-anchor" href="#_11-1-条件运算符" aria-hidden="true">#</a> 11.1 条件运算符</h3><p><strong>比较运算符：</strong><code>&gt;</code>、<code>&gt;=</code>、 <code>=</code> 、<code>&lt;=</code> 、<code>&lt;</code></p><p><strong>注意：</strong></p><ul><li>=代表是等于</li><li>less 中有布尔值 true 和 false，除去关键字 true 以外的值其他都会被默认为 false</li></ul><h2 id="_12-循环语句" tabindex="-1"><a class="header-anchor" href="#_12-循环语句" aria-hidden="true">#</a> 12.循环语句</h2><p><strong>less 并没有提供一个 for 等循环的方法但是可以使用递归的方法实现。</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/* Less */</span>
.<span class="token function">generate-columns</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token selector">.generate-columns(<span class="token variable">@n</span>, <span class="token variable">@i</span>: 1) when (<span class="token variable">@i</span> =&lt; <span class="token variable">@n</span>)</span> <span class="token punctuation">{</span>
  <span class="token selector">.column-@{i}</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@i</span> <span class="token operator">*</span> 100% <span class="token operator">/</span> <span class="token variable">@n</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  .<span class="token function">generate-columns</span><span class="token punctuation">(</span><span class="token variable">@n</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">@i</span> <span class="token operator">+</span> 1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 生成后的 CSS */</span>
<span class="token selector">.column-1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column-2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column-3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.column-4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**案例：**less 循环输出类名</p><p><strong>目标输出</strong></p><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./resource/a.png&quot;</span><span class="token punctuation">)</span></span> top<span class="token operator">/</span>100% no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.b</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./resource/b.png&quot;</span><span class="token punctuation">)</span></span> top<span class="token operator">/</span>100% no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.c</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./resource/c.png&quot;</span><span class="token punctuation">)</span></span> top<span class="token operator">/</span>100% no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>实现思路</strong></p><ul><li>由于形式上面很类似，所以先定义一个模板函数。</li><li>定义一个 less 列表，把需要的类名都写上。</li><li>循环遍历列表，调用函数。</li></ul><p><strong>实现步骤</strong></p><ol><li>定义函数</li></ol><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.backgroundcard(<span class="token variable">@className</span>,<span class="token variable">@pngName</span>)</span> <span class="token punctuation">{</span>
  <span class="token selector">.@{className}</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./resource/@{pngName}.png&quot;</span><span class="token punctuation">)</span></span> top<span class="token operator">/</span>100% no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li>定义一个数组</li></ol><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@bgcardList<span class="token punctuation">:</span></span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">;</span>
</code></pre></div><ol><li>循环遍历</li></ol><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.loop(<span class="token variable">@i</span>) when (<span class="token variable">@i</span> &lt; length(<span class="token variable">@bgcardList</span>)+1)</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.backgroundcard</span><span class="token punctuation">(</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token variable">@bgcardList</span><span class="token punctuation">,</span> <span class="token variable">@i</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">extract</span><span class="token punctuation">(</span><span class="token variable">@bgcardList</span><span class="token punctuation">,</span> <span class="token variable">@i</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.loop</span><span class="token punctuation">(</span><span class="token variable">@i</span><span class="token operator">+</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
.<span class="token function">loop</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>语法</strong></p><div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token operator">+</span> 列表函数
    <span class="token operator">-</span> 获取列表的长度  <span class="token function">length</span><span class="token punctuation">(</span><span class="token variable">@bgcardList</span><span class="token punctuation">)</span>  <span class="token comment">//7</span>
    <span class="token operator">-</span> 获取列表元素  <span class="token function">extract</span><span class="token punctuation">(</span><span class="token variable">@bgcardList</span><span class="token punctuation">,</span> 3<span class="token punctuation">)</span>  <span class="token comment">//c</span>
<span class="token operator">+</span> 循环函数
    <span class="token operator">-</span> loop定义循环次数，when条件判断，符合进入函数，不符合不进入函数。之后次数<span class="token operator">+</span>1，形成循环。
    <span class="token operator">-</span> loop函数调用，直接传值1。
</code></pre></div>`,100);function m(b,g){const a=l("router-link");return o(),c("div",null,[r,d,n("nav",k,[n("ul",null,[n("li",null,[p(a,{to:"#_1-认识-less"},{default:t(()=>[s("1. 认识 less")]),_:1})]),n("li",null,[p(a,{to:"#_2-less-的引入"},{default:t(()=>[s("2.less 的引入")]),_:1})]),n("li",null,[p(a,{to:"#_3-less-的注释"},{default:t(()=>[s("3.less 的注释")]),_:1})]),n("li",null,[p(a,{to:"#_4-less-的变量"},{default:t(()=>[s("4.less 的变量")]),_:1})]),n("li",null,[p(a,{to:"#_5-嵌套规则"},{default:t(()=>[s("5.嵌套规则")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_5-1-基本嵌套规则"},{default:t(()=>[s("5.1 基本嵌套规则")]),_:1})]),n("li",null,[p(a,{to:"#_5-2-符号的使用"},{default:t(()=>[s("5.2 &符号的使用")]),_:1})])])]),n("li",null,[p(a,{to:"#_6-less-的混合"},{default:t(()=>[s("6.less 的混合")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_6-1-普通混合与不带输出混合"},{default:t(()=>[s("6.1 普通混合与不带输出混合")]),_:1})]),n("li",null,[p(a,{to:"#_6-2-带参数的混合"},{default:t(()=>[s("6.2 带参数的混合")]),_:1})]),n("li",null,[p(a,{to:"#_6-3-命名参数"},{default:t(()=>[s("6.3 命名参数")]),_:1})]),n("li",null,[p(a,{to:"#_6-4-匹配模式"},{default:t(()=>[s("6.4 匹配模式")]),_:1})]),n("li",null,[p(a,{to:"#_6-5-arguments-变量"},{default:t(()=>[s("6.5 arguments 变量")]),_:1})])])]),n("li",null,[p(a,{to:"#_7-less-的运算"},{default:t(()=>[s("7.less 的运算")]),_:1})]),n("li",null,[p(a,{to:"#_8-less-的继承"},{default:t(()=>[s("8.less 的继承")]),_:1})]),n("li",null,[p(a,{to:"#_9-less-的避免编译"},{default:t(()=>[s("9.less 的避免编译")]),_:1})]),n("li",null,[p(a,{to:"#_10-less-的导入"},{default:t(()=>[s("10.less 的导入")]),_:1})]),n("li",null,[p(a,{to:"#_11-条件语句"},{default:t(()=>[s("11.条件语句")]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#_11-1-条件运算符"},{default:t(()=>[s("11.1 条件运算符")]),_:1})])])]),n("li",null,[p(a,{to:"#_12-循环语句"},{default:t(()=>[s("12.循环语句")]),_:1})])])]),v])}const x=e(u,[["render",m],["__file","less.html.vue"]]);export{x as default};
