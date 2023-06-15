---
icon: js
category: Web前端
tags:
  - JavaScript
  - Promise对象
  - JS异步
  - async与await
time: 2020-6-10
footer: 生命的广阔不经历磨难怎能达到
title: 8.数组
---

## 数组

**数组也是一个对象**,它和普通对象功能类似,也是用来存储值,不同的是普通对象使用字符串作为属性名，而数组是**使**

**用数字来作为属性名**操作属性值,所以数组的存储性比普通对象要好，在开发中经常使用数组来存储数据

**注意:**因为是使用数组索引来操作属性,所以不能使用.的方法来控制,只能用[]的形式

**数组的值**

数组的值可以是任何的数据类型,不一定是数值,也可以是一个对象,甚至一个函数,还可以是一个其他数组

```js
var arr=[{name:"孙悟空",gender:"男",age:18}];

var arr2=[function(){arlert("1")};
arr2[0]();

var arr3=[[1,2,3],[1,2,3]]；//这个就是我们说的二维数组
```

### 8.1 创建数组

创建数组时有四种方式,其中前三种都是通过构造函数来创建数组,只是传入的参数不同

- 声明或创建一个不指定长度的数组

  ```js
  var arr = new Array(); //这时创建的数组里面没有值,可以向里面加值
  ```

- 声明或创建一个指定长度的数组

  ```js
  var arr = new Array(10); //创建一个length长度为10的数组,没有默认值
  ```

- .声明或创建一个带有默认值的数组

  ```js
  var arr = new Array(10, 20, 50); //创建一个length长度为3,带有值10,20,50的数组
  ```

- 使用字面量创建数组(推荐使用这种方式)

  ```js
  var arr = [1, 2, 3, 4, 5, 10]; //创建一个length长度为5,默认值为1,2,3,4,5,10的数组
  //也可以创建不定长度的数组
  var arr2 = [];

  //数组字面量和对象字面量的区别在于数组字母量是用[]括起来,并且不用写属性值,默认使用的索引作为属性值
  ```

### 8.2 数组中读取与添加元素

- **读取:数组[索引]**
  **注意:**如果读取不存在的索引,不会报错而是返回 undefined,但是数组的长度还是原来有内容的长度

- **添加:数组[索引]=值**
  **注意:**

- - 如果给已经存在值的索引添加一个新值,旧值会被覆盖掉,数组长度不变

- - 如果给不存在值的索引添加一个新值,**数组的长度会变为添加新值的索引的值-1**,中间没有值的索引中会存
    入 empty(空)

### 8.3 length

**length 是数组的一个属性,代表数组的长度**

- 对于连续的数组,使用 length 可以获取到数组的长度(值的个数)

- 对于非连续的数组,使用 length 会获取到数组的最大的索引加 1(没有值的索引为 empty),尽量不要创建非连续的
  数组

**查看数组长度:**数组名.length

```js
var arr = [1, 2, 3];
console.log(arr.length);
```

**注意:数组的 length 属性是能修改的**

- **如果 length 大于原长度，则多余的部分索引的值为 empty**

- **如果 length 小于原长度，则多出的元素会被删除，所以可以修改 length 的长度为 0 来让数组为空**

**向数组的最后一个位置添加元素**

**用法:数组名[数组名.length]=值**

```js
var arr=new Array()
arr[arr.length]=70；// 因为length永远是最大索引加1
```

### 8.4 数组的方法

**数组的方法一般都不会使原数组发生变化,而是返回一个新的数组,只有改变原数组结果的方法才会使得原数组发生**

**改变**

#### 8.4.1 push 与 pop 方法

- **push()方法可以向数组的末尾添加一个或多个值,并返回数组的新长度**

- - 添加一个值时,作用和用 length 向数组中最后添加一个值相同

- - 添加多个值时,参数用,隔开

```js
var arr = [];
//将要添加的值作为该方法的参数传递,添加的值会自动在数组的最后
console.log(arr.push(1)); //返回的值为1,返回值是这个数组的新长度
console.log(arr); //值为1的数组

console.log(arr.push(2, 3));
console.log(arr); //值为1,2,3的数组
```

