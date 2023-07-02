import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-4b15eca5.js";const p={},e=t(`<h2 id="组件之间的通信方式" tabindex="-1"><a class="header-anchor" href="#组件之间的通信方式" aria-hidden="true">#</a> 组件之间的通信方式</h2><h3 id="_13-1-props" tabindex="-1"><a class="header-anchor" href="#_13-1-props" aria-hidden="true">#</a> 13.1 props</h3><p>父子组件间通信的基本方式</p><p>属性值的 2 大类型:</p><p>​ 一般: 父组件--&gt;子组件</p><p>​ 函数: 子组件--&gt;父组件</p><p>隔层组件间传递: 必须逐层传递(麻烦)</p><p>兄弟组件间: 必须借助父组件(麻烦)</p><h4 id="_13-1-1-声明" tabindex="-1"><a class="header-anchor" href="#_13-1-1-声明" aria-hidden="true">#</a> 13.1.1 声明</h4><p>在组件内声明所有的 props</p><ol><li><p>方式一: 只指定名称 <code>props:[&#39;name&#39;,&#39;age&#39;,&#39;setName&#39;]</code></p></li><li><p>方式二: 指定名称和类型</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
	<span class="token literal-property property">setName</span><span class="token operator">:</span>Function
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>方式三: 指定名称/类型/必要性/默认值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span>xxx
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h4 id="_13-1-2-优缺点" tabindex="-1"><a class="header-anchor" href="#_13-1-2-优缺点" aria-hidden="true">#</a> 13.1.2 优缺点</h4><ol><li><p>此方式用于父组件向子组件传递数据</p></li><li><p>所有标签属性都会成为组件对象的属性, 模板页面可以直接引用</p></li><li><p>问题:</p></li></ol><p>a. 如果需要向非子后代传递数据必须多层逐层传递</p><p>b. 兄弟组件间也不能直接 props 通信, 必须借助父组件才可以</p><h3 id="_13-2-自定义事件" tabindex="-1"><a class="header-anchor" href="#_13-2-自定义事件" aria-hidden="true">#</a> 13.2 自定义事件</h3><p><strong>子组件也无法使用组件的事件,要想传递给父组件事件,需要通过内置的$emit 方法并传入事件的名字,来向父级组件触发一个事件</strong></p><h4 id="_13-2-1-emit-向子组件传递事件" tabindex="-1"><a class="header-anchor" href="#_13-2-1-emit-向子组件传递事件" aria-hidden="true">#</a> 13.2.1 $emit()向子组件传递事件</h4><p><strong>在子组件的引用中绑定事件的自定义名字,然后绑定父组件的事件,在子组件中通过抛出事件$emit 来使用父组件的事件</strong></p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--引用子组件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name"><span class="token namespace">v-on:</span>enlarge-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doSomething<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--子组件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;enlarge-text&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&quot;&lt;button v-on:click=&quot;</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;enlarge-text&#39;</span><span class="token punctuation">)</span><span class="token string">&quot;&gt;Enlarge text&lt;/button&gt;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="_13-2-2-emit-向父组件抛出值" tabindex="-1"><a class="header-anchor" href="#_13-2-2-emit-向父组件抛出值" aria-hidden="true">#</a> 13.2.2 $emit()向父组件抛出值</h4><p><strong>子父组件的函数中写入参数,那么当子组件使用$emit 的时候可以传入后面多个参数来将值传递给父组件的参数,从而实现子组件向父组件传值</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name"><span class="token namespace">v-on:</span>enlarge-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onEnlargeText<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;blog-post&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&quot;&lt;button v-on:click=&quot;</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;enlarge-text&#39;</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token string">&quot;&gt;Enlarge text&lt;/button&gt;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      el<span class="token operator">=</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">postFontSize</span><span class="token operator">:</span><span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">onEnlargeText</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">enlargeAmount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>postFontSize <span class="token operator">+=</span> enlargeAmount
      <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意:**虽然子组件能触发父组件的方法或值,但是这些方法中的 this 指向依然是父组件,子组件只是使用的这些方法,同时传递了一些参数</p><h4 id="_13-2-3-实例" tabindex="-1"><a class="header-anchor" href="#_13-2-3-实例" aria-hidden="true">#</a> 13.2.3 实例</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 需要自定义一个事件，事件名最好与对应方法名一致 --&gt;</span>
      <span class="token comment">&lt;!-- 在子组件调用的地方使用，即可调用
          this.$emit(&#39;addItem&#39;, this.value)
          参数格式：自定义事件名，后面是要跟参数 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myHeader</span> <span class="token attr-name">@addItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addItem<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myHeader</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> myHeader <span class="token keyword">from</span> <span class="token string">&quot;./myHeader&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 读取localStorage保存的数据</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;todos_key&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;[]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      myHeader<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newItem <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> newValue<span class="token punctuation">,</span> <span class="token literal-property property">complete</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将数据(json)保存到localStorage</span>
          localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;todos_key&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-2-4-on-与-once" tabindex="-1"><a class="header-anchor" href="#_13-2-4-on-与-once" aria-hidden="true">#</a> 13.2.4 $on 与$once</h4><ul><li><strong>$on 属性用于监听在当前实例上的自定义事件,事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数</strong></li><li><strong>$once 属性与$on 一致,只不过只会触发一次,触发一次后移除该事件</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
vm<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
vm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; &quot;hi&quot;</span>
</code></pre></div><p>**注意:**在组件化中通过创建一个中间的 Vue 实例可以进行中转完成父子组件的事件传值</p><h4 id="_13-2-5-on-实例" tabindex="-1"><a class="header-anchor" href="#_13-2-5-on-实例" aria-hidden="true">#</a> 13.2.5 $on()实例</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 要给组件一个ref，在接下来进行绑定 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myHeader</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myhead<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myHeader</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> myHeader <span class="token keyword">from</span> <span class="token string">&quot;./myHeader&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 读取localStorage保存的数据</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;todos_key&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;[]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      myHeader<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 需要在mouunted()中使用$on,理由是要在程序还没有开始的时候就挂载该事件 // 确保其总能被触发</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 哪个子组件要，就给谁$on</span>
      <span class="token comment">// 不能写成this.$on(&#39;addItem&#39;, this.addItem)</span>
      <span class="token comment">// 参数为自定义事件名，要使用的方法</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;addItem&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newItem <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> newValue<span class="token punctuation">,</span> <span class="token literal-property property">complete</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将数据(json)保存到localStorage</span>
          localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;todos_key&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-2-6-总结" tabindex="-1"><a class="header-anchor" href="#_13-2-6-总结" aria-hidden="true">#</a> 13.2.6 总结</h4><ol><li><p>方式一:</p><p>通过 <code>v-on</code>绑定<code>@delete_todo=&quot;deleteTodo&quot;</code></p><p>触发事件(只能在父组件中接收) <code>this.$emit(eventName,data)</code></p></li><li><p>方式二:</p><p>通过</p><div class="language-JS" data-ext="JS"><pre class="language-JS"><code>$on() this.$refs.xxx.$on(&#39;delete_todo&#39;,
		function(todo){
		this.deleteTodo(todo)
	})
)

