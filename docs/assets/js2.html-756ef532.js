import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-e6d46f41.js";const o={},p=t(`<h2 id="js基本操作" tabindex="-1"><a class="header-anchor" href="#js基本操作" aria-hidden="true">#</a> JS基本操作</h2><h3 id="_2-1-js输出打印内容" tabindex="-1"><a class="header-anchor" href="#_2-1-js输出打印内容" aria-hidden="true">#</a> 2.1 js输出打印内容</h3><p><strong>通过js可以实现三种书写形式</strong></p><ul><li><strong>document.write()</strong>,这种形式是直接在页面中书写值,会把传入的值当作字符串传递在页面中,可以直观在页面看到</li><li><strong>console.log()</strong>,这种形式是在控制台中打印值,在页面中看不到,必须通过F12查看控制台才能看见</li><li><strong>alert()</strong>,这种形式是在打开页面时生成弹窗效果,这种方式也是最直观的,因为很容易被关注,但是只能在页面出现一次,不能一直存在</li></ul><h3 id="_2-2-三种提示框" tabindex="-1"><a class="header-anchor" href="#_2-2-三种提示框" aria-hidden="true">#</a> 2.2 三种提示框</h3><ul><li><p><strong>alert()警告框</strong></p></li><li><p>这种形式是在打开页面时生成弹窗效果,这种方式也是最直观的,因为很容易被关注,但是只能在页面出现一次,不能一直存在</p></li><li><p><strong>confirm()确认框</strong></p></li><li><p>向其中传入参数代表要用户确认的内容,有确认和取消两个选项,如果用户选择确认则返回true，选择取消则返回false,可以用一个变量来接收返回值进行js判断</p></li><li><p><strong>prompt()提示框</strong></p></li><li><p>传入的参数作为提示的内容,而用户可以在提示框中输入内容,返回值为用户输入结果转换的字符串，可以用一个变量接收<br> **注意:**当想用两个提示框的返回值进行比较时,相当于比较的两个字符串,所以是用的Unicode编码进行比较,如果想比较的是两个数值,则需要在接收返回值时做强制类型转换</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//+号强制转换返回值为number类型</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请输入:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,7),e=[p];function c(r,l){return s(),a("div",null,e)}const d=n(o,[["render",c],["__file","js2.html.vue"]]);export{d as default};
