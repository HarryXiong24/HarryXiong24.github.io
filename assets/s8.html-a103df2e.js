import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,e as o}from"./app-b6b6271c.js";const s={},a=o('<h2 id="servletcontext" tabindex="-1"><a class="header-anchor" href="#servletcontext" aria-hidden="true">#</a> ServletContext</h2><h3 id="_8-1-概念" tabindex="-1"><a class="header-anchor" href="#_8-1-概念" aria-hidden="true">#</a> 8.1 概念</h3><p>抽象表示Servlet的上下文环境，即当前Web应用，一个JVM中的每个Web应用都只有一个ServletContext对象与之对应</p><p>启动一个Web应用时会创建一个ServletContext对象，关闭时也会销毁此对象</p><h3 id="_8-2-方法" tabindex="-1"><a class="header-anchor" href="#_8-2-方法" aria-hidden="true">#</a> 8.2 方法</h3><table><thead><tr><th>setAttribute与getAttribute方法</th><th>ServletContext对象的生命周期等同于Web服务器正常工作周期，需要长期保存的属性可保存在ServletContext对象中</th></tr></thead><tbody><tr><td><strong>getRequestDispatcher</strong></td><td><strong>路径参数必须以“/”作为开头，表示应用程序环境的根目录 （对比request对象的该方法</strong>）</td></tr><tr><td><strong>getResourcePaths</strong></td><td><strong>获取Web应用中的某个路径下有哪些文件，路径参数必须以“/”开始</strong></td></tr><tr><td><strong>getResourceAsStream</strong></td><td><strong>读取Web应用中的某个文件，文件路径参数必须以“/”开始</strong></td></tr></tbody></table>',6),n=[a];function d(h,c){return e(),r("div",null,n)}const _=t(s,[["render",d],["__file","s8.html.vue"]]);export{_ as default};