- pop()方法可以删除数组的最后一个值，并将被删除的值作为返回值返回,不传入参数

  ```js
  var arr = [1, 2, 3];
  console.log(arr.pop()); //返回3
  console.log(arr); //每使用一次数组长度length少1
  ```

#### 8.4.2 unshift 与 shift 方法

- unshift()方法向数组开头添加一个或多个值,并返回新的数组长度

  添加多个值时,参数用,隔开。添加完成后其

  它值的索引一次向后调整对象的值

  注意:

  只能通过该方法在数组最前方添加新的值

  ```js
  var arr = [2, 3];
  console.log(arr.unshift(1)); //返回数组新长度3
  console.log(arr); //值为1,2,3的数组

  console.log(arr.unshift(-1, 0));
  console.log(arr); //值为-1,0,1,2,3的数组
  ```

- shift()方法删除数组的第一个元素,并将被删除的元素作为返回值返回用法与 pop()相反

  ```js
  var arr = [1, 2, 3];
  console.log(arr.shift()); //返回1
  console.log(arr); //每使用一次数组长度length减少1,并且其他值的索引依次-1
  ```

#### 8.4.3 forEach 方法

**数组的遍历**

- for 循环遍历数组,通过数组的 length 属性来获取数组的长度

  ```js
  var arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
  ```

- forEach()方法遍历数组(该方法只支持 IE8 以上的浏览器,如果要兼容 IE8,用 for 循环)

  forEach()方法需要一个函数作为参数才能使用,数组中有几个元素函数就会执行几次,不支持在函数中添加

  返回值

  ```js
  var arr = [1, 2, 3];
  arr.forEach(function() {
    //这个函数只是我们创建,但是不需要我们调用,由浏览器自动调用,称为回调函数
    console.log("hello");
  });
  ```

**每次执行时浏览器会将遍历到的数组以实参的形式传递进来,可以定义形参来读取这些内容**

**该方法有两个参数**

- 回调函数 function(value,index,array)
  **浏览器在回调函数中传递了三个参数**

- - 第一个参数是遍历到的值 value

- - 第二个参数是当前正在遍历元素的索引 index

- - 第三个参数是正在遍历的数组(可选)

```js
var arr = [1, 2, 3];
arr.forEach(function(value, index, array) {
  console.log(index + "," + value);
  console.log(array);
});
```

- 回调函数中 this 所指的对象,如果不写或者传入 null 和 undefined,回调函数中的 this 为全局对象 window(可选)

#### 8.4.4 map 方法

**map(映射)()方法也是用做遍历数组,返回一个新数组,数组中的元素为原始数组元素调用函数处理后的值,并且按**

**照原始数组元素顺序依次处理元素**

**该方法有两个参数**

- 回调函数 function(value,index,array){}(和 forEach 中的回调函数一样),但是可以在回调函数里加返回值
  **浏览器在回调函数中传递了三个参数**

- - 第一个参数是遍历到的值 value

- - 第二个参数是当前正在遍历元素的索引 index

- - 第三个参数是正在遍历的数组(可选)

- 回调函数中 this 所指的对象,如果不写或者传入 null 和 undefined,回调函数中的 this 为全局对象 window(可选)

```js
let arr = [12, 5, 8];
let result = arr.map(function (item) {
    return item*2;
})
let result2 = arr.map(item=>item*2);//map方法适合用箭头函数

console.log(result);//[ 24, 10, 16 ]
console.log(result2);//[ 24, 10, 16 ]

let score = [18, 86, 88, 24];
let result3 = score.map(item =>item>= 60?'及格':'不及格');
console.log(result3);//[ '不及格', '及格', '及格', '不及格']

let arr2=[1,2,3];
let result4=arr2.map(function(value,index,array),arr2){
    console.log(this);//this的指向为arr2
    return value+index;
}
```

#### 8.4.5 reduce 方法

**reduce(汇总)()方法接收一个函数作为累加器，数组中的每个值(从左到右)开始缩减,最终计算为一个值**

**该方法有两个参数**

- 回调函数 function(total, value, index, array)
  **浏览器在回调函数中传递了四个参数**

