import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as e,a as n,b as s,d as l,w as c,f as u}from"./app-da9a639d.js";const r={},i=n("h1",{id:"vscode-推荐配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode-推荐配置","aria-hidden":"true"},"#"),s(" VSCode 推荐配置")],-1),k=u(`<p>将下面内容拷贝至 setting.json 以更改 VSCode 设置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 编辑器配置</span>
  <span class="token property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Fira Code&#39; ,Consolas, &#39;Courier New&#39;, monospace&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.mouseWheelZoom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// markdownlint 自动修复</span>
    <span class="token property">&quot;source.fixAll.markdownlint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderControlCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boundary&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// emmet 包含 wxml 视为 html</span>
  <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span> <span class="token comment">//为 wxml 开启 HTML emmet 支持</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件相关</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span> <span class="token comment">//将 .cjson 设为 jsonc</span>
    <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span> <span class="token comment">//将 wxss 视为 css</span>
    <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span> <span class="token comment">//将 wxs 视为 JavaScript</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/.classpath&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.project&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.settings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.factorypath&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.maxMemoryForLargeFilesMB&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
  <span class="token comment">// 编辑器窗口设置</span>
  <span class="token property">&quot;window.closeWhenEmpty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.newWindowDimensions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inherit&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">// 工作台设置</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.commandPalette.preserveInput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.enableExperiments&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;material-icon-theme.folders.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;service-worker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vuex-store&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Routes&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;.vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;guide&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I18n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 提示设置</span>
  <span class="token property">&quot;vsintellicode.modify.editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;automaticallyOverrodeDefaultValue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;problems.showCurrentInStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 在线服务设置</span>
  <span class="token property">&quot;extensions.showRecommendationsOnlyOnDemand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;telemetry.enableCrashReporter&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;telemetry.enableTelemetry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端设置</span>
  <span class="token property">&quot;terminal.integrated.confirmOnExit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.copyOnSelection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.enableBell&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.shell.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Program Files/PowerShell/7/pwsh.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.shell.linux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bin/bash&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.external.linuxExec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// git设置</span>
  <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;merge-conflict.autoNavigateNextConflict.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// npm 设置</span>
  <span class="token property">&quot;npm.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm.scriptExplorerAction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.packageSubfoldersIntellisense&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.scanDevDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.showBuildInLibs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;remote.SSH.remotePlatform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;codeserver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件格式化器设置</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.html-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[yaml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;redhat.vscode-yaml&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yzhang.markdown-all-in-one&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;octref.vetur&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 远程连接</span>
  <span class="token property">&quot;remote.SSH.configFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z:/config/local/vscode/host&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// typescript配置</span>
  <span class="token property">&quot;typescript.locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.implicitProjectConfig.checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.implicitProjectConfig.experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// php设置</span>
  <span class="token property">&quot;php.validate.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;php.validate.executablePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:/PHP/php.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;php.validate.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onType&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// c++设置</span>
  <span class="token property">&quot;C_Cpp.default.cppStandard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c++17&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// css颜色提示配置</span>
  <span class="token property">&quot;colorInfo.fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rgb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-color-name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;preview&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;colorInfo.languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sass&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;less&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// eslint</span>
  <span class="token property">&quot;eslint.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// gitLens设置</span>
  <span class="token property">&quot;gitlens.advanced.messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;suppressSupportGitLensNotification&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.gitCommands.closeOnFocusOut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.views.repositories.branches.layout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// live server</span>
  <span class="token property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// markdown设置</span>
  <span class="token property">&quot;markdown.extension.orderedList.marker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown.extension.print.imgToBase64&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown.extension.toc.githubCompatibility&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// markdownlint 设置</span>
  <span class="token property">&quot;markdownlint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atx&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dash&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD013&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;allow_different_nesting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;---&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// vetur 设置</span>
  <span class="token property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;js-beautify-html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettyhtml&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;wrapAttributes&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sortAttributes&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettyhtml&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.ts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.useWorkspaceDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// vetur stylus 设置</span>
  <span class="token property">&quot;stylusSupremacy.insertColons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylusSupremacy.insertSemicolons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylusSupremacy.insertBraces&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// XML工具设置</span>
  <span class="token property">&quot;xmlTools.enforcePrettySelfClosingTagOnFormat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xmlTools.removeCommentsOnMinify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 微信小程序</span>
  <span class="token property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minapp-vscode.wxmlFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">//指定格式化工具</span>
  <span class="token property">&quot;minapp-vscode.prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// liveshare 设置</span>
  <span class="token property">&quot;liveshare.audio.joinCallBehavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;accept&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 设置同步</span>
  <span class="token property">&quot;sync.forceUpload&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sync.gist&quot;</span><span class="token operator">:</span> <span class="token string">&quot;98947a2f1cf80f21ee36eb8e3d03b9ce&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// todoHightlight配置</span>
  <span class="token property">&quot;todohighlight.keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;WARNING: &quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// leetcode</span>
  <span class="token property">&quot;leetcode.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.configWebviewMarkdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// php cs</span>
  <span class="token property">&quot;phpcs.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;phpcs.executablePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${extensionPath}/php-cs-fixer.phar&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ProjectManager</span>
  <span class="token property">&quot;projectManager.any.ignoredFolders&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typings&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;test&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectManager.git.baseFolders&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;U:/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Z:/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// dart</span>
  <span class="token property">&quot;dart.debugExternalLibraries&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dart.debugSdkLibraries&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// java</span>
  <span class="token property">&quot;java.home&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\Java\\\\jdk-14&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;java.help.firstView&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gettingStarted&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// stylelint 设置</span>
  <span class="token property">&quot;stylelint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylelint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;less&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;postcss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;source.css.styled&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;source.markdown.math&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;styled-css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sugarss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;svelte&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue-html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue-postcss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;xml&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;xsl&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;wxss&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用鼠标在对应属性值上悬停时，Vscode 会自动给出属性的说明。</p>`,3);function d(v,q){const a=o("RouterLink");return p(),e("div",null,[i,n("p",null,[s("部分设置是"),l(a,{to:"/zh/vscode/vscodeExtension.html"},{default:c(()=>[s("这里")]),_:1}),s("的插件配置")]),k])}const y=t(r,[["render",d],["__file","vscodeSettings.html.vue"]]);export{y as default};
