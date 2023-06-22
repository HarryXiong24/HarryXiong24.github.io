---
article: true
date: 2022-04-02
category: React
sticky: 10
star: 10
tag: 
- React 状态管理
- MobX
---

# 上手 Mobx 

## 引言

市面上有很多 MobX 的教程（包括 MobX 官网的教程），很多人吐槽写的晦涩难懂。拿我自己的学习之路来说，初识 MobX 的时候我有一系列的疑问为什么 MobX 用法千奇百怪？为什么有这么多版本的语法？我到底应该采用哪一种写法？不同写法有什么区别吗？

在查阅很多资料之后，我自己总结了一下 Mobx 的前世今生，从5.x到6.x的进化之路。并整理成本文，与大家一起分享交流。

## MobX 设计思想

MobX 的设计思想其实并不复杂，复杂的是经过几次版本升级之后，MObX 的用法越来越多，越来越灵活。所以本文侧重讲 MobX 的用法，在设计思想部分则以概括为主。

如果你使用过 vuex、redux，其实不难总结出，全局状态管理插件设计的核心思想都可以概括成：不能随意的去修改状态（state）。因此我们通常需要一个 action 来统一 modify 我们的 state。

MobX 也是基于这种思想设计的，它具有：

-   定义状态并使其可观察 （observable）
-   创建视图以响应状态的变化（observer、computed）
-   更改状态（action）

MobX 状态派生模型：


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f080910df4840a89358b9c6229ece1d~tplv-k3u1fbpfcp-watermark.image?)
## MobX 的 Store 设计

### 5.x 版

在最初的语法中，我们需要使用注解来定义观察属性、action、计算属性等。

``` ts
// 注解定义 Store
export class Store5 {
  readonly base = 5;
  @observable MCount = 0;
​
  @action setMCount = () => {
    console.log('click!');
    this.MCount++;
    console.log(this.MCount);
  };
​
  @computed get total() {
    return this.MCount * this.base;
  }
}
```

### 6.x 版

很显然，随着要管理的状态越来越多，5.x 提供的语法写起来就会有一点小累。而且还有一个很尴尬的问题，5.x 的写法里使用了装饰器。装饰器一直是 es6 里的草案，迟迟没有定稿。在 ts 中，装饰器也只是试验性语言，需要手动设置才可以使用装饰器。

于是在 6.x 中，开发者新增了2个方法：`makeObservable`与`makeAutoObservable` 。

先来看一看使用 `makeObservable` 的写法：

``` ts
export class Store6_makeObservable {
  readonly base = 5;
  MCount = 0;
​
  constructor() {
    makeObservable(this, {
      MCount: observable,
      total: computed,
      setMCount: action.bound,
    });
  }
​
  setMCount() {
    this.MCount++;
  }
​
  get total() {
    return this.MCount * this.base;
  }
}
```

我们不难发现，这种语法不在每一个属性、方法前面加入注解，而是统一在构造函数里使用 `makeObservable` 方法来声明。这样就避免使用了装饰器。

当然，我们还是需要一个一个的去声明属性、方法在 MobX 中扮演什么角色。因此，开发者又设计了一个 `makeAutoObservable` 方法，直接帮我们声明。

``` ts
// 使用 makeAutoObservable
export class Store6_makeAutoObservable {
  readonly base = 5;
  MCount = 0;
​
  constructor() {
    makeAutoObservable(this);
  }
​
  setMCount() {
    this.MCount++;
  }
​
  get total() {
    return this.MCount * this.base;
  }
}
```

这里我们的说一下 makeObservable 与 makeAutoObservable 区别：

1. makeAutoObservable 会默认推断所有属性
2. 比 makeObservable 更容易维护
3. 但请注意 makeAutoObservable 不能用于自动推断 super 或 subclass 的类

## MobX 在 React 中的用法

### Class 组件里使用

以上面 5.x 版的 store 设计为例：

``` ts
// 注解定义 Store
export class Store5 {
  readonly base = 5;
  @observable MCount = 0;
​
  @action setMCount = () => {
    console.log('click!');
    this.MCount++;
    console.log(this.MCount);
  };
​
  @computed get total() {
    return this.MCount * this.base;
  }
}
​
export default new Store5;
```

要使用我们 store 里的 state 和 action，首先我们要在根 react 组件里注入我们的 store：

``` ts
import store5 from '@/store';
​
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Provider store5={store5}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
```

然后在 class 组件中使用：

``` ts
import React from 'react';
import { inject, observer } from 'mobx-react';
​
@inject('store5')
@observer
export class MobXClass extends React.Component {
  render() {
    const { store5 } = this.props as unknown as any;
    return (
      <div>
        <button
          onClick={() => {
            store5.setMCount();
            this.setState({});
          }}
        >
          count++
        </button>
        <span> Count {store5.MCount} </span>
        <span> Base {store5.base} </span>
        <span> Total {store5.total} </span>
      </div>
    );
  }
}
```