- - 第一个参数是每次计算结束后的返回值(第一次计算时默认值是 0)

- - 第二个参数是遍历到的值 value

- - 第三个参数是当前正在遍历元素的索引 index

- - 第四个参数是正在遍历的数组(可选)

- 回调函数的初始值 initialValue(用于设置上方第一个参数第一次计算时的值)(可选)

```js
//数组求和
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(prev, next) {
  return prev + next;
});
console.log(result); //值为15;

//对象求和
var ps = [
  { p: 1, num: 1 },
  { p: 2, num: 2 },
  { p: 3, num: 3 },
  { p: 4, num: 4 },
];
ps.reduce(function(prev, next) {
  return prev + next.p * next.num;
}, 10); //回调函数的第一次调用时，第一个参数是10，第二个参数是p[0]

//检验数组中出现字符串的数目
var arr = ["HTML", "JS", "CSS", "JAVA", "CSS", "HTML", "HTML"];
var result = arr.reduce(function(back, prop) {
  back[prop] = back[prop] ? ++back[prop] : 1;
  return back;
}, {});
console.log(result); //{HTML: 3, JS: 1, CSS: 2, JAVA: 1}
```

#### 8.4.6 filter 方法

**filter(过滤器)()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素**

**该方法有两个参数**

- 回调函数 function(value,index,array)

**浏览器在回调函数中传递了三个参数**

- 第一个参数是遍历到的值 value

- 第二个参数是当前正在遍历元素的索引 index

- 第三个参数是正在遍历的数组(可选)

- 回调函数中 this 所指的对象,如果不写或者传入 null 和 undefined,回调函数中的 this 为全局对象 window(可选)

```js
//创建一个数组，判断数组中是否存在某个值
var newarr = [
  { num: 1, val: "ceshi", flag: "aa" },
  { num: 2, val: "ceshi2", flag: "aa2" },
];
console.log(newarr.filter((item) => item.num === 2));

//去掉空数组空字符串、undefined、null
var arr = ["1", null, undefined, "3.jpg", ""];
var newArr = arr.filter((item) => item); //因为null,undefined和null转换为布尔值都是false
console.log(newArr); //只有1和3.jpg
```

#### 8.4.7 slice 方法

**slice()方法可以用来从数组截取指定一部分值,这个方法不会影响原数组**

**该方法有两个参数**

- 截取开始的位置(必选)

- 截取结束的位置(查找时不包括结束位置)(可选),如果不写结束位置会从截取位置开始将后面所有值都截取

```js
var arr=[123,"孙悟空","猪八戒"]；
var result=arr.slice(0,2);
console.log(result);//值为123和孙悟空
```

**注意:**

- 该方法只能从左往右边截取,如果第一个数比第二个数大,则会返回空串

- 该方法接收负值,负值意味着从右往左数

#### 8.4.8 splice 方法

**splice()方法可以用于删除数组中的指定元素，并向数组中添加新元素**,可以看作是 push,pop 和 unshift,shift 四种方

法的结合,**该方法会影响到原数组**,会将指定元素从元素组中删除,并将被删除的元素作为返回值返回

**注意:如果没有删除任何元素,返回空数组**

**该方法有任意多个参数,但是有两个必选参数**

- 第一个参数规定开始删除元素的索引位置

- 第二个参数规定应该删除的元素数量,值可以为 0

- 第三个及以后的参数是要添加到数组中的新元素,这些元素将会自动插入到开始位置索引的前边

```js
var arr=[0,1,2,3,4];
var result=arr.splice(0，2);
console.log(arr);//值为2,3,4的数组
console.log(result);//值为0,1的数组
```

```js
//用作去除相等的数组中的数值时,可以用splice()方法来删除一个数组元素
//方法一
var arr = [1, 2, 3, 5, 3, 3, 6];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--; //当删除了当前的j所在元素以后,后面的元素会自动补位，此时将不会再比较这个元素，所以需
    } //要自减才能比较
  }
}
//方法二
var arr2 = [1, 2, 3, 5, 3, 3, 6];
for (
  var i = arr2.length - 1;
  i >= 0;
  i-- //从后往前判断
) {
  for (var j = i - 1; j >= 0; j--) {
    if (arr2[i] === arr2[j]) {
      arr2.splice(j, 1);
    }
  }
}
//方法三(ES6方法去重)
var arr3 = [1, 2, 3, 5, 3, 3, 6];
var arr4 = [...new Set(arr3)];
/*
用new Set()会将传入的数组转换为Set结构数组,因为Set结构是不允许有重复的数据,所以会自动去重,最后通过  解构将Set结构数组重新转换为普通数组
*/
```

