import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as r,a as n,d as a,w as e,b as s,e as t}from"./app-b9757f99.js";const u={},k=n("h1",{id:"webpack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),s(" Webpack")],-1),d={class:"table-of-contents"},v=t(`<h2 id="_1-webpack简介" tabindex="-1"><a class="header-anchor" href="#_1-webpack简介" aria-hidden="true">#</a> 1. <strong>webpack</strong>简介</h2><h3 id="_1-1-webpack" tabindex="-1"><a class="header-anchor" href="#_1-1-webpack" aria-hidden="true">#</a> 1.1 Webpack</h3><p>webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。</p><p>在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。</p><p>它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。</p><h3 id="_1-2-webpack-五个核心概念" tabindex="-1"><a class="header-anchor" href="#_1-2-webpack-五个核心概念" aria-hidden="true">#</a> 1.2 webpack 五个核心概念</h3><p><strong>1.2.1 Entry</strong></p><p>入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。</p><p><strong>1.2.2 Output</strong></p><p>输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。</p><p><strong>1.2.3 Loader</strong></p><p>Loader 让 webpack 能够去处理那些非 JavaScript 文件 (webpack 自身只理解 JavaScript)</p><p><strong>1.2.4 Plugins</strong></p><p>插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。</p><p><strong>1.2.5 Mode</strong></p><p>模式(Mode)指示 webpack 使用相应模式的配置。</p><table><thead><tr><th>选项</th><th>描述</th><th>特点</th></tr></thead><tbody><tr><td>development</td><td>会将 DefinePlugin 中 p<wbr>rocess.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。</td><td>能让代码本地调试运行的环境</td></tr><tr><td>production</td><td>会将 DefinePlugin 中 p<wbr>rocess.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。</td><td>能让代码优化上线运行的环境</td></tr></tbody></table><h2 id="_2-使用-webpack" tabindex="-1"><a class="header-anchor" href="#_2-使用-webpack" aria-hidden="true">#</a> 2. 使用 Webpack</h2><h3 id="_2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-安装" aria-hidden="true">#</a> 2.1 安装</h3><p><strong>webpack 可以在项目中进行本地的安装，也可以进行全局的安装，一般我们都是使用本地安装的 webpack</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先初始化项目</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
<span class="token comment"># 本地安装，webpack4.x中需要同时安装webpack和webpack-cli</span>
<span class="token function">npm</span> i webpack webpack-cli <span class="token parameter variable">-D</span>

<span class="token comment"># 项目根目录自行创建webpack.config.js文件</span>
</code></pre></div><p>**注：**webpack 可以进行零配置，也就是说安装好之后就可以直接进行打包命令，使用<code>npx webpack</code>就可以直接让 webpack 进行打包了，默认会找到根目录下的<code>src</code>目录下的<code>index.js</code>进行打包（默认只支持 js 模块），打包后会生成一个<code>dist</code>目录,打包后的 js 文件会整合到一个<code>main.js</code>文件中</p><h3 id="_2-2-编译打包应用" tabindex="-1"><a class="header-anchor" href="#_2-2-编译打包应用" aria-hidden="true">#</a> 2.2 编译打包应用</h3><ol><li><p>创建文件</p></li><li><p>运行指令</p><p><strong>开发环境指令</strong>：webpack src/js/index.js -o build/js/built.js --mode=development</p><p><strong>功能</strong>：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成浏览器能识别的语法。</p><p><strong>生产环境指令</strong>：webpack src/js/index.js -o build/js/built.js --mode=production</p><p><strong>功能</strong>：在开发配置功能上多一个功能，压缩代码。</p></li><li><p>结论</p><p>webpack 能够编译打包 js 和 json 文件。</p><p>能将 es6 的模块化语法转换成浏览器能识别的语法。能压缩代码。</p></li><li><p>问题</p><p>不能编译打包 css、img 等文件。不能将 js 的 es6 基本语法转化为 es5 以下语法。</p></li></ol><h2 id="_3-配置-webpack" tabindex="-1"><a class="header-anchor" href="#_3-配置-webpack" aria-hidden="true">#</a> 3. 配置 Webpack</h2><p>webpack 默认的零配置功能很弱，所以大多数时候都是需要我们手动进行配置</p><h3 id="_3-1-运行打包命令" tabindex="-1"><a class="header-anchor" href="#_3-1-运行打包命令" aria-hidden="true">#</a> 3.1 运行打包命令</h3><p><strong>在 webpack 中默认的配置文件是<code>webpack.config.js</code>或者是<code>webpackfile.js</code>，一般情况下会选择前者</strong>。</p><p>当然，<strong>我们也可以手动控制 webpack 执行自定义命名的配置文件</strong></p><p>使用<code>npx webpack --config</code>自定义的配置文件名就能手动控制 webpack 找到对应的配置文件</p><p><strong>一般情况下，我们打包都是通过<code>npm run bulid</code>这样的方法进行配置的，这种就需要在<code>package.json</code>中自己配置自定义脚本了，在下面的<code>scripts</code>中配置脚本</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.39.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.6&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注：</strong></p><ul><li><p><strong>在自定义的脚本中运行 webpack 的指令前面后面写参数就不需要加上<code>npx</code>了</strong></p></li><li><p>也可以直接只在 build 后面写一个 webpack，在打包的时候传入参数就行了（不过一般我们不会这么做），不过不能普通地进行拼接，还需要在<code>npm run build</code>后面加上两个<code>--</code>才能正常传参，<strong>如<code>npm run build --config webpack.config.js</code></strong>，不然 npm 并不会认为后面传的东西是一个参数</p></li></ul><h3 id="_3-2-基础配置" tabindex="-1"><a class="header-anchor" href="#_3-2-基础配置" aria-hidden="true">#</a> 3.2 基础配置</h3><h4 id="_3-2-1-一般配置" tabindex="-1"><a class="header-anchor" href="#_3-2-1-一般配置" aria-hidden="true">#</a> 3.2.1 一般配置</h4><p><strong>webpack 是 node 写出来的，所以我们需要使用 node 的语法来进行配置</strong>，下面是 webpack 的基本配置，仅能够对 js 文件进行打包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token comment">// node内置核心模块，用来处理路径问题。</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始配置</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * mode是打包后的模式，默认有两种，production和development
   * production模式会压缩代码，是生产环境后打包的
   * 而development不会压缩代码，便于开发者观察打包后的结果
   */</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 这个模式只对压缩的js文件有效</span>

  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包程序的入口</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后的文件名</span>
    <span class="token doc-comment comment">/**
     * filename: &#39;main.[hash].js&#39;，生成hash文件名，写成这种方式可以防止覆盖和缓存，每次生成的文件都不一样
     * filename: &#39;main.[hash:8].js&#39;// 生成8位的hash文件名
     */</span>

    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 打包后的路径，注意，该路径必须是绝对路径
     * path.resolve方法会将生成的文件路径拼接成一个绝对路径，该路径默认是以整个系统盘为路径的
     * 可以在前面加一个__dirname参数改变成以当前根目录为绝对路径
     */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),m={href:"https://www.cnblogs.com/giggle/p/9583940.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<h4 id="_3-2-1-简单打包后的文件" tabindex="-1"><a class="header-anchor" href="#_3-2-1-简单打包后的文件" aria-hidden="true">#</a> 3.2.1 简单打包后的文件</h4><p><strong>这个如果不想了解原理可略过</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpackBootstrap</span>
  <span class="token comment">// The module cache 先定义一个缓存</span>
  <span class="token keyword">var</span> installedModules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// The require function 配置实现了require函数</span>
  <span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 参数&quot;./src/index.js&quot;</span>

    <span class="token comment">// Check if module is in cache 模块是否在缓存中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Create a new module (and put it into the cache)</span>
    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">i</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span>
      <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Execute the module function 执行传入this指向，模块，模块的空对象exports: {}，require方法</span>
    modules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
      module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span>
      module<span class="token punctuation">,</span>
      module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span>
      __webpack_require__
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Flag the module as loaded</span>
    module<span class="token punctuation">.</span>l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// Return the exports of the module</span>
    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// expose the modules object (__webpack_modules__)</span>
  __webpack_require__<span class="token punctuation">.</span>m <span class="token operator">=</span> modules<span class="token punctuation">;</span>

  <span class="token comment">// expose the module cache</span>
  __webpack_require__<span class="token punctuation">.</span>c <span class="token operator">=</span> installedModules<span class="token punctuation">;</span>

  <span class="token comment">// define getter function for harmony exports</span>
  __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">d</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> name<span class="token punctuation">,</span> getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__webpack_require__<span class="token punctuation">.</span><span class="token function">o</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">get</span><span class="token operator">:</span> getter <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// define __esModule on exports</span>
  __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">r</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Symbol <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span> <span class="token operator">&amp;&amp;</span> Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Module&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token string">&quot;__esModule&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// create a fake namespace object</span>
  <span class="token comment">// mode &amp; 1: value is a module id, require it</span>
  <span class="token comment">// mode &amp; 2: merge all properties of value into the ns</span>
  <span class="token comment">// mode &amp; 4: return value when already ns object</span>
  <span class="token comment">// mode &amp; 8|1: behave like require</span>
  __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">t</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> mode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> value <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__esModule<span class="token punctuation">)</span>
      <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token keyword">var</span> ns <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    __webpack_require__<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>ns<span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">!=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> value<span class="token punctuation">)</span>
        __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>
          ns<span class="token punctuation">,</span>
          key<span class="token punctuation">,</span>
          <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// getDefaultExport function for compatibility with non-harmony modules</span>
  __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">n</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> getter <span class="token operator">=</span>
      module <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>__esModule
        <span class="token operator">?</span> <span class="token keyword">function</span> <span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> module<span class="token punctuation">[</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">getModuleExports</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> module<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
    __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>getter<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> getter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> getter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Object.prototype.hasOwnProperty.call</span>
  __webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">o</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// __webpack_public_path__</span>
  __webpack_require__<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// Load entry module and return exports</span>
  <span class="token keyword">return</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token punctuation">(</span>__webpack_require__<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传入入口模块</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>
  <span class="token comment">//  自执行函数传入一个对象即modules</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// key</span>
    <span class="token string-property property">&quot;./src/a.js&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// value</span>
      <span class="token function">eval</span><span class="token punctuation">(</span>
        <span class="token string">&quot;module.exports = &#39;a_moudle&#39;\\n\\n//# sourceURL=webpack:///./src/a.js?&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;./src/index.js&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">eval</span><span class="token punctuation">(</span>
        <span class="token string">&#39;let str = __webpack_require__(/*! ./a.js */ &quot;./src/a.js&quot;)\\r\\n\\r\\nconsole.log(str)\\n\\n//# sourceURL=webpack:///./src/index.js?&#39;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-实时打包" tabindex="-1"><a class="header-anchor" href="#_3-2-2-实时打包" aria-hidden="true">#</a> 3.2.2 实时打包</h4><p>如果想要 webpack 监听工作区中文件的改变而实时的打包出新的代码，可以使用 webpack 自带的 watch 选项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听的配置项</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token comment">// 每秒询问100次</span>
        <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">//防抖</span>
        <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span> <span class="token comment">//忽略文件</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-本地服务" tabindex="-1"><a class="header-anchor" href="#_3-3-本地服务" aria-hidden="true">#</a> 3.3 本地服务</h3><p>在之前的打包过程中我们只能通过打包好文件然后双击文件来在浏览器中运行打包后的代码，而我们再开发的时候更希望能通过本地服务器的方式进行访问，这时候我们需要借助第三方插件来生成这个服务，<strong>在 webpack 中内置了一个开发服务<code>webpack-dev-server</code></strong></p><p>**注意：**该服务进行的不是实际的打包，所以不会在 dist 目录中生成文件，而是进行的内存打包，生成的文件之间运行在服务器上，我们是看不到这些文件的，<strong>在实际开发中我们都是用的这种内存的打包</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i webpack-dev-server <span class="token parameter variable">-D</span>
</code></pre></div><p><strong>安装完成后运行<code>npx webpack-dev-server</code>就能开启该服务（一般也是在 package.json 文件中配置自己的脚本，如<code>npm run dev</code>），默认的端口为<code>localhost:8080</code></strong>，当然也可以在<code>webpack.config.js</code>配置文件中进行配置，<strong>服务配置写在<code>devServer</code>中</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack.config.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.39.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.7&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.8.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 开发服务器的配置</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// 改变开启的端口号</span>
    <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启内存打包中的进度条，这样我们能清楚地看到打包的进程</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&quot;./build&quot;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 内存打包指向的目录
     * 开启服务器指向的入口打包文件的地址
     * 默认是index.html文件，到目前需要自己创建该html文件和引入对应打包后的js文件，之后会有自动创建
     */</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//压缩</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**上面的<code>contentBase</code>对应的路径中一定要有这个 html 文件，不然就会找不到，<strong>但是我们在实际开发中其实是没有这个文件的，也不会打包好后再去开启服务，<strong>我们希望的是在启动服务时自动在</strong>内存</strong>中创建这个文件，这样我们就能在服务端上直接访问了，这个时候我们就需要一个 html 插件解决这个问题</p><h3 id="_3-4-支持模板-html" tabindex="-1"><a class="header-anchor" href="#_3-4-支持模板-html" aria-hidden="true">#</a> 3.4 支持模板 html</h3><p>使用第三方的 webpackl 插件<code>html-webpack-plugin</code>可以帮我们自动建立一个模板 html 文件打包到内存中，<strong>然后将主要要打包的文件加入到我们设置的模板 html（设置的模板 html 文件中的代码会原封不动的打包输出，所有的配置文件只是针对格式的，内部并不会发生变化，也就是说连注释都会输出过去）里面，并且把结果放在<code>devServer</code>指定的打包指定目录下</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i html-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre></div><p><strong>安装完成后，在<code>plugins</code>内部添加一个对象来实现使用</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> HTMLWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// plugins是一个数组，放着所有的webpack插件，注意是从下到上，如果有关联项需要考虑位置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HTMLWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span> <span class="token comment">// html模板，会去找到这个模板</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后的文件名，默认不写也是index.html</span>
      <span class="token comment">// 对打包的html模板进行压缩</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 删除属性的双引号，除了一些特殊的删除不了以外都能删除</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 折叠空行将所有代码变成一行</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 移除注释</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 给打包后在模板中引入的文件名生成hash戳，防止缓存</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),g={href:"https://github.com/jantimon/html-webpack-plugin#options",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--打包前的模板--&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 模板 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--加了上述参数后打包后的文件--&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>en</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>UTF-8</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>viewport</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>X-UA-Compatible</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- 模板 --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>text/javascript</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>main.js?9a08db68a07b35e1f58a</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_3-5-样式处理" tabindex="-1"><a class="header-anchor" href="#_3-5-样式处理" aria-hidden="true">#</a> 3.5 样式处理</h3><p>在进行引入样式处理时也需要进行额外的配置，需要在<code>module</code>模块中写入对应的 css 规则，给对应匹配上的规则添加 loader，<strong>然后直接在入口的 js 文件中使用引用模块 import 或 require 引用文件即可（不引用是不会打包的）</strong></p><p>**注意：**该 css 的 loader 会将解析后的 css 内容插入到页面 head 标签的最后，如果自己写了对于的 css 样式可能会覆盖掉，如果想要自己在模板 html 中写的样式生效，可以在<code>style-loader</code>的 options 选项中改变样式插入到模板 html 的 head 标签的位置（暂时只能通过这种样式写法，后面会有抽离成文件的插件）</p><p><strong>loader 的用法</strong></p><ul><li><p>如果只有一个 loader，可以写成单个字符串</p></li><li><p>如果有多个 loader，需要写成字符串数组</p></li><li><p>loader 还可以写成对象的形式，<code>loader</code>属性对应要写的 loader，而还有一个 options 属性则是可以传入对应的参数</p></li><li><p><strong>loader 的顺序默认是从右向左，从下到上执行</strong>（执行顺序非常重要，如必须要先执行<code>css-loader</code>才能执行<code>style-loader</code>）</p></li></ul><h4 id="_3-5-1-处理-css" tabindex="-1"><a class="header-anchor" href="#_3-5-1-处理-css" aria-hidden="true">#</a> 3.5.1 处理 css</h4><p><strong>处理普通的 css 文件只需要下载 css-loader 与 style-loader 就可以实现</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i css-loader style-loader <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 模块配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token doc-comment comment">/**
       * css-loader解析css中的语法，如@import这种
       * style-loader用于把css插入到模板html的head标签中
       * 至于为什么要两个，是因为loader的能力尽量要求单一
       */</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 匹配css结尾的文件</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 创建style标签，将js的样式资源插入进行，添加到head中生效</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 改变样式插入的位置为head标签的顶部</span>
              <span class="token literal-property property">insertAt</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 将css变成commonjs模块加入到js中，里面的内容是字符串</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 主要解析@import这种路径</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-处理-css-预处理器" tabindex="-1"><a class="header-anchor" href="#_3-5-2-处理-css-预处理器" aria-hidden="true">#</a> 3.5.2 处理 css 预处理器</h4><p>使用 css 预处理器除了要下载 css-loader 与 style-loader，还需要额外下载对应预处理器需要的 loader，如<code>sass-loader</code>、<code>less-loader</code>与<code>stylus-loader</code>，用法都相同，这里仅以 less 为例</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载less-loader肯定是要使用less的，所以一般是一起下载了</span>
<span class="token function">npm</span> i <span class="token function">less</span> less-loader <span class="token parameter variable">-D</span>
<span class="token comment"># 下载scss-loader肯定是要使用scss的，所以一般是一起下载了</span>
<span class="token function">npm</span> i scss scss-loader <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 模块配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token doc-comment comment">/**
       * css-loader解析css中的语法，如@import这种
       * style-loader用于把css插入到模板html的head标签中
       * 至于为什么要两个，是因为loader的能力尽量要求单一
       */</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 匹配css结尾的文件</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 创建style标签，将js的样式资源插入进行，添加到head中生效</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 改变样式插入的位置为head标签的顶部</span>
              <span class="token literal-property property">insertAt</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 将css变成commonjs模块加入到js中，里面的内容是字符串</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 主要解析@import这种路径</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 可以解析less文件</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 改变样式插入的位置为head标签的顶部</span>
              <span class="token literal-property property">insertAt</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 主要解析@import这种路径</span>
          <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 主要把less转换为css</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 可以解析scss文件</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 改变样式插入的位置为head标签的顶部</span>
              <span class="token literal-property property">insertAt</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 主要解析@import这种路径</span>
          <span class="token string">&quot;scss-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 主要把less转换为css</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),h={href:"https://webpack.js.org/loaders/less-loader/#src/components/Sidebar/Sidbar.jsx",target:"_blank",rel:"noopener noreferrer"},q=t(`<h4 id="_3-5-3-抽离样式" tabindex="-1"><a class="header-anchor" href="#_3-5-3-抽离样式" aria-hidden="true">#</a> 3.5.3 抽离样式</h4><p>默认情况下样式文件是放在 js 中的，如果想要将添加到 html 模板中的 css 样式单独作为一个文件抽离出来，自动通过 link 标签进行引入，还需要引入专门抽离 css 样式的插件<code>mini-css-extract-plugin</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i mini-css-extract-plugin <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入插件</span>
<span class="token keyword">let</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
    注意,如果想要分为多个不同的css文件，那么就require引入多次插件，取不同的名字，然后都在这使用，通常这种方式是要区分各个预处理器转换后的文件
    */</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/main.css&#39;</span> <span class="token comment">//要抽离后在打包后目录中的文件名</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 将style-loader替换为插件的loader，因为style-loader是将js中的css变成style标签插入html中</span>
          <span class="token comment">// MiniCssExtractPlugin.loader, 可以直接这样写，这个loader直接是个字符串</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span> <span class="token comment">//主要解析@import这种路径</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"},f=t(`<h4 id="_3-5-4-压缩-css-与-js" tabindex="-1"><a class="header-anchor" href="#_3-5-4-压缩-css-与-js" aria-hidden="true">#</a> 3.5.4 压缩 css 与 js</h4><ul><li><p>通过改变压缩项</p><p>要压缩抽离出来<code>mini-css-extract-plugin</code>的 css 文件就必须要打乱 webpack 默认的压缩 js 文件的规则(webpackl 默认调用了一个压缩 js 的插件 terser-webpack-plugin 进行压缩)，这时候压缩 js 文件需要直接引用插件来进行优化</p><p>注意：</p><p>要看到压缩效果需要改为生产环境观察，否则如果是开发环境将直接跳过优化项</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># terser-webpack-plugin不需要安装，webpack本身就自带了</span>
<span class="token function">npm</span> i optimize-css-assets-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre></div></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//这三个插件进行组合可以打包压缩css和js</span>
<span class="token keyword">let</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;terser-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 优化代码属性</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 压缩代码的选项,传入压缩js与压缩css的插件</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
    注意,如果想要分为多个不同的css文件，那么就require引入多次插件，取不同的名字，然后都在这使用，通常这种方式是要区分各个预处理器转换后的文件
    */</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.css&quot;</span><span class="token punctuation">,</span> <span class="token comment">//要抽离后的文件名</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>通过插件引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
    注意,如果想要分为多个不同的css文件，那么就require引入多次插件，取不同的名字，然后都在这使用，通常这种方式是要区分各个预处理器转换后的文件
    */</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.css&quot;</span><span class="token punctuation">,</span> <span class="token comment">//要抽离后的文件名</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 压缩css</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_3-5-5-添加浏览器前缀" tabindex="-1"><a class="header-anchor" href="#_3-5-5-添加浏览器前缀" aria-hidden="true">#</a> 3.5.5 添加浏览器前缀</h4><p>一般来说处理 css 相关的文件以及转换，我们都会使用<code>postcss</code>一系列的插件</p><ul><li><p>使用 postcss-loader 与 postcss-preset-env</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i postcss-loader postcss-preset-env <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// postcss默认会找browserslist中的production的配置项，如果想要使用开发环境的配置项，需要设置NODE_ENV</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 帮postcss找到package.json中的browserslist里面的配置来加载执行兼容样式</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&quot;postcss&quot;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">//postcss插件</span>
                <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;development&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;last 1 chrome version&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;last 1 firefox version&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;last 1 safari version&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&gt;0.2%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;not op_mino all&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>要为打包后的 css 文件自动兼容其余浏览器（也就是要在前面添加前缀），<strong>需要引入 postcss-loader 与 css 优化插件 autoprefixer</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#postcss-loader是专门优化css的loader,而autoprefixer只是其中的一个插件</span>
<span class="token function">npm</span> i postcss-loader autoprefixer <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">//postcss-loader自动为浏览器添加前缀，不过需要先处理这个loader再处理css-loader</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//可以解析less文件</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">//改变样式插入的位置为head标签的顶部</span>
              <span class="token literal-property property">insertAt</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">//要处理less文件也是一样</span>
          <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面只是分配了 postcss-loader，下面还需要处理 postcss-loader 对应的插件</strong>，postcss-loader 需要我们有一个<code>postcss.config.js</code>的文件来处理该 loader</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// postcss.config.js\`</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//导出postcss-loader需要的插件，该插件属性是一个数组，装有需要解析的插件</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;autoprefixer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;last 10 versions&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 引入并直接使用autoprefixer，方法的对象参数是对应要支持的浏览器版本，具体看文档</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,12),j={href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"},w=t(`<h3 id="_3-6-高级-js-转换-es5" tabindex="-1"><a class="header-anchor" href="#_3-6-高级-js-转换-es5" aria-hidden="true">#</a> 3.6 高级 js 转换 ES5</h3><p><strong>将高级的 js 转换为 ES5 都需要用到 babel</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要使用babel-loader对高级语法进行转换，@babel/core 则是babel核心模块，调用transform方法进行转换</span>
<span class="token function">npm</span> i babel-loader @babel/core <span class="token parameter variable">-D</span>
</code></pre></div><h4 id="_3-6-1-基本转换" tabindex="-1"><a class="header-anchor" href="#_3-6-1-基本转换" aria-hidden="true">#</a> 3.6.1 基本转换</h4><p>将 ES6 转换为 ES5 还需要配置 babel 的转换模块<code>@babel/preset-env</code>，该模块将一些标准的 js 语法转换为低级的语法</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#所以要ES6转换为ES5需要这三个</span>
<span class="token function">npm</span> i babel-loader @babel/core @babel/preset-env <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//用babel-loader需要把ES6转换为ES5,为loader添加预设选项，该选项就能解决狭义的ES6语法</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启babel缓存，第二次构建时会读取之前的缓存</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 这里的js转换只包括src目录下的</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 排除node_modules目录</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**只是用<code>@babel/preset-env</code>只能转换基本的 ES6 语法，很多高级 api 是不能转换的，比如 Promise</p><h4 id="_3-6-2-全部转换" tabindex="-1"><a class="header-anchor" href="#_3-6-2-全部转换" aria-hidden="true">#</a> 3.6.2 全部转换</h4><p>**babel 默认只会转换内置的高级的语法，但是不能转换该语法内置的 api，就算转换了内置的 api 也不会内置转换的方法，**也就是说一些高级的 js 语法是由低级语法的 api 实现的，但是 babel 只是将该 api 转换了出来，但是低级的 api 本身不在代码中，**这时候还需要用到一个插件包<code>@babel/plugin-transform-runtime</code>，**该插件是一个开发时用的插件，但是，<strong>如果要上线还会为生产后的代码中输出一些脚本，这时，还需要另外一个<code>@babel/runtime</code>在上线的时候为我们添加该插件（注意这个插件是要在生产环境使用的，因为我们是要转换到生产环境使用的，需要<code>--save</code>）</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>npm i @babel/plugin-transform-runtime -D
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>npm i @babel/runtime -S
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">loose</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，上面的方法不能够解决高级的实例方法，如<code>arr.includes()</code>。</p><p>如果想解决这个问题，只需要一个<code>@babel/polyfill</code>模块（可以不使用<code>@babel/plugin-transform-runtime</code>了），还是因为是要在生产环境中使用，并且该模块会在代码中使用，所有我们使用<code>--save</code></p><p><strong>使用<code>@babel/polyfill</code>将 ES6 的语法全部兼容</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 该插件不是在webpack中配置，而是在入口js文件前直接引入即可</span>
<span class="token function">npm</span> i @babel/polyfill <span class="token parameter variable">-S</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token string">&quot;@babel/polyfill&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>**使用问题：**该方法会将所有的高级 js 语法全部转换，会造成项目体积过大的问题，如果只想解决部分兼容性问题并不推荐这样做</p><h4 id="_3-6-3-按需转换" tabindex="-1"><a class="header-anchor" href="#_3-6-3-按需转换" aria-hidden="true">#</a> 3.6.3 按需转换</h4><p>因为使用<code>@babel/polyfill</code>兼容所有 ES6 语法会有项目体积过大的问题，我们可以使用按需加载的方法来处理，使用<code>core-js</code>插件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i core-js <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token comment">// 按需加载</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定core-js版本</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定兼容哪个版本浏览器</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&quot;9&quot;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-4-es7-转换为-es5" tabindex="-1"><a class="header-anchor" href="#_3-6-4-es7-转换为-es5" aria-hidden="true">#</a> 3.6.4 ES7 转换为 ES5</h4><p>如果要兼容一些 ES6 以上的语法，需要按照对应语法解析的插件，如 ES7 的在类中 constructor 外直接写实例属性、使用装饰器修饰类</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>@log
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这种语法需要<code>@babel/plugin-proposal-class-properties</code>这个类的转换插件和<code>@@babel/plugin-proposal-decorators</code>这个装饰器插件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解析ES7类的语法与装饰器语法</span>
<span class="token function">npm</span> i @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//用babek-loader需要把ES6转换为ES5</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 预设是一个大插件的集合，在预设下我们还可以自己配置自己需要的小插件</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token comment">//&#39;@babel/plugin-proposal-class-properties&#39;, 如果只解析类可以直接写字符串这样写</span>
              <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">loose</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token comment">/*
                上面如果要解析修饰类的装饰器必须使用这种顺序，也就是必须先解析class语法，否则会报错
              */</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-语法校验" tabindex="-1"><a class="header-anchor" href="#_3-7-语法校验" aria-hidden="true">#</a> 3.7 语法校验</h3><h4 id="_3-7-1-eslint" tabindex="-1"><a class="header-anchor" href="#_3-7-1-eslint" aria-hidden="true">#</a> 3.7.1 Eslint</h4><p>语法校验在我们编程中其实很常见，使用 ESLint 就能帮我们校验代码，ESLint 与 css 和 js 一样都需要配置想要的 loader</p><div class="language-text" data-ext="text"><pre class="language-text"><code>npm i eslint eslint-loader -D
</code></pre></div><p><strong>eslint 需要一个自己制定的校验代码的规则，需要创建一个<code>.eslintrc.json</code>的配置文件，下面是一个 eslint 项目的配置文件</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;ecmaFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;constructor-super&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;for-direction&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;getter-return&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-async-promise-executor&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-case-declarations&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-class-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-compare-neg-zero&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-cond-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-const-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-constant-condition&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-control-regex&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-delete-var&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-dupe-args&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-dupe-class-members&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-dupe-keys&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-duplicate-case&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-empty&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-empty-character-class&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-empty-pattern&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-ex-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-extra-boolean-cast&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-fallthrough&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-func-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-global-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-inner-declarations&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-invalid-regexp&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-irregular-whitespace&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-misleading-character-class&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-mixed-spaces-and-tabs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-new-symbol&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-obj-calls&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-octal&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-prototype-builtins&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-redeclare&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-regex-spaces&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-self-assign&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-shadow-restricted-names&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-sparse-arrays&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-this-before-super&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-undef&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-unexpected-multiline&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-unreachable&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-unsafe-finally&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-unsafe-negation&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-unused-labels&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-useless-catch&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-useless-escape&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;no-with&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;require-atomic-updates&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;require-yield&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;use-isnan&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;valid-typeof&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;eslint-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">//我们应该先校验js再转换为ES5代码，所以正常来说这个应该写在下面，也就是要先执行</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//自动修复</span>
            <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span> <span class="token comment">//previous，强制让这个loader在最先执行，还可以写post让这个loader强制最后执行</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//不检验node_modules中的代码</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//相同的loader可以写多个，符合从上到下，从左到右的默认规则</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">//普通的loader</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">loose</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-2-使用-airbnb-风格" tabindex="-1"><a class="header-anchor" href="#_3-7-2-使用-airbnb-风格" aria-hidden="true">#</a> 3.7.2 使用 airbnb 风格</h4><p>airbnb 是一个非常有名的 js 风格语法，我们可以使用 eslint 来让我们书写的代码符合这种规范</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i eslint-loader eslint eslint-config-airhnb-base eslint-plugin-import-eslint <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;eslint-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后需要在<code>package.json</code>中增加：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;extend&quot;</span><span class="token operator">:</span> <span class="token string">&quot;airbnb-base&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 支持浏览器的全局变量</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-8-全局变量引入" tabindex="-1"><a class="header-anchor" href="#_3-8-全局变量引入" aria-hidden="true">#</a> 3.8 全局变量引入</h3><p><strong>在 webpack 中引入全局变量主要有四种形式：</strong></p><ul><li><p>直接引入全局变量后使用 window 来接收全局变量</p></li><li><p>使用<code>expose-loader</code>将全局变量暴露给 window 对象和模块中，也就是说<strong>使用这个在所有模块都可以使用<code>window.暴露对象</code>或直接使用暴露对象</strong></p></li><li><p>使用<code>webpack.providePlugin</code>插件为每个模块注入全局对象（此时并没有挂载到 window 上，只是为每个模块注入了全局变量）</p></li><li><p>在模板 html 中通过 script 标签引入</p></li></ul><p>**注：**这里的全局变量都以 jquery 的$符合为例</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i jquery <span class="token parameter variable">-S</span>
</code></pre></div><h4 id="_3-8-1-直接接收" tabindex="-1"><a class="header-anchor" href="#_3-8-1-直接接收" aria-hidden="true">#</a> 3.8.1 直接接收</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>$ <span class="token operator">=</span> $<span class="token punctuation">;</span>
conosle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_3-8-2-使用-expose-loader" tabindex="-1"><a class="header-anchor" href="#_3-8-2-使用-expose-loader" aria-hidden="true">#</a> 3.8.2 使用 expose-loader</h4><p>expose-loader 可以直接写在项目代码中，也可以写在 webpack 的配置项中，因为这种特性，这类 loader 又被叫做内联 loader</p><p>**注：**配置了这个在所有的模块都能使用</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i expose-loader <span class="token parameter variable">-D</span>
</code></pre></div><ul><li><p>内联使用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js,直接在项目入口引入全局变量</span>
<span class="token keyword">import</span> <span class="token string">&quot;expose-loader?$!jquery&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 不需要使用import from 语法，因为不需要获取到暴露的对象</span>
<span class="token comment">/*
是通过expose-loader的类似查询字符串的写法，全局暴露jquery为$符号，可以使用window.$或直接使用$来获取jquery对象
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>在 webpack 配置文件中添加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//配置loader,这种loader的验证规则是只要在模块中引用的jquery就会对应上这个loader</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;jquery&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;expose-loader?$&quot;</span><span class="token punctuation">,</span> <span class="token comment">//然后使用expose-loader将引入的jquery对象变为$在全局使用</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h4 id="_3-8-3-在每个模块中注入" tabindex="-1"><a class="header-anchor" href="#_3-8-3-在每个模块中注入" aria-hidden="true">#</a> 3.8.3 在每个模块中注入</h4><p>如果我们要使用很多全局变量，而又不想自己配，又不想暴露给 window 对象造成污染，可以通过 webpack 插件自动为每一个模块注入该全局变量</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//webpack也是一个模块</span>
<span class="token keyword">let</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在每个模块中将会jquery的对象都注入为$符,这个jquery是在node_modules中获取的</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token comment">// 现在在文件中不需要进行引入就能使用了，不过不会暴露给window对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre></div><h4 id="_3-8-4-在-script-标签引用" tabindex="-1"><a class="header-anchor" href="#_3-8-4-在-script-标签引用" aria-hidden="true">#</a> 3.8.4 在 script 标签引用</h4><p><strong>通过 script 标签引用的对象会自动挂载到 window 对象上，也可以直接在模块内部使用</strong></p><p>但是，在模板 html 中通过<code>script</code>标签引入<code>jquery</code>, 但是在<code>js</code>中，如果又想再次引入是用<code>import</code>引用一次 jquery,会重新打包<code>jquery</code>,而我们所想的应该是如果使用了 script 标签引用了的全局变量应该不被打包，所以我们可以使用 webpack 提供的<code>externals</code>功能，<strong>进行变量挂载，从而使用 index.html 中引入的 cdn 库，避免了打包时将复杂的第三方库打包</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 我们不希望通过这样使用</span>
<span class="token keyword">const</span> $ <span class="token operator">=</span> window<span class="token punctuation">.</span>$<span class="token punctuation">;</span>
<span class="token comment">// 我们只希望这样引用</span>
<span class="token keyword">const</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;jquery&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 下面这种externals无论在哪使用jquery都会匹配，并且使用$才能够生效</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span> <span class="token comment">//将jquery库中的对象赋给全局的$变量，如果没用script标签引入都会报错</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&quot;jquery&quot;</span><span class="token punctuation">;</span> <span class="token comment">//引入不打包，所以这段代码没有实际意义，只是给编译器看的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果没有用script标签引入就会报错，上面的代码没有意义</span>
</code></pre></div><h3 id="_3-9-图片处理" tabindex="-1"><a class="header-anchor" href="#_3-9-图片处理" aria-hidden="true">#</a> 3.9 图片处理</h3><p>一般来说有三种方式创建图片：</p><ul><li><p>使用 H5 的 API 在 JS 中创建图片</p></li><li><p>在 css 中使用 background-image 导入背景图片</p></li><li><p>在 img 标签中引用图片</p></li></ul><p>在 webpack 中使用图片时，因为是要形成打包后的文件，所以路径就会有问题</p><p>一般通过 require 直接引入图片，这时会创建一个存在内存中的新的图片地址，通过这种方式才能在打包后使用该图片,不过引入图片就要配置与引入静态文件相关的 loader</p><p>我们这里使用 url-loader 和 file-loader（<strong>只对于在 JS 中引入图片和在 js 中引入了 css，css 又引入了背景图片的行为</strong>）。实际使用 url-loader，不过 url-loader 依赖于 file-loader</p><h4 id="_3-9-1-在不同环境下使用" tabindex="-1"><a class="header-anchor" href="#_3-9-1-在不同环境下使用" aria-hidden="true">#</a> 3.9.1 在不同环境下使用</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i url-loader file-loader <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 当图片小于多少，用base64,否则用url-loader产生真实的图片</span>
        <span class="token comment">/*
                    优点：减少请求数量（减轻服务器压力）
                    缺点：图片体积会更大（文件请求速度更慢）
                */</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 用作限制</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 8kb之内用base64</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flie-lodaer 默认会在内部生成一张图片到 build 的目录下，并且把生成图片的名字返回出来</p><ul><li><p>第一种情况: 图片地址要</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span>
</code></pre></div><p>引入，直接写图片的地址，会默认为字符串</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">&quot;./logo.png&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

image<span class="token punctuation">.</span>src <span class="token operator">=</span> logo<span class="token punctuation">;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>第二种情况:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>css <span class="token operator">-</span> loader<span class="token punctuation">;</span>
</code></pre></div><p>会将<code>css</code>里面的图片转为<code>require</code>的格式</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>div <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;./logo.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* require(&quot;./logo.png&quot;) */</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>第三种情况: 解析<code>html</code>中的<code>image</code></p><p>使用<code>html-withimg-loader</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i html-withimg-loader <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 处理html的img图片（负责引入img,从而能被url-loader进行处理）</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;html-withimg-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>html-loader</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i html-loader <span class="token parameter variable">-D</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
            <span class="token comment">// 使用html-loader时需要将url的esModule关闭，因为url-loader默认是使用es6模块解析，而html-loader使用的commonjs，解析时会出现[Object Module]</span>
            <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 处理html的img图片（负责引入img,从而能被url-loader进行处理）</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_3-9-2-打包文件分类" tabindex="-1"><a class="header-anchor" href="#_3-9-2-打包文件分类" aria-hidden="true">#</a> 3.9.2 打包文件分类</h4><p>如果我们先想要把文件资源分类处理，添加配置项，webpack 也会自动的加打包后的路径转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 当图片小于多少，用base64,否则用file-loader产生真实的图片</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 用作限制</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 200k 200 * 1024</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;img/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后输出地址 在dist/img</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，在我们前面的 CSS 插件中，也可以直接写入要分类的目录</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;css/main.css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_3-9-3-加入-cdn-前缀" tabindex="-1"><a class="header-anchor" href="#_3-9-3-加入-cdn-前缀" aria-hidden="true">#</a> 3.9.3 加入 CDN 前缀</h4><p>如果我们希望输出的时候，给这些<code>css\\img</code>加上前缀，传到服务器也能访问，可以为<code>output</code>加上<code>publicPath</code>属性</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.[hash:8].js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// hash: 8只显示8位</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;http://www.mayufo.cn&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 给静态资源统一加</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>如果我们只希望处理某一类文件，比如图片：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 当图片小于多少，用base64,否则用file-loader产生真实的图片</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 200k 200 * 1024</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;/img/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包后输出地址</span>
            <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-打包其他资源" tabindex="-1"><a class="header-anchor" href="#_3-10-打包其他资源" aria-hidden="true">#</a> 3.10 打包其他资源</h3><p>除了直接指定需要打包的资源外，我们还可以通过直接使用<code>exclude</code>选项来打包其他资源</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js|html0)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 假设只有这三种资源为主要资源</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;file-lodaer&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[hash:10].[ext]&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-webpack-性能优化" tabindex="-1"><a class="header-anchor" href="#_4-webpack-性能优化" aria-hidden="true">#</a> 4. webpack 性能优化</h2><h3 id="_4-1-hmr" tabindex="-1"><a class="header-anchor" href="#_4-1-hmr" aria-hidden="true">#</a> 4.1 HMR</h3><p>HMR（hot module replacement）意为热模板替换，能够在一个模块发生变化时值重新打包这个模块，而不是打包所有模块，极大的提高构建速度，一般用于开发环境使用。</p><ul><li><p>样式文件：因为 style-loader 内部实现了 hmr 功能，所以默认可以用使用 hmr 功能（所以开发环境不需要将样式文件打包）</p></li><li><p>js 文件：</p><p>默认不支持 hmr 功能</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一旦module.hot为true,说明开启了hmr功能</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&quot;./log.js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法会监听 log.js文件的变化，一旦变化就触发回调函数，其他文件就不会被重新打包，否者就会打包所有的文件</span>
    <span class="token comment">// dosomething</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意：hmr 功能 js 的处理，只能处理非入口 js 文件的其他文件。</p></li><li><p>html 文件：</p><p>默认不支持 hmr 功能，同时 html 文件是默认是不能热更新的。</p><p>注：</p><p>因为项目中一般都只有一个 html 文件，所以我们是不需要为 html 文件做 hmr 的，改变 html 文件项目就一定要重新打包。</p><p>解决热更新：</p><p>修改 entry 入口，将 html 文件引入，这样每次修改 html 文件的时候都会重新打包项目。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 多入口</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/public/index.htnl&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h3 id="_4-2-source-map" tabindex="-1"><a class="header-anchor" href="#_4-2-source-map" aria-hidden="true">#</a> 4.2 source-map</h3><p><strong>source-map 是一种提供源代码到构建后代码映射技术（如果代码出错了，通过映射可以追踪代码错误）</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>可选值有<code>[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map</code></p><p>大体有以下大类，还有一些是通过下面的大类组合而来的：</p><ul><li><p>**source-map：**外部，能够提示出错误代码的准确信息和源代码的错误位置</p></li><li><p>**inline-source-map：**内联，只生成一个内联 source-map，能够提示出错误代码的准确信息和源代码的错误位置</p></li><li><p>**hidden-source-map：**外部 source-map，能够提示错误代码的错误原因，但是没有错误位置，不能追踪到源代码错误，只能提示到构建后代码的错误位置（只隐藏源代码，不隐藏构建后的代码）</p></li><li><p>**eval-source-map：**内联，但每一个文件都会生成对应的 source-map 在 eval 中，能够提示出错误代码的准确信息和源代码的错误位置</p></li><li><p>**nosource-source-map：**外部，能找到错误代码的准确信息，但是没有任何源代码信息（隐藏所有代码）</p></li><li><p>**cheap-source-map：**外部，能够提示出错误代码的准确信息和源代码的错误位置，但是只能精确到某一行，不能找到某一行中的哪一个错误</p></li><li><p>**cheap-module-source-map：**外部，能够提示出错误代码的准确信息和源代码的错误位置</p></li></ul><p><strong>内联与外部的区别</strong></p><ul><li><p>外部生成了对应的文件，而内联没有</p></li><li><p>内联的构建速度更快</p></li></ul><p><strong>两种环境的选择</strong></p><ol><li><strong>开发环境</strong>：需要速度快，调试更友好。</li></ol><ul><li><p><strong>速度快</strong>：由于<code>eval&gt;inline&gt;cheap&gt;...</code>，所以可以选择<code>eval-cheap-source-map</code>和<code>eval-source-map</code></p></li><li><p><strong>调试更友好</strong>：可以选择<code>source-map</code>、<code>cheap-module-source-map</code>和<code>cheap-source-map</code></p></li></ul><p><strong>综上</strong>：一般可以选择<code>eval-source-map</code>（Vue 和 React 脚手架默认就是这种）或者<code>eval-cheap-module-source-map</code></p><ol start="2"><li><strong>生产环境</strong>：需要考虑是否隐藏源代码，是否需要调试友好。同时要注意的是生产环境不要用内联，这样会使得文件体积增大</li></ol><ul><li><p><strong>调试友好</strong>：可以使用<code>source-map</code>和<code>cheap-module-source-map</code></p></li><li><p><strong>需要隐藏源代码</strong>：可以使用<code>nosource-source-map</code>和<code>hidden-source-map</code></p></li></ul><h3 id="_4-3-oneof" tabindex="-1"><a class="header-anchor" href="#_4-3-oneof" aria-hidden="true">#</a> 4.3 oneof</h3><p>在之前我们配置 loader 的时候，其实每一个文件都会对每一个 loader 进行对比适配，不管是否能匹配上，这样做会很消耗性能，而 oneof 就可以帮助我们提高性能，它作用类似于 switch，在匹配上一个之后就不会继续往下面匹配了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> optimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>
  <span class="token operator">?</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>
  <span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> isDev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// 复用loader</span>
<span class="token keyword">const</span> commonCSSLoader <span class="token operator">=</span> <span class="token punctuation">[</span>
  MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
  <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&quot;postcss&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;eslint-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 优先执行</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/*
          package.json里面写上&quot;eslintConfig&quot;:{
            &quot;extends&quot;:&#39;airbnb-base&quot;
          }
        */</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 但是需要注意不能同时有两个配置匹配同一类型的文件，所有拿出一个js配置到外面</span>
        <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token operator">...</span><span class="token punctuation">(</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span> <span class="token operator">:</span> commonCSSLoader<span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token operator">...</span><span class="token punctuation">(</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span> <span class="token operator">:</span> commonCSSLoader<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token comment">// 按需加载</span>
                  <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span>
                  <span class="token comment">// 指定core-js版本</span>
                  <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token comment">// 指定兼容哪个版本浏览器</span>
                  <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&quot;9&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[hash:10].[ext]&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;imgs&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// html资源</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(html|css|less|js|jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;file-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[hash:10].[ext]&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;media&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-缓存" tabindex="-1"><a class="header-anchor" href="#_4-4-缓存" aria-hidden="true">#</a> 4.4 缓存</h3><p>为了使得项目性能更加优化，很多地方都会使用缓存，但是有些时候缓存不能起到预定的效果，需要根据实际来使用缓存</p><ul><li><p><strong>babel 缓存：</strong> 之前在处理 ES6 的时候写到过，它内置可以开启<code>cacheDirectory:true</code>，让第二次打包构建速度更快</p></li><li><p><strong>文件资源缓存：</strong> 该缓存是默认存在于 webpack 打包中的，但是这种缓存在很多时候会让我们想要修改的数据无效，需要我们自己为打包后的文件设置哈希值来清除缓存。文件资源缓存的作用是让代码上线运行缓存更好使用</p></li><li><ul><li>**hash：**每次 webpack 构建时会生成一个唯一的 hash 值。 **问题：**因为 js 和 css 同时使用一个 hash 值，如果重新打包，会导致所有缓存失效，但是用户却只想要修改一个文件</li></ul></li><li><ul><li>**chunkhash：**根据 chunk 生成的 hash 值，如果打包来源于同一个 chunk，那么 hash 值就一样 **问题：**js 和 css 的 hash 值还是一样的，因为 css 是在 js 中引入，所以属于同一个 chunk</li></ul></li><li><ul><li>**contenthash：**根据文件的内容生成 hash 值，不同文件 hash 值一定不相同</li></ul></li></ul><h3 id="_4-5-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_4-5-tree-shaking" aria-hidden="true">#</a> 4.5 tree shaking</h3><p><code>tree shaking</code>的作用是去除无用的代码，减少代码的体积。</p><p>但是使用<code>tree shaking</code>需要有两个前提：</p><ul><li><p>必须使用 ES6 模块化</p></li><li><p>需要开启 production 环境</p></li></ul><p>**注意：**有些时候我们开启<code>tree shaking</code>时可能会把我们项目中的<code>css、@babel/polyfill</code>文件消除掉</p><p>在<code>package.json</code>中：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">// 当开启为false时会让所有代码都没有副作用，tree shaking就会将css文件一起删除掉</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.less&quot;</span><span class="token punctuation">]</span> <span class="token comment">// 我们最好手动配置清除</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-6-代码分割" tabindex="-1"><a class="header-anchor" href="#_4-6-代码分割" aria-hidden="true">#</a> 4.6 代码分割</h3><h4 id="_4-6-1-打包多页应用" tabindex="-1"><a class="header-anchor" href="#_4-6-1-打包多页应用" aria-hidden="true">#</a> 4.6.1 打包多页应用</h4><p>打包多页应用的方式很简单，使用多个入口和多个模板就能完成多个页面的打包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 多入口</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">&quot;./src/other.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用[name]会让各在入口文件输出各自的出口文件</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;home.html&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 模板要引入哪些入口文件</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;other.html&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// other.html 里面有 other.js &amp; home.js</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-2-配置-node-modules-的-chunk" tabindex="-1"><a class="header-anchor" href="#_4-6-2-配置-node-modules-的-chunk" aria-hidden="true">#</a> 4.6.2 配置 node_modules 的 chunk</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 多入口</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">&quot;./src/other.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用[name]会让各在入口文件输出各自的出口文件</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/*
        1.如果是单文件，可以自动将node_modules中代码单独打包一个chunk最终输出
        2.自动分析多入口chunk中有没有公共文件，如果有会单独打包成一个chunk用来共用
    */</span>
  <span class="token literal-property property">optimizaion</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-3-js-代码打包" tabindex="-1"><a class="header-anchor" href="#_4-6-3-js-代码打包" aria-hidden="true">#</a> 4.6.3 js 代码打包</h4><p>通过 js 代码的注释效果能够将 webpack 的打包机制将相同 chunk 名字的代码打包在一起</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
    通过js代码，让某个文件单独打包为一个chunk：
    使用import动态导入的语法，能让一个文件单独被打包，但是默认是随机的id，可以在前面加上注释生成想要的名字
*/</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件加载失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-懒加载与预加载" tabindex="-1"><a class="header-anchor" href="#_4-7-懒加载与预加载" aria-hidden="true">#</a> 4.7 懒加载与预加载</h3><ul><li><p>懒加载：</p><p>js 中使用懒加载其实非常简单，我们只需要使用</p><div class="language-text" data-ext="text"><pre class="language-text"><code>import()
</code></pre></div><p>这样的语法通过</p><div class="language-text" data-ext="text"><pre class="language-text"><code>.then()
</code></pre></div><p>的方式获取回调就能够实现这样的效果。同时该方法也不会重复加载模块，第二次使用会引用缓存中的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>预加载：</p><p>预加载（prefetch）会在使用之前，提前加载 js 文件，正常的加载可以认为是并行加载（同一时间加载多个文件），而预加载是等其他资源加载完成之后，浏览器空闲时偷偷进行加载资源。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用webpackPrefetch开启预加载</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39;, webpackPrefetch: true */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h3 id="_4-8-pwa-离线可访问" tabindex="-1"><a class="header-anchor" href="#_4-8-pwa-离线可访问" aria-hidden="true">#</a> 4.8 PWA（离线可访问）</h3><p>PWA（渐进式网络开发应用程序）可以为我们提供即使离线状态下浏览器也可以访问网站的能力。</p><p>要在 webpack 中启用 PWA，我们需要下载<code>workbox-webpack-plugin</code>作为插件使用</p><div class="language-text" data-ext="text"><pre class="language-text"><code>npm i workbox-webpack-plugin -D
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> workboxWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;workbox-webpack-plugin &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
            该插件最终会帮我们生成一个serviceworker配置文件
            下面两个配置的作用：
            1.帮助serviceworker快速启动
            2.删除旧的serviceworker
        */</span>
    <span class="token keyword">new</span> <span class="token class-name">workboxWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token comment">/*
    注册serviceworker
    处理兼容性问题
*/</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;serviceWorker&quot;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker
      <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;/service-worker.js&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;注册成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;注册失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-9-多进程打包" tabindex="-1"><a class="header-anchor" href="#_4-9-多进程打包" aria-hidden="true">#</a> 4.9 多进程打包</h3><p>webpack 中启用多进程打包需要使用<code>thread-loader</code></p><p>**注意：**开启多进程打包不一定会让打包速度更加快，因为进程启动和通信之间也有时间开销，只有当工作消耗时间比较长，比如有很多 js 代码的时候，才需要多进程打包</p><div class="language-text" data-ext="text"><pre class="language-text"><code>npm i thread-lodaer -D
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 但是需要注意不能同时有两个配置匹配同一类型的文件，所有拿出一个js配置到外面</span>
                <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token comment">// 一般多进程打包都是和babel一起使用</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;thread-loader&#39;</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">workers</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// 两个进程</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                        <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
                                        <span class="token punctuation">{</span>
                                            <span class="token comment">// 按需加载</span>
                                            <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                                            <span class="token comment">// 指定core-js版本</span>
                                            <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                                <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                            <span class="token comment">// 指定兼容哪个版本浏览器</span>
                                            <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                                <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                                                <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                                                <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                                                <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                                                <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                                            <span class="token punctuation">}</span>
                                        <span class="token punctuation">}</span>
                                    <span class="token punctuation">]</span>，
                                    <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 开启babel缓存，第二次构建时会读取之前的缓存</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-10-externals" tabindex="-1"><a class="header-anchor" href="#_4-10-externals" aria-hidden="true">#</a> 4.10 externals</h3><p>在前面也说到过，当我们引入全局的库的时候我们可能会使用 externals，使用 externals 可以让 webpack 强制不打包内部指定的包，要使用的时候直接从 script 标签获取，起到减少打包体积的作用。</p><h3 id="_4-11-dll" tabindex="-1"><a class="header-anchor" href="#_4-11-dll" aria-hidden="true">#</a> 4.11 dll</h3><p>**使用 dll 技术，对某些库（第三方库：jquery、react、vue...）等进行单独打包。**dll 已经由 webpack 进行集成过了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.dll.js</span>
<span class="token comment">/*
    该文件名为webpack.dll.js，所以在运行打包时是 webpack --config webpack.dll.js 来打包外部库
*/</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最终打包生成的[name] --&gt; jquery</span>
    <span class="token comment">// [&#39;jquery&#39;] --&gt; 要打包生成的库叫jquery</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;jquery&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&quot;[name]_[hash]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包的库里面向外面暴露出去的内容叫什么名字，相当于就是全局变量名</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[name]_[hash]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 映射库的暴露的内容名称</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 输出的文件路径</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> AddAssetHtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;add-asset-html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 告诉webpack哪些库不参与打包，同时使用名称也会改变</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 通过映射来寻找</span>
      <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dll/manifest.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 将某个文件打包出去，比你html资源中引入</span>
    <span class="token keyword">new</span> <span class="token class-name">AddAssetHtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dll/jquery.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-配置详解" tabindex="-1"><a class="header-anchor" href="#_5-配置详解" aria-hidden="true">#</a> 5. 配置详解</h2><h3 id="_5-1-entry" tabindex="-1"><a class="header-anchor" href="#_5-1-entry" aria-hidden="true">#</a> 5.1 entry</h3><p>entry 是 webpack 打包的入口起点 ，该入口可以使用多种形式打包：</p><ul><li><p>string：</p><p>单入口，打包形成一个 chunk，输出一个 bundle 文件，此时 chunk 的名称默认是 main</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>[]:string：</p><p>多入口，所有入口文件最终会形成一个 chunk，输出一个 bundle 文件，一般可以用来处理 hmr 中的 html 热更新的问题</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src/home.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>object：</p><p>多入口，有几个入口文件就形成几个 chunk，会输出多个 bundle 文件，此时 chunk 的名称为 key</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 下面的代码最终会行2个bundle文件</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 多入口，所有入口文件最终会形成一个chunk，输出一个bundle文件，文件名为index</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src/home.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 形成一个chunk，输出一个bundle</span>
    <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&quot; ./src/add.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>一般这种情况可以让我们单独打包第三方库：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;jquery&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h3 id="_5-2-output" tabindex="-1"><a class="header-anchor" href="#_5-2-output" aria-hidden="true">#</a> 5.2 output</h3><p>output 是 webpack 打包的出口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 文件名称（指定名称+目录）</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].js&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 输出文件目录（将来所有资源输出的公共目录）</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 所有资源引入公共路径，如将前面我们写的js/[name].js，在引入的时候会成为/js/[name].js</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]_chunk.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 非入口chunk的名称</span>
        <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 向外暴露库的变量名</span>
        <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">// 变量名添加到那个对象下（不填就为一个全局变量的形式）</span>
        <span class="token comment">/*
        如：
            browser：window
            node：global
            commonjs模块内部引入：commonjs
        */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-module" tabindex="-1"><a class="header-anchor" href="#_5-3-module" aria-hidden="true">#</a> 5.3 module</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader配置</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 多个loader使用use</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 排除node_modules下的js文件</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 只检查src下的js文件</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 优先执行</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 延后执行</span>
        <span class="token comment">// enforce: &#39;post&#39;</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;eslint-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 单个loader使用loader，可以配置options</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-resolve" tabindex="-1"><a class="header-anchor" href="#_5-4-resolve" aria-hidden="true">#</a> 5.4 resolve</h3><p>resolve 用于配置 webpack 解析模块规则</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解析模块的规则</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 配置解析模块路径别名。优点：简写路径。缺点：没有路径智能提示。（可以使用ts或编译器配置）</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">$css</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/css&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span>
        <span class="token comment">// 配置省略文件路径的后缀名，按照数组顺序依次寻找</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">// 告诉webpack解析模块是去哪个目录寻找</span>
        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-devserver" tabindex="-1"><a class="header-anchor" href="#_5-5-devserver" aria-hidden="true">#</a> 5.5 devServer</h3><p>devServer 专门用来配置 webpack 开发环境的服务配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 运行代码的目录</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 监视contentBase目录下的所有文件，一旦文件发生变化就会reload</span>
    <span class="token literal-property property">watchContentBase</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 忽略文件</span>
      <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 启动gzip压缩</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 端口号</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">// 域名</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启hmr功能</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 不需要显示启动服务器日志信息</span>
    <span class="token literal-property property">clientLogLevel</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 除了一些基本启动信息以为，不打印其他内容</span>
    <span class="token literal-property property">quiet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果出错了，不需要全屏提示</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 服务器代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 代理地址</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 路径重写</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-optimization" tabindex="-1"><a class="header-anchor" href="#_5-6-optimization" aria-hidden="true">#</a> 5.6 optimization</h3><p>optimization 专门用来处理 webpack 打包时性能优化的部分</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> TerserWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;terser-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理公共代码打包</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 下面的配置都是默认值</span>
      <span class="token comment">/*
          minSize: 30 * 1024, // 分割的chunk最小为30kb
          maxSize: 0, // 最大没有限制
          minChunks: 1, // 要提取的chunk最少被引用一次
          maxAsyncRequests: 5, // 按需加载时并行加载文件的最大数量
          maxInitialRequests: 3, // 入口js最大并行请求数量
          name: true, // 可以使用命名规则，开启后下面的命名相关的声明规则就可以生效
          automaticNameDelimiter: &#39;~&#39;, // 名称连接符，打包后文件名以~连接
          cacheGroups: { // 分割chunk的组
              // 下面的键是分割后组的名称
              // node_modules文件会被打包到vendors组的chunk中，生成vendors~xxx.js
              // 同时所有分组均满足上面所写的所有规则，如果在下面重复写了会覆盖掉上面的
              vendors: {
                  // 只分割node_modules中的
                  test: /[\\\\/]node_modules[\\\\/]/,
                  // 优先级，冲突时会根据优先级大小打包
                  priority: -10
              },
              default: {
                  // 要提取的chunk最少被引用2次
                  minChunks: 2,
                  priority: -20,
                  // 如果当前被打包的模块和已被提出的模块是同一个，就不会重复打包
                  reuseExistingChunk: true
              }
          }
              */</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 将当前模块的记录其他模块的hash单独打包为一个文件runtime，用于解决修改a文件时导致b文件contenthash变化所产生的影响</span>
    <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">entrypoint</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">runtime-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entrypoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 配置生产环境的压缩方案：js和css</span>
      <span class="token comment">/*
                在webpack 4.2.6之后使用的是terser-webpack-plugin进行代码压缩
            */</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 开启缓存</span>
        <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 开启多进程打包</span>
        <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 启动source-map</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-webpack-配置模板" tabindex="-1"><a class="header-anchor" href="#_6-webpack-配置模板" aria-hidden="true">#</a> 6. webpack 配置模板</h2><h3 id="_6-1-基本模板" tabindex="-1"><a class="header-anchor" href="#_6-1-基本模板" aria-hidden="true">#</a> 6.1 基本模板</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> optimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>

process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>
  <span class="token operator">?</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>
  <span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>

<span class="token keyword">const</span> isDev <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>

<span class="token comment">// 复用loader</span>
<span class="token keyword">const</span> commonCSSLoader <span class="token operator">=</span> <span class="token punctuation">[</span>
  MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
  <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 优先执行</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">/*
          package.json里面写上&quot;eslintConfig&quot;:{
            &quot;extends&quot;:&#39;airbnb-base&quot;
          }
        */</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 但是需要注意不能同时有两个配置匹配同一类型的文件，所有拿出一个js配置到外面</span>
        <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token operator">...</span><span class="token punctuation">(</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> commonCSSLoader<span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token string">&#39;less-loader&#39;</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">(</span>isDev <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> commonCSSLoader<span class="token punctuation">)</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token comment">// 按需加载</span>
                  <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                  <span class="token comment">// 指定core-js版本</span>
                  <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token comment">// 指定兼容哪个版本浏览器</span>
                  <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>，
             <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 开启babel缓存，第二次构建时会读取之前的缓存</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;imgs&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// html资源</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(html|css|less|js|jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;media&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 删除属性的双引号，除了一些特殊的删除不了以外都能删除</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 折叠空行将所有代码变成一行</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 移除注释</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 抽离css</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 压榨css</span>
    <span class="token keyword">new</span> <span class="token class-name">optimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-开发环境的基本配置" tabindex="-1"><a class="header-anchor" href="#_6-2-开发环境的基本配置" aria-hidden="true">#</a> 6.2 开发环境的基本配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/js/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader的配置</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理less资源</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理css资源</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理图片资源</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[hash:10].[ext]&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// 关闭es6模块化 esModule: false, outputPath: &#39;imgs&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理html中img资源</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理其他资源</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(html|js|css|less|jpg|png|gif)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;file-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[hash:10].[ext]&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;media&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// plugins的配置</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-生产环境的配置" tabindex="-1"><a class="header-anchor" href="#_6-3-生产环境的配置" aria-hidden="true">#</a> 6.3 生产环境的配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  resolve
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义nodejs环境变量：决定使用browserslist的哪个环境</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 复用loader const commonCssLoader = [</span>
MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
  <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 还需要在package.json中定义browserslist loader: &#39;postcss-loader&#39;, options: { ident: &#39;postcss&#39;,</span>
    <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">/*
      正常来讲，一个文件只能被一个loader处理。
      当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
      先执行eslint 在执行babel
      */</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 在package.json中eslintConfig --&gt; airbnb test: /\\.js$/, exclude: /node_modules/,</span>
        <span class="token comment">// 优先执行</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;50&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;imgs&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|css|less|html|jpg|png|gif)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;media&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,173);function _(P,E){const p=l("router-link"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(p,{to:"#_1-webpack简介"},{default:e(()=>[s("1. webpack简介")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#_1-1-webpack"},{default:e(()=>[s("1.1 Webpack")]),_:1})]),n("li",null,[a(p,{to:"#_1-2-webpack-五个核心概念"},{default:e(()=>[s("1.2 webpack 五个核心概念")]),_:1})])])]),n("li",null,[a(p,{to:"#_2-使用-webpack"},{default:e(()=>[s("2. 使用 Webpack")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#_2-1-安装"},{default:e(()=>[s("2.1 安装")]),_:1})]),n("li",null,[a(p,{to:"#_2-2-编译打包应用"},{default:e(()=>[s("2.2 编译打包应用")]),_:1})])])]),n("li",null,[a(p,{to:"#_3-配置-webpack"},{default:e(()=>[s("3. 配置 Webpack")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#_3-1-运行打包命令"},{default:e(()=>[s("3.1 运行打包命令")]),_:1})]),n("li",null,[a(p,{to:"#_3-2-基础配置"},{default:e(()=>[s("3.2 基础配置")]),_:1})]),n("li",null,[a(p,{to:"#_3-3-本地服务"},{default:e(()=>[s("3.3 本地服务")]),_:1})]),n("li",null,[a(p,{to:"#_3-4-支持模板-html"},{default:e(()=>[s("3.4 支持模板 html")]),_:1})]),n("li",null,[a(p,{to:"#_3-5-样式处理"},{default:e(()=>[s("3.5 样式处理")]),_:1})]),n("li",null,[a(p,{to:"#_3-6-高级-js-转换-es5"},{default:e(()=>[s("3.6 高级 js 转换 ES5")]),_:1})]),n("li",null,[a(p,{to:"#_3-7-语法校验"},{default:e(()=>[s("3.7 语法校验")]),_:1})]),n("li",null,[a(p,{to:"#_3-8-全局变量引入"},{default:e(()=>[s("3.8 全局变量引入")]),_:1})]),n("li",null,[a(p,{to:"#_3-9-图片处理"},{default:e(()=>[s("3.9 图片处理")]),_:1})]),n("li",null,[a(p,{to:"#_3-10-打包其他资源"},{default:e(()=>[s("3.10 打包其他资源")]),_:1})])])]),n("li",null,[a(p,{to:"#_4-webpack-性能优化"},{default:e(()=>[s("4. webpack 性能优化")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#_4-1-hmr"},{default:e(()=>[s("4.1 HMR")]),_:1})]),n("li",null,[a(p,{to:"#_4-2-source-map"},{default:e(()=>[s("4.2 source-map")]),_:1})]),n("li",null,[a(p,{to:"#_4-3-oneof"},{default:e(()=>[s("4.3 oneof")]),_:1})]),n("li",null,[a(p,{to:"#_4-4-缓存"},{default:e(()=>[s("4.4 缓存")]),_:1})]),n("li",null,[a(p,{to:"#_4-5-tree-shaking"},{default:e(()=>[s("4.5 tree shaking")]),_:1})]),n("li",null,[a(p,{to:"#_4-6-代码分割"},{default:e(()=>[s("4.6 代码分割")]),_:1})]),n("li",null,[a(p,{to:"#_4-7-懒加载与预加载"},{default:e(()=>[s("4.7 懒加载与预加载")]),_:1})]),n("li",null,[a(p,{to:"#_4-8-pwa-离线可访问"},{default:e(()=>[s("4.8 PWA（离线可访问）")]),_:1})]),n("li",null,[a(p,{to:"#_4-9-多进程打包"},{default:e(()=>[s("4.9 多进程打包")]),_:1})]),n("li",null,[a(p,{to:"#_4-10-externals"},{default:e(()=>[s("4.10 externals")]),_:1})]),n("li",null,[a(p,{to:"#_4-11-dll"},{default:e(()=>[s("4.11 dll")]),_:1})])])]),n("li",null,[a(p,{to:"#_5-配置详解"},{default:e(()=>[s("5. 配置详解")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#_5-1-entry"},{default:e(()=>[s("5.1 entry")]),_:1})]),n("li",null,[a(p,{to:"#_5-2-output"},{default:e(()=>[s("5.2 output")]),_:1})]),n("li",null,[a(p,{to:"#_5-3-module"},{default:e(()=>[s("5.3 module")]),_:1})]),n("li",null,[a(p,{to:"#_5-4-resolve"},{default:e(()=>[s("5.4 resolve")]),_:1})]),n("li",null,[a(p,{to:"#_5-5-devserver"},{default:e(()=>[s("5.5 devServer")]),_:1})]),n("li",null,[a(p,{to:"#_5-6-optimization"},{default:e(()=>[s("5.6 optimization")]),_:1})])])]),n("li",null,[a(p,{to:"#_6-webpack-配置模板"},{default:e(()=>[s("6. webpack 配置模板")]),_:1}),n("ul",null,[n("li",null,[a(p,{to:"#_6-1-基本模板"},{default:e(()=>[s("6.1 基本模板")]),_:1})]),n("li",null,[a(p,{to:"#_6-2-开发环境的基本配置"},{default:e(()=>[s("6.2 开发环境的基本配置")]),_:1})]),n("li",null,[a(p,{to:"#_6-3-生产环境的配置"},{default:e(()=>[s("6.3 生产环境的配置")]),_:1})])])])])]),v,n("p",null,[n("strong",null,[s("webpack 中三种三种 hash 值区别："),n("a",m,[s("webpack 三种哈希区别"),a(o)])])]),b,n("p",null,[n("strong",null,[s("其余具体的插件参数选项见："),n("a",g,[s("html-webpack-plugin#options"),a(o)])])]),y,n("p",null,[n("strong",null,[s("其余的 less-loader 的配置详见："),n("a",h,[s("less-loader"),a(o)])])]),q,n("p",null,[n("strong",null,[s("其余 mini-css-extract-plugin 的配置信息详见："),n("a",x,[s("mini-css-extract-plugin"),a(o)])])]),f,n("p",null,[n("strong",null,[s("其余 postcss-loader 的配置信息详见："),n("a",j,[s("postcss-loader"),a(o)])])]),w])}const C=c(u,[["render",_],["__file","webpack.html.vue"]]);export{C as default};
