import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as u,a as s,d as a,w as t,b as n,f as o}from"./app-425a2fc5.js";const r={},d=s("h1",{id:"sass",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass","aria-hidden":"true"},"#"),n(" Sass")],-1),k=s("p",null,[s("strong",null,"CSS with superpowers")],-1),v={class:"table-of-contents"},m=o('<h2 id="_1-认识-sass" tabindex="-1"><a class="header-anchor" href="#_1-认识-sass" aria-hidden="true">#</a> 1. 认识 Sass</h2><h3 id="_1-1-特色功能-features" tabindex="-1"><a class="header-anchor" href="#_1-1-特色功能-features" aria-hidden="true">#</a> 1.1 特色功能 (Features)</h3><ul><li>完全兼容 CSS3</li><li>在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能</li><li>通过函数进行颜色值与属性值的运算</li><li>提供控制指令 (control directives)等高级功能</li><li>自定义输出格式</li></ul><h3 id="_1-2-语法格式-syntax" tabindex="-1"><a class="header-anchor" href="#_1-2-语法格式-syntax" aria-hidden="true">#</a> 1.2 语法格式 (Syntax)</h3><p>Sass 有两种语法格式。首先是 SCSS (Sassy CSS) —— 也是本文示例所使用的格式 —— 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 <code>.scss</code> 作为拓展名。</p>',5),g={href:"http://sass-lang.com/docs/yardoc/file.INDENTED_SYNTAX.html",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,".sass",-1),b={href:"https://www.sass.hk/docs/#t7-1",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"sass-convert",-1),x=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`# Convert Sass to SCSS
$ sass-convert style.sass style.scss

# Convert SCSS to Sass
$ sass-convert style.scss style.sass
`)])],-1),f=s("h2",{id:"_2-使用-sass",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-使用-sass","aria-hidden":"true"},"#"),n(" 2. 使用 Sass")],-1),_={href:"http://rubyinstaller.org/",target:"_blank",rel:"noopener noreferrer"},w=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>gem install sass
</code></pre></div><p>在命令行中运行 Sass：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>sass input.scss output.css
</code></pre></div><p>监视单个 Sass 文件，每次修改并保存时自动编译：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>sass --watch input.scss:output.css
</code></pre></div><p>监视整个文件夹：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>sass --watch app/sass:public/stylesheets
</code></pre></div><p>更多命令的用法请通过 <code>sass --help</code> 获取帮助。</p>`,8),S=s("code",null,'require "sass"',-1),q={href:"http://sass-lang.com/docs/yardoc/Sass/Engine.html",target:"_blank",rel:"noopener noreferrer"},$=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>engine = Sass::Engine.new(&quot;#main {background-color: #0000ff}&quot;, :syntax =&gt; :scss)
engine.render #=&gt; &quot;#main { background-color: #0000ff; }\\n&quot;
</code></pre></div><h3 id="_2-1-rack-rails-merb-plugin" tabindex="-1"><a class="header-anchor" href="#_2-1-rack-rails-merb-plugin" aria-hidden="true">#</a> 2.1 Rack/Rails/Merb Plugin</h3><p>在 Rails 3 之前的版本中使用 Sass，需要在 <code>environment.rb</code> 文件中添加：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>config.gem &quot;sass&quot;
</code></pre></div><p>Rails 3 则需要在 Gemfile 中添加：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>gem &quot;sass&quot;
</code></pre></div><p>在 Merb 中使用 Sass，需要在 <code>config/dependencies.rb</code> 中添加：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>dependency &quot;merb-haml&quot;
</code></pre></div><p>在 Rack 中使用 Sass，需要在 <code>config.ru</code> 中添加：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>require &#39;sass/plugin/rack&#39;
use Sass::Plugin::Rack
</code></pre></div>`,10),C=s("code",null,".sass",-1),E=s("code",null,".scss",-1),F=s("code",null,"public/stylesheets/sass",-1),T={href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#template_location-option",target:"_blank",rel:"noopener noreferrer"},z=s("code",null,"public/stylesheets",-1),R=s("code",null,"public/stylesheets/sass/main.scss",-1),I=s("code",null,"public/stylesheets/main.css",-1),M=s("h3",{id:"_2-2-缓存-caching",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-2-缓存-caching","aria-hidden":"true"},"#"),n(" 2.2 缓存 (Caching)")],-1),D={href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"@import",-1),N=s("code",null,".sass-cache",-1),L=s("code",null,"tmp/sass-cache",-1),O={href:"https://www.sass.hk/docs/",target:"_blank",rel:"noopener noreferrer"},B=s("code",null,":cache_location",-1),P=s("code",null,":cache",-1),U=s("code",null,"false",-1),H=s("h3",{id:"_2-3-配置选项-options",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-3-配置选项-options","aria-hidden":"true"},"#"),n(" 2.3 配置选项 (Options)")],-1),V={href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#options",target:"_blank",rel:"noopener noreferrer"},W=o('<h3 id="_2-4-判断语法格式-syntax-selection" tabindex="-1"><a class="header-anchor" href="#_2-4-判断语法格式-syntax-selection" aria-hidden="true">#</a> 2.4 判断语法格式 (Syntax Selection)</h3><p>Sass 命令行工具根据文件的拓展名判断所使用的语法格式，没有文件名时 <code>sass</code> 命令默认编译 <code>.sass</code> 文件，添加 <code>--scss</code> 选项或者使用 <code>scss</code> 命令编译 SCSS 文件。</p><h3 id="_2-5-编码格式-encodings" tabindex="-1"><a class="header-anchor" href="#_2-5-编码格式-encodings" aria-hidden="true">#</a> 2.5 编码格式 (Encodings)</h3>',3),j={href:"http://www.w3.org/TR/2013/WD-css-syntax-3-20130919/#determine-the-fallback-encoding",target:"_blank",rel:"noopener noreferrer"},Y=s("code",null,"@charset",-1),X=o(`<p>与 CSS 相同，使用 <code>@charset</code> 可以声明特定的编码格式。在样式文件的起始位置（前面没有任何空白与注释）插入 <code>@charset &quot;encoding-name&quot;</code>， Sass 将会按照给出的编码格式编译文件。注意所使用的编码格式必须可转换为 Unicode 字符集。</p><p>Sass 以 UTF-8 编码输出 CSS 文件，当且仅当编译后的文件中包含非 ASCII 字符时，才会在输出文件中添加 <code>@charset</code> 声明，而在压缩模式下 (compressed mode) 使用 UTF-8 byte order mark 代替 <code>@charset</code> 声明语句。</p><h2 id="_3-sass-注释" tabindex="-1"><a class="header-anchor" href="#_3-sass-注释" aria-hidden="true">#</a> 3. Sass 注释</h2><p>Sass 支持标准的 CSS 多行注释 <code>/* */</code>，以及单行注释 <code>//</code>，前者会 被完整输出到编译后的 CSS 文件中，而后者则不会，例如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// These comments are only one line long each.</span>
<span class="token comment">// They won&#39;t appear in the CSS output,</span>
<span class="token comment">// since they use the single-line comment syntax.</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>!</code> 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息。</p><p>插值语句 (interpolation) 也可写进多行注释中输出变量值：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$version</span></span><span class="token punctuation">:</span> <span class="token string">&quot;1.2.3&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/* This CSS is generated by My Snazzy Framework version #{$version}. */</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* This CSS is generated by My Snazzy Framework version 1.2.3. */</span>
</code></pre></div><h2 id="_4-sass-对-css-功能的拓展" tabindex="-1"><a class="header-anchor" href="#_4-sass-对-css-功能的拓展" aria-hidden="true">#</a> 4. Sass 对 css 功能的拓展</h2><h3 id="_4-1-嵌套规则-nested-rules" tabindex="-1"><a class="header-anchor" href="#_4-1-嵌套规则-nested-rules" aria-hidden="true">#</a> 4.1 嵌套规则 (Nested Rules)</h3><p>Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 97%<span class="token punctuation">;</span>

  <span class="token selector">.redbox </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 97%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p .redbox</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>嵌套功能避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 97%<span class="token punctuation">;</span>

  <span class="token selector">p,
  div </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token selector">a </span><span class="token punctuation">{</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">pre </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 97%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p,
#main div</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p a,
#main div a</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main pre</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-父选择器-referencing-parent-selectors" tabindex="-1"><a class="header-anchor" href="#_4-2-父选择器-referencing-parent-selectors" aria-hidden="true">#</a> 4.2 父选择器 <code>&amp;</code> (Referencing Parent Selectors: <code>&amp;</code>)</h3><p>在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 <code>hover</code> 样式时，或者当 <code>body</code> 元素有某个 classname 时，可以用 <code>&amp;</code> 代表嵌套规则外层的父选择器。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">body.firefox <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body.firefox a</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 CSS 文件中 <code>&amp;</code> 将被替换成嵌套外层的父选择器，如果含有多层嵌套，最外层的父选择器会一层一层向下传递：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main a</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>&amp;</code> 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器，例如</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-sidebar </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main-sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当父选择器含有不合适的后缀时，Sass 将会报错。</p><h3 id="_4-3-属性嵌套-nested-properties" tabindex="-1"><a class="header-anchor" href="#_4-3-属性嵌套-nested-properties" aria-hidden="true">#</a> 4.3 属性嵌套 (Nested Properties)</h3><p>有些 CSS 属性遵循相同的命名空间 (namespace)，比如 <code>font-family, font-size, font-weight</code> 都以 <code>font</code> 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.funky </span><span class="token punctuation">{</span>
  <span class="token selector">font: </span><span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 30em<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.funky</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>命名空间也可以包含自己的属性值，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.funky </span><span class="token punctuation">{</span>
  <span class="token selector">font: 20px/24px </span><span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.funky</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 20px/24px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-4-占位符选择器-foo-placeholder-selectors-foo" tabindex="-1"><a class="header-anchor" href="#_4-4-占位符选择器-foo-placeholder-selectors-foo" aria-hidden="true">#</a> 4.4 占位符选择器 <code>%foo</code> (Placeholder Selectors: <code>%foo</code>)</h3>`,46),G=s("code",null,"#",-1),J=s("code",null,".",-1),K=s("code",null,"%",-1),Q={href:"https://www.sass.hk/docs/#t7-3",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.sass.hk/docs/#t7-3-6",target:"_blank",rel:"noopener noreferrer"},ss=o(`<p>当占位符选择器单独使用时（未通过 <code>@extend</code> 调用），不会编译到 CSS 文件中。</p><h2 id="_5-sassscript" tabindex="-1"><a class="header-anchor" href="#_5-sassscript" aria-hidden="true">#</a> 5. SassScript</h2><p>在 CSS 属性的基础上 Sass 提供了一些名为 SassScript 的新功能。 SassScript 可作用于任何属性，允许属性使用变量、算数运算等额外功能。</p><p>通过 interpolation，SassScript 甚至可以生成选择器或属性名，这一点对编写 mixin 有很大帮助。</p><h3 id="_5-1-interactive-shell" tabindex="-1"><a class="header-anchor" href="#_5-1-interactive-shell" aria-hidden="true">#</a> 5.1 Interactive Shell</h3><p>Interactive Shell 可以在命令行中测试 SassScript 的功能。在命令行中输入 <code>sass -i</code>，然后输入想要测试的 SassScript 查看输出结果：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ sass -i
&gt;&gt; &quot;Hello, Sassy World!&quot;
&quot;Hello, Sassy World!&quot;
&gt;&gt; 1px + 1px + 1px
3px
&gt;&gt; #777 + #777
#eeeeee
&gt;&gt; #777 + #888
white
</code></pre></div><h3 id="_5-2-变量-variables" tabindex="-1"><a class="header-anchor" href="#_5-2-变量-variables" aria-hidden="true">#</a> 5.2 变量 <code>$</code> (Variables: <code>$</code>)</h3><p>SassScript 最普遍的用法就是变量，变量以美元符号开头，赋值方法与 CSS 属性的写法一样：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
</code></pre></div><p>直接使用即调用变量：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 <code>!global</code> 声明：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 5em !global<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#sidebar </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-3-数据类型-data-types" tabindex="-1"><a class="header-anchor" href="#_5-3-数据类型-data-types" aria-hidden="true">#</a> 5.3 数据类型 (Data Types)</h3><p>SassScript 支持 6 种主要的数据类型：</p><ul><li>数字，<code>1, 2, 13, 10px</code></li><li>字符串，有引号字符串与无引号字符串，<code>&quot;foo&quot;, &#39;bar&#39;, baz</code></li><li>颜色，<code>blue, #04a3f9, rgba(255,0,0,0.5)</code></li><li>布尔型，<code>true, false</code></li><li>空值，<code>null</code></li><li>数组 (list)，用空格或逗号作分隔符，<code>1.5em 1em 0 2em, Helvetica, Arial, sans-serif</code></li><li>maps, 相当于 JavaScript 的 object，<code>(key1: value1, key2: value2)</code></li></ul><p>SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 <code>!important</code> 声明。然而 Sass 不会特殊对待这些属性值，一律视为无引号字符串。</p><h4 id="_5-3-1-字符串-strings" tabindex="-1"><a class="header-anchor" href="#_5-3-1-字符串-strings" aria-hidden="true">#</a> 5.3.1 字符串 (Strings)</h4><p>SassScript 支持 CSS 的两种字符串类型：有引号字符串 (quoted strings)，如 <code>&quot;Lucida Grande&quot;</code> <code>&#39;http://sass-lang.com&#39;</code>；与无引号字符串 (unquoted strings)，如 <code>sans-serif</code> <code>bold</code>，在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 <code>#{}</code> (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">firefox-message</span><span class="token punctuation">(</span><span class="token variable">$selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector">body.firefox <span class="token variable">#{$selector}</span>:before </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Hi, Firefox users!&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">@include</span> <span class="token function">firefox-message</span><span class="token punctuation">(</span><span class="token string">&quot;.header&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body.firefox .header:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Hi, Firefox users!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-3-2-数组-lists" tabindex="-1"><a class="header-anchor" href="#_5-3-2-数组-lists" aria-hidden="true">#</a> 5.3.2 数组 (Lists)</h4><p>数组 (lists) 指 Sass 如何处理 CSS 中 <code>margin: 10px 15px 0 0</code> 或者 <code>font-face: Helvetica, Arial, sans-serif</code> 这样通过空格或者逗号分隔的一系列的值。事实上，独立的值也被视为数组 —— 只包含一个值的数组。</p>`,27),ns={href:"http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#list-functions",target:"_blank",rel:"noopener noreferrer"},as=s("code",null,"nth",-1),es=s("code",null,"join",-1),ts=s("code",null,"append",-1),ps=s("code",null,"@each",-1),os=o(`<p>数组中可以包含子数组，比如 <code>1px 2px, 5px 6px</code> 是包含 <code>1px 2px</code> 与 <code>5px 6px</code> 两个数组的数组。如果内外两层数组使用相同的分隔方式，需要用圆括号包裹内层，所以也可以写成 <code>(1px 2px) (5px 6px)</code>。变化是，之前的 <code>1px 2px, 5px 6px</code> 使用逗号分割了两个子数组 (comma-separated)，而 <code>(1px 2px) (5px 6px)</code> 则使用空格分割(space-separated)。</p><p>当数组被编译为 CSS 时，Sass 不会添加任何圆括号（CSS 中没有这种写法），所以 <code>(1px 2px) (5px 6px)</code> 与 <code>1px 2px, 5px 6px</code> 在编译后的 CSS 文件中是完全一样的，但是它们在 Sass 文件中却有不同的意义，前者是包含两个数组的数组，而后者是包含四个值的数组。</p><p>用 <code>()</code> 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 <code>font-family: ()</code> Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 <code>1px 2px () 3px</code> 或 <code>1px 2px null 3px</code>。</p><p>基于逗号分隔的数组允许保留结尾的逗号，这样做的意义是强调数组的结构关系，尤其是需要声明只包含单个值的数组时。例如 <code>(1,)</code> 表示只包含 <code>1</code> 的数组，而 <code>(1 2 3,)</code> 表示包含 <code>1 2 3</code> 这个以空格分隔的数组的数组。</p><h4 id="_5-3-3-maps" tabindex="-1"><a class="header-anchor" href="#_5-3-3-maps" aria-hidden="true">#</a> 5.3.3 Maps</h4><p>Maps represent an association between keys and values, where keys are used to look up values. They make it easy to collect values into named groups and access those groups dynamically. They have no direct parallel in CSS, although they’re syntactically similar to media query expressions: <code>scss $map: (key1: value1, key2: value2, key3: value3);</code> Unlike lists, maps must always be surrounded by parentheses and must always be comma-separated. Both the keys and values in maps can be any SassScript object. A map may only have one value associated with a given key (although that value may be a list). A given value may be associated with many keys, though. Like lists, maps are mostly manipulated using SassScript functions. The map-get function looks up values in a map and the map-merge function adds values to a map. The @each directive can be used to add styles for each key/value pair in a map. The order of pairs in a map is always the same as when the map was created. Maps can also be used anywhere lists can. When used by a list function, a map is treated as a list of pairs. For example, (key1: value1, key2: value2) would be treated as the nested list key1 value1, key2 value2 by list functions. Lists cannot be treated as maps, though, with the exception of the empty list. () represents both a map with no key/value pairs and a list with no elements. Note that map keys can be any Sass data type (even another map) and the syntax for declaring a map allows arbitrary SassScript expressions that will be evaluated to determine the key. Maps cannot be converted to plain CSS. Using one as the value of a variable or an argument to a CSS function will cause an error. Use the inspect($value) function to produce an output string useful for debugging maps. 中文简要说明: Maps 可视为键值对的集合，键被用于定位值 在 css 种没有对应的概念。 和 Lists 不同 Maps 必须被圆括号包围，键值对被都好分割 。 Maps 中的 keys 和 values 可以是 sassscript 的任何对象。（包括任意的 sassscript 表达式 arbitrary SassScript expressions） 和 Lists 一样 Maps 主要为 sassscript 函数服务，如 map-get 函数用于查找键值，map-merge 函数用于 map 和新加的键值融合，@each 命令可添加样式到一个 map 中的每个键值对。 Maps 可用于任何 Lists 可用的地方，在 List 函数中 Map 会被自动转换为 List ， 如 (key1: value1, key2: value2)会被 List 函数转换为 key1 value1, key2 value2 ，反之则不能。(网友 Soledad 提供)</p><h4 id="_5-3-4-颜色-colors" tabindex="-1"><a class="header-anchor" href="#_5-3-4-颜色-colors" aria-hidden="true">#</a> 5.3.4 颜色 (Colors)</h4><p>Any CSS color expression returns a SassScript Color value. This includes a large number of named colors which are indistinguishable from unquoted strings. In compressed output mode, Sass will output the smallest CSS representation of a color. For example, #FF0000 will output as red in compressed mode, but blanchedalmond will output as #FFEBCD. A common issue users encounter with named colors is that since Sass prefers the same output format as was typed in other output modes, a color interpolated into a selector becomes invalid syntax when compressed. To avoid this, always quote named colors if they are meant to be used in the construction of a selector.</p><h3 id="_5-4-运算-operations" tabindex="-1"><a class="header-anchor" href="#_5-4-运算-operations" aria-hidden="true">#</a> 5.4 运算 (Operations)</h3><p>所有数据类型均支持相等运算 <code>==</code> 或 <code>!=</code>，此外，每种数据类型也有其各自支持的运算方式。</p><h4 id="_5-4-1-数字运算-number-operations" tabindex="-1"><a class="header-anchor" href="#_5-4-1-数字运算-number-operations" aria-hidden="true">#</a> 5.4.1 数字运算 (Number Operations)</h4><p>SassScript 支持数字的加减乘除、取整等运算 (<code>+, -, *, /, %</code>)，如果必要会在不同单位间转换值。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1in <span class="token operator">+</span> 8pt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.111in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>关系运算 <code>&lt;, &gt;, &lt;=, &gt;=</code> 也可用于数字运算，相等运算 <code>==, !=</code> 可用于所有数据类型。</p><p><strong>除法运算 <code>/</code> (Division and <code>/</code>)</strong></p><p><code>/</code> 在 CSS 中通常起到分隔数字的用途，SassScript 作为 CSS 语言的拓展当然也支持这个功能，同时也赋予了 <code>/</code> 除法运算的功能。也就是说，如果 <code>/</code> 在 SassScript 中把两个数字分隔，编译后的 CSS 文件中也是同样的作用。</p><p>以下三种情况 <code>/</code> 将被视为除法运算符号：</p><ul><li>如果值，或值的一部分，是变量或者函数的返回值</li><li>如果值被圆括号包裹</li><li>如果值是算数表达式的一部分</li></ul><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 10px/8px<span class="token punctuation">;</span> <span class="token comment">// Plain CSS, no division</span>
  <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span>/2<span class="token punctuation">;</span> <span class="token comment">// Uses a variable, does division</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">round</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// Uses a function, does division</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>500px/2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uses parentheses, does division</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> 8px/2px<span class="token punctuation">;</span> <span class="token comment">// Uses +, does division</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 10px/8px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果需要使用变量，同时又要确保 <code>/</code> 不做除法运算而是完整地编译到 CSS 文件中，只需要用 <code>#{}</code> 插值语句将变量包裹。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$line-height</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token variable">#{$font-size}</span>/<span class="token variable">#{$line-height}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 12px/30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-4-2-颜色值运算-color-operations" tabindex="-1"><a class="header-anchor" href="#_5-4-2-颜色值运算-color-operations" aria-hidden="true">#</a> 5.4.2 颜色值运算 (Color Operations)</h4><p>颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #010203 <span class="token operator">+</span> #040506<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>计算 <code>01 + 04 = 05</code> <code>02 + 05 = 07</code> <code>03 + 06 = 09</code>，然后编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #050709<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,32),cs={href:"http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html",target:"_blank",rel:"noopener noreferrer"},ls=o(`<p>数字与颜色值之间也可以进行算数运算，同样也是分段计算的，比如</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #010203 <span class="token operator">*</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>计算 <code>01 * 2 = 02</code> <code>02 * 2 = 04</code> <code>03 * 2 = 06</code>，然后编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #020406<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>需要注意的是，如果颜色值包含 alpha channel（rgba 或 hsla 两种颜色值），必须拥有相等的 alpha 值才能进行运算，因为算术运算不会作用于 alpha 值。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),is={href:"http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#opacify-instance_method",target:"_blank",rel:"noopener noreferrer"},us={href:"http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#transparentize-instance_method",target:"_blank",rel:"noopener noreferrer"},rs=o(`<div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$translucent-red</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">opacify</span><span class="token punctuation">(</span><span class="token variable">$translucent-red</span><span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">transparentize</span><span class="token punctuation">(</span><span class="token variable">$translucent-red</span><span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>IE 滤镜要求所有的颜色值包含 alpha 层，而且格式必须固定 <code>#AABBCCDD</code>，使用 <code>ie_hex_str</code> 函数可以很容易地将颜色转化为 IE 滤镜要求的格式。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$translucent-red</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$green</span></span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">gradient</span><span class="token punctuation">(</span>enabled=<span class="token string">&#39;false&#39;</span><span class="token punctuation">,</span> startColorstr=<span class="token string">&#39;#{ie-hex-str($green)}&#39;</span><span class="token punctuation">,</span> endColorstr=<span class="token string">&#39;#{ie-hex-str($translucent-red)}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">gradient</span><span class="token punctuation">(</span>enabled=<span class="token string">&#39;false&#39;</span><span class="token punctuation">,</span> startColorstr=#FF00FF00<span class="token punctuation">,</span> endColorstr=#80FF0000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-4-3-字符串运算-string-operations" tabindex="-1"><a class="header-anchor" href="#_5-4-3-字符串运算-string-operations" aria-hidden="true">#</a> 5.4.3 字符串运算 (String Operations)</h4><p><code>+</code> 可用于连接字符串</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> e <span class="token operator">+</span> -resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> e-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意，如果有引号字符串（位于 <code>+</code> 左侧）连接无引号字符串，运算结果是有引号的，相反，无引号字符串（位于 <code>+</code> 左侧）连接有引号字符串，运算结果则没有引号。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p:before </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Foo &quot;</span> <span class="token operator">+</span> Bar<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans- <span class="token operator">+</span> <span class="token string">&quot;serif&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Foo Bar&quot;</span><span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>运算表达式与其他值连用时，用空格做连接符：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 3px <span class="token operator">+</span> 4px auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 7px auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在有引号的文本字符串中使用 <code>#{}</code> 插值语句可以添加动态的值：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p:before </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;I ate #{5 + 10} pies!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;I ate 15 pies!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>空的值被视作插入了空字符串：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$value</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">;</span>
<span class="token selector">p:before </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;I ate #{$value} pies!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;I ate pies!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-4-4-布尔运算-boolean-operations" tabindex="-1"><a class="header-anchor" href="#_5-4-4-布尔运算-boolean-operations" aria-hidden="true">#</a> 5.4.4 布尔运算 (Boolean Operations)</h4><p>SassScript 支持布尔型的 <code>and</code> <code>or</code> 以及 <code>not</code> 运算。</p><h4 id="_5-4-5-数组运算-list-operations" tabindex="-1"><a class="header-anchor" href="#_5-4-5-数组运算-list-operations" aria-hidden="true">#</a> 5.4.5 数组运算 (List Operations)</h4>`,31),ds={href:"http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#list-functions",target:"_blank",rel:"noopener noreferrer"},ks=o(`<h3 id="_5-5-括号-parentheses" tabindex="-1"><a class="header-anchor" href="#_5-5-括号-parentheses" aria-hidden="true">#</a> 5.5 括号 (Parentheses)</h3><p>圆括号可以用来影响运算的顺序：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1em <span class="token operator">+</span> <span class="token punctuation">(</span>2em <span class="token operator">*</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 7em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-6-函数-functions" tabindex="-1"><a class="header-anchor" href="#_5-6-函数-functions" aria-hidden="true">#</a> 5.6 函数 (Functions)</h3><p>SassScript 定义了多种函数，有些甚至可以通过普通的 CSS 语句调用：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-6-1-关键词参数-keyword-arguments" tabindex="-1"><a class="header-anchor" href="#_5-6-1-关键词参数-keyword-arguments" aria-hidden="true">#</a> 5.6.1 关键词参数 (Keyword Arguments)</h4><p>Sass 函数允许使用关键词参数 (keyword arguments)，上面的例子也可以写成：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$hue</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$saturation</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>虽然不够简明，但是阅读起来会更方便。关键词参数给函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用。</p>`,14),vs={href:"http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html",target:"_blank",rel:"noopener noreferrer"},ms=o(`<h3 id="_5-7-插值语句-interpolation" tabindex="-1"><a class="header-anchor" href="#_5-7-插值语句-interpolation" aria-hidden="true">#</a> 5.7 插值语句 <code>#{}</code> (Interpolation: <code>#{}</code>)</h3><p>通过 <code>#{}</code> 插值语句可以在选择器或属性名中使用变量：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> border<span class="token punctuation">;</span>
<span class="token selector">p.<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">#{$attr}</span>-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p.foo</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>#{}</code> 插值语句也可以在属性值中插入 SassScript，大多数情况下，这样可能还不如使用变量方便，但是使用 <code>#{}</code> 可以避免 Sass 运行运算表达式，直接编译 CSS。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$line-height</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token variable">#{$font-size}</span>/<span class="token variable">#{$line-height}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 12px/30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-8-in-sassscript" tabindex="-1"><a class="header-anchor" href="#_5-8-in-sassscript" aria-hidden="true">#</a> 5.8 <code>&amp;</code> in SassScript</h3><p>Just like when it’s used in selectors, &amp; in SassScript refers to the current parent selector. It’s a comma-separated list of space-separated lists. For example:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.foo.bar .baz.bang,
.bip.qux </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$selector</span></span><span class="token punctuation">:</span> &amp;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The value of $selector is now ((&quot;.foo.bar&quot; &quot;.baz.bang&quot;), &quot;.bip.qux&quot;). The compound selectors are quoted here to indicate that they’re strings, but in reality they would be unquoted. Even if the parent selector doesn’t contain a comma or a space, &amp; will always have two levels of nesting, so it can be accessed consistently.</p><p>If there is no parent selector, the value of &amp; will be null. This means you can use it in a mixin to detect whether a parent selector exists:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">does-parent-exist </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token selector">a </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-变量定义-default-variable-defaults-default" tabindex="-1"><a class="header-anchor" href="#_5-9-变量定义-default-variable-defaults-default" aria-hidden="true">#</a> 5.9 变量定义 <code>!default</code> (Variable Defaults: <code>!default</code>)</h3><p>可以在变量的结尾添加 <code>!default</code> 给一个未通过 <code>!default</code> 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$content</span></span><span class="token punctuation">:</span> <span class="token string">&quot;First content&quot;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$content</span></span><span class="token punctuation">:</span> <span class="token string">&quot;Second content?&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$new_content</span></span><span class="token punctuation">:</span> <span class="token string">&quot;First time reference&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$content</span><span class="token punctuation">;</span>
  <span class="token property">new-content</span><span class="token punctuation">:</span> <span class="token variable">$new_content</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;First content&quot;</span><span class="token punctuation">;</span>
  <span class="token property">new-content</span><span class="token punctuation">:</span> <span class="token string">&quot;First time reference&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>变量是 null 空值时将视为未被 <code>!default</code> 赋值。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$content</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$content</span></span><span class="token punctuation">:</span> <span class="token string">&quot;Non-null content&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$content</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;Non-null content&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_6-rules-与指令-rules-and-directives" tabindex="-1"><a class="header-anchor" href="#_6-rules-与指令-rules-and-directives" aria-hidden="true">#</a> 6. @-Rules 与指令 (@-Rules and Directives)</h2><p>Sass 支持所有的 CSS3 @-Rules，以及 Sass 特有的 “指令”（directives）</p><h3 id="_6-1-import" tabindex="-1"><a class="header-anchor" href="#_6-1-import" aria-hidden="true">#</a> 6.1 @import</h3><p>Sass 拓展了 <code>@import</code> 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。</p><p>Sass 在当前地址，或 Rack, Rails, Merb 的 Sass 文件地址寻找 Sass 文件，如果需要设定其他地址，可以用 <code>:load_paths</code> 选项，或者在命令行中输入 <code>--load-path</code> 命令。</p><p>通常，<code>@import</code> 寻找 Sass 文件并将其导入，但在以下情况下，<code>@import</code> 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。</p><ul><li>文件拓展名是 <code>.css</code>；</li><li>文件名以 <code>http://</code> 开头；</li><li>文件名是 <code>url()</code>；</li><li><code>@import</code> 包含 media queries。</li></ul><p>如果不在上述情况内，文件的拓展名是 <code>.scss</code> 或 <code>.sass</code>，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 <code>.scss</code> 或 <code>.sass</code> 的文件并将其导入。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;foo.scss&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>或</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>都会导入文件 foo.scss，但是</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;foo.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;foo&quot;</span> screen<span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;http://foo.com/bar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;foo.css&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;foo&quot;</span> screen<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;http://foo.com/bar&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre></div><p>Sass 允许同时导入多个文件，例如同时导入 rounded-corners 与 text-shadow 两个文件：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;rounded-corners&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text-shadow&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>导入文件也可以使用 <code>#{ }</code> 插值语句，但不是通过变量动态导入 Sass 文件，只能作用于 CSS 的 <code>url()</code> 导入方式：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$family</span></span><span class="token punctuation">:</span> <span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">&quot;Droid+Sans&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;http://fonts.googleapis.com/css?family=\\#{$family}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;http://fonts.googleapis.com/css?family=Droid+Sans&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre></div><h4 id="_6-1-1-分音-partials" tabindex="-1"><a class="header-anchor" href="#_6-1-1-分音-partials" aria-hidden="true">#</a> 6.1.1 分音 (Partials)</h4><p>如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。</p><p>例如，将文件命名为 <code>_colors.scss</code>，便不会编译 <code>_colours.css</code> 文件。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;colors&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>上面的例子，导入的其实是 <code>_colors.scss</code> 文件</p><p>注意，不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略。</p><h4 id="_6-1-2-嵌套-import" tabindex="-1"><a class="header-anchor" href="#_6-1-2-嵌套-import" aria-hidden="true">#</a> 6.1.2 嵌套 @import</h4><p>大多数情况下，一般在文件的最外层（不在嵌套规则内）使用 <code>@import</code>，其实，也可以将 <code>@import</code> 嵌套进 CSS 样式或者 <code>@media</code> 中，与平时的用法效果相同，只是这样导入的样式只能出现在嵌套的层中。</p><p>假设 example.scss 文件包含以下样式：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.example </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后导入到 <code>#main</code> 样式内</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#main </span><span class="token punctuation">{</span>
  <span class="token keyword">@import</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>将会被编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main .example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>不可以在混合指令 (mixin) 或控制指令 (control directives) 中嵌套 <code>@import</code>。</p><h3 id="_6-2-media" tabindex="-1"><a class="header-anchor" href="#_6-2-media" aria-hidden="true">#</a> 6.2. @media</h3><p>Sass 中 <code>@media</code> 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 <code>@media</code> 嵌套在 CSS 规则内，编译时，<code>@media</code> 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 <code>@media</code> 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>@media<code>的 queries 允许互相嵌套使用，编译时，Sass 自动添加</code>and</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span>
  <span class="token selector">.sidebar </span><span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>@media</code> 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$media</span></span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$feature</span></span><span class="token punctuation">:</span> -webkit-min-device-pixel-ratio<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$value</span></span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token variable">#{$media}</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property"><span class="token variable">$feature</span></span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.sidebar </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-3-extend" tabindex="-1"><a class="header-anchor" href="#_6-3-extend" aria-hidden="true">#</a> 6.3 @extend</h3><p>在设计网页的时候常常遇到这种情况：一个元素使用的样式与另一个元素完全相同，但又添加了额外的样式。通常会在 HTML 中给元素定义两个 class，一个通用样式，一个特殊样式。假设现在要设计一个普通错误样式与一个严重错误样式，一般会这样写：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error seriousError<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Oh no! You&#39;ve been hacked!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>样式如下</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>麻烦的是，这样做必须时刻记住使用 <code>.seriousError</code> 时需要参考 <code>.error</code> 的样式，带来了很多不变：智能比如加重维护负担，导致 bug，或者给 HTML 添加无语意的样式。使用 <code>@extend</code> 可以避免上述情况，告诉 Sass 将一个选择器下的所有样式继承给另一个选择器。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码的意思是将 <code>.error</code> 下的所有样式继承给 <code>.seriousError</code>，<code>border-width: 3px;</code> 是单独给 <code>.seriousError</code> 设定特殊样式，这样，使用 <code>.seriousError</code> 的地方可以不再使用 <code>.error</code>。</p><p>其他使用到 <code>.error</code> 的样式也会同样继承给 <code>.seriousError</code>，例如，另一个样式 <code>.error.intrusion</code> 使用了 <code>hacked.png</code> 做背景，<code>&lt;div class=&quot;seriousError intrusion&quot;&gt;</code> 也同样会使用 <code>hacked.png</code> 背景。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.error.intrusion</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/image/hacked.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-3-1-how-it-works" tabindex="-1"><a class="header-anchor" href="#_6-3-1-how-it-works" aria-hidden="true">#</a> 6.3.1 How it Works</h4><p><code>@extend</code> 的作用是将重复使用的样式 (<code>.error</code>) 延伸 (extend) 给需要包含这个样式的特殊样式（<code>.seriousError</code>），刚刚的例子：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.error.intrusion </span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/image/hacked.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.error,
.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.error.intrusion,
.seriousError.intrusion</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/image/hacked.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当合并选择器时，<code>@extend</code> 会很聪明地避免无谓的重复，<code>.seriousError.seriousError</code> 将编译为 <code>.seriousError</code>，不能匹配任何元素的选择器（比如 <code>#main#footer</code> ）也会删除。</p><h4 id="_6-3-2-延伸复杂的选择器-extending-complex-selectors" tabindex="-1"><a class="header-anchor" href="#_6-3-2-延伸复杂的选择器-extending-complex-selectors" aria-hidden="true">#</a> 6.3.2 延伸复杂的选择器 (Extending Complex Selectors)</h4><p>Class 选择器并不是唯一可以被延伸 (extend) 的，Sass 允许延伸任何定义给单个元素的选择器，比如 <code>.special.cool</code>，<code>a:hover</code> 或者 <code>a.user[href^=&quot;http://&quot;]</code> 等，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.hoverlink </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token property">a</span><span class="token punctuation">:</span>hover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>同 class 元素一样，<code>a:hover</code> 的样式将继承给 <code>.hoverlink</code>。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.hoverlink </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token property">a</span><span class="token punctuation">:</span>hover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover </span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">a:hover,
.hoverlink</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>与上面 <code>.error.intrusion</code> 的例子一样，所有 <code>a:hover</code> 的样式将继承给 <code>.hoverlink</code>，包括其他使用到 <code>a:hover</code> 的样式，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.hoverlink </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token property">a</span><span class="token punctuation">:</span>hover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.comment a.user:hover </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.comment a.user:hover,
.comment .user.hoverlink</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-3-3-多重延伸-multiple-extends" tabindex="-1"><a class="header-anchor" href="#_6-3-3-多重延伸-multiple-extends" aria-hidden="true">#</a> 6.3.3 多重延伸 (Multiple Extends)</h4><p>同一个选择器可以延伸给多个选择器，它所包含的属性将继承给所有被延伸的选择器：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.attention </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token keyword">@extend</span> .attention<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.error,
.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.attention,
.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个 <code>.seriousError</code> 将包含 <code>.error</code> 与 <code>.attention</code> 下的所有样式，这时，后定义的样式享有优先权：<code>.seriousError</code> 的背景颜色是 <code>#ff0</code> 而不是 <code>#fdd</code>，因为 <code>.attention</code> 在 <code>.error</code> 之后定义。</p><p>多重延伸可以使用逗号分隔选择器名，比如 <code>@extend .error, .attention;</code> 与 <code>@extend .error;</code> <code>@extend.attention</code> 有相同的效果。</p><h4 id="_6-3-4-继续延伸-chaining-extends" tabindex="-1"><a class="header-anchor" href="#_6-3-4-继续延伸-chaining-extends" aria-hidden="true">#</a> 6.3.4 继续延伸 (Chaining Extends)</h4><p>当一个选择器延伸给第二个后，可以继续将第二个选择器延伸给第三个，例如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.criticalError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .seriousError<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，每个 <code>.seriousError</code> 选择器将包含 <code>.error</code> 的样式，而 <code>.criticalError</code> 不仅包含 <code>.seriousError</code> 的样式也会同时包含 <code>.error</code> 的所有样式，上面的代码编译为：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.error,
.seriousError,
.criticalError</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError,
.criticalError</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.criticalError</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-5-选择器列-selector-sequences" tabindex="-1"><a class="header-anchor" href="#_6-3-5-选择器列-selector-sequences" aria-hidden="true">#</a> 6.3.5 选择器列 (Selector Sequences)</h4><p>暂时不可以将选择器列 (Selector Sequences)，比如 <code>.foo .bar</code> 或 <code>.foo + .bar</code>，延伸给其他元素，但是，却可以将其他元素延伸给选择器列：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#fake-links .link </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">a,
#fake-links .link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover,
#fake-links .link:hover</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="_6-3-5-1-合并选择器列-merging-selector-sequences" tabindex="-1"><a class="header-anchor" href="#_6-3-5-1-合并选择器列-merging-selector-sequences" aria-hidden="true">#</a> 6.3.5.1 合并选择器列 (Merging Selector Sequences)</h5><p>有时会遇到复杂的情况，比如选择器列中的某个元素需要延伸给另一个选择器列，这种情况下，两个选择器列需要合并，比如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#admin .tabbar a </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#demo .overview .fakelink </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>技术上讲能够生成所有匹配条件的结果，但是这样生成的样式表太复杂了，上面这个简单的例子就可能有 10 种结果。所以，Sass 只会编译输出有用的选择器。</p><p>当两个列 (sequence) 合并时，如果没有包含相同的选择器，将生成两个新选择器：第一列出现在第二列之前，或者第二列出现在第一列之前：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#admin .tabbar a </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#demo .overview .fakelink </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#admin .tabbar a,
#admin .tabbar #demo .overview .fakelink,
#demo .overview #admin .tabbar .fakelink</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果两个列 (sequence) 包含了相同的选择器，相同部分将会合并在一起，其他部分交替输出。在下面的例子里，两个列都包含 <code>#admin</code>，输出结果中它们合并在了一起：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#admin .tabbar a </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#admin .overview .fakelink </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#admin .tabbar a,
#admin .tabbar .overview .fakelink,
#admin .overview .tabbar .fakelink</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-3-6-extend-only-选择器-extend-only-selectors" tabindex="-1"><a class="header-anchor" href="#_6-3-6-extend-only-选择器-extend-only-selectors" aria-hidden="true">#</a> 6.3.6 @extend-Only 选择器 (@extend-Only Selectors)</h4><p>有时，需要定义一套样式并不是给某个元素用，而是只通过 <code>@extend</code> 指令使用，尤其是在制作 Sass 样式库的时候，希望 Sass 能够忽略用不到的样式。</p><p>如果使用普通的 CSS 规则，最后会编译出很多用不到的样式，也容易与其他样式名冲突，所以，Sass 引入了“占位符选择器” (placeholder selectors)，看起来很像普通的 <code>id</code> 或 <code>class</code> 选择器，只是 <code>#</code> 或 <code>.</code> 被替换成了 <code>%</code>。可以像 class 或者 id 选择器那样使用，当它们单独使用时，不会被编译到 CSS 文件中。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// This ruleset won&#39;t be rendered on its own.</span>
<span class="token selector">#context a<span class="token placeholder">%extreme</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>占位符选择器需要通过延伸指令使用，用法与 class 或者 id 选择器一样，被延伸后，占位符选择器本身不会被编译。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.notice </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%extreme</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#context a.notice</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-3-7-optional-声明-the-optional-flag" tabindex="-1"><a class="header-anchor" href="#_6-3-7-optional-声明-the-optional-flag" aria-hidden="true">#</a> 6.3.7 <code>!optional</code> 声明 (The <code>!optional</code> Flag)</h4><p>如果 <code>@extend</code> 失败会收到错误提示，比如，这样写 <code>a.important {@extend .notice}</code>，当没有 <code>.notice</code> 选择器时，将会报错，只有 <code>h1.notice</code> 包含 <code>.notice</code> 时也会报错，因为 <code>h1</code> 与 <code>a</code> 冲突，会生成新的选择器。</p><p>如果要求 <code>@extend</code> 不生成新选择器，可以通过 <code>!optional</code> 声明达到这个目的，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a.important </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .notice <span class="token statement keyword">!optional</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_6-3-8-在指令中延伸-extend-in-directives" tabindex="-1"><a class="header-anchor" href="#_6-3-8-在指令中延伸-extend-in-directives" aria-hidden="true">#</a> 6.3.8 在指令中延伸 (@extend in Directives)</h4><p>在指令中使用 <code>@extend</code> 时（比如在 <code>@media</code> 中）有一些限制：Sass 不可以将 <code>@media</code> 层外的 CSS 规则延伸给指令层内的 CSS，这样会生成大量的无用代码。也就是说，如果在 <code>@media</code> （或者其他 CSS 指令）中使用 <code>@extend</code>，必须延伸给相同指令层中的选择器。</p><p>下面的例子是可行的：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector">.error </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.seriousError </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但不可以这样：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector">.seriousError </span><span class="token punctuation">{</span>
    <span class="token comment">// INVALID EXTEND: .error is used outside of the &quot;@media print&quot; directive</span>
    <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>希望有一天，浏览器可以原生支持 <code>@extend</code> 指令，这样就可以在任何指令中使用延伸功能，不再受限制了。</p><h3 id="_6-4-at-root" tabindex="-1"><a class="header-anchor" href="#_6-4-at-root" aria-hidden="true">#</a> 6.4 @at-root</h3><p>The @at-root directive causes one or more rules to be emitted at the root of the document, rather than being nested beneath their parent selectors. It can either be used with a single inline selector:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.parent </span><span class="token punctuation">{</span>
  ...
  <span class="token atrule"><span class="token rule">@at-root</span> .child</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Which would produce:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Or it can be used with a block containing multiple selectors:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.parent </span><span class="token punctuation">{</span>
  ...
  <span class="token atrule"><span class="token rule">@at-root</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.child1 </span><span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
    <span class="token selector">.child2 </span><span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.step-child </span><span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Which would output the following:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child1</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child2</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.parent .step-child</span> <span class="token punctuation">{</span>
  ...<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-1-at-root-without-and-at-root-with" tabindex="-1"><a class="header-anchor" href="#_6-4-1-at-root-without-and-at-root-with" aria-hidden="true">#</a> 6.4.1 @at-root (without: ...) and @at-root (with: ...)</h4><p>By default, @at-root just excludes selectors. However, it’s also possible to use @at-root to move outside of nested directives such as @media as well. For example:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector">.page </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 8in<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@at-root</span> <span class="token punctuation">(</span><span class="token property">without</span><span class="token punctuation">:</span> media<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>produces:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector">.page</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 8in<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.page</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can use @at-root (without: ...) to move outside of any directive. You can also do it with multiple directives separated by a space: @at-root (without: media supports) moves outside of both @media and @supports queries.</p><p>There are two special values you can pass to @at-root. “rule” refers to normal CSS rules; @at-root (without: rule) is the same as @at-root with no query. @at-root (without: all) means that the styles should be moved outside of all directives and CSS rules.</p><p>If you want to specify which directives or rules to include, rather than listing which ones should be excluded, you can use with instead of without. For example, @at-root (with: rule) will move outside of all directives, but will preserve any CSS rules.</p><h3 id="_6-5-debug" tabindex="-1"><a class="header-anchor" href="#_6-5-debug" aria-hidden="true">#</a> 6.5 @debug</h3><p>The @debug directive prints the value of a SassScript expression to the standard error output stream. It’s useful for debugging Sass files that have complicated SassScript going on. For example:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> 10em <span class="token operator">+</span> 12em<span class="token punctuation">;</span>
</code></pre></div><p>编译为</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Line 1 DEBUG: 22em
</code></pre></div><h3 id="_6-6-warn" tabindex="-1"><a class="header-anchor" href="#_6-6-warn" aria-hidden="true">#</a> 6.6 @warn</h3><p>The @warn directive prints the value of a SassScript expression to the standard error output stream. It’s useful for libraries that need to warn users of deprecations or recovering from minor mixin usage mistakes. There are two major distinctions between @warn and @debug:</p><ol><li>You can turn warnings off with the --quiet command-line option or the :quiet Sass option.</li><li>A stylesheet trace will be printed out along with the message so that the user being warned can see where their styles caused the warning.</li></ol><p>Usage Example:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">adjust-location</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token function">unitless</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">@warn</span> <span class="token string">&quot;Assuming #{$x} to be in pixels&quot;</span><span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">$x</span></span><span class="token punctuation">:</span> 1px <span class="token operator">*</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token function">unitless</span><span class="token punctuation">(</span><span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">@warn</span> <span class="token string">&quot;Assuming #{$y} to be in pixels&quot;</span><span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">$y</span></span><span class="token punctuation">:</span> 1px <span class="token operator">*</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-7-warn" tabindex="-1"><a class="header-anchor" href="#_6-7-warn" aria-hidden="true">#</a> 6.7 @warn</h3><p>The @error directive throws the value of a SassScript expression as a fatal error, including a nice stack trace. It’s useful for validating arguments to mixins and functions. For example:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">adjust-location</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token function">unitless</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    @error <span class="token string">&quot;$x may not be unitless, was #{$x}.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token function">unitless</span><span class="token punctuation">(</span><span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    @error <span class="token string">&quot;$y may not be unitless, was #{$y}.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There is currently no way to catch errors.</p><h2 id="_7-控制指令-control-directives" tabindex="-1"><a class="header-anchor" href="#_7-控制指令-control-directives" aria-hidden="true">#</a> 7. 控制指令 (Control Directives)</h2>`,180),gs={href:"http://compass-style.org/",target:"_blank",rel:"noopener noreferrer"},hs=o(`<h3 id="_7-1-if" tabindex="-1"><a class="header-anchor" href="#_7-1-if" aria-hidden="true">#</a> 7.1 if()</h3><p>The built-in if() function allows you to branch on a condition and returns only one of two possible outcomes. It can be used in any script context. The if function only evaluates the argument corresponding to the one that it will return – this allows you to refer to variables that may not be defined or to have calculations that would otherwise cause an error (E.g. divide by zero).</p><p>内置的 if() 函数允许您在条件上分支，并且仅返回两个可能结果之一。 它可以在任何脚本上下文中使用。 if 函数仅求值与将返回的参数相对应的参数——这使您可以引用可能未定义的变量，或具有可能导致错误的计算（例如，除以零）。</p><h3 id="_7-2-if" tabindex="-1"><a class="header-anchor" href="#_7-2-if" aria-hidden="true">#</a> 7.2. @if</h3><p>当 <code>@if</code> 的表达式返回值不是 <code>false</code> 或者 <code>null</code> 时，条件成立，输出 <code>{}</code> 内的代码：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector">1 + 1 == 2 </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token selector">5 &lt; 3 </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token selector">null </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px double<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>@if</code> 声明后面可以跟多个 <code>@else if</code> 声明，或者一个 <code>@else</code> 声明。如果 <code>@if</code> 声明失败，Sass 将逐条执行 <code>@else if</code> 声明，如果全部失败，最后执行 <code>@else</code> 声明，例如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$type</span></span><span class="token punctuation">:</span> monster<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$type</span> == ocean </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == matador </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == monster </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7-3-for" tabindex="-1"><a class="header-anchor" href="#_7-3-for" aria-hidden="true">#</a> 7.3 @for</h3><p><code>@for</code> 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：<code>@for $var from &lt;start&gt; through &lt;end&gt;</code>，或者 <code>@for $var from &lt;start&gt; to &lt;end&gt;</code>，区别在于 <code>through</code> 与 <code>to</code> 的含义：<em>当使用 <code>through</code> 时，条件范围包含 <code>&lt;start&gt;</code> 与 <code>&lt;end&gt;</code> 的值，而使用 <code>to</code> 时条件范围只包含 <code>&lt;start&gt;</code> 的值不包含 <code>&lt;end&gt;</code> 的值</em>。另外，<code>$var</code> 可以是任何变量，比如 <code>$i</code>；<code>&lt;start&gt;</code> 和 <code>&lt;end&gt;</code> 必须是整数值。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7-4-each" tabindex="-1"><a class="header-anchor" href="#_7-4-each" aria-hidden="true">#</a> 7.4 @each</h3><p><code>@each</code> 指令的格式是 <code>$var in &lt;list&gt;</code>, <code>$var</code> 可以是任何变量名，比如 <code>$length</code> 或者 <code>$name</code>，而 <code>&lt;list&gt;</code> 是一连串的值，也就是值列表。</p><p><code>@each</code> 将变量 <code>$var</code> 作用于值列表中的每一个项目，然后输出结果，例如：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$animal</span> in puma, sea-slug, egret, salamander </span><span class="token punctuation">{</span>
  <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/#{$animal}.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.puma-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/puma.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sea-slug-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/sea-slug.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.egret-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/egret.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.salamander-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/salamander.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-4-1-multiple-assignment" tabindex="-1"><a class="header-anchor" href="#_7-4-1-multiple-assignment" aria-hidden="true">#</a> 7.4.1 Multiple Assignment</h4><p>The @each directive can also use multiple variables, as in @each $var1, $var2, ... in . If is a list of lists, each element of the sub-lists is assigned to the respective variable. For example:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token variable">$animal</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$cursor</span> in <span class="token punctuation">(</span>puma<span class="token punctuation">,</span> black<span class="token punctuation">,</span> default<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>
    sea-slug<span class="token punctuation">,</span>
    blue<span class="token punctuation">,</span>
    pointer
  <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>egret<span class="token punctuation">,</span> white<span class="token punctuation">,</span> move<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/images/#{$animal}.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token variable">$cursor</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>is compiled to:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.puma-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/puma.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sea-slug-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/sea-slug.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid blue<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.egret-icon</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/images/egret.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid white<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since maps are treated as lists of pairs, multiple assignment works with them as well. For example:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token variable">$header</span><span class="token punctuation">,</span> <span class="token variable">$size</span> in <span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span> 2em<span class="token punctuation">,</span> <span class="token property">h2</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">,</span> <span class="token property">h3</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector"><span class="token variable">#{$header}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>is compiled to:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7-5-while" tabindex="-1"><a class="header-anchor" href="#_7-5-while" aria-hidden="true">#</a> 7.5 @while</h3><p><code>@while</code> 指令重复输出格式直到表达式返回结果为 <code>false</code>。这样可以实现比 <code>@for</code> 更复杂的循环，只是很少会用到。例如：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$i</span> &gt; 0 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">-</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item-6 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 12em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-4 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-2 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-混合指令-mixin-directives" tabindex="-1"><a class="header-anchor" href="#_8-混合指令-mixin-directives" aria-hidden="true">#</a> 8. 混合指令 (Mixin Directives)</h2><p>混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的 class，比如 <code>.float-left</code>。混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。</p><h3 id="_8-1-定义混合指令-mixin-defining-a-mixin-mixin" tabindex="-1"><a class="header-anchor" href="#_8-1-定义混合指令-mixin-defining-a-mixin-mixin" aria-hidden="true">#</a> 8.1 定义混合指令 <code>@mixin</code> (Defining a Mixin: <code>@mixin</code>)</h3><p>混合指令的用法是在 <code>@mixin</code> 后添加名称与样式，比如名为 <code>large-text</code> 的混合通过下面的代码定义：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">large-text </span><span class="token punctuation">{</span>
  <span class="token selector">font: </span><span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>混合也需要包含选择器和属性，甚至可以用 <code>&amp;</code> 引用父选择器：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">clearfix </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">* html <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-引用混合样式-include-including-a-mixin-include" tabindex="-1"><a class="header-anchor" href="#_8-2-引用混合样式-include-including-a-mixin-include" aria-hidden="true">#</a> 8.2 引用混合样式 <code>@include</code> (Including a Mixin: <code>@include</code>)</h3><p>使用 <code>@include</code> 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.page-title </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> large-text<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.page-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>也可以在最外层引用混合样式，不会直接定义属性，也不可以使用父选择器。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">silly-links </span><span class="token punctuation">{</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">@include</span> silly-links<span class="token punctuation">;</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>混合样式中也可以包含其他混合样式，比如</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">compound </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> highlighted-background<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> header-text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@mixin</span> <span class="token selector">highlighted-background </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fc0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@mixin</span> <span class="token selector">header-text </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合样式中应该只定义后代选择器，这样可以安全的导入到文件的任何位置。</p><h3 id="_8-3-参数-arguments" tabindex="-1"><a class="header-anchor" href="#_8-3-参数-arguments" aria-hidden="true">#</a> 8.3 参数 (Arguments)</h3><p>参数用于给混合指令中的样式设定变量，并且赋值使用。在定义混合指令的时候，按照变量的格式，通过逗号分隔，将参数写进圆括号里。引用指令时，按照参数的顺序，再将所赋的值对应写进括号：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector">border: </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
    <span class="token property">style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 1in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1in<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>混合指令也可以使用给变量赋值的方法给参数设定默认值，然后，当这个指令被引用的时候，如果没有给参数赋值，则自动使用默认值：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 1in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector">border: </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
    <span class="token property">style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 2in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1in<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 2in<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-1-关键词参数-keyword-arguments" tabindex="-1"><a class="header-anchor" href="#_8-3-1-关键词参数-keyword-arguments" aria-hidden="true">#</a> 8.3.1 关键词参数 (Keyword Arguments)</h4><p>混合指令也可以使用关键词参数，上面的例子也可以写成：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 2in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>虽然不够简明，但是阅读起来会更方便。关键词参数给函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用。</p><h4 id="_8-3-2-参数变量-variable-arguments" tabindex="-1"><a class="header-anchor" href="#_8-3-2-参数变量-variable-arguments" aria-hidden="true">#</a> 8.3.2 参数变量 (Variable Arguments)</h4><p>有时，不能确定混合指令需要使用多少个参数，比如一个关于 <code>box-shadow</code> 的混合指令不能确定有多少个 &#39;shadow&#39; 会被用到。这时，可以使用参数变量 <code>…</code> 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadows</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.shadows </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.shadowed</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>参数变量也可以用在引用混合指令的时候 (<code>@include</code>)，与平时用法一样，将一串值列表中的值逐条作为参数引用：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token variable">$text</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token variable">$border</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$background</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token property"><span class="token variable">$values</span></span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">,</span> #00ff00<span class="token punctuation">,</span> #0000ff<span class="token punctuation">;</span>
<span class="token selector">.primary </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token variable">$values</span>...<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.primary</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #0000ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>You can use variable arguments to wrap a mixin and add additional styles without changing the argument signature of the mixin. If you do so, even keyword arguments will get passed through to the wrapped mixin. For example:</p></blockquote><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">wrapped-stylish-mixin</span><span class="token punctuation">(</span><span class="token variable">$args</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">stylish-mixin</span><span class="token punctuation">(</span><span class="token variable">$args</span>...<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.stylish </span><span class="token punctuation">{</span>
  <span class="token comment">// The $width argument will get passed on to &quot;stylish-mixin&quot; as a keyword</span>
  <span class="token keyword">@include</span> <span class="token function">wrapped-stylish-mixin</span><span class="token punctuation">(</span>#00ff00<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面注释内的意思是：<code>$width</code> 参数将会传递给 <code>stylish-mixin</code> 作为关键词。</p><h3 id="_8-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin" tabindex="-1"><a class="header-anchor" href="#_8-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin" aria-hidden="true">#</a> 8.4 向混合样式中导入内容 (Passing Content Blocks to a Mixin)</h3><p>在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 <code>@content</code> 标志的地方：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">apply-to-ie6-only </span><span class="token punctuation">{</span>
  <span class="token selector">* html </span><span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">@include</span> <span class="token selector">apply-to-ie6-only </span><span class="token punctuation">{</span>
  <span class="token selector">#logo </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">* html #logo</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>为便于书写，<code>@mixin</code> 可以用 <code>=</code> 表示，而 <code>@include</code> 可以用 <code>+</code> 表示</strong>，所以上面的例子可以写成：</p><div class="language-sass" data-ext="sass"><pre class="language-sass"><code><span class="token atrule-line"><span class="token atrule">=</span>apply-to-ie6-only</span>
  <span class="token selector">* html</span>
<span class="token atrule-line">    <span class="token atrule">@content</span></span>

<span class="token atrule-line"><span class="token atrule">+</span>apply-to-ie6-only</span>
  <span class="token selector">#logo</span>
<span class="token property-line">    <span class="token property">background-image</span><span class="token punctuation">:</span> url(<span class="token operator">/</span>logo.gif)</span>
</code></pre></div><p><strong>注意：</strong> 当 <code>@content</code> 在指令中出现过多次或者出现在循环中时，额外的代码将被导入到每一个地方。</p><h4 id="_8-4-1-variable-scope-and-content-block8" tabindex="-1"><a class="header-anchor" href="#_8-4-1-variable-scope-and-content-block8" aria-hidden="true">#</a> 8.4.1 Variable Scope and Content Block8</h4><blockquote><p>The block of content passed to a mixin are evaluated in the scope where the block is defined, not in the scope of the mixin. This means that variables local to the mixin cannot be used within the passed style block and variables will resolve to the global value:</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token keyword">@mixin</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.colors </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token selector">colors </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.colors</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>Additionally, this makes it clear that the variables and mixins that are used within the passed block are related to the other styles around where the block is defined. For example:</p></blockquote><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#sidebar </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$sidebar-width</span></span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$sidebar-width</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token selector">smartphone </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$sidebar-width</span> <span class="token operator">/</span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-函数指令-function-directives" tabindex="-1"><a class="header-anchor" href="#_9-函数指令-function-directives" aria-hidden="true">#</a> 9. 函数指令 (Function Directives)</h2><p>Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$grid-width</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$gutter-width</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

<span class="token keyword">@function</span> <span class="token function">grid-width</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token variable">$n</span> <span class="token operator">*</span> <span class="token variable">$grid-width</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$gutter-width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#sidebar </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">grid-width</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>与 mixin 相同，也可以传递若干个全局变量给函数作为参数。一个函数可以含有多条语句，需要调用 <code>@return</code> 输出结果。</p><p>自定义的函数也可以使用关键词参数，上面的例子还可以这样写：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#sidebar </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">grid-width</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>建议在自定义函数前添加前缀避免命名冲突，其他人阅读代码时也会知道这不是 Sass 或者 CSS 的自带功能。</p><p>自定义函数与 mixin 相同，都支持 variable arguments</p><h2 id="_10-输出格式-output-style" tabindex="-1"><a class="header-anchor" href="#_10-输出格式-output-style" aria-hidden="true">#</a> 10. 输出格式 (Output Style)</h2><p>Sass 默认的 CSS 输出格式很美观也能清晰反映文档结构，为满足其他需求 Sass 也提供了多种输出格式。</p><p>Sass 提供了四种输出格式，可以通过 <code>:style option</code> 选项设定，或者在命令行中使用 <code>--style</code> 选项。</p><h3 id="_10-1-nested" tabindex="-1"><a class="header-anchor" href="#_10-1-nested" aria-hidden="true">#</a> 10.1 <code>:nested</code></h3><p>Nested （嵌套）样式是 Sass 默认的输出格式，能够清晰反映 CSS 与 HTML 的结构关系。选择器与属性等单独占用一行，缩进量与 Sass 文件中一致，每行的缩进量反映了其在嵌套规则内的层数。当阅读大型 CSS 文件时，这种样式可以很容易地分析文件的主要结构。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.huge</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-expanded" tabindex="-1"><a class="header-anchor" href="#_10-2-expanded" aria-hidden="true">#</a> 10.2 <code>:expanded</code></h3><p>Expanded 输出更像是手写的样式，选择器、属性等各占用一行，属性根据选择器缩进，而选择器不做任何缩进。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.huge</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-compact" tabindex="-1"><a class="header-anchor" href="#_10-3-compact" aria-hidden="true">#</a> 10.3 <code>:compact</code></h3><p>Compact 输出方式比起上面两种占用的空间更少，每条 CSS 规则只占一行，包含其下的所有属性。嵌套过的选择器在输出时没有空行，不嵌套的选择器会输出空白行作为分隔符。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.huge</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-compressed" tabindex="-1"><a class="header-anchor" href="#_10-4-compressed" aria-hidden="true">#</a> 10.4 <code>:compressed</code></h3><p>Compressed 输出方式删除所有无意义的空格、空白行、以及注释，力求将文件体积压缩到最小，同时也会做出其他调整，比如会自动替换占用空间最小的颜色表达方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main p</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.huge</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,119);function bs(ys,xs){const e=c("router-link"),p=c("ExternalLinkIcon");return i(),u("div",null,[d,k,s("nav",v,[s("ul",null,[s("li",null,[a(e,{to:"#_1-认识-sass"},{default:t(()=>[n("1. 认识 Sass")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_1-1-特色功能-features"},{default:t(()=>[n("1.1 特色功能 (Features)")]),_:1})]),s("li",null,[a(e,{to:"#_1-2-语法格式-syntax"},{default:t(()=>[n("1.2 语法格式 (Syntax)")]),_:1})])])]),s("li",null,[a(e,{to:"#_2-使用-sass"},{default:t(()=>[n("2. 使用 Sass")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_2-1-rack-rails-merb-plugin"},{default:t(()=>[n("2.1 Rack/Rails/Merb Plugin")]),_:1})]),s("li",null,[a(e,{to:"#_2-2-缓存-caching"},{default:t(()=>[n("2.2 缓存 (Caching)")]),_:1})]),s("li",null,[a(e,{to:"#_2-3-配置选项-options"},{default:t(()=>[n("2.3 配置选项 (Options)")]),_:1})]),s("li",null,[a(e,{to:"#_2-4-判断语法格式-syntax-selection"},{default:t(()=>[n("2.4 判断语法格式 (Syntax Selection)")]),_:1})]),s("li",null,[a(e,{to:"#_2-5-编码格式-encodings"},{default:t(()=>[n("2.5 编码格式 (Encodings)")]),_:1})])])]),s("li",null,[a(e,{to:"#_3-sass-注释"},{default:t(()=>[n("3. Sass 注释")]),_:1})]),s("li",null,[a(e,{to:"#_4-sass-对-css-功能的拓展"},{default:t(()=>[n("4. Sass 对 css 功能的拓展")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_4-1-嵌套规则-nested-rules"},{default:t(()=>[n("4.1 嵌套规则 (Nested Rules)")]),_:1})]),s("li",null,[a(e,{to:"#_4-2-父选择器-referencing-parent-selectors"},{default:t(()=>[n("4.2 父选择器 & (Referencing Parent Selectors: &)")]),_:1})]),s("li",null,[a(e,{to:"#_4-3-属性嵌套-nested-properties"},{default:t(()=>[n("4.3 属性嵌套 (Nested Properties)")]),_:1})]),s("li",null,[a(e,{to:"#_4-4-占位符选择器-foo-placeholder-selectors-foo"},{default:t(()=>[n("4.4 占位符选择器 %foo (Placeholder Selectors: %foo)")]),_:1})])])]),s("li",null,[a(e,{to:"#_5-sassscript"},{default:t(()=>[n("5. SassScript")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_5-1-interactive-shell"},{default:t(()=>[n("5.1 Interactive Shell")]),_:1})]),s("li",null,[a(e,{to:"#_5-2-变量-variables"},{default:t(()=>[n("5.2 变量 $ (Variables: $)")]),_:1})]),s("li",null,[a(e,{to:"#_5-3-数据类型-data-types"},{default:t(()=>[n("5.3 数据类型 (Data Types)")]),_:1})]),s("li",null,[a(e,{to:"#_5-4-运算-operations"},{default:t(()=>[n("5.4 运算 (Operations)")]),_:1})]),s("li",null,[a(e,{to:"#_5-5-括号-parentheses"},{default:t(()=>[n("5.5 括号 (Parentheses)")]),_:1})]),s("li",null,[a(e,{to:"#_5-6-函数-functions"},{default:t(()=>[n("5.6 函数 (Functions)")]),_:1})]),s("li",null,[a(e,{to:"#_5-7-插值语句-interpolation"},{default:t(()=>[n("5.7 插值语句 #{} (Interpolation: #{})")]),_:1})]),s("li",null,[a(e,{to:"#_5-8-in-sassscript"},{default:t(()=>[n("5.8 & in SassScript")]),_:1})]),s("li",null,[a(e,{to:"#_5-9-变量定义-default-variable-defaults-default"},{default:t(()=>[n("5.9 变量定义 !default (Variable Defaults: !default)")]),_:1})])])]),s("li",null,[a(e,{to:"#_6-rules-与指令-rules-and-directives"},{default:t(()=>[n("6. @-Rules 与指令 (@-Rules and Directives)")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_6-1-import"},{default:t(()=>[n("6.1 @import")]),_:1})]),s("li",null,[a(e,{to:"#_6-2-media"},{default:t(()=>[n("6.2. @media")]),_:1})]),s("li",null,[a(e,{to:"#_6-3-extend"},{default:t(()=>[n("6.3 @extend")]),_:1})]),s("li",null,[a(e,{to:"#_6-4-at-root"},{default:t(()=>[n("6.4 @at-root")]),_:1})]),s("li",null,[a(e,{to:"#_6-5-debug"},{default:t(()=>[n("6.5 @debug")]),_:1})]),s("li",null,[a(e,{to:"#_6-6-warn"},{default:t(()=>[n("6.6 @warn")]),_:1})]),s("li",null,[a(e,{to:"#_6-7-warn"},{default:t(()=>[n("6.7 @warn")]),_:1})])])]),s("li",null,[a(e,{to:"#_7-控制指令-control-directives"},{default:t(()=>[n("7. 控制指令 (Control Directives)")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_7-1-if"},{default:t(()=>[n("7.1 if()")]),_:1})]),s("li",null,[a(e,{to:"#_7-2-if"},{default:t(()=>[n("7.2. @if")]),_:1})]),s("li",null,[a(e,{to:"#_7-3-for"},{default:t(()=>[n("7.3 @for")]),_:1})]),s("li",null,[a(e,{to:"#_7-4-each"},{default:t(()=>[n("7.4 @each")]),_:1})]),s("li",null,[a(e,{to:"#_7-5-while"},{default:t(()=>[n("7.5 @while")]),_:1})])])]),s("li",null,[a(e,{to:"#_8-混合指令-mixin-directives"},{default:t(()=>[n("8. 混合指令 (Mixin Directives)")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_8-1-定义混合指令-mixin-defining-a-mixin-mixin"},{default:t(()=>[n("8.1 定义混合指令 @mixin (Defining a Mixin: @mixin)")]),_:1})]),s("li",null,[a(e,{to:"#_8-2-引用混合样式-include-including-a-mixin-include"},{default:t(()=>[n("8.2 引用混合样式 @include (Including a Mixin: @include)")]),_:1})]),s("li",null,[a(e,{to:"#_8-3-参数-arguments"},{default:t(()=>[n("8.3 参数 (Arguments)")]),_:1})]),s("li",null,[a(e,{to:"#_8-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin"},{default:t(()=>[n("8.4 向混合样式中导入内容 (Passing Content Blocks to a Mixin)")]),_:1})])])]),s("li",null,[a(e,{to:"#_9-函数指令-function-directives"},{default:t(()=>[n("9. 函数指令 (Function Directives)")]),_:1})]),s("li",null,[a(e,{to:"#_10-输出格式-output-style"},{default:t(()=>[n("10. 输出格式 (Output Style)")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_10-1-nested"},{default:t(()=>[n("10.1 :nested")]),_:1})]),s("li",null,[a(e,{to:"#_10-2-expanded"},{default:t(()=>[n("10.2 :expanded")]),_:1})]),s("li",null,[a(e,{to:"#_10-3-compact"},{default:t(()=>[n("10.3 :compact")]),_:1})]),s("li",null,[a(e,{to:"#_10-4-compressed"},{default:t(()=>[n("10.4 :compressed")]),_:1})])])])])]),m,s("p",null,[n('另一种也是最早的 Sass 语法格式，被称为缩进格式 (Indented Sass) 通常简称 "Sass"，是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 '),s("a",g,[n("the indented syntax reference"),a(p)]),n("。这种格式以 "),h,n(" 作为拓展名。")]),s("p",null,[n("任何一种格式可以直接 "),s("a",b,[n("导入 (@import)"),a(p)]),n(" 到另一种格式中使用，或者通过 "),y,n(" 命令行工具转换成另一种格式：")]),x,f,s("p",null,[n("Sass 可以通过以下三种方式使用：作为命令行工具；作为独立的 Ruby 模块 (Ruby module)；或者作为 Rack-enabled 框架的插件（例如 Ruby on Rails 与 Merb）。无论哪种方式都需要先安装 Sass gem （Windows 系统需要先"),s("a",_,[n("安装 Ruby"),a(p)]),n("）：")]),w,s("p",null,[n("在 Ruby 中使用 Sass 也非常容易，Sass gem 安装完毕后运行 "),S,n(" 然后按照下面的方法使用 "),s("a",q,[n("Sass::Engine"),a(p)]),n("：")]),$,s("p",null,[n("样式文件与 views 不同，不包含任何动态内容，因此 CSS 只需要在 Sass 文件被修改后再编译生成。默认情况下 "),C,n(" 与 "),E,n(" 文件放置在 "),F,n(" 中（可通过 "),s("a",T,[n(":template_location"),a(p)]),n(" 修改路径），编译生成的 CSS 文件放置在 "),z,n(" 中。例如 "),R,n(" 编译生成 "),I,n("。")]),M,s("p",null,[n("Sass 自动缓存编译后的模板与 "),s("a",D,[n("partials"),a(p)]),n("，这样做能够显著提升重新编译的速度，尤其在处理由 "),A,n(" 导入多个子文件的大型项目时。")]),s("p",null,[n("单独使用 Sass，缓存内容保存在 "),N,n(" 文件夹中。在 Rails 和 Merb 项目中缓存文件保存在 "),L,n(" 文件夹中（可通过 "),s("a",O,[B,a(p)]),n(" 修改路径）。禁用缓存可将 "),P,n(" 设为 "),U,n("。")]),H,s("p",null,[s("a",V,[n("暂未翻译"),a(p)])]),W,s("p",null,[n("在 Ruby 1.9 及以上环境中运行 Sass 时，Sass 对文件的编码格式比较敏感，首先会根据 "),s("a",j,[n("CSS spec"),a(p)]),n(" 判断样式文件的编码格式，如果失败则检测 Ruby string encoding。也就是说，Sass 首先检查 Unicode byte order mark，然后是 "),Y,n(" 声明，最后是 Ruby string encoding，假如都没有检测到，默认使用 UTF-8 编码。")]),X,s("p",null,[n("Sass 额外提供了一种特殊类型的选择器：占位符选择器 (placeholder selector)。与常用的 id 与 class 选择器写法相似，只是 "),G,n(" 或 "),J,n(" 替换成了 "),K,n("。必须通过 "),s("a",Q,[n("@extend"),a(p)]),n(" 指令调用，更多介绍请查阅 "),s("a",Z,[n("@extend-Only Selectors"),a(p)]),n("。")]),ss,s("p",null,[n("数组本身没有太多功能，但 "),s("a",ns,[n("Sass list functions"),a(p)]),n(" 赋予了数组更多新功能："),as,n(" 函数可以直接访问数组中的某一项；"),es,n(" 函数可以将多个数组连接在一起；"),ts,n(" 函数可以在数组中添加新值；而 "),ps,n(" 指令能够遍历数组中的每一项。")]),os,s("p",null,[n("使用 "),s("a",cs,[n("color functions"),a(p)]),n(" 比计算颜色值更方便一些。")]),ls,s("p",null,[n("颜色值的 alpha channel 可以通过 "),s("a",is,[n("opacify"),a(p)]),n(" 或 "),s("a",us,[n("transparentize"),a(p)]),n(" 两个函数进行调整。")]),rs,s("p",null,[n("数组不支持任何运算方式，只能使用 "),s("a",ds,[n("list functions"),a(p)]),n(" 控制。")]),ks,s("p",null,[n("通过 "),s("a",vs,[n("Sass::Script::Functions"),a(p)]),n(" 查看完整的 Sass 函数列表，参数名，以及如何自定义函数。")]),ms,s("p",null,[n("SassScript 提供了一些基础的控制指令，比如在满足一定条件时引用样式，或者设定范围重复输出格式。控制指令是一种高级功能，日常编写过程中并不常用到，主要与混合指令 (mixin) 配合使用，尤其是用在 "),s("a",gs,[n("Compass"),a(p)]),n(" 等样式库中。")]),hs])}const ws=l(r,[["render",bs],["__file","sass.html.vue"]]);export{ws as default};