#### 8.4.9 concat 方法

**concat()方法可以连接两个或多个数组,也可以连接单个的元素,并将新数组返回**,该方法不会对原数组产生影响

```js
var arr = [123, 245];
var arr2 = [566, 156];

var result = arr.concat(arr2); //将两个数组连接起来
console.log(result); //result的值为123,245,566,156

//可以连接多个数组或值
var arr3 = [1, 2, 3];
var result2 = arr.concat(arr2, arr3, "999");
console.log(result2); //值为123,245,566,156,1,2,3,"999"
```

**注意:**将一个数组放在另一个数组中最好的方法还是通过 ES6 的语法: ...数组名 来实现

#### 8.4.10 join 方法

**join()方法可以将数组转换为一个字符串,并将转换后的字符串返回,**不会对原数组产生影响

**join 中的参数为一个字符串,用这个字符串代替数组中的,(逗号)将数组分开**,默认值为,(逗号),与对整个数组使用

toString()方法效果一样

**注意:**如果在 join()中传入了空串""作为参数,那么返回的字符串是整个数组合并后的值,相当于把数组中每个值用+连接

```js
var arr = [1, 2, 3];
var str = arr.join(); //默认用,分开
var str2 = arr.join(""); //空串将整个数组的值合并
var str3 = arr.join("H"); //用字符H隔开
console.log(str); //"1,2,3"
console.log(str2); //"123"
console.log(str3); //"1H2H3"
```

#### 8.4.11 reverse 方法

**reverse()方法用作将数组里的值反转(左边的值到右边,右边的值到左边),该方法会直接修改原数组，返回值也是**

**修改后的数组**

```js
var arr = [1, 2, 3];
var result = arr.reverse();
console.log(arr); //值依次为3,2,1
console.log(result); //值依次为3,2,1
```

#### 8.4.12 sort 方法

**sort()方法会对数组的元素进行排序,默认会按照 Unicode 编码进行排序(不是比较值的大小,即使对于纯数字的数**

**组,也会按照 Unicode 编码来排序),该方法会影响原数组**

**自己指定排序的规则**

**在 sort()添加一个回调函数,回调函数中需要定义两个形参,浏览器将会分别使用数组中的元素作为实参去调用回**

**调函，使用哪个元素调用不确定，但是肯定的是在数组中 a 一定在 b 的前面,浏览器会根据回调函数的返回值来决**

**定元素的顺序**

**如果返回一个大于 0 的值 ，则元素会交换位置，如果返回一个小于 0 的值，则元素位置不变，如果返回 0，则认为两个元素相等，也不交换位置**

```js
var arr = [5, 4, 2, 1, 3, 8, 9];

arr.sort(function(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr); //[1,2,3,4,5,8,9]
//上面是升序排列，如果要降序排列只用改变返回值

arr.sort(function(a, b) {
  return a - b; //上面写法的简写
});
```

#### 8.4.13 indexOf 与 lastIndexOf 方法

- indexOf()方法可以检索一个数组中是否含有指定的元素

  ,找到返回该元素在数组中的索引位置,没有找到则返

  回-1

  该方法可以指定第二个参数,第二个参数是指定开始查找的位置(0 是第一个位置)

  ```js
  var arr = [1, 2, 3];
  var result = arr.indexOf(1);
  console.log(result); //0
  result = str.indexOf(1, 1);
  console.log(result); //-1
  ```

- lastIndexOf()方法用法和 IndexOf()类似,不同的是检索数组时是**从右到左**检索,也可以指定开始查找的位置
  **注意:**虽然是从右往左检索,但是在设置第二个参数的时候指定开始查找的位置还是从左往右数的,只是查找的时
  候是从右往左

