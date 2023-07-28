import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e as t}from"./app-ea5ec429.js";const e={},o=t(`<h1 id="纵向查看" tabindex="-1"><a class="header-anchor" href="#纵向查看" aria-hidden="true">#</a> 纵向查看</h1><p>我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software.
</code></pre></div><p>现在，运行 <code>git status</code> 命令看看结果:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><code>git status</code> 命令可以输出仓库当前的状态，上面的命令输出告诉我们，readme.txt 被修改过了，但还没有准备提交的修改。</p><p>Git 现在只告诉我们 readme.txt 被修改了，我们用 <code>git diff</code> 这个命令能看看具体修改了什么内容:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> readme.txt
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
index 46d49bf<span class="token punctuation">..</span>9247db6 <span class="token number">100644</span>
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
<span class="token parameter variable">-Git</span> is a version control system.
+Git is a distributed version control system.
 Git is <span class="token function">free</span> software.
</code></pre></div><p><code>git diff</code> 顾名思义就是查看 difference，显示的格式正是 Unix 通用的 diff 格式，可以从上面的命令输出看到，我们在第一行添加了一个 distributed 单词。</p><p>知道了对 readme.txt 作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是 <code>git add</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
<span class="token parameter variable">--no</span> output --
</code></pre></div><p>同样没有任何输出。在执行第二步 <code>git commit</code> 之前，我们再运行 <code>git status</code> 看看当前仓库的状态:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

    modified:   readme.txt
</code></pre></div><p><code>git status</code> 告诉我们，将要被提交的修改包括 readme.txt，下一步，就可以放心地提交了:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add distributed&quot;</span>
<span class="token punctuation">[</span>master e475afc<span class="token punctuation">]</span> <span class="token function">add</span> distributed
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre></div><p>提交后，我们再用 <code>git status</code> 命令看看仓库的当前状态:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre></div><p>Git 告诉我们当前没有需要提交的修改，而且，工作目录是干净(working tree clean)的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><p>要随时掌握工作区的状态，使用 <code>git status</code> 命令。</p></li><li><p>如果 <code>git status</code> 告诉您有文件被修改过，用 <code>git diff</code> 可以查看修改内容。</p></li></ul>`,20),c=[o];function i(p,d){return s(),n("div",null,c)}const u=a(e,[["render",i],["__file","statusView.html.vue"]]);export{u as default};
