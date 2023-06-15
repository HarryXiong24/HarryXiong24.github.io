---
icon: js
category: Web 前端
tag: JS 进阶教程
date: 2021-08-01
title: 25.正则表达式
---

# 正则表达式



## 概述

正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。比如，正则表达式给出一个 Email 地址的模式，然后用它来确定一个字符串是否为 Email 地址。JavaScript 的正则表达式体系是参照 Perl 5 建立的。

新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。

```js
var regex = /xyz/;
```

另一种是使用`RegExp`构造函数。

```js
var regex = new RegExp('xyz');
```

上面两种写法是等价的，都新建了一个内容为`xyz`的正则表达式对象。它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则表达式。

`RegExp`构造函数还可以接受第二个参数，表示修饰符（详细解释见下文）。

```js
var regex = new RegExp('xyz', 'i');
// 等价于
var regex = /xyz/i;
```

上面代码中，正则表达式`/xyz/`有一个修饰符`i`。



## RegExp 构造函数

在 ES5 中，`RegExp`构造函数的参数有两种情况。

第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）。

```js
var regex = new RegExp('xyz', 'i');
// 等价于
var regex = /xyz/i;
```

第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。

```js
var regex = new RegExp(/xyz/i);
// 等价于
var regex = /xyz/i;
```

但是，ES5 不允许此时使用第二个参数添加修饰符，否则会报错。

```js
var regex = new RegExp(/xyz/, 'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another
```

ES6 改变了这种行为。如果`RegExp`构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

```js
new RegExp(/abc/ig, 'i').flags
// "i"
```

上面代码中，原有正则对象的修饰符是`ig`，它会被第二个参数`i`覆盖。



## 实例属性

正则对象的实例属性分成两类。

一类是修饰符相关，用于了解设置了什么修饰符。

- `RegExp.prototype.ignoreCase`：返回一个布尔值，表示是否设置了`i`修饰符。
- `RegExp.prototype.global`：返回一个布尔值，表示是否设置了`g`修饰符。
- `RegExp.prototype.multiline`：返回一个布尔值，表示是否设置了`m`修饰符。
- `RegExp.prototype.flags`：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。

上面四个属性都是只读的。

```js
var r = /abc/igm;

r.ignoreCase // true
r.global // true
r.multiline // true
r.flags // 'gim'
```

另一类是与修饰符无关的属性，主要是下面两个。

- `RegExp.prototype.lastIndex`：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义，详细介绍请看后文。
- `RegExp.prototype.source`：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。

```js
var r = /abc/igm;

r.lastIndex // 0
r.source // "abc"
```



## 实例方法

### RegExp.prototype.test()

正则实例对象的`test`方法返回一个布尔值，表示当前模式是否能匹配参数字符串。

```
/cat/.test('cats and dogs') // true
```

上面代码验证参数字符串之中是否包含`cat`，结果返回`true`。

如果正则表达式带有`g`修饰符，则每一次`test`方法都从上一次结束的位置开始向后匹配。

```js
var r = /x/g;
var s = '_x_x';

r.lastIndex // 0
r.test(s) // true

r.lastIndex // 2
r.test(s) // true

r.lastIndex // 4
r.test(s) // false
```

上面代码的正则表达式使用了`g`修饰符，表示是全局搜索，会有多个结果。接着，三次使用`test`方法，每一次开始搜索的位置都是上一次匹配的后一个位置。

带有`g`修饰符时，可以通过正则对象的`lastIndex`属性指定开始搜索的位置。

```js
var r = /x/g;
var s = '_x_x';

r.lastIndex = 4;
r.test(s) // false

r.lastIndex // 0
r.test(s)
```

上面代码指定从字符串的第五个位置开始搜索，这个位置为空，所以返回`false`。同时，`lastIndex`属性重置为`0`，所以第二次执行`r.test(s)`会返回`true`。

注意，带有`g`修饰符时，正则表达式内部会记住上一次的`lastIndex`属性，这时不应该更换所要匹配的字符串，否则会有一些难以察觉的错误。

```js
var r = /bb/g;
r.test('bb') // true
r.test('-bb-') // false
```

上面代码中，由于正则表达式`r`是从上一次的`lastIndex`位置开始匹配，导致第二次执行`test`方法时出现预期以外的结果。

`lastIndex`属性只对同一个正则表达式有效，所以下面这样写是错误的。

```js
var count = 0;
while (/a/g.test('babaa')) count++;
```

上面代码会导致无限循环，因为`while`循环的每次匹配条件都是一个新的正则表达式，导致`lastIndex`属性总是等于0。

如果正则模式是一个空字符串，则匹配所有字符串。

```js
new RegExp('').test('abc')
// true
```

### RegExp.prototype.exec()

正则实例对象的`exec()`方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回`null`。

```js
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

r1.exec(s) // ["x"]
r2.exec(s) // null
```

上面代码中，正则对象`r1`匹配成功，返回一个数组，成员是匹配结果；正则对象`r2`匹配失败，返回`null`。

如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。整个数组的`length`属性等于组匹配的数量再加1。

```js
var s = '_x_x';
var r = /_(x)/;

r.exec(s) // ["_x", "x"]
```

上面代码的`exec()`方法，返回一个数组。第一个成员是整个匹配的结果，第二个成员是圆括号匹配的结果。

`exec()`方法的返回数组还包含以下两个属性：

- `input`：整个原字符串。
- `index`：模式匹配成功的开始位置（从0开始计数）。

```js
var r = /a(b+)a/;
var arr = r.exec('_abbba_aba_');

arr // ["abbba", "bbb"]

arr.index // 1
arr.input // "_abbba_aba_"
```

上面代码中的`index`属性等于1，是因为从原字符串的第二个位置开始匹配成功。

如果正则表达式加上`g`修饰符，则可以使用多次`exec()`方法，下一次搜索的位置从上一次匹配成功结束的位置开始。

```js
var reg = /a/g;
var str = 'abc_abc_abc'

var r1 = reg.exec(str);
r1 // ["a"]
r1.index // 0
reg.lastIndex // 1

var r2 = reg.exec(str);
r2 // ["a"]
r2.index // 4
reg.lastIndex // 5

var r3 = reg.exec(str);
r3 // ["a"]
r3.index // 8
reg.lastIndex // 9

var r4 = reg.exec(str);
r4 // null
reg.lastIndex // 0
```

上面代码连续用了四次`exec()`方法，前三次都是从上一次匹配结束的位置向后匹配。当第三次匹配结束以后，整个字符串已经到达尾部，匹配结果返回`null`，正则实例对象的`lastIndex`属性也重置为`0`，意味着第四次匹配将从头开始。

利用`g`修饰符允许多次匹配的特点，可以用一个循环完成全部匹配。

```js
var reg = /a/g;
var str = 'abc_abc_abc'

while(true) {
  var match = reg.exec(str);
  if (!match) break;
  console.log('#' + match.index + ':' + match[0]);
}
// #0:a
// #4:a
// #8:a
```

上面代码中，只要`exec()`方法不返回`null`，就会一直循环下去，每次输出匹配的位置和匹配的文本。

正则实例对象的`lastIndex`属性不仅可读，还可写。设置了`g`修饰符的时候，只要手动设置了`lastIndex`的值，就会从指定位置开始匹配。

## 字符串的实例方法

### 概述

字符串的实例方法之中，有4种与正则表达式有关。

- `String.prototype.match()`：返回一个数组，成员是所有匹配的子字符串。

- `String.prototype.search()`：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。

- `String.prototype.replace()`：按照给定的正则表达式进行替换，返回替换后的字符串。

- `String.prototype.split()`：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。