#### 8.4.14 valueOf 方法

**valueOf()返回数组原始值(数组本身)**

```js
var arr = [1, 2, 3];
var result = str.valueOf();
console.log(str === result); //true
```

#### 8.4.15 fill 方法

**fill() 方法用于将一个固定值替换数组的元素**,该方法有三个参数,会改变原数组

**参数**

- value,表示填充的值(必填)

- start,表示开始填充的位置(选填)

- end,表示停止填充的位置(选填,默认是整个数组长度)

```js
var arr = new Array(100); //创建长度为100的数组
arr.fill(1); //将1填充到所有的空位置
/*上面相当于
for(var i=0;i<arr.length;i++){
    arr[i]=1;
}
*/
console.log(arr); //[1,1,1,1,1,1....1]
```

#### 8.4.16 find 与 findIndex 方法

- **find()方法返回通过测试的数组的第一个元素的值，**接收一个回调函数,不会改变原始数组
  **浏览器在回调函数中传递了三个参数**

- - 第一个参数是遍历到的值 value

- - 第二个参数是当前正在遍历元素的索引 index

- - 第三个参数是正在遍历的数组(可选)

**find() 方法为数组中的每个元素都调用一次函数执行**

- - 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数

- - 如果没有符合条件的元素返回 undefined

- **findIndex() 方法返回传入一个测试条件中符合条件的数组第一个元素位置**,用法同 find()方法相同,接收一个回调函数,不会改变原始数组
  **findIndex()方法为数组中的每个元素都调用一次函数执行**

- - 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。

- - 如果没有符合条件的元素返回 -1

```js
var arr = [1, 2, 3, 4];
var result1 = arr.find(function(value, index, array) {
  return value > 2;
});
var result2 = arr.findIndex(function(value, index, array) {
  return value > 2;
});
console.log(result1); //3
console.log(result2); //2
```

#### 8.4.17 some 与 every 方法

- **some()方法用于检测数组中的元素是否满足指定条件,**接收一个回调函数, 不会改变原始数组
  **浏览器在回调函数中传递了三个参数**

- - 第一个参数是遍历到的值 value

- - 第二个参数是当前正在遍历元素的索引 index

- - 第三个参数是正在遍历的数组(可选)

**some() 方法会依次执行数组的每个元素**

- - 如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测

- - 如果没有满足条件的元素，则返回 false

- **every() 方法用于检测数组所有元素是否都符合指定条件,**与 some 一样都接收一个回调函数,不改变原数组
  **every() 方法使用指定函数检测数组中的所有元素**

- - 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。

- - 如果所有元素都满足条件，则返回 true。

```js
var arr = [1, 2, 3, 4];
var result1 = arr.some(function(value, index, array) {
  return value > 2;
});
var result2 = arr.every(function(value, index, array) {
  return value > 2;
});

console.log(result1); //true
console.log(result2); //fasle
```

#### 8.4.18 copyWithin 方法

**coptWithin()方法用于在当前数组内部将指定位置的元素复制到其他位置,并且会覆盖掉原来的元素,**返回当前数组,**此方法会改变原数组,**该方法有三个参数

**参数:**

- target,从该位置替换数据

- start,从该位置读取数据,默认值是 0,可以接受负值,负值代表从右往左数

- end.从该位置前停止读取数据,默认是整个数组长度,可以接受负值,负值代表从右往左数

```js
var arr = [1, 2, 3, 4, 5];
var result = arr.copyWith(0, 3); //从数组第一个位置开始替换数据,从第四个位置开始读取,读取后面所有值
console.log(arr); //[4,5,3,4,5]
console.log(result); //[4,5,3,4,5]
```

#### 8.4.19 keys,values 与 entries 方法

**这三个方法都用作遍历数组,都返回一个遍历器对象,可以用 for...of 语句进行遍历**

- keys()方法,对数组的键名(索引)进行遍历,返回一个新的数组

- values()方法,对数组的键值(值)进行遍历,返回一个新的数组

- entries()方法,对数组的键值对进行遍历,该方法会返回一个二维数组,会将遍历到的键名和键值装到一个数组里作为二维数组的值

