import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-430054e9.js";const e={},c=t(`<h2 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h2><h3 id="_11-1-注册driver类实现对象" tabindex="-1"><a class="header-anchor" href="#_11-1-注册driver类实现对象" aria-hidden="true">#</a> 11.1 注册Driver类实现对象</h3><p>加载实现了java.sql.Driver接口的类的实例对象</p><p>Class.forName(“驱动类的完整类名”);</p><p>用DriverManager类的registerDriver方法注册</p><p>加载驱动程序，不同的数据库系统有不同的加载代码： MySQL数据库： Class.forName(“com.mysql.jdbc.Driver&quot;); Class.forName(&quot;org.gjt.mm.mysql.Driver&quot;);</p><p>MS SQL Server Class.forName(&quot;com.microsoft.jdbc.sqlserver.SQLServerDriver&quot;)</p><p>Oracle Class.forName(“oracle.jdbc.driver.OracleDriver”);</p><p>DB2 Class.forName(“com.ibm.db2.jdbc.app.DB2Driver”);</p><p>Access(使用ODBC) Class.forName(&quot;sun.jdbc.odbc.JdbcOdbcDriver&quot;) ;</p><p>Derby Class.forName(&quot;org.apache.derby.jdbc.ClientDriver&quot;)</p><h3 id="_11-2-获取connection连接对象" tabindex="-1"><a class="header-anchor" href="#_11-2-获取connection连接对象" aria-hidden="true">#</a> 11.2 获取Connection连接对象</h3><p>用DriverManager类的getConection方法获取 方法需要三个参数：url、数据库访问用户名与密码 url具有相对固定的格式，获取后将返回Connection对象</p><h3 id="_11-3-关闭connection连接对象" tabindex="-1"><a class="header-anchor" href="#_11-3-关闭connection连接对象" aria-hidden="true">#</a> 11.3 关闭Connection连接对象</h3><p>Connection对象close方法，注意处理异常</p><h3 id="_11-4-使用步骤" tabindex="-1"><a class="header-anchor" href="#_11-4-使用步骤" aria-hidden="true">#</a> 11.4 使用步骤</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HowToUseJDBC</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLExceotion</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
		<span class="token comment">// 步骤一：实现并注册一个Driver对象</span>
		<span class="token comment">// DriverManager.registerDriver(new JBDC())</span>
		<span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;org.sqlite.JDBC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 步骤二：创建一个连接到数据库的Connection对象</span>
		<span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:sqlite:d:\\\\web.db&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 步骤三：创建一个Statement对象</span>
		<span class="token class-name">Statement</span> stmt <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 步骤四：执行需要的SQL语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM t_user&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 步骤五： 处理结果集</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>getString<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 关闭</span>
		rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[c];function p(i,l){return s(),a("div",null,o)}const d=n(e,[["render",p],["__file","s11.html.vue"]]);export{d as default};