import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as l,e as i}from"./app-e6d46f41.js";const r={},a=i('<h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2><h3 id="_9-1-概念" tabindex="-1"><a class="header-anchor" href="#_9-1-概念" aria-hidden="true">#</a> 9.1 概念</h3><p>Servlet 过滤器可以动态地拦截请求和响应，以变换或使用包含在请求或响应中的信息。</p><p>可以将一个或多个 Servlet 过滤器附加到一个 Servlet 或一组 Servlet。Servlet 过滤器也可以附加到 JavaServer Pages (JSP) 文件和 HTML 页面。调用 Servlet 前调用所有附加的 Servlet 过滤器。</p><p>Servlet 过滤器是可用于 Servlet 编程的 Java 类，可以实现以下目的：</p><ul><li>在客户端的请求访问后端资源之前，拦截这些请求。</li><li>在服务器的响应发送回客户端之前，处理这些响应。</li></ul><p>根据规范建议的各种类型的过滤器：</p><ul><li>身份验证过滤器（Authentication Filters）。</li><li>数据压缩过滤器（Data compression Filters）。</li><li>加密过滤器（Encryption Filters）。</li><li>触发资源访问事件过滤器。</li><li>图像转换过滤器（Image Conversion Filters）。</li><li>日志记录和审核过滤器（Logging and Auditing Filters）。</li><li>MIME-TYPE 链过滤器（MIME-TYPE Chain Filters）。</li><li>标记化过滤器（Tokenizing Filters）。</li><li>XSL/T 过滤器（XSL/T Filters），转换 XML 内容。</li></ul><p>过滤器通过 Web 部署描述符（web.xml）中的 XML 标签来声明，然后映射到您的应用程序的部署描述符中的 Servlet 名称或 URL 模式。</p><p>当 Web 容器启动 Web 应用程序时，它会为您在部署描述符中声明的每一个过滤器创建一个实例。</p><p>Filter的执行顺序与在web.xml配置文件中的配置顺序一致，一般把Filter配置在所有的Servlet之前。</p><h3 id="_9-2-使用" tabindex="-1"><a class="header-anchor" href="#_9-2-使用" aria-hidden="true">#</a> 9.2 使用</h3><p><strong>编写Filter</strong> 编写java类实现Filter接口，并实现其doFilter方法。</p><p><strong>设置Filter</strong> 使用注解：@WebFilter 在 web.xml 文件中使用<code>&lt;filter&gt;</code>和<code>&lt;filter-mapping&gt;</code>元素对编写的filter类进行注册，并设置它所能拦截的资源。</p><h3 id="_9-3-servlet-过滤器方法" tabindex="-1"><a class="header-anchor" href="#_9-3-servlet-过滤器方法" aria-hidden="true">#</a> 9.3 Servlet 过滤器方法</h3><p>过滤器是一个实现了 javax.servlet.Filter 接口的 Java 类。javax.servlet.Filter 接口定义了三个方法：</p><table><thead><tr><th style="text-align:left;">序号</th><th style="text-align:left;">方法 &amp; 描述</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><strong>public void doFilter (ServletRequest, ServletResponse, FilterChain)</strong> 该方法完成实际的过滤操作，当客户端请求方法与过滤器设置匹配的URL时，Servlet容器将先调用过滤器的doFilter方法。FilterChain用户访问后续过滤器。</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><strong>public void init(FilterConfig filterConfig)</strong> web 应用程序启动时，web 服务器将创建Filter 的实例对象，并调用其init方法，读取web.xml配置，完成对象的初始化功能，从而为后续的用户请求作好拦截的准备工作（filter对象只会创建一次，init方法也只会执行一次）。开发人员通过init方法的参数，可获得代表当前filter配置信息的FilterConfig对象。</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><strong>public void destroy()</strong> Servlet容器在销毁过滤器实例前调用该方法，在该方法中释放Servlet过滤器占用的资源。</td></tr></tbody></table>',17),n=[a];function s(o,d){return t(),l("div",null,n)}const p=e(r,[["render",s],["__file","s9.html.vue"]]);export{p as default};
