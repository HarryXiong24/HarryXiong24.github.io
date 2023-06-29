import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-eb11fd4f.js";const t={},i=a(`<h2 id="对象数组更新" tabindex="-1"><a class="header-anchor" href="#对象数组更新" aria-hidden="true">#</a> 对象数组更新</h2><h3 id="_16-1-vue-set" tabindex="-1"><a class="header-anchor" href="#_16-1-vue-set" aria-hidden="true">#</a> 16.1 Vue.set</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span> target<span class="token punctuation">,</span> propertyName<span class="token operator">/</span>index<span class="token punctuation">,</span> value <span class="token punctuation">)</span>

参数：

<span class="token punctuation">{</span>Object <span class="token operator">|</span> Array<span class="token punctuation">}</span> target
<span class="token punctuation">{</span>string <span class="token operator">|</span> number<span class="token punctuation">}</span> propertyName<span class="token operator">/</span>index
<span class="token punctuation">{</span>any<span class="token punctuation">}</span> value
返回值：设置的值。

用法：

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue <span class="token function">无法探测普通的新增属性</span>
 <span class="token punctuation">(</span>比如 <span class="token keyword">this</span><span class="token punctuation">.</span>myObject<span class="token punctuation">.</span>newProperty <span class="token operator">=</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span>

注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-2vm-set" tabindex="-1"><a class="header-anchor" href="#_16-2vm-set" aria-hidden="true">#</a> 16.2vm.$set</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span> target<span class="token punctuation">,</span> propertyName<span class="token operator">/</span>index<span class="token punctuation">,</span> value <span class="token punctuation">)</span>
参数：

<span class="token punctuation">{</span>Object <span class="token operator">|</span> Array<span class="token punctuation">}</span> target
<span class="token punctuation">{</span>string <span class="token operator">|</span> number<span class="token punctuation">}</span> propertyName<span class="token operator">/</span>index
<span class="token punctuation">{</span>any<span class="token punctuation">}</span> value
返回值：设置的值。

用法：

这是全局 Vue<span class="token punctuation">.</span>set 的别名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-3-vue-set-与-vm-set" tabindex="-1"><a class="header-anchor" href="#_16-3-vue-set-与-vm-set" aria-hidden="true">#</a> 16.3 Vue.set 与 vm.$set</h3><p><strong>向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性</strong></p><ul><li><p><strong>数组添加</strong> Vue 中的 data 中的数组可以通过 Vue 返回后的实例进行改变,所拥有的方法同原生 JS,变异方法会直接改变数组,重新渲染页面,但**如果不是变异方法也可以通过重新赋值来使用,Vue 不会直接重新渲染,**而是由其内部高效的机制 **注意:**如果直接通过赋值改变数组中成员的值或者 length 的长度,并不能够渲染页面,这是由 JS 内部的机制决定的 <strong>解决方案:</strong></p></li><li><ul><li><code>Vue.set(vm.items, indexOfItem, newValue)</code><strong>(第一个参数为素组名,第二个为数组索引,第三个为成员值)</strong></li></ul></li><li><ul><li><code>vm.items.splice(indexOfItem, 1, newValue)</code></li></ul></li><li><ul><li><code>vm.$set(vm.items, indexOfItem, newValue)</code><strong>(其实 vm.$set()就是 Vue.set()方法的别名)</strong></li></ul></li><li><ul><li>**如果要解决改变 length 属性的问题,**使用<code>vm.items.splice(newLength)</code></li></ul></li><li><p><strong>对象添加</strong> 如果要更新对象的属性,在已有属性的情况下改变原来的值是可以进行动态更新的,但是**如果是添加一个新的属性或为一个对象添加新的属性不能做到响应式的更新,**这也是由于 JS 的内部机制决定的 <strong>解决方案:</strong></p></li><li><ul><li><code>Vue.set(vm.userProfile, &#39;age&#39;, 27</code>)<strong>(第一个参数为对象名,第二个为键名,第三个为键值)</strong></li></ul></li><li><ul><li><code>vm.$set(vm.userProfile, &#39;age&#39;, 27)</code></li></ul></li><li><ul><li><p>如果要同时给多个属性使用下面这种方式</p><div class="language-text" data-ext="text"><pre class="language-text"><code>vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 27,
    favoriteColor: &#39;Vue Green&#39;
})
//不好的方式:
Object.assign(vm.userProfile, {
    age: 27,
    favoriteColor: &#39;Vue Green&#39;
})
</code></pre></div></li></ul></li></ul>`,8),l=[i];function o(c,u){return s(),e("div",null,l)}const d=n(t,[["render",o],["__file","vue16.html.vue"]]);export{d as default};