ES6 出现之前，字符串对象共有 4 个方法，可以使用正则表达式：`match()`、`replace()`、`search()`和`split()`。

ES6 将这 4 个方法，在语言内部全部调用`RegExp`的实例方法，从而做到所有与正则相关的方法，全都定义在`RegExp`对象上。

  - `String.prototype.match` 调用 `RegExp.prototype[Symbol.match]`
  - `String.prototype.replace` 调用 `RegExp.prototype[Symbol.replace]`
  - `String.prototype.search` 调用 `RegExp.prototype[Symbol.search]`
  - `String.prototype.split` 调用 `RegExp.prototype[Symbol.split]`

### String.prototype.match()

字符串实例对象的`match`方法对字符串进行正则匹配，返回匹配结果。

```
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

s.match(r1) // ["x"]
s.match(r2) // null
```

从上面代码可以看到，字符串的`match`方法与正则对象的`exec`方法非常类似：匹配成功返回一个数组，匹配失败返回`null`。

如果正则表达式带有`g`修饰符，则该方法与正则对象的`exec`方法行为不同，会一次性返回所有匹配成功的结果。

```
var s = 'abba';
var r = /a/g;

s.match(r) // ["a", "a"]
r.exec(s) // ["a"]
```

设置正则表达式的`lastIndex`属性，对`match`方法无效，匹配总是从字符串的第一个字符开始。

```
var r = /a|b/g;
r.lastIndex = 7;
'xaxb'.match(r) // ['a', 'b']
r.lastIndex // 0
```

上面代码表示，设置正则对象的`lastIndex`属性是无效的。

### String.prototype.search()

字符串对象的`search`方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回`-1`。

```
'_x_x'.search(/x/)
// 1
```

上面代码中，第一个匹配结果出现在字符串的`1`号位置。

### String.prototype.replace()

字符串对象的`replace`方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容。

```
str.replace(search, replacement)
```

正则表达式如果不加`g`修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。

```
'aaa'.replace('a', 'b') // "baa"
'aaa'.replace(/a/, 'b') // "baa"
'aaa'.replace(/a/g, 'b') // "bbb"
```

上面代码中，最后一个正则表达式使用了`g`修饰符，导致所有的`a`都被替换掉了。

`replace`方法的一个应用，就是消除字符串首尾两端的空格。

```
var str = '  #id div.class  ';

str.replace(/^\s+|\s+$/g, '')
// "#id div.class"
```

`replace`方法的第二个参数可以使用美元符号`$`，用来指代所替换的内容。

- `$&`：匹配的子字符串。
- `$``：匹配结果前面的文本。
- `$'`：匹配结果后面的文本。
- `$n`：匹配成功的第`n`组内容，`n`是从1开始的自然数。
- `$$`：指代美元符号`$`。

```
'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
// "world hello"

'abc'.replace('b', '[$`-$&-$\']')
// "a[a-b-c]c"
```

上面代码中，第一个例子是将匹配的组互换位置，第二个例子是改写匹配的值。

`replace`方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。

```
'3 and 5'.replace(/[0-9]+/g, function (match) {
  return 2 * match;
})
// "6 and 10"

var a = 'The quick brown fox jumped over the lazy dog.';
var pattern = /quick|brown|lazy/ig;

a.replace(pattern, function replacer(match) {
  return match.toUpperCase();
});
// The QUICK BROWN fox jumped over the LAZY dog.
```

作为`replace`方法第二个参数的替换函数，可以接受多个参数。其中，第一个参数是捕捉到的内容，第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）。此外，最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置（比如从第五个位置开始），最后一个参数是原字符串。下面是一个网页模板替换的例子。

```
var prices = {
  'p1': '$1.99',
  'p2': '$9.99',
  'p3': '$5.00'
};

var template = '<span id="p1"></span>'
  + '<span id="p2"></span>'
  + '<span id="p3"></span>';

template.replace(
  /(<span id=")(.*?)(">)(<\/span>)/g,
  function(match, $1, $2, $3, $4){
    return $1 + $2 + $3 + prices[$2] + $4;
  }
);
// "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"
```

上面代码的捕捉模式中，有四个括号，所以会产生四个组匹配，在匹配函数中用`$1`到`$4`表示。匹配函数的作用是将价格插入模板中。

### String.prototype.split()

字符串对象的`split`方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。

```
str.split(separator, [limit])
```

该方法接受两个参数，第一个参数是正则表达式，表示分隔规则，第二个参数是返回数组的最大成员数。

```
// 非正则分隔
'a,  b,c, d'.split(',')
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
'a,  b,c, d'.split(/, */, 2)
[ 'a', 'b' ]
```

上面代码使用正则表达式，去除了子字符串的逗号后面的空格。

```
// 例一
'aaa*a*'.split(/a*/)
// [ '', '*', '*' ]

// 例二
'aaa**a*'.split(/a*/)
// ["", "*", "*", "*"]
```

上面代码的分割规则是0次或多次的`a`，由于正则默认是贪婪匹配，所以例一的第一个分隔符是`aaa`，第二个分割符是`a`，将字符串分成三个部分，包含开始处的空字符串。例二的第一个分隔符是`aaa`，第二个分隔符是0个`a`（即空字符），第三个分隔符是`a`，所以将字符串分成四个部分。

如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回。

```
'aaa*a*'.split(/(a*)/)
// [ '', 'aaa', '*', 'a', '*' ]
```

上面代码的正则表达式使用了括号，第一个组匹配是`aaa`，第二个组匹配是`a`，它们都作为数组成员返回。

## 匹配规则

正则表达式的规则很复杂，下面一一介绍这些规则。

### 字面量字符和元字符

大部分字符在正则表达式中，就是字面的含义，比如`/a/`匹配`a`，`/b/`匹配`b`。如果在正则表达式之中，某个字符只表示它字面的含义（就像前面的`a`和`b`），那么它们就叫做“字面量字符”（literal characters）。

```
/dog/.test('old dog') // true
```

上面代码中正则表达式的`dog`，就是字面量字符，所以`/dog/`匹配`old dog`，因为它就表示`d`、`o`、`g`三个字母连在一起。

除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。它们叫做“元字符”（metacharacters），主要有以下几个。

**（1）点字符（.)**

点字符（`.`）匹配除回车（`\r`）、换行(`\n`) 、行分隔符（`\u2028`）和段分隔符（`\u2029`）以外的所有字符。注意，对于码点大于`0xFFFF`字符，点字符不能正确匹配，会认为这是两个字符。

```
/c.t/
```

上面代码中，`c.t`匹配`c`和`t`之间包含任意一个字符的情况，只要这三个字符在同一行，比如`cat`、`c2t`、`c-t`等等，但是不匹配`coot`。

**（2）位置字符**

位置字符用来提示字符所处的位置，主要有两个字符。

- `^` 表示字符串的开始位置
- `$` 表示字符串的结束位置

```
// test必须出现在开始位置
/^test/.test('test123') // true

// test必须出现在结束位置
/test$/.test('new test') // true

// 从开始位置到结束位置只有test
/^test$/.test('test') // true
/^test$/.test('test test') // false
```

**（3）选择符（`|`）**

竖线符号（`|`）在正则表达式中表示“或关系”（OR），即`cat|dog`表示匹配`cat`或`dog`。

```
/11|22/.test('911') // true
```

上面代码中，正则表达式指定必须匹配`11`或`22`。

多个选择符可以联合使用。

```
// 匹配fred、barney、betty之中的一个
/fred|barney|betty/
```

选择符会包括它前后的多个字符，比如`/ab|cd/`指的是匹配`ab`或者`cd`，而不是指匹配`b`或者`c`。如果想修改这个行为，可以使用圆括号。

```
/a( |\t)b/.test('a\tb') // true
```

上面代码指的是，`a`和`b`之间有一个空格或者一个制表符。

其他的元字符还包括`\`、`*`、`+`、`?`、`()`、`[]`、`{}`等，将在下文解释。

### 转义符

正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠。比如要匹配`+`，就要写成`\+`。

```
/1+1/.test('1+1')
// false

