import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as s,b as n,d as l,e as a}from"./app-932220eb.js";const i={},u=a(`<h1 id="编程风格" tabindex="-1"><a class="header-anchor" href="#编程风格" aria-hidden="true">#</a> 编程风格</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>“编程风格”（programming style）指的是编写代码的样式规则。不同的程序员，往往有不同的编程风格。</p><p>有人说，编译器的规范叫做“语法规则”（grammar），这是程序员必须遵守的；而编译器忽略的部分，就叫“编程风格”（programming style），这是程序员可以自由选择的。这种说法不完全正确，程序员固然可以自由选择编程风格，但是好的编程风格有助于写出质量更高、错误更少、更易于维护的程序。</p><p>所以，编程风格的选择不应该基于个人爱好、熟悉程度、打字量等因素，而要考虑如何尽量使代码清晰易读、减少出错。你选择的，不是你喜欢的风格，而是一种能够清晰表达你的意图的风格。这一点，对于 JavaScript 这种语法自由度很高的语言尤其重要。</p><p>必须牢记的一点是，如果你选定了一种“编程风格”，就应该坚持遵守，切忌多种风格混用。如果你加入他人的项目，就应该遵守现有的风格。</p><h2 id="缩进" tabindex="-1"><a class="header-anchor" href="#缩进" aria-hidden="true">#</a> 缩进</h2><p>行首的空格和 Tab 键，都可以产生代码缩进效果（indent）。</p><p>Tab 键可以节省击键次数，但不同的文本编辑器对 Tab 的显示不尽相同，有的显示四个空格，有的显示两个空格，所以有人觉得，空格键可以使得显示效果更统一。</p><p>无论你选择哪一种方法，都是可以接受的，要做的就是始终坚持这一种选择。不要一会使用 Tab 键，一会使用空格键。</p><h2 id="区块" tabindex="-1"><a class="header-anchor" href="#区块" aria-hidden="true">#</a> 区块</h2><p>如果循环和判断的代码体只有一行，JavaScript 允许该区块（block）省略大括号。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码的原意可能是下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>但是，实际效果却是下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>因此，建议总是使用大括号表示区块。</p><p>另外，区块起首的大括号的位置，有许多不同的写法。最流行的有两种，一种是起首的大括号另起一行。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>block
<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>另一种是起首的大括号跟在关键字的后面。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>block <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一般来说，这两种写法都可以接受。但是，JavaScript 要使用后一种，因为 JavaScript 会自动添加句末的分号，导致一些难以察觉的错误。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 相当于</span>
<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码的原意，是要返回一个对象，但实际上返回的是<code>undefined</code>，因为 JavaScript 自动在<code>return</code>语句后面添加了分号。为了避免这一类错误，需要写成下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span> <span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>因此，表示区块起首的大括号，不要另起一行。</p><h2 id="圆括号" tabindex="-1"><a class="header-anchor" href="#圆括号" aria-hidden="true">#</a> 圆括号</h2><p>圆括号（parentheses）在 JavaScript 中有两种作用，一种表示函数的调用，另一种表示表达式的组合（grouping）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 圆括号表示函数的调用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 圆括号表示表达式的组合</span>
<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span>
</code></pre></div><p>建议可以用空格，区分这两种不同的括号。</p><blockquote><ol><li>表示函数调用时，函数名与左括号之间没有空格。</li><li>表示函数定义时，函数名与左括号之间没有空格。</li><li>其他情况时，前面位置的语法元素与左括号之间，都有一个空格。</li></ol></blockquote><p>按照上面的规则，下面的写法都是不规范的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span> <span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
<span class="token keyword">return</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre></div><p>上面代码的最后一行是一个匿名函数，<code>function</code>是语法关键字，不是函数名，所以与左括号之间应该要有一个空格。</p><h2 id="行尾的分号" tabindex="-1"><a class="header-anchor" href="#行尾的分号" aria-hidden="true">#</a> 行尾的分号</h2><p>分号表示一条语句的结束。JavaScript 允许省略行尾的分号。事实上，确实有一些开发者行尾从来不写分号。但是，由于下面要讨论的原因，建议还是不要省略这个分号。</p><h3 id="不使用分号的情况" tabindex="-1"><a class="header-anchor" href="#不使用分号的情况" aria-hidden="true">#</a> 不使用分号的情况</h3><p>首先，以下三种情况，语法规定本来就不需要在结尾添加分号。</p><p><strong>（1）for 和 while 循环</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>
</code></pre></div><p>注意，<code>do...while</code>循环是有分号的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
  a<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 分号不能省略</span>
</code></pre></div><p><strong>（2）分支语句：if，switch，try</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>
</code></pre></div><p><strong>（3）函数的声明语句</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有分号</span>
</code></pre></div><p>注意，函数表达式仍然要使用分号。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>以上三种情况，如果使用了分号，并不会出错。因为，解释引擎会把这个分号解释为空语句。</p><h3 id="分号的自动添加" tabindex="-1"><a class="header-anchor" href="#分号的自动添加" aria-hidden="true">#</a> 分号的自动添加</h3><p>除了上一节的三种情况，所有语句都应该使用分号。但是，如果没有使用分号，大多数情况下，JavaScript 会自动添加。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>这种语法特性被称为“分号的自动添加”（Automatic Semicolon Insertion，简称 ASI）。</p><p>因此，有人提倡省略句尾的分号。麻烦的是，如果下一行的开始可以与本行的结尾连在一起解释，JavaScript 就不会自动添加分号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等同于 var a = 3</span>
<span class="token keyword">var</span>
a
<span class="token operator">=</span>
<span class="token number">3</span>

<span class="token comment">// 等同于 &#39;abc&#39;.length</span>
<span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">.</span>length

<span class="token comment">// 等同于 return a + b;</span>
<span class="token keyword">return</span> a <span class="token operator">+</span>
b<span class="token punctuation">;</span>

<span class="token comment">// 等同于 obj.foo(arg1, arg2);</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span>
arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于 3 * 2 + 10 * (27 / 6)</span>
<span class="token number">3</span> <span class="token operator">*</span> <span class="token number">2</span>
<span class="token operator">+</span>
<span class="token number">10</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">27</span> <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码都会多行放在一起解释，不会每一行自动添加分号。这些例子还是比较容易看出来的，但是下面这个例子就不那么容易看出来了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">=</span> <span class="token function">y</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
x <span class="token operator">=</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>下面是更多不会自动添加分号的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引擎解释为 c(d+e)</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token function">c</span>
<span class="token punctuation">(</span>d<span class="token operator">+</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引擎解释为 a = b/hi/g.exec(c).map(d)</span>
<span class="token comment">// 正则表达式的斜杠，会当作除法运算符</span>
a <span class="token operator">=</span> b
<span class="token operator">/</span>hi<span class="token operator">/</span>g<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 解释为&#39;b&#39;[&#39;red&#39;, &#39;green&#39;]，</span>
<span class="token comment">// 即把字符串当作一个数组，按索引取值</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 解释为 function (x) { return x }(a++)</span>
<span class="token comment">// 即调用匿名函数，结果f等于0</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token punctuation">}</span>
<span class="token punctuation">(</span>a<span class="token operator">++</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只有下一行的开始与本行的结尾，无法放在一起解释，JavaScript 引擎才会自动添加分号。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> a <span class="token operator">=</span> <span class="token number">0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token comment">// 等同于下面的代码，</span>
<span class="token comment">// 因为 0console 没有意义</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre></div><p>另外，如果一行的起首是“自增”（<code>++</code>）或“自减”（<code>--</code>）运算符，则它们的前面会自动添加分号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>

a
<span class="token operator">++</span>
b
<span class="token operator">--</span>
c

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token comment">// 1 2 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码之所以会得到<code>1 2 0</code>的结果，原因是自增和自减运算符前，自动加上了分号。上面的代码实际上等同于下面的形式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
a<span class="token punctuation">;</span>
<span class="token operator">++</span>b<span class="token punctuation">;</span>
<span class="token operator">--</span>c<span class="token punctuation">;</span>
</code></pre></div><p>如果<code>continue</code>、<code>break</code>、<code>return</code>和<code>throw</code>这四个语句后面，直接跟换行符，则会自动添加分号。这意味着，如果<code>return</code>语句返回的是一个对象的字面量，起首的大括号一定要写在同一行，否则得不到预期结果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span>
<span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;Jane&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 解释成</span>
<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span> <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;Jane&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>由于解释引擎自动添加分号的行为难以预测，因此编写代码的时候不应该省略行尾的分号。</p><p>不应该省略结尾的分号，还有一个原因。有些 JavaScript 代码压缩器（uglifier）不会自动添加分号，因此遇到没有分号的结尾，就会让代码保持原状，而不是压缩成一行，使得压缩无法得到最优的结果。</p><p>另外，不写结尾的分号，可能会导致脚本合并出错。所以，有的代码库在第一行语句开始前，会加上一个分号。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre></div><p>上面这种写法就可以避免与其他脚本合并时，排在前面的脚本最后一行语句没有分号，导致运行出错的问题。</p><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h2><p>JavaScript 最大的语法缺点，可能就是全局变量对于任何一个代码块，都是可读可写。这对代码的模块化和重复使用，非常不利。</p><p>因此，建议避免使用全局变量。如果不得不使用，可以考虑用大写字母表示变量名，这样更容易看出这是全局变量，比如<code>UPPER_CASE</code>。</p><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2><p>JavaScript 会自动将变量声明“提升”（hoist）到代码块（block）的头部。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> x<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这意味着，变量<code>x</code>是<code>if</code>代码块之前就存在了。为了避免可能出现的问题，最好把变量声明都放在代码块的头部。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写成</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面这样的写法，就容易看出存在一个全局的循环变量<code>i</code>。</p><p>另外，所有函数都应该在使用之前定义。函数内部的变量声明，都应该放在函数的头部。</p><h2 id="with-语句" tabindex="-1"><a class="header-anchor" href="#with-语句" aria-hidden="true">#</a> with 语句</h2><p><code>with</code>可以减少代码的书写，但是会造成混淆。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
　foo <span class="token operator">=</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面的代码，可以有四种运行结果：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>o<span class="token punctuation">.</span>foo <span class="token operator">=</span> bar<span class="token punctuation">;</span>
o<span class="token punctuation">.</span>foo <span class="token operator">=</span> o<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
foo <span class="token operator">=</span> bar<span class="token punctuation">;</span>
foo <span class="token operator">=</span> o<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
</code></pre></div><p>这四种结果都可能发生，取决于不同的变量是否有定义。因此，不要使用<code>with</code>语句。</p><h2 id="相等和严格相等" tabindex="-1"><a class="header-anchor" href="#相等和严格相等" aria-hidden="true">#</a> 相等和严格相等</h2><p>JavaScript 有两个表示相等的运算符：“相等”（<code>==</code>）和“严格相等”（<code>===</code>）。</p><p>相等运算符会自动转换变量类型，造成很多意想不到的情况。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token comment">// true</span>
<span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token comment">// true</span>
<span class="token number">2</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;false&#39;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span> <span class="token comment">// true</span>
<span class="token string">&#39; \\t\\r\\n &#39;</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true</span>
</code></pre></div><p>因此，建议不要使用相等运算符（<code>==</code>），只使用严格相等运算符（<code>===</code>）。</p><h2 id="语句的合并" tabindex="-1"><a class="header-anchor" href="#语句的合并" aria-hidden="true">#</a> 语句的合并</h2><p>有些程序员追求简洁，喜欢合并不同目的的语句。比如，原来的语句是</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>他喜欢写成下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>虽然语句少了一行，但是可读性大打折扣，而且会造成误读，让别人误解这行代码的意思是下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> （a <span class="token operator">===</span> b）<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>建议不要将不同目的的语句，合并成一行。</p><h2 id="自增和自减运算符" tabindex="-1"><a class="header-anchor" href="#自增和自减运算符" aria-hidden="true">#</a> 自增和自减运算符</h2><p>自增（<code>++</code>）和自减（<code>--</code>）运算符，放在变量的前面或后面，返回的值不一样，很容易发生错误。事实上，所有的<code>++</code>运算符都可以用<code>+= 1</code>代替。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">++</span>x
<span class="token comment">// 等同于</span>
x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>改用<code>+= 1</code>，代码变得更清晰了。</p><p>建议自增（<code>++</code>）和自减（<code>--</code>）运算符尽量使用<code>+=</code>和<code>-=</code>代替。</p><h2 id="switch-case-结构" tabindex="-1"><a class="header-anchor" href="#switch-case-结构" aria-hidden="true">#</a> switch...case 结构</h2><p><code>switch...case</code>结构要求，在每一个<code>case</code>的最后一行必须是<code>break</code>语句，否则会接着运行下一个<code>case</code>。这样不仅容易忘记，还会造成代码的冗长。</p><p>而且，<code>switch...case</code>不使用大括号，不利于代码形式的统一。此外，这种结构类似于<code>goto</code>语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doAction</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;hack&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;hack&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;slash&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;slash&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;run&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;run&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid action.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码建议改写成对象结构。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doAction</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;hack&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;hack&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;slash&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;slash&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;run&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;run&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> actions<span class="token punctuation">[</span>action<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid action.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> actions<span class="token punctuation">[</span>action<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，建议<code>switch...case</code>结构可以用对象结构代替。</p><h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h2><p>从本节开始，将探讨如何将 ES6 的新语法，运用到编码实践之中，与传统的 JavaScript 语法结合在一起，写出合理的、易于阅读和维护的代码。</p>`,116),r={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"},k=a(`<h3 id="let-取代-var" tabindex="-1"><a class="header-anchor" href="#let-取代-var" aria-hidden="true">#</a> let 取代 var</h3><p>ES6 提出了两个新的声明变量的命令：<code>let</code>和<code>const</code>。其中，<code>let</code>完全可以取代<code>var</code>，因为两者语义相同，而且<code>let</code>没有副作用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码如果用<code>var</code>替代<code>let</code>，实际上就声明了两个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，<code>var</code>命令做不到这一点。</p><p><code>var</code>命令存在变量提升效用，<code>let</code>命令没有这个问题。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码如果使用<code>var</code>替代<code>let</code>，<code>console.log</code>那一行就不会报错，而是会输出<code>undefined</code>，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。</p><p>所以，建议不再使用<code>var</code>命令，而是使用<code>let</code>命令取代。</p><h3 id="全局常量和线程安全" tabindex="-1"><a class="header-anchor" href="#全局常量和线程安全" aria-hidden="true">#</a> 全局常量和线程安全</h3><p>在<code>let</code>和<code>const</code>之间，建议优先使用<code>const</code>，尤其是在全局环境，不应该设置变量，只应设置常量。</p><p><code>const</code>优于<code>let</code>有几个原因。一个是<code>const</code>可以提醒阅读程序的人，这个变量不应该改变；另一个是<code>const</code>比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对<code>const</code>进行优化，所以多使用<code>const</code>，有利于提高程序的运行效率，也就是说<code>let</code>和<code>const</code>的本质区别，其实是编译器内部的处理不同。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>const</code>声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。</p><p>所有的函数都应该设置为常量。</p><p>长远来看，JavaScript 可能会有多线程的实现（比如 Intel 公司的 River Trail 那一类的项目），这时<code>let</code>表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。</p><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&quot;foobar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// acceptable</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foobar</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">bar</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2><p>使用数组成员对变量赋值时，优先使用解构赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
</code></pre></div><p>函数的参数如果是对象的成员，优先使用解构赋值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">;</span>
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">k1</span><span class="token operator">:</span> v1<span class="token punctuation">,</span> <span class="token literal-property property">k2</span><span class="token operator">:</span> v2<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">k1</span><span class="token operator">:</span> v1<span class="token punctuation">,</span>
  <span class="token literal-property property">k2</span><span class="token operator">:</span> v2
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">k1</span><span class="token operator">:</span> v1<span class="token punctuation">,</span> <span class="token literal-property property">k2</span><span class="token operator">:</span> v2 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">k1</span><span class="token operator">:</span> v1<span class="token punctuation">,</span>
  <span class="token literal-property property">k2</span><span class="token operator">:</span> v2<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用<code>Object.assign</code>方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// if reshape unavoidable</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象<code>obj</code>的最后一个属性名，需要计算得到。这时最好采用属性表达式，在新建<code>obj</code>的时候，将该属性与其他属性定义在一起。这样一来，所有属性就在一个地方定义了。</p><p>另外，对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> ref <span class="token operator">=</span> <span class="token string">&#39;some value&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ref</span><span class="token operator">:</span> ref<span class="token punctuation">,</span>

  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function-variable function">addValue</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>

  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function">addValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>使用扩展运算符（...）拷贝数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Array.from 方法，将类似数组的对象转为数组。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nodes <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>立即执行函数可以写成箭头函数的形式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome to the Internet.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数取代<code>Function.prototype.bind</code>，不应再用 self/_this/that 绑定 this。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">boundMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// acceptable</span>
<span class="token keyword">const</span> boundMethod <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> <span class="token function-variable function">boundMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。</p><p>所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> option <span class="token operator">=</span> <span class="token boolean">false</span></span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token punctuation">{</span> option <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，而 rest 运算符可以提供一个真正的数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用默认值语法设置函数参数的默认值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  opts <span class="token operator">=</span> opts <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="map-结构" tabindex="-1"><a class="header-anchor" href="#map-结构" aria-hidden="true">#</a> Map 结构</h2><p>注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要<code>key: value</code>的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h2><p>总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Queue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>extends</code>实现继承，因为这样更简单，不会有破坏<code>instanceof</code>运算的危险。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inherits&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">PeekableQueue</span><span class="token punctuation">(</span><span class="token parameter">contents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Queue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PeekableQueue<span class="token punctuation">,</span> Queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PeekableQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">PeekableQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p>首先，Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用<code>import</code>取代<code>require</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;moduleA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> func1 <span class="token operator">=</span> moduleA<span class="token punctuation">.</span>func1<span class="token punctuation">;</span>
<span class="token keyword">const</span> func2 <span class="token operator">=</span> moduleA<span class="token punctuation">.</span>func2<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> func1<span class="token punctuation">,</span> func2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;moduleA&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>使用<code>export</code>取代<code>module.exports</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// commonJS的写法</span>
<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> Breadcrumbs <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>nav <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Breadcrumbs<span class="token punctuation">;</span>

<span class="token comment">// ES6的写法</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Breadcrumbs</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>nav <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Breadcrumbs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果模块只有一个输出值，就使用<code>export default</code>，如果模块有多个输出值，就不使用<code>export default</code>，<code>export default</code>与普通的<code>export</code>不要同时使用。</p><p>不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> myObject <span class="token keyword">from</span> <span class="token string">&#39;./importModule&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> myObject <span class="token keyword">from</span> <span class="token string">&#39;./importModule&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>如果模块默认输出一个函数，函数名的首字母应该小写。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeStyleGuide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> makeStyleGuide<span class="token punctuation">;</span>
</code></pre></div><p>如果模块默认输出一个对象，对象名的首字母应该大写。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> StyleGuide <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> StyleGuide<span class="token punctuation">;</span>
</code></pre></div><h2 id="eslint-的使用" tabindex="-1"><a class="header-anchor" href="#eslint-的使用" aria-hidden="true">#</a> ESLint 的使用</h2><p>ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。</p><p>首先，在项目的根目录安装 ESLint。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint
</code></pre></div><p>然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-config-airbnb
$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
</code></pre></div><p>最后，在项目的根目录下新建一个<code>.eslintrc</code>文件，配置 ESLint。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint-config-airbnb&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>现在就可以检查，当前项目的代码是否符合预设的规则。</p><p><code>index.js</code>文件的代码如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> unused <span class="token operator">=</span> <span class="token string">&#39;I have no purpose!&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>使用 ESLint 检查这个文件，就会报出错误。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ npx eslint index.js
index.js
  <span class="token number">1</span>:1  error  Unexpected var, use <span class="token builtin class-name">let</span> or const instead          no-var
  <span class="token number">1</span>:5  error  unused is defined but never used                 no-unused-vars
  <span class="token number">4</span>:5  error  Expected indentation of <span class="token number">2</span> characters but found <span class="token number">4</span>  indent
  <span class="token number">4</span>:5  error  Unexpected var, use <span class="token builtin class-name">let</span> or const instead          no-var
  <span class="token number">5</span>:5  error  Expected indentation of <span class="token number">2</span> characters but found <span class="token number">4</span>  indent

✖ <span class="token number">5</span> problems <span class="token punctuation">(</span><span class="token number">5</span> errors, <span class="token number">0</span> warnings<span class="token punctuation">)</span>
</code></pre></div><p>上面代码说明，原文件有五个错误，其中两个是不应该使用<code>var</code>命令，而要使用<code>let</code>或<code>const</code>；一个是定义了变量，却没有使用；另外两个是行首缩进为 4 个空格，而不是规定的 2 个空格。</p>`,88);function d(v,m){const p=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("多家公司和组织已经公开了它们的风格规范，下面的内容主要参考了 "),s("a",r,[n("Airbnb"),l(p)]),n(" 公司的 JavaScript 风格规范。")]),k])}const y=t(i,[["render",d],["__file","jses24.html.vue"]]);export{y as default};