注意这里要使用两个注解 @inject('store5') 和 @observer，否则 props 里则不能获得我们的 store。

### Function 组件里使用

由于 React Hooks 的出现，以及注解的不稳定性。在 6.x 中，MobX 升级了它的使用方法。

这里我们以 makeAutoObservable 的 Store 设计为例：

``` ts
export class Store6_makeAutoObservable {
  readonly base = 5;
  MCount = 0;
​
  constructor() {
    makeAutoObservable(this);
  }
​
  setMCount() {
    this.MCount++;
  }
​
  get total() {
    return this.MCount * this.base;
  }
}
​
export default new Store6;
```

然后在函数组件里，我们需要使用 observer 函数来替代注解：

``` ts
import { observer } from 'mobx-react';
import store6 from '@/store';
​
export const MobXFunc: React.FC = observer(() => {
  return (
    <div>
      <button
        onClick={() => {
          store6.setMCount();
        }}
      >
        count++
      </button>
      <span> Count {store6.MCount} </span>
      <span> Base {store6.base} </span>
      <span> Total {store6.total} </span>
    </div>
  );
});
```

### MobX + Hooks 写法

为了更好的结合 Hooks 语法，Mobx 在 6.x 中也提供了2个新的 API:

> useLocalStore（`Hooks` 环境下的 `observable`）

``` ts
const store = useLocalStore(() => ({ key: 'value' }))
```

等价于

``` ts
const [store] = useState(() => observable({ key: 'value' }))
```

为`Hooks` 解决了 `依赖传递` 和 `缓存雪崩` 的问题。

> useObserver

`Mobx` 使组件响应数据状态的变化主要有以下三种方式：

-   `@observer`

    -   给类组件提供 `pure component` 的能力，将组件的 `props` 和 `state` 转换为 `observable` 态，响应数据变化
    -   不推荐在 `Hooks` 中使用

-   `observer` 方法

-   Component：`Observer`（Mobx 6 中已经基于`useObserver` 来实现了）

-   Hooks：`useObserver`

还是以 makeAutoObservable 的 Store 设计为例，这里就不展示了。

我们在函数组件里：

``` ts
import React from 'react';
import { Observer, useLocalObservable, useObserver } from 'mobx-react';
import { store6_auto as store6 } from '@/store';
​
export const MobXHook: React.FC = () => {
  const store = useLocalObservable(() => store6);
  return useObserver(() => (
    <div>
      <button
        onClick={() => {
          store.setMCount();
        }}
      >
        count++
      </button>
      <span> Count {store.MCount} </span>
      <span> Base {store.base} </span>
      <span> Total {store.total} </span>
    </div>
  ));
};
​
// 或者
export const MobXHook: React.FC = () => {
  const store = useLocalObservable(() => store6);
  return (
    <Observer>
      {() => (
        <div>
          <button
            onClick={() => {
              store.setMCount();
            }}
          >
            count++
          </button>
          <span> Count {store.MCount} </span>
          <span> Base {store.base} </span>
          <span> Total {store.total} </span>
        </div>
      )}
    </Observer>
  );
};
```

同时，useLocalObservable 也可以用来创建一个新的 observable，并在组件的整个生命周期内将其保留在组件中（可以理解为组件级别的 observer）。

``` ts
 const MouseEventListenerMobx: React.FC = (props) => {
    const state = useLocalStore(target => ({
        x: 0,
        y: 0,
        handler(e) {
            const nx = e.xxx
            const ny = e.xxx
            if (
                Math.abs(nx - state.x) >= target.size ||
                Math.abs(ny - state.y) >= target.size
            ) {
                state.x = nx
                state.y = ny
            }
        }
    }), props)
​
    useEffect(() => {
        document.addEventListener('mousemove', state.handler)
        return () => document.removeEventListener('mousemove', state.handler)
    }, [])
​
    return useObserver(() => props.children(state.x, state.y))
}
```

## 最终推荐方案

综上所述，在结尾给出最终推荐方案。

在 store 设计上，建议采用 `makeAutoObservable` 的写法。

``` ts
export class Store6_makeAutoObservable {
  readonly base = 5;
  MCount = 0;
​
  constructor() {
    makeAutoObservable(this);
  }
​
  setMCount() {
    this.MCount++;
  }
​
  get total() {
    return this.MCount * this.base;
  }
}

export default new Store6;
```

在 store 使用上，建议采用 `observer` 函数包裹组件。

``` ts
import React from 'react';
import { observer } from 'mobx-react';
import { store6_auto as store6 } from '@/store';
​
const MobXHook: React.FC = () => {
  const store = store6;
  return (
    <div>
      <button
        onClick={() => {
          store.setMCount();
        }}
      >
        count++
      </button>
      <span> Count {store.MCount} </span>
      <span> Base {store.base} </span>
      <span> Total {store.total} </span>
    </div>
  );
};
​
export default observer(MobXHook);
```
