import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e}from"./app-e6d46f41.js";const a={},o=e(`<h2 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理" aria-hidden="true">#</a> 会话管理</h2><h3 id="_7-1-cookie" tabindex="-1"><a class="header-anchor" href="#_7-1-cookie" aria-hidden="true">#</a> 7.1 Cookie</h3><h4 id="_7-1-1-servlet-cookie-方法" tabindex="-1"><a class="header-anchor" href="#_7-1-1-servlet-cookie-方法" aria-hidden="true">#</a> 7.1.1 Servlet Cookie 方法</h4><p>以下是在 Servlet 中操作 Cookie 时可使用的有用的方法列表。</p><table><thead><tr><th style="text-align:left;">序号</th><th style="text-align:left;">方法 &amp; 描述</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><strong>public void setDomain(String pattern)</strong> 该方法设置 cookie 适用的域，例如 runoob.com。</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><strong>public String getDomain()</strong> 该方法获取 cookie 适用的域，例如 runoob.com。</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><strong>public void setMaxAge(int expiry)</strong> 该方法设置 cookie 过期的时间（以秒为单位）。如果不这样设置，cookie 只会在当前 session 会话中持续有效。</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;"><strong>public int getMaxAge()</strong> 该方法返回 cookie 的最大生存周期（以秒为单位），默认情况下，-1 表示 cookie 将持续下去，直到浏览器关闭。</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;"><strong>public String getName()</strong> 该方法返回 cookie 的名称。名称在创建后不能改变。</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;"><strong>public void setValue(String newValue)</strong> 该方法设置与 cookie 关联的值。</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;"><strong>public String getValue()</strong> 该方法获取与 cookie 关联的值。</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;"><strong>public void setPath(String uri)</strong> 该方法设置 cookie 适用的路径。如果您不指定路径，与当前页面相同目录下的（包括子目录下的）所有 URL 都会返回 cookie。</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;"><strong>public String getPath()</strong> 该方法获取 cookie 适用的路径。</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;"><strong>public void setSecure(boolean flag)</strong> 该方法设置布尔值，表示 cookie 是否应该只在加密的（即 SSL）连接上发送。</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;"><strong>public void setComment(String purpose)</strong> 设置cookie的注释。该注释在浏览器向用户呈现 cookie 时非常有用。</td></tr><tr><td style="text-align:left;">12</td><td style="text-align:left;"><strong>public String getComment()</strong> 获取 cookie 的注释，如果 cookie 没有注释则返回 null。</td></tr></tbody></table><h4 id="_7-1-2-通过-servlet-设置-cookie" tabindex="-1"><a class="header-anchor" href="#_7-1-2-通过-servlet-设置-cookie" aria-hidden="true">#</a> 7.1.2 通过 Servlet 设置 Cookie</h4><p>通过 Servlet 设置 Cookie 包括三个步骤：</p><p>**(1) 创建一个 Cookie 对象：**您可以调用带有 cookie 名称和 cookie 值的 Cookie 构造函数，cookie 名称和 cookie 值都是字符串。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>请记住，无论是名字还是值，都不应该包含空格或以下任何字符：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span> <span class="token punctuation">]</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">,</span> &quot; <span class="token operator">/</span> <span class="token operator">?</span> @ <span class="token operator">:</span> <span class="token punctuation">;</span>
</code></pre></div><p>**(2) 设置最大生存周期：**您可以使用 setMaxAge 方法来指定 cookie 能够保持有效的时间（以秒为单位）。下面将设置一个最长有效期为 24 小时的 cookie。</p><div class="language-java" data-ext="java"><pre class="language-java"><code>cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>**(3) 发送 Cookie 到 HTTP 响应头：**您可以使用 <strong>response.addCookie</strong> 来添加 HTTP 响应头中的 Cookie，如下所示：</p><div class="language-java" data-ext="java"><pre class="language-java"><code>response<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_7-1-3-通过-servlet-读取-cookie" tabindex="-1"><a class="header-anchor" href="#_7-1-3-通过-servlet-读取-cookie" aria-hidden="true">#</a> 7.1.3 通过 Servlet 读取 Cookie</h4><p>要读取 Cookie，您需要通过调用 <code>HttpServletRequest</code> 的 <code>getCookies()</code> 方法创建一个 <code>javax.servlet.http.Cookie</code>对象的数组。然后循环遍历数组，并使用 getName() 和 getValue() 方法来访问每个 cookie 和关联的值。</p><p>一般通过循环来遍历cookie</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>cookies <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cookie</span> cookie <span class="token operator">:</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// cookie的名字</span>
    	cookie<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">// cookie的值</span>
    	cookie<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7-1-4-通过-servlet-删除-cookie" tabindex="-1"><a class="header-anchor" href="#_7-1-4-通过-servlet-删除-cookie" aria-hidden="true">#</a> 7.1.4 通过 Servlet 删除 Cookie</h4><p>删除 Cookie 是非常简单的。如果您想删除一个 cookie，那么您只需要按照以下三个步骤进行：</p><ul><li>读取一个现有的 cookie，并把它存储在 Cookie 对象中。</li><li>使用 <strong>setMaxAge()</strong> 方法设置 cookie 的年龄为零，来删除现有的 cookie。</li><li>把这个 cookie 添加到响应头。</li></ul><h3 id="_7-2-session" tabindex="-1"><a class="header-anchor" href="#_7-2-session" aria-hidden="true">#</a> 7.2 Session</h3><h4 id="_7-2-1-seeion对象及其主要方法" tabindex="-1"><a class="header-anchor" href="#_7-2-1-seeion对象及其主要方法" aria-hidden="true">#</a> 7.2.1 Seeion对象及其主要方法</h4><p>Servlet 提供了 HttpSession 接口，该接口提供了一种跨多个页面请求或访问网站时识别用户以及存储有关用户信息的方式。</p><p>Servlet 容器使用这个接口来创建一个 HTTP 客户端和 HTTP 服务器之间的 session 会话。会话持续一个指定的时间段，跨多个连接或页面请求。</p><p>您会通过调用 HttpServletRequest 的公共方法 <strong>getSession()</strong> 来获取 HttpSession 对象，如下所示：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>你需要在向客户端发送任何文档内容之前调用 <em>request.getSession()</em>。下面总结了 HttpSession 对象中可用的几个重要的方法：</p><table><thead><tr><th style="text-align:left;">序号</th><th style="text-align:left;">方法 &amp; 描述</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><strong>public Object getAttribute(String name)</strong> 该方法返回在该 session 会话中具有指定名称的对象，如果没有指定名称的对象，则返回 null。</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><strong>public Enumeration getAttributeNames()</strong> 该方法返回 String 对象的枚举，String 对象包含所有绑定到该 session 会话的对象的名称。</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><strong>public long getCreationTime()</strong> 该方法返回该 session 会话被创建的时间，自格林尼治标准时间 1970 年 1 月 1 日午夜算起，以毫秒为单位。</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;"><strong>public String getId()</strong> 该方法返回一个包含分配给该 session 会话的唯一标识符的字符串。</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;"><strong>public long getLastAccessedTime()</strong> 该方法返回客户端最后一次发送与该 session 会话相关的请求的时间自格林尼治标准时间 1970 年 1 月 1 日午夜算起，以毫秒为单位。</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;"><strong>public int getMaxInactiveInterval()</strong> 该方法返回 Servlet 容器在客户端访问时保持 session 会话打开的最大时间间隔，以秒为单位。</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;"><strong>public void invalidate()</strong> 该方法指示该 session 会话无效，并解除绑定到它上面的任何对象。</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;"><strong>public boolean isNew()</strong> 如果客户端还不知道该 session 会话，或者如果客户选择不参入该 session 会话，则该方法返回 true。</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;"><strong>public void removeAttribute(String name)</strong> 该方法将从该 session 会话移除指定名称的对象。</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;"><strong>public void setAttribute(String name, Object value)</strong> 该方法使用指定的名称绑定一个对象到该 session 会话。</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;"><strong>public void setMaxInactiveInterval(int interval)</strong> 该方法在 Servlet 容器指示该 session 会话无效之前，指定客户端请求之间的时间，以秒为单位。</td></tr></tbody></table><h4 id="_7-2-2-创建或读取session会话" tabindex="-1"><a class="header-anchor" href="#_7-2-2-创建或读取session会话" aria-hidden="true">#</a> 7.2.2 创建或读取Session会话</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// 有则返回有的，没有则创建新的</span>
<span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读取Session保存一个名为code的数据值</span>
<span class="token class-name">String</span> correctCode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 给Session设置一个名为loginUser的数据值，值为userName</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;loginUser&quot;</span><span class="token punctuation">,</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="_7-2-3-删除-session-会话数据" tabindex="-1"><a class="header-anchor" href="#_7-2-3-删除-session-会话数据" aria-hidden="true">#</a> 7.2.3 删除 Session 会话数据</h4><p>当您完成了一个用户的 session 会话数据，您有以下几种选择：</p><ul><li>**移除一个特定的属性：**您可以调用 <em>public void removeAttribute(String name)</em> 方法来删除与特定的键相关联的值。</li><li>**删除整个 session 会话：**您可以调用 <em>public void invalidate()</em> 方法来丢弃整个 session 会话。</li><li>**设置 session 会话过期时间：**您可以调用 <em>public void setMaxInactiveInterval(int interval)</em> 方法来单独设置 session 会话超时。</li><li>**注销用户：**如果使用的是支持 servlet 2.4 的服务器，您可以调用 <strong>logout</strong> 来注销 Web 服务器的客户端，并把属于所有用户的所有 session 会话设置为无效。</li><li>**web.xml 配置：**如果您使用的是 Tomcat，除了上述方法，您还可以在 web.xml 文件中配置 session 会话超时，如下所示：</li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-config</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-timeout</span><span class="token punctuation">&gt;</span></span>15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-timeout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-config</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>上面实例中的超时时间是以分钟为单位，将覆盖 Tomcat 中默认的 30 分钟超时时间。</p><p>在一个 Servlet 中的 getMaxInactiveInterval() 方法会返回 session 会话的超时时间，以秒为单位。所以，如果在 web.xml 中配置 session 会话超时时间为 15 分钟，那么 getMaxInactiveInterval() 会返回 900。</p>`,38),l=[o];function i(p,c){return s(),n("div",null,l)}const d=t(a,[["render",i],["__file","s7.html.vue"]]);export{d as default};
