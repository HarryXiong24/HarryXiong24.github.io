import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as e}from"./app-621ebf19.js";const t={},o=e(`<h2 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具" aria-hidden="true">#</a> 管理工具</h2><ul><li>yum (Centos 7)</li><li>dnf (Centos 8)</li></ul><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--silent</span> <span class="token parameter variable">--location</span> https://dl.yarnpkg.com/rpm/yarn.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/yarn.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">yarn</span>
<span class="token comment">## OR ##</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre></div><p>测试是否安装成功:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token parameter variable">--version</span>
</code></pre></div>`,6),c=[o];function r(l,p){return n(),s("div",null,c)}const u=a(t,[["render",r],["__file","centos.html.vue"]]);export{u as default};