```js
for (var index of [1, 2].keys()) {
  console.log(index); //0 1
}
for (var value of [1, 2].values()) {
  console.log(value); //1 2
}

for (var arr of [1, 2].entries()) {
  console.log(arr); //[0,1] [1,2]
}
for (var [index, value] of [1, 2].entries()) {
  console.log(index, value); //0,1 1,2
}
```

**Object 的 keys,values 与 entries 方法**

Object 的上述方法需要传入一个对象作为参数,此时会直接分别将键名,键值,键值对装在一个数组中

```
var obj=["a":0,"b":1];
console.log(Object.keys(obj));//["a","b"]
console.log(Object.values(obj));//[0,1]
console.log(Object.entries(obj));//[["a",0],["b",1]]
```

### 8.5 Array 的方法

#### 8.5.1 Array.isArray 方法

**Array.isArray()方法检验一个对象是否为真数组(不支持低版本 IE)**,可以用 instanceof 功能符来做兼容

```js
var arr = [];
if (arr instanceof Array) {
  console.log("1");
}
if (Array.isArray(arr)) {
  console.log("2");
}
```

#### 8.5.2 Array.from 方法

Array.from()方法用于将两类对象转换为真数组,该方法有三个参数

**参数:**

- 一个用于转换为真数组的类数组对象

- 一个回调函数,类似于数组的 map()方法中的回调函数,用来对每个元素进行处理,将处理后的值放入返回的数组

- 回调函数中 this 所指的对象,如果不写或者传入 null 和 undefined,回调函数中的 this 为全局对象 window(可选)

```js
//Nodelist对象
var div = document.getElementByTagName("div");
Array.from(div).forEach(function(value) {
  console.log(value);
});

//arguments对象
function fun() {
  var arr = Array.from(argumens);
  console.log(arr);
}
```

#### 8.5.3 Array.of 方法

Array.of()方法用于将一组值转换为数组,
这个方法的主要目的是弥补构造函数 Arrray()的因为参数数量的不同而造成行为不同的不足

```js
console.log(Array()); //[]
console.log(Array(3)); //[,,,]
console.log(Array(1, 2, 3)); //[1,2,3]

console.log(Array.of(3)); //[3]
console.log(Array.of(1, 2, 3)); //[1,2,3]
console.log(Array.of(3).length); //1
```

### 8.6 真数组与伪数组(类数组)

**真数组与伪数组都是对象,都有 length 属性,**而且真数组与一些伪数组的 length 属性都可以修改,所以不能用数组的 length 属性是否可变来判断一个数组是否是真数组

**真数组与伪数组的区别:**

真数组能够使用数组的拓展方法,而伪数组没有这些方法

**用 Array.isArray()可以检查一个对象是否为真数组**

```js
var arr = [1, 2, 3];
var obj = [(0: 1), (1: 2), (2: 3), (length: 3)]; //与真数组一样通过索引取值,有length属性

console.log(Array.isArray(arr)); //true
console.log(Array.isArray(obj)); //false
```

**真数组与伪数组的相互转换**

- 真数组转换为伪数组

  ```js
  var arr = [1, 2, 3];
  var obj = {};
  [].push.apply(obj, arr);
  console.log(obj);
  ```

- 伪数组转换为真数组

  ```js
  //通过Array.from()函数
  var obj = [(0: 1), (1: 2), (2: 3), (length: 3)];
  var arr = Array.from(obj);
  console.log(arr);

  //通过方法
  var arr1 = [];
  var obj1 = [(0: 1), (1: 2), (2: 3), (length: 3)];
  [].push.apply(arr, obj); //IE8以上兼容
  console.log(arr);

  var arr2 = [].slice.call(obj); //兼容IE8
  console.log(arr2);

  //通过循环
  var arr3 = [];
  var obj2 = [(0: 1), (1: 2), (2: 3), (length: 3)];
  for (var i = 0; i < obj.length; i++) {
    arr3[i] = obj2[i];
  }
  console.log(arr3);

  //通过拓展运算符
  var obj3 = [(0: 1), (1: 2), (2: 3), (length: 3)];
  var arr4 = [...obj3];
  console.log(arr4);
  ```