</code></pre></div></li></ol><ol><li><p>此方式只用于子组件向父组件发送消息(数据)，用来取代 function props(用来取代方法)</p></li><li><p>问题: 隔代组件或兄弟组件间通信此种方式不合适</p></li></ol><h3 id="_13-3-发布-订阅通信机制" tabindex="-1"><a class="header-anchor" href="#_13-3-发布-订阅通信机制" aria-hidden="true">#</a> 13.3 发布-订阅通信机制</h3><h4 id="_13-3-1-pubsub-js-的下载引入" tabindex="-1"><a class="header-anchor" href="#_13-3-1-pubsub-js-的下载引入" aria-hidden="true">#</a> 13.3.1 pubsub-js 的下载引入</h4><p>使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制</p><p><strong>工具库</strong> : PubSubJS</p><p><strong>下载</strong>: npm install pubsub-js --S --D</p><p>使用:</p><div class="language-JS" data-ext="JS"><pre class="language-JS"><code>import PubSub from &#39;pubsub-js&#39; //引入
PubSub.subscribe(&#39;delete&#39;, function(msg, data){ }); //订阅
PubSub.publish(&#39;delete&#39;, data) //发布消息

</code></pre></div><p>优点: 可以支持任意关系组件之间的通信</p><h4 id="_13-3-2-发布消息" tabindex="-1"><a class="header-anchor" href="#_13-3-2-发布消息" aria-hidden="true">#</a> 13.3.2 发布消息</h4><p>发布------触发事件监听</p><div class="language-JS" data-ext="JS"><pre class="language-JS"><code>PubSub.publish(&#39;msg&#39;,data)

msg：给本次发布-订阅取的名字

data：需要传递的参数
</code></pre></div><h4 id="_13-3-3-订阅消息" tabindex="-1"><a class="header-anchor" href="#_13-3-3-订阅消息" aria-hidden="true">#</a> 13.3.3 订阅消息</h4><p>订阅------绑定事件监听</p><div class="language-JS" data-ext="JS"><pre class="language-JS"><code>PubSub.subscribe(&#39;msg&#39;,
	(msg,data) =&gt; {


})
</code></pre></div><p>msg: 对应发布时的名字</p><p>data: 发布时传递过来的参数</p><p>回调函数: 处理的方法，再此建议用箭头函数，避免使用 this 的时候指向错误</p><h4 id="_13-3-4-实例" tabindex="-1"><a class="header-anchor" href="#_13-3-4-实例" aria-hidden="true">#</a> 13.3.4 实例</h4><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>// 父组件
&lt;template&gt;
  &lt;div class=&quot;todo-container&quot;&gt;
    &lt;div class=&quot;todo-wrap&quot;&gt;
      &lt;!-- 需要给它的子组件(也就是这个组件的父组件)绑定一个remove(index)方法 --&gt;
      &lt;myMain :items=&quot;items&quot;&gt;&lt;/myMain&gt;
    &lt;/div&gt;
   &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import myMain from &#39;./myMain&#39;
  import Pubsub from &#39;pubsub-js&#39;
  export default {
    data () {
      return {
        // 读取localStorage保存的数据
        items: JSON.parse(localStorage.getItem(&#39;todos_key&#39;) || &#39;[]&#39;)
      }
    },
    components: {
      myMain
    },
    mounted () {
      // 在此进行发布，理由是要在程序还没有开始的时候就挂载该事件，确保其总能被触发
      // 取名为delItems，msg不可省略，指代delItems，index为参数
      Pubsub.subscribe(&#39;delItems&#39;, (msg, index) =&gt; {
        // 用箭头函数使得this指向该实例
        this.remove(index)
      })
    },
    methods: {
      remove (index) {
        this.items.splice(index, 1)
      }
    }
  }
&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-4-slot-传递标签" tabindex="-1"><a class="header-anchor" href="#_13-4-slot-传递标签" aria-hidden="true">#</a> 13.4 Slot 传递标签</h3><h4 id="_13-4-1-理解" tabindex="-1"><a class="header-anchor" href="#_13-4-1-理解" aria-hidden="true">#</a> 13.4.1 理解</h4><p>此方式用于父组件向子组件传递标签数据</p><h4 id="_13-4-2-用法" tabindex="-1"><a class="header-anchor" href="#_13-4-2-用法" aria-hidden="true">#</a> 13.4.2 用法</h4><p>子组件 Child.vue</p><div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code>&lt;template&gt;
	&lt;div&gt;
		&lt;slotname=&quot;xxx&quot;&gt;不确定的标签结构 1&lt;/slot&gt;
		&lt;div&gt;组件确定的标签结构&lt;/div&gt;
		&lt;slotname=&quot;yyy&quot;&gt;不确定的标签结构 2&lt;/slot&gt;
	&lt;/div&gt;
&lt;/template&gt;
</code></pre></div><p>父组件 Parent.vue</p><div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code>&lt;child&gt;
	&lt;div slot=&quot;xxx&quot;&gt;xxx 对应的标签结构&lt;/div&gt;
	&lt;div slot=&quot;yyy&quot;&gt;yyyy 对应的标签结构&lt;/div&gt;
&lt;/child&gt;
</code></pre></div>`,62),o=[e];function l(c,i){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","vue13.html.vue"]]);export{d as default};
