import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-2a5ea3cb.js";const t={},o=p(`<h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h2><p>模块功能主要由两个命令构成</p><ul><li><p><strong>export命令用于规定模块的对外接口</strong></p></li><li><p><strong>import命令用于输入其他模块提供的功能</strong></p></li></ul><p><strong>注意</strong>:</p><ul><li><p>ES6的模块自动采用严格模式,不管有没有在模块头部加上&quot;use strict&quot;</p></li><li><p>export与import命令可以出现在模块的任何位置,只要处于模块顶层作用域就可以,如果处于块级作用域内等就会报错</p></li></ul><h3 id="_17-1-export" tabindex="-1"><a class="header-anchor" href="#_17-1-export" aria-hidden="true">#</a> 17.1 export</h3><p><strong>一个模块就是一个独立的文件,该文件内部的所有变量外部都无法获取。如果希望外部能够读取模块内部的某个变量,就必须使用export命令输出该变量</strong></p><p><strong>具体操作:</strong></p><ul><li><p><strong>export实际上时导出一个接口,让外界能通过该接口访问内部的数据</strong>,所以export会将要导出的变量装在一个对象中,通过传递出这个对象来使用导出文件内部的变量,所以在导出的时候有格式要求</p></li><li><ul><li><strong>导出变量</strong></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//profile.js</span>
<span class="token comment">//第一种写法</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Jackson&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token comment">//第二种写法(推荐)</span>
<span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Jackson&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//因为实际上时导出对象,所以用{}包裹</span>

<span class="token comment">/*
    以下是错误方法
*/</span>
<span class="token comment">// 报错</span>
<span class="token keyword">export</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 报错</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> m<span class="token punctuation">;</span>

<span class="token comment">/*
export不能直接导出一个数据或者一个变量,必须要用对象包装起来
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ul><li><strong>导出函数</strong></li></ul></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//当然也可以通过传入对象一起传递</span>
<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>multiply<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>通常情况下,export导出的变量就是本来的名字,如果想要修改导出后变量的名字,可以使用as关键字重命名</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">v1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">v2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  v1 <span class="token keyword">as</span> streamV1<span class="token punctuation">,</span>
  v2 <span class="token keyword">as</span> streamV2<span class="token punctuation">,</span>
  v2 <span class="token keyword">as</span> streamLatestVersion
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token comment">//这样在外界使用时就使用as后面被重新修改后的名字</span>
</code></pre></div></li><li><p>export语句输出的接口,与其对应的值是动态绑定关系,即通过该接口,可以取到模块内部实时的值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">var</span> gender <span class="token operator">=</span> <span class="token string">&#39;boy&#39;</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    gender <span class="token operator">=</span> <span class="token string">&#39;girl&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1s后内部的值发生改变,外界引用的也会发生改变</span>
</code></pre></div></li></ul><h3 id="_17-2-import" tabindex="-1"><a class="header-anchor" href="#_17-2-import" aria-hidden="true">#</a> 17.2 import</h3><p><strong>使用export命令定义了模块的对外接口以后，其他 JS文件就可以通过import命令加载并使用这个模块</strong></p><p><strong>具体操作:</strong></p><ul><li><p>使用import命令导入文件中需要的变量时也需要通过一个对象导入,并且必须与被导入摸版的对外接口(变量名)的名称一致</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> firstName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lastName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> year <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//等同于</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./profile&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstName<span class="token punctuation">,</span>lastName<span class="token punctuation">,</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>注:</p><p>如果导入的是JS文件,后缀名可省略</p></li><li><p>如果想为输入的变量重新取一个名字,也是用as关键字将输入的变量重命名</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> lastName <span class="token keyword">as</span> surname <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./profile&#39;</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p><strong>import命令具有提升效果,会让导入的变量提升到整个模块的头部首先执行(但是不推荐这样做)</strong></p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> multiply <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>由于import是静态执行,所以不能使用表达式和变量这些只有在运行时才能得到结果的语法结构</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token string">&#39;mult&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;iply&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 报错</span>
<span class="token keyword">let</span> module <span class="token operator">=</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> multiply <span class="token punctuation">}</span> from module<span class="token punctuation">;</span>

<span class="token comment">// 报错</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> multiply <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module1&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> multiply <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module2&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>import引入的模块可以进行整体加载</strong></p><p><strong>用星号<em>可以指定一个对象</em>,所有输出值都加载在这个对象上面,使用整体加载时一般都是</strong>与as关键词一起用**来方便操作</p><p>**注意:**模块整体加载所在的那个对象,不允许在运行时发生改变,如修改属性值等</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> person <span class="token keyword">from</span> <span class="token string">&#39;./profile&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 不允许以下操作</span>
person<span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string">&quot;import&quot;</span><span class="token punctuation">;</span>
pero<span class="token punctuation">.</span>son<span class="token punctuation">.</span>lastName <span class="token operator">=</span> <span class="token string">&quot;export&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_17-3-export-default" tabindex="-1"><a class="header-anchor" href="#_17-3-export-default" aria-hidden="true">#</a> 17.3 export default</h3><p><strong>使用import命令的时候,需要知道所要加载的变量名或函数名,否则无法加载。为了不用阅读文档就能加载模块,需要用export default命令,为模块指定默认输出</strong></p><ul><li><strong>导出</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// export-default.js</span>
<span class="token comment">//可以直接用于导出一个匿名函数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//也可以导出一个非匿名函数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//或</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> foo<span class="token punctuation">;</span>
<span class="token comment">/*
有名函数的函数名在模块外部是无效的,加载的时候,视同匿名函数加载
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>导入</strong></li></ul><p><strong>其他模块加载该模块时,import命令可以为该匿名函数指定任意名字</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// import-default.js</span>
<span class="token keyword">import</span> customName <span class="token keyword">from</span> <span class="token string">&#39;./export-default&#39;</span><span class="token punctuation">;</span>
<span class="token function">customName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;foo&#39;</span>
</code></pre></div><p>**注:**这时import命令后面不用通过对象的包装,而是可以直接写入</p><p><strong>原理解释</strong></p><ul><li><p><strong>因为一个模块只能有一个默认输出,所以export default命令只能使用一次。这正对应了import命令后面才不用加大括号被对象包装,因为只可能唯一对应export default命令</strong></p></li><li><p>本质上,export default就是输出一个叫做default的变量或函数,然后系统外界为它取任意名字,所以:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// add.js</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>add <span class="token keyword">as</span> <span class="token keyword">default</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> add<span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>正是因为export default命令其实只是输出一个叫做default的变量,所以它后面不能跟变量声明语句</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 正确</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> a<span class="token punctuation">;</span><span class="token comment">//实际是变量的二次赋值</span>

<span class="token comment">// 正确</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 错误</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_17-4-复合写法" tabindex="-1"><a class="header-anchor" href="#_17-4-复合写法" aria-hidden="true">#</a> 17.4 复合写法</h3><p><strong>如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>模块的接口改名和整体输出</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 接口改名</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token keyword">as</span> myFoo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 整体输出</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,39),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","js17.html.vue"]]);export{k as default};
