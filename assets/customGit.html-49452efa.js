import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,a,b as c,d as p,e as s}from"./app-0884781b.js";const l={},d=s(`<h1 id="自定义-git" tabindex="-1"><a class="header-anchor" href="#自定义-git" aria-hidden="true">#</a> 自定义 Git</h1><p>在安装 Git 一节中，我们已经配置了<code>user.name</code>和<code>user.email</code>，实际上，Git 还有很多可配置项。</p><p>比如，让 Git 显示颜色，会让命令输出看起来更醒目:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>
</code></pre></div><p>这样，Git 会适当地显示不同的颜色，比如<code>git status</code>命令，文件名就会标上颜色。</p><h2 id="忽略特殊文件" tabindex="-1"><a class="header-anchor" href="#忽略特殊文件" aria-hidden="true">#</a> 忽略特殊文件</h2><p>有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次<code>git status</code>都会显示<code>Untracked files</code> ...，有强迫症的童鞋心里肯定不爽。</p><p>好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的<code>.gitignore</code>文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。</p>`,8),r={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},g=s(`<p>忽略文件的原则是:</p><p>忽略操作系统自动生成的文件，比如缩略图等； 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的<code>.class</code>文件； 忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。 举个例子:</p><p>假设您在 Windows 下进行 Python 开发，Windows 会自动在有图片的目录下生成隐藏的缩略图文件，如果有自定义目录，目录下就会有<code>Desktop.ini</code>文件，因此您需要忽略 Windows 自动生成的垃圾文件:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Windows:</span>

Thumbs.db
ehthumbs.db
Desktop.ini
</code></pre></div><p>然后，继续忽略 Python 编译产生的<code>.pyc</code>、<code>.pyo</code>、<code>dist</code>等文件或目录:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Python:</span>

<span class="token italic"><span class="token punctuation">_</span><span class="token content">.py[cod]
</span><span class="token punctuation">_</span></span>.so
<span class="token italic"><span class="token punctuation">_</span><span class="token content">.egg
</span><span class="token punctuation">_</span></span>.egg-info
dist
build
</code></pre></div><p>加上您自己定义的文件，最终得到一个完整的<code>.gitignore</code>文件，内容如下:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Windows:</span>

Thumbs.db
ehthumbs.db
Desktop.ini

<span class="token title important"><span class="token punctuation">#</span> Python:</span>

<span class="token italic"><span class="token punctuation">_</span><span class="token content">.py[cod]
</span><span class="token punctuation">_</span></span>.so
<span class="token italic"><span class="token punctuation">_</span><span class="token content">.egg
</span><span class="token punctuation">_</span></span>.egg-info
dist
build

<span class="token title important"><span class="token punctuation">#</span> My configurations:</span>

db.ini
deploy_key_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一步就是把.gitignore 也提交到 Git，就完成了！当然检验.gitignore 的标准是<code>git status</code>命令是不是说<code>working directory clean</code>。</p><p>使用 Windows 的童鞋注意了，如果您在资源管理器里新建一个<code>.gitignore</code>文件，它会非常弱智地提示您必须输入文件名，但是在文本编辑器里“保存”或者“另存为”就可以把文件保存为<code>.gitignore</code>了。</p><p>有些时候，您想添加一个文件到 Git，但发现添加不了，原因是这个文件被<code>.gitignore</code>忽略了:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> App.class
The following paths are ignored by one of your .gitignore files:
App.class
Use <span class="token parameter variable">-f</span> <span class="token keyword">if</span> you really want to <span class="token function">add</span> them.
</code></pre></div><p>如果您确实想添加该文件，可以用<code>-f</code>强制添加到 Git:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-f</span> App.class
</code></pre></div><p>或者您发现，可能是<code>.gitignore</code>写得有问题，需要找出来到底哪个规则写错了，可以用<code>git check-ignore</code>命令检查:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> check-ignore <span class="token parameter variable">-v</span> App.class
.gitignore:3:*.class    App.class
</code></pre></div><p>Git 会告诉我们，<code>.gitignore</code>的第 3 行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。</p><h3 id="gitignore-小结" tabindex="-1"><a class="header-anchor" href="#gitignore-小结" aria-hidden="true">#</a> gitignore 小结</h3><ul><li><p>忽略某些文件时，需要编写<code>.gitignore</code>；</p></li><li><p><code>.gitignore</code>文件本身要放到版本库里，并且可以对<code>.gitignore</code>做版本管理！</p></li></ul><h2 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h2><p>有没有经常敲错命令？比如<code>git status</code>？<code>status</code>这个单词真心不好记。</p><p>如果敲<code>git st</code>就表示<code>git status</code>那就简单多了，当然这种偷懒的办法我们是极力赞成的。</p><p>我们只需要敲一行命令，告诉 Git，以后<code>st</code>就表示<code>status</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.st status
</code></pre></div><p>好了，现在敲<code>git st</code>看看效果。</p><p>当然还有别的命令可以简写，很多人都用<code>co</code>表示<code>checkout</code>，<code>ci</code>表示<code>commit</code>，<code>br</code>表示<code>branch</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.co checkout
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.br branch
</code></pre></div><p>以后提交就可以简写成:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ci <span class="token parameter variable">-m</span> <span class="token string">&quot;bala bala bala...&quot;</span>
</code></pre></div><p><code>--global</code>参数是全局参数，也就是这些命令在这台电脑的所有 Git 仓库下都有用。</p><p>在撤销修改一节中，我们知道，命令<code>git reset HEAD file</code>可以把暂存区的修改撤销掉(unstage)，重新放回工作区。既然是一个<code>unstage</code>操作，就可以配置一个<code>unstage</code>别名:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.unstage <span class="token string">&#39;reset HEAD&#39;</span>
</code></pre></div><p>当您敲入命令:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> unstage test.py
</code></pre></div><p>实际上 Git 执行的是:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD test.py
</code></pre></div><p>配置一个<code>git last</code>，让其显示最后一次提交信息:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.last <span class="token string">&#39;log -1&#39;</span>
</code></pre></div><p>这样，用<code>git last</code>就能显示最近一次的提交:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> last
commit adca45d317e6d8a4b23f9811c3d7b7f0f180bfe2
Merge: bd6ae48 291bea8
Author: xxx <span class="token operator">&lt;</span>xxx@gmail.com<span class="token operator">&gt;</span>
Date:   Thu Aug <span class="token number">22</span> <span class="token number">22</span>:49:22 <span class="token number">2013</span> +0800

    merge <span class="token operator">&amp;</span> fix hello.py
</code></pre></div><p>甚至还有人丧心病狂地把<code>lg</code>配置成了:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.lg <span class="token string">&quot;log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit&quot;</span>
</code></pre></div><p>来看看<code>git lg</code>的效果:</p><p><img src="https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/git16.png?raw=true" alt="示例图" loading="lazy"></p><p>为什么不早点告诉我？别激动，咱不是为了多记几个英文单词嘛！</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>配置 Git 的时候，加上<code>--global</code>是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。</p><p>配置文件放哪了？每个仓库的 Git 配置文件都放在<code>.git/config</code>文件中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .git/config
<span class="token punctuation">[</span>core<span class="token punctuation">]</span>
    repositoryformatversion <span class="token operator">=</span> <span class="token number">0</span>
    filemode <span class="token operator">=</span> <span class="token boolean">true</span>
    bare <span class="token operator">=</span> <span class="token boolean">false</span>
    logallrefupdates <span class="token operator">=</span> <span class="token boolean">true</span>
    ignorecase <span class="token operator">=</span> <span class="token boolean">true</span>
    precomposeunicode <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">[</span>remote <span class="token string">&quot;origin&quot;</span><span class="token punctuation">]</span>
    url <span class="token operator">=</span> git@github.com:michaelliao/learngit.git
    fetch <span class="token operator">=</span> +refs/heads/*:refs/remotes/origin/*
<span class="token punctuation">[</span>branch <span class="token string">&quot;master&quot;</span><span class="token punctuation">]</span>
    remote <span class="token operator">=</span> origin
    merge <span class="token operator">=</span> refs/heads/master
<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>
    last <span class="token operator">=</span> log <span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别名就在<code>[alias]</code>后面，要删除别名，直接把对应的行删掉即可。</p><p>而当前用户的 Git 配置文件放在用户主目录下的一个隐藏文件<code>.gitconfig</code>中:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig
<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>
    co <span class="token operator">=</span> checkout
    ci <span class="token operator">=</span> commit
    br <span class="token operator">=</span> branch
    st <span class="token operator">=</span> status
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
    name <span class="token operator">=</span> Your Name
    email <span class="token operator">=</span> your@email.com
</code></pre></div><p>配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。</p><h3 id="别名小结" tabindex="-1"><a class="header-anchor" href="#别名小结" aria-hidden="true">#</a> 别名小结</h3><ul><li>给 Git 配置好别名，就可以输入命令时偷个懒。我们鼓励偷懒。</li></ul><hr><h2 id="搭建-git-服务器" tabindex="-1"><a class="header-anchor" href="#搭建-git-服务器" aria-hidden="true">#</a> 搭建 Git 服务器</h2><p>在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。</p><p>GitHub 就是一个免费托管开源代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，既不想公开源代码，又舍不得给 GitHub 交保护费，那就只能自己搭建一台 Git 服务器作为私有仓库使用。</p><p>搭建 Git 服务器需要准备一台运行 Linux 的机器，强烈推荐用 Ubuntu 或 Debian，这样，通过几条简单的 apt 命令就可以完成安装。</p><p>假设您已经有 sudo 权限的用户账号，下面，正式开始安装。</p><ul><li><p>第一步，安装 git:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre></div></li><li><p>第二步，创建一个 git 用户，用来运行 git 服务:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> adduser <span class="token function">git</span>
</code></pre></div></li><li><p>第三步，创建证书登录:</p><p>收集所有需要登录的用户的公钥，就是他们自己的<code>id_rsa.pub</code>文件，把所有公钥导入到<code>/home/git/.ssh/authorized_keys</code>文件里，一行一个。</p></li><li><p>第四步，初始化 Git 仓库:</p><p>先选定一个目录作为 Git 仓库，假定是/srv/sample.git，在/srv 目录下输入命令:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">git</span> init <span class="token parameter variable">--bare</span> sample.git
</code></pre></div><p>Git 就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的 Git 仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的 Git 仓库通常都以.git 结尾。然后，把 owner 改为 git:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> git:git sample.git
</code></pre></div></li><li><p>第五步，禁用 shell 登录:</p><p>出于安全考虑，第二步创建的 git 用户不允许登录 shell，这可以通过编辑<code>/etc/passwd</code>文件完成。找到类似下面的一行:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>git:x:1001:1001:,,,:/home/git:/bin/bash
</code></pre></div><p>改为:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
</code></pre></div><p>这样，git 用户可以正常通过 ssh 使用 git，但无法登录 shell，因为我们为 git 用户指定的 git-shell 每次一登录就自动退出。</p></li><li><p>第六步，克隆远程仓库:</p><p>现在，可以通过<code>git clone</code>命令克隆远程仓库了，在各自的电脑上运行:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@server:/srv/sample.git
Cloning into <span class="token string">&#39;sample&#39;</span><span class="token punctuation">..</span>.
warning: You appear to have cloned an empty repository.
</code></pre></div><p>剩下的推送就简单了。</p></li></ul>`,62);function u(b,h){const n=t("ExternalLinkIcon");return o(),i("div",null,[d,a("ul",null,[a("li",null,[a("a",r,[c("gitignore 配置规则"),p(n)])])]),g])}const m=e(l,[["render",u],["__file","customGit.html.vue"]]);export{m as default};
