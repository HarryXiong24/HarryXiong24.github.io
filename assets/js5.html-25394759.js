import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-932220eb.js";const p={},t=e(`<h2 id="逻辑语句" tabindex="-1"><a class="header-anchor" href="#逻辑语句" aria-hidden="true">#</a> 逻辑语句</h2><h3 id="_5-1-if语句" tabindex="-1"><a class="header-anchor" href="#_5-1-if语句" aria-hidden="true">#</a> 5.1 if语句</h3><p>if语句对一个属性或者表达式进行判断,里面的数或表达式最后会转换为布尔值，如果为真才执行执行if语句里面的代码</p><h4 id="_5-1-1-if" tabindex="-1"><a class="header-anchor" href="#_5-1-1-if" aria-hidden="true">#</a> 5.1.1 if</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//只判断是否为真</span>
</code></pre></div><h4 id="_5-1-2-if-else" tabindex="-1"><a class="header-anchor" href="#_5-1-2-if-else" aria-hidden="true">#</a> 5.1.2 if...else</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    consle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//判断时否为真,如果为真执行上面的代码,如果为假执行下面的代码</span>
</code></pre></div><h4 id="_5-1-3-if-else-if-else" tabindex="-1"><a class="header-anchor" href="#_5-1-3-if-else-if-else" aria-hidden="true">#</a> 5.1.3 if....else if....else</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">===</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    console<span class="token punctuation">,</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 从上到下一次进行判断,如果第一次判断为真则执行第一个判断里面的代码,如果第一次为假第二次为真则执行第二个  判断里的代码,如果都为假则执行第三个判断里的代码</span>
<span class="token comment">// 在这里else if可以写无数个,因为这个其实还是按照if...else的写法来写的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-switch语句" tabindex="-1"><a class="header-anchor" href="#_5-2-switch语句" aria-hidden="true">#</a> 5.2 switch语句</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span>：；
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
<span class="token punctuation">}</span>
<span class="token comment">//括号里的字姆依次与下面做全等(===)比较</span>
</code></pre></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>可以在<span class="token keyword">case</span>里面用数字或者字符一起用，只是做全等比较而已，比如和以x<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;abc&quot;</span><span class="token operator">:</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p><ul><li><strong>JS里面的switch中的case可以接受一个表达式</strong>，因为swich语句在其他语句时case里面只能是数字或者字符</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> score<span class="token operator">=</span><span class="token number">80</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">case</span> score<span class="token operator">&gt;=</span><span class="token number">60</span>：
<span class="token keyword">case</span> score<span class="token operator">&gt;=</span><span class="token number">50</span><span class="token operator">:</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>switch语句中每一个case后面需要加上break来表示跳出选择,不然就会一直往下面运行case直到遇到break或</li></ul><p>将里面的选项全部运行完</p>`,17),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","js5.html.vue"]]);export{k as default};
