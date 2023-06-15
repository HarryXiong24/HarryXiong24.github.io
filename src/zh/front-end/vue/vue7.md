---
icon: vue
category: Web前端
tags:
  - Vue
  - MVVM
  - Vuex
  - Vue-router
  - Vue源码分析
time: 2020-6-18
footer: How easy to do
title: 7.按键修饰符
---

## 按键修饰符

**在绑定了键盘或鼠标的点击事件后,可以通过按下的按键触发要进行的事件,这时需要在后方添加表示按键的修辞符**

### 7.1 按键码

- 可以通过 keyCode 的值来绑定需要触发的按键

  ```html
  <input v-on:keyup.13="submit" />
  ```

- **部分特殊的按键码可以使用别名**

- - **.enter**

- - **.tab**

- - **.delete**(捕获“删除”和“退格”键)

- - **.esc**

- - **.space**

- - **.up**

- - **.down**

- - **.left**

- - **.right**

- 也可以自定义按键修饰符的别名

  ```vue
  Vue.config.keyCodes.f1 =
  112;//使用Vue对象上的全局属性config.keyCodes来定义别名 //
  在绑定时就可以使用v-on:keyup.f1直接对f1按键进行操作了
  ```

### 7.2 系统修饰符

**系统修辞符监听仅在同时按下了绑定键盘或鼠标按钮时才会触发事件**

- **键盘**

- - **.ctrl**

- - **.alt**

- - **.shift**

- - **.meta**

**注意:**在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear" />

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

- **鼠标**

- - **.left**

- - **.right**

- - **.middle**

**注:**修饰键与常规按键不同，在和 `keyup` 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 `ctrl` 的情况下释放其它按键，才能触发 `keyup.ctrl`。而单单释放 `ctrl` 也不会触发事件。如果只想要单独触发,则需要使用 keycode 编码或**.exact**修饰符

- .exact

  .exact 修饰符允许用户控制由精确的系统修饰符组合触发的事件

  ```html
  <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
  <button @click.ctrl="onClick">A</button>

  <!-- 有且只有 Ctrl 被按下的时候才触发 -->
  <button @click.ctrl.exact="onCtrlClick">A</button>

  <!-- 没有任何系统修饰符被按下的时候才触发 -->
  <button @click.exact="onClick">A</button>
  ```
