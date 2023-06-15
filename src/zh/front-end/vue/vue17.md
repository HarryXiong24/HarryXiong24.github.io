---
icon: vue
category: Web 前端
tag: 
  - Vue
  - MVVM
  - Vuex
  - Vue-router
  - Vue 源码分析
date: 2020-06-18
title: 17.Mixins
---

## Mixins

### 17.1 使用场合

**混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项**

Mixins 是一种分发 Vue 组件中可复用功能的非常灵活的一种方式。页面的风格不用，但是执行的方法和需要的数据类似就可以选择使用混入

混合对于封装一小段想要复用的代码来讲是有用的。它们当然不是唯一可行的。混合很好，它不需要传递状态，但是这种模式当然也可能会被滥用。

### 17.2 基础实例

​ 我们有一对不同的组件，它们的作用是切换一个状态布尔值，一个模态框和一个提示框。这些提示框和模态框除了在功能上，没有其他共同点：它们看起来不一样，用法不一样，但是逻辑一样。

```js
// 模态框
const Modal = {
  template: '#modal',
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  }
}
// 提示框
const Tooltip = {
  template: '#tooltip',
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  }
}
	解决办法如下：
const toggle = {
    data () {
        isshowing: false
    },
    methods: {
        toggleShow() {
            this.isshowing = !this.isshowing
        }
    }
}
// 下面即可使用了
// mixins: [变量名]
const Modal = {
  template: '#modal',
  mixins: [toggle],
  components: {
    appChild: Child
  }
};
const Tooltip = {
  template: '#tooltip',
  mixins: [toggle],
  components: {
    appChild: Child
  }
};
如果你是以vue-cli创建的项目来写，可以这样
// mixin.js
export const toggle = {
    data () {
        isshowing: false
    },
    methods: {
        toggleShow() {
            this.isshowing = !this.isshowing
        }
    }
}
// modal.vue
// 将mixin引入该组件，就可以直接使用 toggleShow() 了
import {mixin} from '../mixin.js'
export default {
    mixins: [mixin],
    mounted () {

    }
}
// tooltip组件同上

```

### 17.3 合并规则

当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。

**数据对象内**

mixin 的数据对象和组件的数据发生冲突时以组件数据优先。

```js
var mixin = {
  data: function() {
    return {
      message: "hello",
      foo: "abc",
    };
  },
};
new Vue({
  mixins: [mixin],
  data: function() {
    return {
      message: "goodbye",
      bar: "def",
    };
  },
  created: function() {
    console.log(this.$data);
    // => { message: "goodbye", foo: "abc", bar: "def" }
  },
});
```

**钩子函数**

同名钩子函数将会混合为一个数组，都将被调用到，但是混入对象的钩子将在组件自身钩子之前调用。

```js
var mixin = {
  created: function() {
    console.log("混入对象的钩子被调用");
  },
};
new Vue({
  mixins: [mixin],
  created: function() {
    console.log("组件钩子被调用");
  },
});
// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

**值为对象的选项**

值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

```js
var mixin = {
  methods: {
    foo: function() {
      console.log("foo");
    },
    conflicting: function() {
      console.log("from mixin");
    },
  },
};
var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function() {
      console.log("bar");
    },
    conflicting: function() {
      console.log("from self");
    },
  },
});
vm.foo(); // => "foo"
vm.bar(); // => "bar"
vm.conflicting(); // => "from self"
```

### 17.4 全局混入

全局混合被注册到了每个单一组件上。因此，它们的使用场景极其有限并且要非常的小心。一个我能想到的用途就是它像一个插件，你需要赋予它访问所有东西的权限。但即使在这种情况下，我也对你正在做的保持警惕，尤其是你在应用中扩展的函数，可能对你来说是不可知的。

```js
Vue.mixin({
    mounted() {
        console.log("我是mixin");
    }
})
new Vue({
    ...
})

```

再次提醒，小心使用它！那个 console.log 将会出现在每个组件上。这种情况还不算坏（除了控制台上有多余的输出），但如果它被错误的使用，你将能看到它会多么的有害。

一个使用合理的例子

```js
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function() {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  },
});
new Vue({
  myOption: "hello!",
});
// => "hello!"
```

**注意:** 一旦使用全局混入对象，将会影响到**所有**之后创建的 Vue 实例。使用恰当时，可以为自定义对象注入处理逻辑

```js
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function() {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  },
});
new Vue({
  myOption: "hello!",
});

// => "hello!"
```