/1\+1/.test('1+1')
// true
```

上面代码中，第一个正则表达式之所以不匹配，因为加号是元字符，不代表自身。第二个正则表达式使用反斜杠对加号转义，就能匹配成功。

正则表达式中，需要反斜杠转义的，一共有12个字符：`^`、`.`、`[`、`$`、`(`、`)`、`|`、`*`、`+`、`?`、`{`和`\`。需要特别注意的是，如果使用`RegExp`方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。

```
(new RegExp('1\+1')).test('1+1')
// false

(new RegExp('1\\+1')).test('1+1')
// true
```

上面代码中，`RegExp`作为构造函数，参数是一个字符串。但是，在字符串内部，反斜杠也是转义字符，所以它会先被反斜杠转义一次，然后再被正则表达式转义一次，因此需要两个反斜杠转义。

### 特殊字符

正则表达式对一些不能打印的特殊字符，提供了表达方法。

- `\cX` 表示`Ctrl-[X]`，其中的`X`是A-Z之中任一个英文字母，用来匹配控制字符。
- `[\b]` 匹配退格键(U+0008)，不要与`\b`混淆。
- `\n` 匹配换行键。
- `\r` 匹配回车键。
- `\t` 匹配制表符 tab（U+0009）。
- `\v` 匹配垂直制表符（U+000B）。
- `\f` 匹配换页符（U+000C）。
- `\0` 匹配`null`字符（U+0000）。
- `\xhh` 匹配一个以两位十六进制数（`\x00`-`\xFF`）表示的字符。
- `\uhhhh` 匹配一个以四位十六进制数（`\u0000`-`\uFFFF`）表示的 Unicode 字符。

### 字符类

字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如`[xyz]` 表示`x`、`y`、`z`之中任选一个匹配。

```
/[abc]/.test('hello world') // false
/[abc]/.test('apple') // true
```

上面代码中，字符串`hello world`不包含`a`、`b`、`c`这三个字母中的任一个，所以返回`false`；字符串`apple`包含字母`a`，所以返回`true`。

有两个字符在字符类中有特殊含义。

**（1）脱字符（^）**

如果方括号内的第一个字符是`[^]`，则表示除了字符类之中的字符，其他字符都可以匹配。比如，`[^xyz]`表示除了`x`、`y`、`z`之外都可以匹配。

```
/[^abc]/.test('bbc news') // true
/[^abc]/.test('bbc') // false
```

上面代码中，字符串`bbc news`包含`a`、`b`、`c`以外的其他字符，所以返回`true`；字符串`bbc`不包含`a`、`b`、`c`以外的其他字符，所以返回`false`。

如果方括号内没有其他字符，即只有`[^]`，就表示匹配一切字符，其中包括换行符。相比之下，点号作为元字符（`.`）是不包括换行符的。

```
var s = 'Please yes\nmake my day!';

s.match(/yes.*day/) // null
s.match(/yes[^]*day/) // [ 'yes\nmake my day']
```

上面代码中，字符串`s`含有一个换行符，点号不包括换行符，所以第一个正则表达式匹配失败；第二个正则表达式`[^]`包含一切字符，所以匹配成功。

> 注意，脱字符只有在字符类的第一个位置才有特殊含义，否则就是字面含义。

**（2）连字符（-）**

某些情况下，对于连续序列的字符，连字符（`-`）用来提供简写形式，表示字符的连续范围。比如，`[abc]`可以写成`[a-c]`，`[0123456789]`可以写成`[0-9]`，同理`[A-Z]`表示26个大写字母。

```
/a-z/.test('b') // false
/[a-z]/.test('b') // true
```

上面代码中，当连字号（dash）不出现在方括号之中，就不具备简写的作用，只代表字面的含义，所以不匹配字符`b`。只有当连字号用在方括号之中，才表示连续的字符序列。

以下都是合法的字符类简写形式。

```
[0-9.,]
[0-9a-fA-F]
[a-zA-Z0-9-]
[1-31]
```

上面代码中最后一个字符类`[1-31]`，不代表`1`到`31`，只代表`1`到`3`。

连字符还可以用来指定 Unicode 字符的范围。

```
var str = "\u0130\u0131\u0132";
/[\u0128-\uFFFF]/.test(str)
// true
```

上面代码中，`\u0128-\uFFFF`表示匹配码点在`0128`到`FFFF`之间的所有字符。

另外，不要过分使用连字符，设定一个很大的范围，否则很可能选中意料之外的字符。最典型的例子就是`[A-z]`，表面上它是选中从大写的`A`到小写的`z`之间52个字母，但是由于在 ASCII 编码之中，大写字母与小写字母之间还有其他字符，结果就会出现意料之外的结果。

```
/[A-z]/.test('\\') // true
```

上面代码中，由于反斜杠（'\'）的ASCII码在大写字母与小写字母之间，结果会被选中。

### 预定义模式

预定义模式指的是某些常见模式的简写方式。

- `\d` 匹配0-9之间的任一数字，相当于`[0-9]`。
- `\D` 匹配所有0-9以外的字符，相当于`[^0-9]`。
- `\w` 匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`。
- `\W` 除所有字母、数字和下划线以外的字符，相当于`[^A-Za-z0-9_]`。
- `\s` 匹配空格（包括换行符、制表符、空格符等），相等于`[ \t\r\n\v\f]`。
- `\S` 匹配非空格的字符，相当于`[^ \t\r\n\v\f]`。
- `\b` 匹配词的边界。
- `\B` 匹配非词边界，即在词的内部。

下面是一些例子。

```
// \s 的例子
/\s\w*/.exec('hello world') // [" world"]

// \b 的例子
/\bworld/.test('hello world') // true
/\bworld/.test('hello-world') // true
/\bworld/.test('helloworld') // false

// \B 的例子
/\Bworld/.test('hello-world') // false
/\Bworld/.test('helloworld') // true
```

上面代码中，`\s`表示空格，所以匹配结果会包括空格。`\b`表示词的边界，所以`world`的词首必须独立（词尾是否独立未指定），才会匹配。同理，`\B`表示非词的边界，只有`world`的词首不独立，才会匹配。

通常，正则表达式遇到换行符（`\n`）就会停止匹配。

```
var html = "<b>Hello</b>\n<i>world!</i>";

/.*/.exec(html)[0]
// "<b>Hello</b>"
```

上面代码中，字符串`html`包含一个换行符，结果点字符（`.`）不匹配换行符，导致匹配结果可能不符合原意。这时使用`\s`字符类，就能包括换行符。

```
var html = "<b>Hello</b>\n<i>world!</i>";

/[\S\s]*/.exec(html)[0]
// "<b>Hello</b>\n<i>world!</i>"
```

上面代码中，`[\S\s]`指代一切字符。

### 重复类

模式的精确匹配次数，使用大括号（`{}`）表示。`{n}`表示恰好重复`n`次，`{n,}`表示至少重复`n`次，`{n,m}`表示重复不少于`n`次，不多于`m`次。

```
/lo{2}k/.test('look') // true
/lo{2,5}k/.test('looook') // true
```

上面代码中，第一个模式指定`o`连续出现2次，第二个模式指定`o`连续出现2次到5次之间。

### 量词符

量词符用来设定某个模式出现的次数。

- `?` 问号表示某个模式出现0次或1次，等同于`{0, 1}`。
- `*` 星号表示某个模式出现0次或多次，等同于`{0,}`。
- `+` 加号表示某个模式出现1次或多次，等同于`{1,}`。

```
// t 出现0次或1次
/t?est/.test('test') // true
/t?est/.test('est') // true

// t 出现1次或多次
/t+est/.test('test') // true
/t+est/.test('ttest') // true
/t+est/.test('est') // false

// t 出现0次或多次
/t*est/.test('test') // true
/t*est/.test('ttest') // true
/t*est/.test('tttest') // true
/t*est/.test('est') // true
```

### 贪婪模式

上一小节的三个量词符，默认情况下都是最大可能匹配，即匹配到下一个字符不满足匹配规则为止。这被称为贪婪模式。

```
var s = 'aaa';
s.match(/a+/) // ["aaa"]
```

上面代码中，模式是`/a+/`，表示匹配1个`a`或多个`a`，那么到底会匹配几个`a`呢？因为默认是贪婪模式，会一直匹配到字符`a`不出现为止，所以匹配结果是3个`a`。

除了贪婪模式，还有非贪婪模式，即最小可能匹配。只要一发现匹配，就返回结果，不要往下检查。如果想将贪婪模式改为非贪婪模式，可以在量词符后面加一个问号。

```
var s = 'aaa';
s.match(/a+?/) // ["a"]
```

上面例子中，模式结尾添加了一个问号`/a+?/`，这时就改为非贪婪模式，一旦条件满足，就不再往下匹配，`+?`表示只要发现一个`a`，就不再往下匹配了。

除了非贪婪模式的加号（`+?`），还有非贪婪模式的星号（`*?`）和非贪婪模式的问号（`??`）。

- `+?`：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
- `*?`：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
- `??`：表格某个模式出现0次或1次，匹配时采用非贪婪模式。

```
'abb'.match(/ab*/) // ["abb"]
'abb'.match(/ab*?/) // ["a"]

'abb'.match(/ab?/) // ["ab"]
'abb'.match(/ab??/) // ["a"]
```

上面例子中，`/ab*/`表示如果`a`后面有多个`b`，那么匹配尽可能多的`b`；`/ab*?/`表示匹配尽可能少的`b`，也就是0个`b`。

### 修饰符

修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部。

修饰符可以单个使用，也可以多个一起使用。

```
// 单个修饰符
var regex = /test/i;

// 多个修饰符
var regex = /test/ig;
```

**（1）g 修饰符**

默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。`g`修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。

```
var regex = /b/;
var str = 'abba';

regex.test(str); // true
regex.test(str); // true
regex.test(str); // true
```

上面代码中，正则模式不含`g`修饰符，每次都是从字符串头部开始匹配。所以，连续做了三次匹配，都返回`true`。

```
var regex = /b/g;
var str = 'abba';

regex.test(str); // true
regex.test(str); // true
regex.test(str); // false
```

上面代码中，正则模式含有`g`修饰符，每次都是从上一次匹配成功处，开始向后匹配。因为字符串`abba`只有两个`b`，所以前两次匹配结果为`true`，第三次匹配结果为`false`。

**（2）i 修饰符**

默认情况下，正则对象区分字母的大小写，加上`i`修饰符以后表示忽略大小写（ignoreCase）。

```
/abc/.test('ABC') // false
/abc/i.test('ABC') // true
```

上面代码表示，加了`i`修饰符以后，不考虑大小写，所以模式`abc`匹配字符串`ABC`。

**（3）m 修饰符**

`m`修饰符表示多行模式（multiline），会修改`^`和`$`的行为。默认情况下（即不加`m`修饰符时），`^`和`$`匹配字符串的开始处和结尾处，加上`m`修饰符以后，`^`和`$`还会匹配行首和行尾，即`^`和`$`会识别换行符（`\n`）。

```
/world$/.test('hello world\n') // false
/world$/m.test('hello world\n') // true
```

上面的代码中，字符串结尾处有一个换行符。如果不加`m`修饰符，匹配不成功，因为字符串的结尾不是`world`；加上以后，`$`可以匹配行尾。

```
/^b/m.test('a\nb') // true
```

上面代码要求匹配行首的`b`，如果不加`m`修饰符，就相当于`b`只能处在字符串的开始处。加上`m`修饰符以后，换行符`\n`也会被认为是一行的开始。

### 组匹配

**（1）概述**

正则表达式的括号表示分组匹配，括号中的模式可以用来匹配分组的内容。

```
/fred+/.test('fredd') // true
/(fred)+/.test('fredfred') // true
```

上面代码中，第一个模式没有括号，结果`+`只表示重复字母`d`，第二个模式有括号，结果`+`就表示匹配`fred`这个词。

下面是另外一个分组捕获的例子。

```
var m = 'abcabc'.match(/(.)b(.)/);
m
// ['abc', 'a', 'c']
```

上面代码中，正则表达式`/(.)b(.)/`一共使用两个括号，第一个括号捕获`a`，第二个括号捕获`c`。

注意，使用组匹配时，不宜同时使用`g`修饰符，否则`match`方法不会捕获分组的内容。

```
var m = 'abcabc'.match(/(.)b(.)/g);
m // ['abc', 'abc']
```

上面代码使用带`g`修饰符的正则表达式，结果`match`方法只捕获了匹配整个表达式的部分。这时必须使用正则表达式的`exec`方法，配合循环，才能读到每一轮匹配的组捕获。

```
var str = 'abcabc';
var reg = /(.)b(.)/g;
while (true) {
  var result = reg.exec(str);
  if (!result) break;
  console.log(result);
}
// ["abc", "a", "c"]
// ["abc", "a", "c"]
```

正则表达式内部，还可以用`\n`引用括号匹配的内容，`n`是从1开始的自然数，表示对应顺序的括号。

```
/(.)b(.)\1b\2/.test("abcabc")
// true
```

上面的代码中，`\1`表示第一个括号匹配的内容（即`a`），`\2`表示第二个括号匹配的内容（即`c`）。

下面是另外一个例子。

```
/y(..)(.)\2\1/.test('yabccab') // true
```

括号还可以嵌套。

```
/y((..)\2)\1/.test('yabababab') // true
```

上面代码中，`\1`指向外层括号，`\2`指向内层括号。

组匹配非常有用，下面是一个匹配网页标签的例子。

```
var tagName = /<([^>]+)>[^<]*<\/\1>/;

tagName.exec("<b>bold</b>")[1]
// 'b'
```

上面代码中，圆括号匹配尖括号之中的标签，而`\1`就表示对应的闭合标签。

上面代码略加修改，就能捕获带有属性的标签。

```
var html = '<b class="hello">Hello</b><i>world</i>';
var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

var match = tag.exec(html);

match[1] // "b"
match[2] // " class="hello""
match[3] // "Hello"

match = tag.exec(html);

match[1] // "i"
match[2] // ""
match[3] // "world"
```

**（2）非捕获组**

`(?:x)`称为非捕获组（Non-capturing group），表示不返回该组匹配的内容，即匹配的结果中不计入这个括号。

非捕获组的作用请考虑这样一个场景，假定需要匹配`foo`或者`foofoo`，正则表达式就应该写成`/(foo){1, 2}/`，但是这样会占用一个组匹配。这时，就可以使用非捕获组，将正则表达式改为`/(?:foo){1, 2}/`，它的作用与前一个正则是一样的，但是不会单独输出括号内部的内容。

请看下面的例子。

```
var m = 'abc'.match(/(?:.)b(.)/);
m // ["abc", "c"]
```

上面代码中的模式，一共使用了两个括号。其中第一个括号是非捕获组，所以最后返回的结果中没有第一个括号，只有第二个括号匹配的内容。

下面是用来分解网址的正则表达式。

```
// 正常匹配
var url = /(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;

url.exec('http://google.com/');
// ["http://google.com/", "http", "google.com", "/"]

// 非捕获组匹配
var url = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;

url.exec('http://google.com/');
// ["http://google.com/", "google.com", "/"]
```

上面的代码中，前一个正则表达式是正常匹配，第一个括号返回网络协议；后一个正则表达式是非捕获匹配，返回结果中不包括网络协议。

**（3）先行断言**

`x(?=y)`称为先行断言（Positive look-ahead），`x`只有在`y`前面才匹配，`y`不会被计入返回结果。比如，要匹配后面跟着百分号的数字，可以写成`/\d+(?=%)/`。

“先行断言”中，括号里的部分是不会返回的。

```
var m = 'abc'.match(/b(?=c)/);
m // ["b"]
```

上面的代码使用了先行断言，`b`在`c`前面所以被匹配，但是括号对应的`c`不会被返回。

**（4）先行否定断言**

`x(?!y)`称为先行否定断言（Negative look-ahead），`x`只有不在`y`前面才匹配，`y`不会被计入返回结果。比如，要匹配后面跟的不是百分号的数字，就要写成`/\d+(?!%)/`。

```
/\d+(?!\.)/.exec('3.14')
// ["14"]
```

上面代码中，正则表达式指定，只有不在小数点前面的数字才会被匹配，因此返回的结果就是`14`。

“先行否定断言”中，括号里的部分是不会返回的。

```
var m = 'abd'.match(/b(?!c)/);
m // ['b']
```

上面的代码使用了先行否定断言，`b`不在`c`前面所以被匹配，而且括号对应的`d`不会被返回。



## 总结

### 正则符号

方括号：用于查找某个范围内的字符

| 表达式             | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| [abc]              | 查找方括号之间的任何字符。                                   |
| [^abc]             | 查找任何不在方括号之间的字符。,只要一个字符串中有除了abc以外的字母就会返回true |
| [0-9]              | 查找任何从 0 至 9 的数字。                                   |
| [a-z]              | 查找任何从小写 a 到小写 z 的字符。                           |
| [A-Z]              | 查找任何从大写 A 到大写 Z 的字符。                           |
| [A-z]              | 查找任何从大写 A 到小写 z 的字符。                           |
| [adgk]             | 查找给定集合内的任何字符。                                   |
| [^adgk]            | 查找给定集合外的任何字符。                                   |
| (red\|blue\|green) | 查找任何指定的选项。                                         |

```js
var reg1=/ab/i; //检验一个字符串中是否有ab(整体)
var reg2=/a|b/; //检查一个字符串中是否有a或b
var reg3=/a|b|c/; //检查一个字符串中是否有a或b或c
var reg4=/[ab]/;  //[]里面也是或的关系[ab]===a|b
var reg5=/a[bde]c/; //查一个字符串中是否还有abc或adc或aec(整体)
```

元字符：是拥有特殊含义的字符

| 元字符 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| .      | 查找单个字符，除了换行和行结束符。                           |
| \w     | 查找单词字符。                                               |
| \W     | 查找非单词字符。                                             |
| \d     | 查找数字。                                                   |
| \D     | 查找非数字字符。                                             |
| \s     | 查找空白字符。                                               |
| \S     | 查找非空白字符。                                             |
| \b     | 匹配单词边界。一个单词旁边必须是有空白字符作为边界。比如判断是否含有child单词,用/\bchild\b/ 判断是否有一个独立的单词 |
| \B     | 匹配非单词边界。单词左右两边没有空白字符                     |
| \0     | 查找 NULL 字符。                                             |
| \n     | 查找换行符。                                                 |
| \f     | 查找换页符。                                                 |
| \r     | 查找回车符。                                                 |
| \t     | 查找制表符。                                                 |
| \v     | 查找垂直制表符。                                             |
| \xxx   | 查找以八进制数 xxx 规定的字符。                              |
| \xdd   | 查找以十六进制数 dd 规定的字符。                             |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。                  |

注意:

1. **在正则表达式中\表示转义字符，但是js中任何地方\都是转义字符，所以要验证\也必须输入两个(字面量中)** **如:**正则表达式.表示任意字符/./只会表示是否有任意字符，如果要判断有没有.(点这个符号),需要用/\ ./来表示

2. **如果用构造函数的方法，由于它的参数是一个字符串，而\是字符串中的转义字符，如果要使用\则需要使用\ \代替(相当于用了三个\ )，这样相当于把他们先化为字面量，再自变量转换，而因为\ .其实就是.，所以没有作用**

量词：通过量词可以设置一个内容出现的次数用{}里面写需要的数量,量词只对它前边的一个内容起作用

| 量词   | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| n+     | 匹配任何包含至少一个 n 的字符串。例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。 |
| n*     | 匹配任何包含零个或多个 n 的字符串。例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。 |
| n?     | 匹配任何包含零个或一个 n 的字符串。例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。 |
| n{X}   | 匹配包含 X 个 n 的序列的字符串。例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。 |
| n{X,}  | X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。 |
| n{X,Y} | X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。 |
| n$     | 匹配任何结尾为 n 的字符串。                                  |
| ^n     | 匹配任何开头为 n 的字符串。注意与[^]作对比                   |
| ?=n    | 匹配任何其后紧接指定字符串 n 的字符串。                      |
| ?!n    | 匹配任何其后没有紧接指定字符串 n 的字符串。                  |

```js
var reg=/a{3}/; //表示aaa,但ab{3}只表示abbb,如果要ab一起出现3次，需要/(ab){3}/


/*注意：这里面只要就会true正确执行，比如b{3}但是bbbb依然是正确的，因为包含了3个b*/
```

注：在正则表达式中同时使用^ $则要求字符串必须完全符合正则表达式

```js
var reg1=/^a$/; //表示既要有a开头同时这个开头的a还必须是结尾
/*上式说明只能有一个a，aaa这种是不行的，因为结尾的a不是开头的a*/

var reg2=/^a|a$/; //表示以a开头或者以a结尾

var reg3=/^b([0-9A-z]){0,}b$/; //表示以b开头同时以b结尾同时中间可以跟任意数字或者字母
```

子集：用圆括号()包起来的属于一个整体,叫做一个子集

```js
//通过子集可以很轻松的实现顺序互换
var str="abcd";//要改成"cdab"
var reg=/(ab)(cd)/g；
var result=str.replace(reg,"$2$1")；
//此时的$1和$2有特别的含有,$1代表第一个子集,$2代表第二个子集
```

```js
var str="111223333";
var reg=/(/d)\1+/g;//所有相同数字分为一组
console.log(str.match(reg))//["111","22","3333"]
```

### 正则断言

**所谓断言，就是指明某个字符串前边或者后边，将会出现满足某种规律的字符串**

在将断言前.先将子集的捕获与捕获,一般的子集通过()括住都会被捕获,这时可以通过$1等来使用被捕获的子集,而如果不想要子集被捕获,只是用做一个匹配模式,就可以让子集不被捕获到,一般是通过(?:)来括住一个子集

| 模式   | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| (?:X)  | 不捕获匹配,不能通过$符号进行捕获到该子集,包括下面的所有都是捕获匹配。 |
| (?=X ) | 零宽度正先行断言。仅当子表达式 X 在 此位置的右侧匹配时才继续匹配。例如，\w+(?=\d) 与后跟数字的单词匹配，而不与该数字匹配。此构造不会回溯。 |
| (?!X)  | 零宽度负先行断言。仅当子表达式 X 不在 此位置的右侧匹配时才继续匹配。例如，例如，\w+(?!\d) 与后不跟数字的单词匹配，而不与该数字匹配 。 |
| (?<=X) | 零宽度正后发断言。仅当子表达式 X 在 此位置的左侧匹配时才继续匹配。例如，(?<=19)99 与跟在 19 后面的 99 的实例匹配。此构造不会回溯。 |
| (?<!X) | 零宽度负后发断言。仅当子表达式 X 不在此位置的左侧匹配时才继续匹配。例如，(?<!19)99 与不跟在 19 后面的 99 的实例匹配 |

**例子:是否为浮点数**

```js
function isFloat(number){
    number=number+"";
    var reg=/^-?\d+\.\d+$/;//\.连在一起表示就是一个(.),没有其他意思
    return reg.test(number);
}
console.log(isFloat(1));//false
console.log(isFloat(1.1));//true
console.log(isFloat(1.0));//false，false是由于JS内部的储存机制,当浮点数后全是0时就被看成一个整数
console.log(isFloat("1.0"));//true,这时因为传入的就是一个1.0的字符串,所以为true
```

**例子:手机号规则**

- 以1开头
- 第二位3-9任意数字
- 三位以后任意数字9位

```js
var reg=/^1[3-9][0-9]{9}$/;
```

**例子:邮箱格式**

```js
var reg=/^\w{3,}(.\w+)*@[A-z0-9]+(.[A-z]{2,5}{1,2}$/;
```



## u 修饰符

ES6 对正则表达式添加了`u`修饰符，含义为“Unicode 模式”，用来正确处理大于`\uFFFF`的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。

```js
/^\uD83D/u.test('\uD83D\uDC2A') // false
/^\uD83D/.test('\uD83D\uDC2A') // true
```

上面代码中，`\uD83D\uDC2A`是一个四个字节的 UTF-16 编码，代表一个字符。但是，ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为`true`。加了`u`修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为`false`。

一旦加上`u`修饰符号，就会修改下面这些正则表达式的行为。

**（1）点字符**

点（`.`）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于`0xFFFF`的 Unicode 字符，点字符不能识别，必须加上`u`修饰符。

```js
var s = '𠮷';

/^.$/.test(s) // false
/^.$/u.test(s) // true
```

上面代码表示，如果不添加`u`修饰符，正则表达式就会认为字符串为两个字符，从而匹配失败。

**（2）Unicode 字符表示法**

ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上`u`修饰符，才能识别当中的大括号，否则会被解读为量词。

```js
/\u{61}/.test('a') // false
/\u{61}/u.test('a') // true
/\u{20BB7}/u.test('𠮷') // true
```

上面代码表示，如果不加`u`修饰符，正则表达式无法识别`\u{61}`这种表示法，只会认为这匹配 61 个连续的`u`。

**（3）量词**

使用`u`修饰符后，所有量词都会正确识别码点大于`0xFFFF`的 Unicode 字符。

```js
/a{2}/.test('aa') // true
/a{2}/u.test('aa') // true
/𠮷{2}/.test('𠮷𠮷') // false
/𠮷{2}/u.test('𠮷𠮷') // true
```

**（4）预定义模式**

`u`修饰符也影响到预定义模式，能否正确识别码点大于`0xFFFF`的 Unicode 字符。

```js
/^\S$/.test('𠮷') // false
/^\S$/u.test('𠮷') // true
```

上面代码的`\S`是预定义模式，匹配所有非空白字符。只有加了`u`修饰符，它才能正确匹配码点大于`0xFFFF`的 Unicode 字符。

利用这一点，可以写出一个正确返回字符串长度的函数。

```js
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

s.length // 4
codePointLength(s) // 2
```

**（5）i 修饰符**

有些 Unicode 字符的编码不同，但是字型很相近，比如，`\u004B`与`\u212A`都是大写的`K`。

```js
/[a-z]/i.test('\u212A') // false
/[a-z]/iu.test('\u212A') // true
```

上面代码中，不加`u`修饰符，就无法识别非规范的`K`字符。

**（6）转义**

没有`u`修饰符的情况下，正则中没有定义的转义（如逗号的转义`\,`）无效，而在`u`模式会报错。

```js
/\,/ // /\,/
/\,/u // 报错
```

上面代码中，没有`u`修饰符时，逗号前面的反斜杠是无效的，加了`u`修饰符就报错。



## RegExp.prototype.unicode 属性

正则实例对象新增`unicode`属性，表示是否设置了`u`修饰符。

```js
const r1 = /hello/;
const r2 = /hello/u;

r1.unicode // false
r2.unicode // true
```

上面代码中，正则表达式是否设置了`u`修饰符，可以从`unicode`属性看出来。



##  y 修饰符

除了`u`修饰符，ES6 还为正则表达式添加了`y`修饰符，叫做“粘连”（sticky）修饰符。

`y`修饰符的作用与`g`修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，`g`修饰符只要剩余位置中存在匹配就可，而`y`修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。

```js
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
```

上面代码有两个正则表达式，一个使用`g`修饰符，另一个使用`y`修饰符。这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是`_aa_a`。由于`g`修饰没有位置要求，所以第二次执行会返回结果，而`y`修饰符要求匹配必须从头部开始，所以返回`null`。

如果改一下正则表达式，保证每次都能头部匹配，`y`修饰符就会返回结果了。

```js
var s = 'aaa_aa_a';
var r = /a+_/y;

r.exec(s) // ["aaa_"]
r.exec(s) // ["aa_"]
```

上面代码每次匹配，都是从剩余字符串的头部开始。

使用`lastIndex`属性，可以更好地说明`y`修饰符。

```js
const REGEX = /a/g;

// 指定从2号位置（y）开始匹配
REGEX.lastIndex = 2;

// 匹配成功
const match = REGEX.exec('xaya');

// 在3号位置匹配成功
match.index // 3

// 下一次匹配从4号位开始
REGEX.lastIndex // 4

// 4号位开始匹配失败
REGEX.exec('xaya') // null
```

上面代码中，`lastIndex`属性指定每次搜索的开始位置，`g`修饰符从这个位置开始向后搜索，直到发现匹配为止。

`y`修饰符同样遵守`lastIndex`属性，但是要求必须在`lastIndex`指定的位置发现匹配。

```js
const REGEX = /a/y;

// 指定从2号位置开始匹配
REGEX.lastIndex = 2;

// 不是粘连，匹配失败
REGEX.exec('xaya') // null

// 指定从3号位置开始匹配
REGEX.lastIndex = 3;

// 3号位置是粘连，匹配成功
const match = REGEX.exec('xaya');
match.index // 3
REGEX.lastIndex // 4
```

实际上，`y`修饰符号隐含了头部匹配的标志`^`。

```js
/b/y.exec('aba')
// null
```

上面代码由于不能保证头部匹配，所以返回`null`。`y`修饰符的设计本意，就是让头部匹配的标志`^`在全局匹配中都有效。

下面是字符串对象的`replace`方法的例子。

```js
const REGEX = /a/gy;
'aaxa'.replace(REGEX, '-') // '--xa'
```

上面代码中，最后一个`a`因为不是出现在下一次匹配的头部，所以不会被替换。

单单一个`y`修饰符对`match`方法，只能返回第一个匹配，必须与`g`修饰符联用，才能返回所有匹配。

```js
'a1a2a3'.match(/a\d/y) // ["a1"]
'a1a2a3'.match(/a\d/gy) // ["a1", "a2", "a3"]
```

`y`修饰符的一个应用，是从字符串提取 token（词元），`y`修饰符确保了匹配之间不会有漏掉的字符。

```js
const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

tokenize(TOKEN_Y, '3 + 4')
// [ '3', '+', '4' ]
tokenize(TOKEN_G, '3 + 4')
// [ '3', '+', '4' ]

function tokenize(TOKEN_REGEX, str) {
  let result = [];
  let match;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}
```

上面代码中，如果字符串里面没有非法字符，`y`修饰符与`g`修饰符的提取结果是一样的。但是，一旦出现非法字符，两者的行为就不一样了。

```js
tokenize(TOKEN_Y, '3x + 4')
// [ '3' ]
tokenize(TOKEN_G, '3x + 4')
// [ '3', '+', '4' ]
```

上面代码中，`g`修饰符会忽略非法字符，而`y`修饰符不会，这样就很容易发现错误。



## RegExp.prototype.sticky 属性

与`y`修饰符相匹配，ES6 的正则实例对象多了`sticky`属性，表示是否设置了`y`修饰符。

```js
var r = /hello\d/y;
r.sticky // true
```



## RegExp.prototype.flags 属性

ES6 为正则表达式新增了`flags`属性，会返回正则表达式的修饰符。

```js
// ES5 的 source 属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6 的 flags 属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'
```



## s 修饰符：dotAll 模式

正则表达式中，点（`.`）是一个特殊字符，代表任意的单个字符，但是有两个例外。一个是四个字节的 UTF-16 字符，这个可以用`u`修饰符解决；另一个是行终止符（line terminator character）。

所谓行终止符，就是该字符表示一行的终结。以下四个字符属于“行终止符”。

- U+000A 换行符（`\n`）
- U+000D 回车符（`\r`）
- U+2028 行分隔符（line separator）
- U+2029 段分隔符（paragraph separator）

```js
/foo.bar/.test('foo\nbar')
// false
```

上面代码中，因为`.`不匹配`\n`，所以正则表达式返回`false`。

但是，很多时候我们希望匹配的是任意单个字符，这时有一种变通的写法。

```js
/foo[^]bar/.test('foo\nbar')
// true
```

这种解决方案毕竟不太符合直觉，ES2018 [引入](https://github.com/tc39/proposal-regexp-dotall-flag)`s`修饰符，使得`.`可以匹配任意单个字符。

```js
/foo.bar/s.test('foo\nbar') // true
```

这被称为`dotAll`模式，即点（dot）代表一切字符。所以，正则表达式还引入了一个`dotAll`属性，返回一个布尔值，表示该正则表达式是否处在`dotAll`模式。

```js
const re = /foo.bar/s;
// 另一种写法
// const re = new RegExp('foo.bar', 's');

re.test('foo\nbar') // true
re.dotAll // true
re.flags // 's'
```

`/s`修饰符和多行修饰符`/m`不冲突，两者一起使用的情况下，`.`匹配所有字符，而`^`和`$`匹配每一行的行首和行尾。



## 后行断言

JavaScript 语言的正则表达式，只支持先行断言（lookahead）和先行否定断言（negative lookahead），不支持后行断言（lookbehind）和后行否定断言（negative lookbehind）。ES2018 引入[后行断言](https://github.com/tc39/proposal-regexp-lookbehind)，V8 引擎 4.9 版（Chrome 62）已经支持。

“先行断言”指的是，`x`只有在`y`前面才匹配，必须写成`/x(?=y)/`。比如，只匹配百分号之前的数字，要写成`/\d+(?=%)/`。“先行否定断言”指的是，`x`只有不在`y`前面才匹配，必须写成`/x(?!y)/`。比如，只匹配不在百分号之前的数字，要写成`/\d+(?!%)/`。

```js
/\d+(?=%)/.exec('100% of US presidents have been male')  // ["100"]
/\d+(?!%)/.exec('that’s all 44 of them')                 // ["44"]
```

上面两个字符串，如果互换正则表达式，就不会得到相同结果。另外，还可以看到，“先行断言”括号之中的部分（`(?=%)`），是不计入返回结果的。

“后行断言”正好与“先行断言”相反，`x`只有在`y`后面才匹配，必须写成`/(?<=y)x/`。比如，只匹配美元符号之后的数字，要写成`/(?<=\$)\d+/`。“后行否定断言”则与“先行否定断言”相反，`x`只有不在`y`后面才匹配，必须写成`/(?<!y)x/`。比如，只匹配不在美元符号后面的数字，要写成`/(?<!\$)\d+/`。

```js
/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  // ["100"]
/(?<!\$)\d+/.exec('it’s is worth about €90')                // ["90"]
```

上面的例子中，“后行断言”的括号之中的部分（`(?<=\$)`），也是不计入返回结果。

下面的例子是使用后行断言进行字符串替换。

```js
const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
'$foo %foo foo'.replace(RE_DOLLAR_PREFIX, 'bar');
// '$bar %foo foo'
```

上面代码中，只有在美元符号后面的`foo`才会被替换。

“后行断言”的实现，需要先匹配`/(?<=y)x/`的`x`，然后再回到左边，匹配`y`的部分。这种“先右后左”的执行顺序，与所有其他正则操作相反，导致了一些不符合预期的行为。

首先，后行断言的组匹配，与正常情况下结果是不一样的。

```js
/(?<=(\d+)(\d+))$/.exec('1053') // ["", "1", "053"]
/^(\d+)(\d+)$/.exec('1053') // ["1053", "105", "3"]
```

上面代码中，需要捕捉两个组匹配。没有“后行断言”时，第一个括号是贪婪模式，第二个括号只能捕获一个字符，所以结果是`105`和`3`。而“后行断言”时，由于执行顺序是从右到左，第二个括号是贪婪模式，第一个括号只能捕获一个字符，所以结果是`1`和`053`。

其次，“后行断言”的反斜杠引用，也与通常的顺序相反，必须放在对应的那个括号之前。

```js
/(?<=(o)d\1)r/.exec('hodor')  // null
/(?<=\1d(o))r/.exec('hodor')  // ["r", "o"]
```

上面代码中，如果后行断言的反斜杠引用（`\1`）放在括号的后面，就不会得到匹配结果，必须放在前面才可以。因为后行断言是先从左到右扫描，发现匹配以后再回过头，从右到左完成反斜杠引用。



## Unicode 属性类

ES2018 [引入](https://github.com/tc39/proposal-regexp-unicode-property-escapes)了一种新的类的写法`\p{...}`和`\P{...}`，允许正则表达式匹配符合 Unicode 某种属性的所有字符。

```js
const regexGreekSymbol = /\p{Script=Greek}/u;
regexGreekSymbol.test('π') // true
```

上面代码中，`\p{Script=Greek}`指定匹配一个希腊文字母，所以匹配`π`成功。

Unicode 属性类要指定属性名和属性值。

```js
\p{UnicodePropertyName=UnicodePropertyValue}
```

对于某些属性，可以只写属性名，或者只写属性值。

```js
\p{UnicodePropertyName}
\p{UnicodePropertyValue}
```

`\P{…}`是`\p{…}`的反向匹配，即匹配不满足条件的字符。

注意，这两种类只对 Unicode 有效，所以使用的时候一定要加上`u`修饰符。如果不加`u`修饰符，正则表达式使用`\p`和`\P`会报错，ECMAScript 预留了这两个类。

由于 Unicode 的各种属性非常多，所以这种新的类的表达能力非常强。

```js
const regex = /^\p{Decimal_Number}+$/u;
regex.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼') // true
```

上面代码中，属性类指定匹配所有十进制字符，可以看到各种字型的十进制字符都会匹配成功。

`\p{Number}`甚至能匹配罗马数字。

```js
// 匹配所有数字
const regex = /^\p{Number}+$/u;
regex.test('²³¹¼½¾') // true
regex.test('㉛㉜㉝') // true
regex.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ') // true
```

下面是其他一些例子。

```js
// 匹配所有空格
\p{White_Space}

// 匹配各种文字的所有字母，等同于 Unicode 版的 \w
[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \W
[^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// 匹配 Emoji
/\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

// 匹配所有的箭头字符
const regexArrows = /^\p{Block=Arrows}+$/u;
regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true
```



## 具名组匹配

### 简介

正则表达式使用圆括号进行组匹配。

```js
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
```

上面代码中，正则表达式里面有三组圆括号。使用`exec`方法，就可以将这三组匹配结果提取出来。

```js
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31
```

组匹配的一个问题是，每一组的匹配含义不容易看出来，而且只能用数字序号（比如`matchObj[1]`）引用，要是组的顺序变了，引用的时候就必须修改序号。

ES2018 引入了[具名组匹配](https://github.com/tc39/proposal-regexp-named-groups)（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。

```js
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // "1999"
const month = matchObj.groups.month; // "12"
const day = matchObj.groups.day; // "31"
```

上面代码中，“具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名”（`?<year>`），然后就可以在`exec`方法返回结果的`groups`属性上引用该组名。同时，数字序号（`matchObj[1]`）依然有效。

具名组匹配等于为每一组匹配加上了 ID，便于描述匹配的目的。如果组的顺序变了，也不用改变匹配后的处理代码。

如果具名组没有匹配，那么对应的`groups`对象属性会是`undefined`。

```js
const RE_OPT_A = /^(?<as>a+)?$/;
const matchObj = RE_OPT_A.exec('');

matchObj.groups.as // undefined
'as' in matchObj.groups // true
```

上面代码中，具名组`as`没有找到匹配，那么`matchObj.groups.as`属性值就是`undefined`，并且`as`这个键名在`groups`是始终存在的。

### 解构赋值和替换

有了具名组匹配以后，可以使用解构赋值直接从匹配结果上为变量赋值。

```js
let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
one  // foo
two  // bar
```

字符串替换时，使用`$<组名>`引用具名组。

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;

'2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// '02/01/2015'
```

上面代码中，`replace`方法的第二个参数是一个字符串，而不是正则表达式。

`replace`方法的第二个参数也可以是函数，该函数的参数序列如下。

```js
'2015-01-02'.replace(re, (
   matched, // 整个匹配结果 2015-01-02
   capture1, // 第一个组匹配 2015
   capture2, // 第二个组匹配 01
   capture3, // 第三个组匹配 02
   position, // 匹配开始的位置 0
   S, // 原字符串 2015-01-02
   groups // 具名组构成的一个对象 {year, month, day}
 ) => {
 let {day, month, year} = groups;
 return `${day}/${month}/${year}`;
});
```

具名组匹配在原来的基础上，新增了最后一个函数参数：具名组构成的一个对象。函数内部可以直接对这个对象进行解构赋值。

### 引用

如果要在正则表达式内部引用某个“具名组匹配”，可以使用`\k<组名>`的写法。

```js
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
```

数字引用（`\1`）依然有效。

```js
const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
```

这两种引用语法还可以同时使用。

```js
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
RE_TWICE.test('abc!abc!abc') // true
RE_TWICE.test('abc!abc!ab') // false
```



## 正则匹配索引

正则匹配结果的开始位置和结束位置，目前获取并不是很方便。正则实例的`exec()`方法，返回结果有一个`index`属性，可以获取整个匹配结果的开始位置，但是如果包含组匹配，每个组匹配的开始位置，很难拿到。

现在有一个[第三阶段提案](https://github.com/tc39/proposal-regexp-match-Indices)，为`exec()`方法的返回结果加上`indices`属性，在这个属性上面可以拿到匹配的开始位置和结束位置。

```js
const text = 'zabbcdef';
const re = /ab/;
const result = re.exec(text);

result.index // 1
result.indices // [ [1, 3] ]
```

上面例子中，`exec()`方法的返回结果`result`，它的`index`属性是整个匹配结果（`ab`）的开始位置，而它的`indices`属性是一个数组，成员是每个匹配的开始位置和结束位置的数组。由于该例子的正则表达式没有组匹配，所以`indices`数组只有一个成员，表示整个匹配的开始位置是`1`，结束位置是`3`。

注意，开始位置包含在匹配结果之中，但是结束位置不包含在匹配结果之中。比如，匹配结果为`ab`，分别是原始字符串的第1位和第2位，那么结束位置就是第3位。

如果正则表达式包含组匹配，那么`indices`属性对应的数组就会包含多个成员，提供每个组匹配的开始位置和结束位置。

```js
const text = 'zabbcdef';
const re = /ab+(cd)/;
const result = re.exec(text);

result.indices // [ [ 1, 6 ], [ 4, 6 ] ]
```

上面例子中，正则表达式包含一个组匹配，那么`indices`属性数组就有两个成员，第一个成员是整个匹配结果（`abbcd`）的开始位置和结束位置，第二个成员是组匹配（`cd`）的开始位置和结束位置。

下面是多个组匹配的例子。

```js
const text = 'zabbcdef';
const re = /ab+(cd(ef))/;
const result = re.exec(text);

result.indices // [ [1, 8], [4, 8], [6, 8] ]
```

上面例子中，正则表达式包含两个组匹配，所以`indices`属性数组就有三个成员。

如果正则表达式包含具名组匹配，`indices`属性数组还会有一个`groups`属性。该属性是一个对象，可以从该对象获取具名组匹配的开始位置和结束位置。

```js
const text = 'zabbcdef';
const re = /ab+(?<Z>cd)/;
const result = re.exec(text);

result.indices.groups // { Z: [ 4, 6 ] }
```

上面例子中，`exec()`方法返回结果的`indices.groups`属性是一个对象，提供具名组匹配`Z`的开始位置和结束位置。

如果获取组匹配不成功，`indices`属性数组的对应成员则为`undefined`，`indices.groups`属性对象的对应成员也是`undefined`。

```js
const text = 'zabbcdef';
const re = /ab+(?<Z>ce)?/;
const result = re.exec(text);

result.indices[1] // undefined
result.indices.groups['Z'] // undefined
```

上面例子中，由于组匹配不成功，所以`indices`属性数组和`indices.groups`属性对象对应的组匹配成员都是`undefined`。



## String.prototype.matchAll()

如果一个正则表达式在字符串里面有多个匹配，现在一般使用`g`修饰符或`y`修饰符，在循环里面逐一取出。

```js
var regex = /t(e)(st(\d?))/g;
var string = 'test1test2test3';

var matches = [];
var match;
while (match = regex.exec(string)) {
  matches.push(match);
}

matches
// [
//   ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"],
//   ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"],
//   ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
// ]
```

上面代码中，`while`循环取出每一轮的正则匹配，一共三轮。

[ES2020](https://github.com/tc39/proposal-string-matchall) 增加了`String.prototype.matchAll()`方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。

```js
const string = 'test1test2test3';
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
  console.log(match);
}
// ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
// ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
// ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
```

上面代码中，由于`string.matchAll(regex)`返回的是遍历器，所以可以用`for...of`循环取出。相对于返回数组，返回遍历器的好处在于，如果匹配结果是一个很大的数组，那么遍历器比较节省资源。

遍历器转为数组是非常简单的，使用`...`运算符和`Array.from()`方法就可以了。

```js
// 转为数组的方法一
[...string.matchAll(regex)]

// 转为数组的方法二
Array.from(string.matchAll(regex))
```

