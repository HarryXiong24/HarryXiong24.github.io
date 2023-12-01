import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as e}from"./app-621ebf19.js";const t={},p=e(`<h1 id="一文搞懂-webpack-热更新原理" tabindex="-1"><a class="header-anchor" href="#一文搞懂-webpack-热更新原理" aria-hidden="true">#</a> 一文搞懂 Webpack 热更新原理</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在开发中，一个网页的刷新我们一般分为两种形式：</p><ul><li>一种是页面刷新，不保留页面状态，就是简单粗暴，例如直接<code>window.location.reload()</code>。</li><li>另一种是基于 Webpack 的<code>WDS (Webpack-dev-server)</code>的模块热替换，只需要局部刷新页面上发生变化的模块，同时可以保留当前的页面状态。</li></ul><p><code>Hot Module Replacement</code>，简称<code>HMR</code>，无需完全刷新整个页面的同时，更新模块。毫无疑问，这能节省宝贵的开发时间、提升开发体验。本文就来简述一下 HMR 的过程。</p><h2 id="hmr-过程阐述" tabindex="-1"><a class="header-anchor" href="#hmr-过程阐述" aria-hidden="true">#</a> HMR 过程阐述</h2><p>在 webpack 编译的时候，我们每次修改代码保存后，都会重新进行一次编译，控制台都会出现输出一些信息，可以在控制台中观察到：</p><ul><li>新的hash值</li><li>新的json文件</li><li>新的js文件</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc82dbbca7d84f0fb4189bca54bd3d82~tplv-k3u1fbpfcp-watermark.image?" alt="a31af2a9-22b5-4f06-b519-a62945f47dd5.png" loading="lazy"></p><p><code>Hash</code>值代表每一次编译的标识。其次，根据新生成文件名可以发现，上次输出的<code>Hash</code>值会作为本次编译新生成的文件标识。依次类推，本次输出的<code>Hash</code>值会被作为下次热更新的标识。</p><p>首先看<code>json</code>文件，返回的结果中，<code>h</code>代表本次新生成的<code>Hash</code>值，用于下次文件热更新请求的前缀。<code>c</code>表示当前要热更新的文件对应的是<code>index</code>模块。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae83f6ea928446049253472c60888492~tplv-k3u1fbpfcp-watermark.image?" alt="f0d11a5e-9807-4f86-b941-05b8a327b58e.png" loading="lazy"></p><p>再看下生成的<code>js</code>文件，那就是本次修改的代码，重新编译打包后的js文件。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60acde630ee5490784a47442af4fb687~tplv-k3u1fbpfcp-watermark.image?" alt="d8212e8f-bf4b-4793-a123-c5c6712173ba.png" loading="lazy"></p><h2 id="hmr-原理" tabindex="-1"><a class="header-anchor" href="#hmr-原理" aria-hidden="true">#</a> <strong>HMR</strong> <strong>原理</strong></h2><p>浏览器是如何知道本地代码重新编译了，并迅速请求了新生成的文件？是谁告知了浏览器？浏览器获得这些文件又是如何热更新成功的？要解决这些疑问，就得深入的了解一下热更新的过程。下面简单阐述<code>webpack-dev-server</code>是如何实现热更新的。</p><h3 id="理解-chunk-和-module-的概念" tabindex="-1"><a class="header-anchor" href="#理解-chunk-和-module-的概念" aria-hidden="true">#</a> 理解 chunk 和 module 的概念</h3><p>在 webpack 中，chunk 就是若干 module 打成的包，一个 chunk 应该包括多个 module，每个 module 都会有自己的标识。一般来说一个 chunk 就是一个 file。而 js 以外的资源，webpack 会通过各种 loader 转化成一个 module，这个模块会被打包到某个 chunk 中，并不会形成一个单独的 chunk。</p><h3 id="流程总结" tabindex="-1"><a class="header-anchor" href="#流程总结" aria-hidden="true">#</a> 流程总结</h3><ol start="0"><li>启动服务前，在 Webpack 中插入热更新插件的逻辑代码。</li><li>启动本地服务，与浏览器建立起 Socket 通信。</li><li>监听文件变化，一检测到变化，本地立即重新编译，并生成一个新的 hash 值（如果文件没有变化，则会编译后的 hash 值和原来一样）。并通过 HotModuleReplacementPlugin 这个插件，生成两个补丁文件：</li></ol><ul><li><strong>manifest(JSON)，命名规则：</strong> <code>上一次编译生成的hash.hot-update.json</code></li></ul><p>（如：b1f49e2fc76aae861d9f.hot-update.json）</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/beb143a3125e4f60980e88374757e396~tplv-k3u1fbpfcp-watermark.image?" alt="a1de3af5-9542-45cb-a8c2-73b46e9ceeb8.png" loading="lazy"></p><ul><li><strong>updated chunk (<strong><strong>JavaScript</strong></strong>)</strong> ，命名规则：<code>chunk名字.上一次编译生成的hash.hot-update.js</code>（如main.b1f49e2fc76aae861d9f.hot-update.js）</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd389828beb14e4193ca5be5dbbd8273~tplv-k3u1fbpfcp-watermark.image?" alt="b8f4c2ea-d0c4-4e27-b271-aa1424601d3a.png" loading="lazy"></p><ol start="4"><li>监听编译结束，一旦结束，立即给浏览器发送通知，传两个参数，hash和ok。分别告诉新的 hash 值和是否进行热更新检查。</li><li>浏览器监听，收到 hash 值和检查通知后，开始通过比对hash和OK，如果要进行热更新，则发送 ajax 请求给本地，来获取那两个补丁文件。</li><li>收到这两个热更新文件之后，之前我们说过，由于 webpack 是模块化的，每一个 chunk 里都有很多 module。在 <code>chunk名字.上一次编译生成的hash.hot-update.js</code> 这个文件中，更新所需要的因素我们都知道了。所以直接查找到对应的 module，然后用新模块替换旧模块。如果执行失败遇到错误，则直接刷新页面代替模块热更新。</li></ol><p>这个更新的过程，如果要深究，在 webpack 中有一个 accept 机制（有一点类似收集依赖的思想）：</p><p>如果要实现热更新，下面这段代码是必不可少的，accept 传入的回调函数就是局部刷新逻辑，当 ./content.js 模块改变时执行</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token punctuation">.</span><span class="token operator">/</span>content<span class="token punctuation">.</span>js <span class="token punctuation">]</span><span class="token punctuation">,</span> render<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>accept 原理</strong></p><p>为什么我们只有写了<code>module.hot.accept([ ./content.js ], render);</code>才能实现热更新，这得从 accept 这个函数的原理开始说起。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hotCreateModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> hot <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">accept</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dep<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dep<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                hot<span class="token punctuation">.</span>_acceptedDependencies<span class="token punctuation">[</span>dep<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> hot<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token keyword">var</span> module <span class="token operator">=</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    hot<span class="token operator">:</span> <span class="token function">hotCreateModule</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>accept 就是往</strong> <strong><code>hot._acceptedDependencies</code></strong> <strong>对象存入局部更新回调函数</strong>，<strong>当模块文件改变的时候，我们会调用 acceptedDependencies 搜集的回调。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 再看下面这段代码是不是有点明白了</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token punctuation">.</span><span class="token operator">/</span>content<span class="token punctuation">.</span>js <span class="token punctuation">]</span><span class="token punctuation">,</span> render<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 等价于 module.hot._acceptedDependencies[ ./content.js ] = render</span>
    <span class="token comment">// 作用就是将模块改变时，要做的事进行了搜集，搜集到 _acceptedDependencies 中</span>
    <span class="token comment">// 以便当 content.js 模块改变时，通过 _acceptedDependencies 知道要干什么</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h3><p>最后展示一下全过程的流程图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4201e7e586404a9c9ec942ef6da180e0~tplv-k3u1fbpfcp-watermark.image?" alt="3e538c0e-4040-4c23-a8eb-d345260fd3fa.png" loading="lazy"></p>`,37),c=[p];function o(l,i){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","webpack-hot-fresh.html.vue"]]);export{r as default};
