---
icon: js
category: Web 前端
tag: JS 进阶教程
date: 2021-08-01
title: 6.String
---

# String



## 字符串的几个关注点

### 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。

```js
var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符
'hello'[1] // "e"
```

如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回`undefined`。

```js
'abc'[3] // undefined
'abc'[-1] // undefined
'abc'['x'] // undefined
```

但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。

```js
var s = 'hello';

delete s[0];
s // "hello"

s[1] = 'a';
s // "hello"

s[5] = '!';
s // "hello"
```

上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。

### 转义

反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些。

- `\0` ：null（`\u0000`）
- `\b` ：后退键（`\u0008`）
- `\f` ：换页符（`\u000C`）
- `\n` ：换行符（`\u000A`）
- `\r` ：回车键（`\u000D`）
- `\t` ：制表符（`\u0009`）
- `\v` ：垂直制表符（`\u000B`）
- `\'` ：单引号（`\u0027`）
- `\"` ：双引号（`\u0022`）
- `\\` ：反斜杠（`\u005C`）

上面这些字符前面加上反斜杠，都表示特殊含义。

```js
console.log('1\n2')
// 1
// 2
```

上面代码中，`\n`表示换行，输出的时候就分成了两行。

反斜杠还有三种特殊用法。

（1）`\HHH`

反斜杠后面紧跟三个八进制数（`000`到`377`），代表一个字符。`HHH`对应该字符的 Unicode 码点，比如`\251`表示版权符号。显然，这种方法只能输出256种字符。

（2）`\xHH`

`\x`后面紧跟两个十六进制数（`00`到`FF`），代表一个字符。`HH`对应该字符的 Unicode 码点，比如`\xA9`表示版权符号。这种方法也只能输出256种字符。

（3）`\uXXXX`

`\u`后面紧跟四个十六进制数（`0000`到`FFFF`），代表一个字符。`XXXX`对应该字符的 Unicode 码点，比如`\u00A9`表示版权符号。

下面是这三种字符特殊写法的例子。

```js
'\251' // "©"
'\xA9' // "©"
'\u00A9' // "©"

'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
```

如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。

```js
'\a'
// "a"
```

上面代码中，`a`是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。

如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。

```js
"Prev \\ Next"
// "Prev \ Next"
```

### ase64 转码

有时，文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、`+`和`/`这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

**JavaScript 原生提供两个 Base64 相关的方法。**

- **`btoa()`：任意值转为 Base64 编码**
- **`atob()`：Base64 编码转为原来的值**

```js
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

注意，这两个方法不适合非 ASCII 码的字符，会报错。

```js
btoa('你好') // 报错
```

要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

```js
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
```

### 字符的 Unicode 表示法

ES6 加强了对 Unicode 的支持，允许采用`\uxxxx`形式表示一个字符，其中`xxxx`表示字符的 Unicode 码点。

```js
"\u0061"
// "a"
```

但是，这种表示法只限于码点在`\u0000`~`\uFFFF`之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

```js
"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"
```

上面代码表示，如果直接在`\u`后面跟上超过`0xFFFF`的数值（比如`\u20BB7`），JavaScript 会理解成`\u20BB+7`。由于`\u20BB`是一个不可打印字符，所以只会显示一个空格，后面跟着一个`7`。

ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

```js
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```

上面代码中，最后一个例子表明，大括号表示法与四字节的 UTF-16 编码是等价的。

有了这种表示法之后，JavaScript 共有 6 种方法可以表示一个字符。

```js
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```

### JSON.stringify() 的改造

根据标准，JSON 数据必须是 UTF-8 编码。但是，现在的`JSON.stringify()`方法有可能返回不符合 UTF-8 标准的字符串。

具体来说，UTF-8 标准规定，`0xD800`到`0xDFFF`之间的码点，不能单独使用，必须配对使用。比如，`\uD834\uDF06`是两个码点，但是必须放在一起配对使用，代表字符`𝌆`。这是为了表示码点大于`0xFFFF`的字符的一种变通方法。单独使用`\uD834`和`\uDFO6`这两个码点是不合法的，或者颠倒顺序也不行，因为`\uDF06\uD834`并没有对应的字符。

`JSON.stringify()`的问题在于，它可能返回`0xD800`到`0xDFFF`之间的单个码点。

```js
JSON.stringify('\u{D834}') // "\u{D834}"
```

为了确保返回的是合法的 UTF-8 字符，[ES2019](https://github.com/tc39/proposal-well-formed-stringify) 改变了`JSON.stringify()`的行为。如果遇到`0xD800`到`0xDFFF`之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。

```js
JSON.stringify('\u{D834}') // ""\\uD834""
JSON.stringify('\uDF06\uD834') // ""\\udf06\\ud834""
```

## 模板字符串

### 设计目的

传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。

```js
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```

上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。

```js
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

### 基本使用

**模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。**

```js
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

**上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。**

```js
let greeting = `\`Yo\` World!`;
```

**如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。**

```js
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);
```

上面代码中，所有模板字符串的空格和换行，都是被保留的，比如`<ul>`标签前面会有一个换行。如果你不想要这个换行，可以使用`trim`方法消除它。

```js
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());
```

**模板字符串中嵌入变量，需要将变量名写在`${}`之中。**

```js
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      // 传统写法为
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'
      `User ${user.name} is not authorized to do ${action}.`);
  }
}
```

**大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。**

```js
let x = 1;
let y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// "3"
```

**模板字符串之中还能调用函数。**

```js
function fn() {
  return "Hello World";
}

`foo ${fn()} bar`
// foo Hello World bar
```

**如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的`toString`方法。**

如果模板字符串中的变量没有声明，将报错。

```js
// 变量place没有声明
let msg = `Hello, ${place}`;
// 报错
```

由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。

```js
`Hello ${'World'}`
// "Hello World"
```

**模板字符串甚至还能嵌套。**

```js
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
```

上面代码中，模板字符串的变量之中，又嵌入了另一个模板字符串，使用方法如下。

```js
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
// <table>
//
//   <tr><td><Jane></td></tr>
//   <tr><td>Bond</td></tr>
//
//   <tr><td>Lars</td></tr>
//   <tr><td><Croft></td></tr>
//
// </table>
```

如果需要引用模板字符串本身，在需要时执行，可以写成函数。

```js
let func = (name) => `Hello ${name}!`;
func('Jack') // "Hello Jack!"
```

上面代码中，模板字符串写成了一个函数的返回值。执行这个函数，就相当于执行这个模板字符串了。

### 标签模板

**模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。**

```js
alert`hello`
// 等同于
alert(['hello'])
```

**标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。**

但是，如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。

```js
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
```

上面代码中，模板字符串前面有一个标识名`tag`，它是一个函数。整个表达式的返回值，就是`tag`函数处理模板字符串后的返回值。

函数`tag`依次会接收到多个参数。

```js
function tag(stringArr, value1, value2){
  // ...
}

// 等同于

function tag(stringArr, ...values){
  // ...
}
```

`tag`函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推。

`tag`函数的其他参数，都是模板字符串各个变量被替换后的值。由于本例中，模板字符串含有两个变量，因此`tag`会接受到`value1`和`value2`两个参数。

`**tag`函数所有参数的实际值如下。**

- **第一个参数：`['Hello ', ' world ', '']`**
- **第二个参数: 15**
- **第三个参数：50**

**也就是说，`tag`函数实际上以下面的形式调用。**

```js
tag(['Hello ', ' world ', ''], 15, 50)
```

我们可以按照需要编写`tag`函数的代码。下面是`tag`函数的一种写法，以及运行结果。

```js
let a = 5;
let b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"
```

下面是一个更复杂的例子。

```js
let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

msg // "The total is 30 (31.5 with tax)"
```

上面这个例子展示了，如何将各个参数按照原来的位置拼合回去。

`passthru`函数采用 rest 参数的写法如下。

```js
function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index]
  return output;
}
```

“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。

```js
let message =
  SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
```

上面代码中，`sender`变量往往是用户提供的，经过`SaferHTML`函数处理，里面的特殊字符都会被转义。

```js
let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

message
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>
```

标签模板的另一个应用，就是多语言转换（国际化处理）。

```js
i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`
// "欢迎访问xxx，您是第xxxx位访问者！"
```

模板字符串本身并不能取代 Mustache 之类的模板库，因为没有条件判断和循环处理功能，但是通过标签函数，你可以自己添加这些功能。

```js
// 下面的hashTemplate函数
// 是一个自定义的模板处理函数
let libraryHtml = hashTemplate`
  <ul>
    #for book in ${myBooks}
      <li><i>#{book.title}</i> by #{book.author}</li>
    #end
  </ul>
`;
```

除此之外，你甚至可以使用标签模板，在 JavaScript 语言之中嵌入其他语言。

```js
jsx`
  <div>
    <input
      ref='input'
      onChange='${this.handleChange}'
      defaultValue='${this.state.value}' />
      ${this.state.value}
   </div>
`
```

上面的代码通过`jsx`函数，将一个 DOM 字符串转为 React 对象。你可以在 GitHub 找到`jsx`函数的[具体实现](https://gist.github.com/lygaret/a68220defa69174bdec5)。

下面则是一个假想的例子，通过`java`函数，在 JavaScript 代码之中运行 Java 代码。

```js
java`
class HelloWorldApp {
  public static void main(String[] args) {
    System.out.println("Hello World!"); // Display the string.
  }
}
`
HelloWorldApp.main();
```

模板处理函数的第一个参数（模板字符串数组），还有一个`raw`属性。

```js
console.log`123`
// ["123", raw: Array[1]]
```

上面代码中，`console.log`接受的参数，实际上是一个数组。该数组有一个`raw`属性，保存的是转义后的原字符串。

请看下面的例子。

```js
tag`First line\nSecond line`

function tag(strings) {
  console.log(strings.raw[0]);
  // strings.raw[0] 为 "First line\\nSecond line"
  // 打印输出 "First line\nSecond line"
}
```

上面代码中，`tag`函数的第一个参数`strings`，有一个`raw`属性，也指向一个数组。该数组的成员与`strings`数组完全一致。比如，`strings`数组是`["First line\nSecond line"]`，那么`strings.raw`数组就是`["First line\\nSecond line"]`。两者唯一的区别，就是字符串里面的斜杠都被转义了。比如，strings.raw 数组会将`\n`视为`\\`和`n`两个字符，而不是换行符。这是为了方便取得转义之前的原始模板而设计的。

### 模板字符串的限制

**前面提到标签模板里面，可以内嵌其他语言。但是，模板字符串默认会将字符串转义，导致无法嵌入其他语言。**

举例来说，标签模板里面可以嵌入 LaTEX 语言。

```js
function latex(strings) {
  // ...
}

let document = latex`
\newcommand{\fun}{\textbf{Fun!}}  // 正常工作
\newcommand{\unicode}{\textbf{Unicode!}} // 报错
\newcommand{\xerxes}{\textbf{King!}} // 报错

Breve over the h goes \u{h}ere // 报错
`
```

上面代码中，变量`document`内嵌的模板字符串，对于 LaTEX 语言来说完全是合法的，但是 JavaScript 引擎会报错。原因就在于字符串的转义。

模板字符串会将`\u00FF`和`\u{42}`当作 Unicode 字符进行转义，所以`\unicode`解析时报错；而`\x56`会被当作十六进制字符串转义，所以`\xerxes`会报错。也就是说，`\u`和`\x`在 LaTEX 里面有特殊含义，但是 JavaScript 将它们转义了。

为了解决这个问题，ES2018 [放松](https://tc39.github.io/proposal-template-literal-revision/)了对标签模板里面的字符串转义的限制。如果遇到不合法的字符串转义，就返回`undefined`，而不是报错，并且从`raw`属性上面可以得到原始字符串。

```js
function tag(strs) {
  strs[0] === undefined
  strs.raw[0] === "\\unicode and \\u{55}";
}
tag`\unicode and \u{55}`
```

上面代码中，模板字符串原本是应该报错的，但是由于放松了对字符串转义的限制，所以不报错了，JavaScript 引擎将第一个字符设置为`undefined`，但是`raw`属性依然可以得到原始字符串，因此`tag`函数还是可以对原字符串进行处理。

注意，这种对字符串转义的放松，只在标签模板解析字符串时生效，不是标签模板的场合，依然会报错。

```js
let bad = `bad escape sequence: \unicode`; // 报错
```



## 字符串的静态方法

### String.fromCharCode()

**`String`对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法），主要是`String.fromCharCode()`。该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。**

```js
String.fromCharCode() // ""
String.fromCharCode(97) // "a"
String.fromCharCode(104, 101, 108, 108, 111)
// "hello"
```

上面代码中，`String.fromCharCode`方法的参数为空，就返回空字符串；否则，返回参数对应的 Unicode 字符串。

注意，该方法不支持 Unicode 码点大于`0xFFFF`的字符，即传入的参数不能大于`0xFFFF`（即十进制的 65535）。

```js
String.fromCharCode(0x20BB7)
// "ஷ"
String.fromCharCode(0x20BB7) === String.fromCharCode(0x0BB7)
// true
```

上面代码中，`String.fromCharCode`参数`0x20BB7`大于`0xFFFF`，导致返回结果出错。`0x20BB7`对应的字符是汉字`𠮷`，但是返回结果却是另一个字符（码点`0x0BB7`）。这是因为`String.fromCharCode`发现参数值大于`0xFFFF`，就会忽略多出的位（即忽略`0x20BB7`里面的`2`）。

这种现象的根本原因在于，码点大于`0xFFFF`的字符占用四个字节，而 JavaScript 默认支持两个字节的字符。这种情况下，必须把`0x20BB7`拆成两个字符表示。

```js
String.fromCharCode(0xD842, 0xDFB7)
// "𠮷"
```

上面代码中，`0x20BB7`拆成两个字符`0xD842`和`0xDFB7`（即两个两字节字符，合成一个四字节字符），就能得到正确的结果。码点大于`0xFFFF`的字符的四字节表示法，由 UTF-16 编码方法决定。

### String.raw()

**ES6 还为原生的 String 对象，提供了一个`raw()`方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。**

```js
String.raw`Hi\n${2+3}!`
// 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"

String.raw`Hi\u000A!`;
// 实际返回 "Hi\\u000A!"，显示的是转义后的结果 "Hi\u000A!"
```

如果原字符串的斜杠已经转义，那么`String.raw()`会进行再次转义。

```js
String.raw`Hi\\n`
// 返回 "Hi\\\\n"

String.raw`Hi\\n` === "Hi\\\\n" // true
```

`String.raw()`方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。

`String.raw()`本质上是一个正常的函数，只是专用于模板字符串的标签函数。如果写成正常函数的形式，它的第一个参数，应该是一个具有`raw`属性的对象，且`raw`属性的值应该是一个数组，对应模板字符串解析后的值。

```js
// `foo${1 + 2}bar`
// 等同于
String.raw({ raw: ['foo', 'bar'] }, 1 + 2) // "foo3bar"
```

上面代码中，`String.raw()`方法的第一个参数是一个对象，它的`raw`属性等同于原始的模板字符串解析后得到的数组。

作为函数，`String.raw()`的代码实现基本如下。

```js
String.raw = function (strings, ...values) {
  let output = '';
  let index;
  for (index = 0; index < values.length; index++) {
    output += strings.raw[index] + values[index];
  }

  output += strings.raw[index]
  return output;
}
```



## 字符串的实例方法

### charAt()

**`charAt`方法返回指定位置的字符，参数是从`0`开始编号的位置。**

```js
var s = new String('abc');

s.charAt(1) // "b"
s.charAt(s.length - 1) // "c"
```

这个方法完全可以用数组下标替代。

```js
'abc'.charAt(1) // "b"
'abc'[1] // "b"
```

如果参数为负数，或大于等于字符串的长度，`charAt`返回空字符串。

```js
'abc'.charAt(-1) // ""
'abc'.charAt(3) // ""
```

### charCodeAt()

**`charCodeAt()`方法返回字符串指定位置的 Unicode 码点（十进制表示），相当于`String.fromCharCode()`的逆操作。**

```js
'abc'.charCodeAt(1) // 98
```

上面代码中，`abc`的`1`号位置的字符是`b`，它的 Unicode 码点是`98`。

如果没有任何参数，`charCodeAt`返回首字符的 Unicode 码点。

```js
'abc'.charCodeAt() // 97
```

如果参数为负数，或大于等于字符串的长度，`charCodeAt`返回`NaN`。

```js
'abc'.charCodeAt(-1) // NaN
'abc'.charCodeAt(4) // NaN
```

注意，`charCodeAt`方法返回的 Unicode 码点不会大于65536（0xFFFF），也就是说，只返回两个字节的字符的码点。如果遇到码点大于 65536 的字符（四个字节的字符），必须连续使用两次`charCodeAt`，不仅读入`charCodeAt(i)`，还要读入`charCodeAt(i+1)`，将两个值放在一起，才能得到准确的字符。

### codePointAt()

JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为`2`个字节。对于那些需要`4`个字节储存的字符（Unicode 码点大于`0xFFFF`的字符），JavaScript 会认为它们是两个字符。

```js
var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
```

上面代码中，汉字“𠮷”（注意，这个字不是“吉祥”的“吉”）的码点是`0x20BB7`，UTF-16 编码为`0xD842 0xDFB7`（十进制为`55362 57271`），需要`4`个字节储存。对于这种`4`个字节的字符，JavaScript 不能正确处理，字符串长度会误判为`2`，而且`charAt()`方法无法读取整个字符，`charCodeAt()`方法只能分别返回前两个字节和后两个字节的值。

ES6 提供了`codePointAt()`方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

```js
let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97
```

`codePointAt()`方法的参数，是字符在字符串中的位置（从 0 开始）。上面代码中，JavaScript 将“𠮷a”视为三个字符，codePointAt 方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点 134071（即十六进制的`20BB7`）。在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，`codePointAt()`方法的结果与`charCodeAt()`方法相同。

总之，`codePointAt()`方法会正确返回 32 位的 UTF-16 字符的码点。对于那些两个字节储存的常规字符，它的返回结果与`charCodeAt()`方法相同。

`codePointAt()`方法返回的是码点的十进制值，如果想要十六进制的值，可以使用`toString()`方法转换一下。

```js
let s = '𠮷a';

s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"
```

你可能注意到了，`codePointAt()`方法的参数，仍然是不正确的。比如，上面代码中，字符`a`在字符串`s`的正确位置序号应该是 1，但是必须向`codePointAt()`方法传入 2。解决这个问题的一个办法是使用`for...of`循环，因为它会正确识别 32 位的 UTF-16 字符。

```js
let s = '𠮷a';
for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61
```

另一种方法也可以，使用扩展运算符（`...`）进行展开运算。

```js
let arr = [...'𠮷a']; // arr.length === 2
arr.forEach(
  ch => console.log(ch.codePointAt(0).toString(16))
);
// 20bb7
// 61
```

`codePointAt()`方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。

```js
function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷") // true
is32Bit("a") // false
```

### concat()

**`concat`方法用于连接两个字符串，返回一个新字符串，不改变原字符串。**

```js
var s1 = 'abc';
var s2 = 'def';

s1.concat(s2) // "abcdef"
s1 // "abc"
```

该方法可以接受多个参数。

```js
'a'.concat('b', 'c') // "abc"
```

如果参数不是字符串，`concat`方法会将其先转为字符串，然后再连接。

```js
var one = 1;
var two = 2;
var three = '3';

''.concat(one, two, three) // "123"
one + two + three // "33"
```

上面代码中，`concat`方法将参数先转成字符串再连接，所以返回的是一个三个字符的字符串。作为对比，加号运算符在两个运算数都是数值时，不会转换类型，所以返回的是一个两个字符的字符串。

### slice()

**`slice()`方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。**

```js
'JavaScript'.slice(0, 4) // "Java"
```

**如果省略第二个参数，则表示子字符串一直到原字符串结束。**

```js
'JavaScript'.slice(4) // "Script"
```

**如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。**

```js
'JavaScript'.slice(-6) // "Script"
'JavaScript'.slice(0, -6) // "Java"
'JavaScript'.slice(-2, -1) // "p"
```

**如果第一个参数大于第二个参数（正数情况下），`slice()`方法返回一个空字符串。**

```js
'JavaScript'.slice(2, 1) // ""
```

### substring()

**`substring`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`slice`方法很相像。**

**它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。**

```js
'JavaScript'.substring(0, 4) // "Java"
```

如果省略第二个参数，则表示子字符串一直到原字符串的结束。

```js
'JavaScript'.substring(4) // "Script"
```

如果第一个参数大于第二个参数，`substring`方法会自动更换两个参数的位置。

```js
'JavaScript'.substring(10, 4) // "Script"
// 等同于
'JavaScript'.substring(4, 10) // "Script"
```

**上面代码中，调换`substring`方法的两个参数，都得到同样的结果。**

**如果参数是负数，`substring`方法会自动将负数转为0。**

```js
'JavaScript'.substring(-3) // "JavaScript"
'JavaScript'.substring(4, -3) // "Java"
```

上面代码中，第二个例子的参数`-3`会自动变成`0`，等同于`'JavaScript'.substring(4, 0)`。由于第二个参数小于第一个参数，会自动互换位置，所以返回`Java`。

**由于这些规则违反直觉，因此不建议使用`substring`方法，应该优先使用`slice`。**

### substr()

**`substr`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`slice`和`substring`方法的作用相同。**

**`substr`方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。**

```js
'JavaScript'.substr(4, 6) // "Script"
```

如果省略第二个参数，则表示子字符串一直到原字符串的结束。

```js
'JavaScript'.substr(4) // "Script"
```

**如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。**

```
'JavaScript'.substr(-6) // "Script"
'JavaScript'.substr(4, -1) // ""
```

上面代码中，第二个例子的参数`-1`自动转为`0`，表示子字符串长度为`0`，所以返回空字符串。

### indexOf()，lastIndexOf()

**`indexOf`方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回`-1`，就表示不匹配。**

```js
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
```

`indexOf`方法还可以接受第二个参数，表示从该位置开始向后匹配。

```js
'hello world'.indexOf('o', 6) // 7
```

**`lastIndexOf`方法的用法跟`indexOf`方法一致，主要的区别是`lastIndexOf`从尾部开始匹配，`indexOf`则是从头部开始匹配。**

```js
'hello world'.lastIndexOf('o') // 7
```

另外，`lastIndexOf`的第二个参数表示从该位置起向前匹配。

```js
'hello world'.lastIndexOf('o', 6) // 4
```

### includes(), startsWith(), endsWith()

**传统上，JavaScript 只有`indexOf`方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。**

- **includes()：返回布尔值，表示是否找到了参数字符串。**
- **startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。**
- **endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。**

```js
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

这三个方法都支持第二个参数，表示开始搜索的位置。

```js
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

上面代码表示，使用第二个参数`n`时，`endsWith`的行为与其他两个方法有所不同。它针对前`n`个字符，而其他两个方法针对从第`n`个位置直到字符串结束。

### trim()

**`trim`方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。**

```js
'  hello world  '.trim()
// "hello world"
```

**该方法去除的不仅是空格，还包括制表符（`\t`、`\v`）、换行符（`\n`）和回车符（`\r`）。**

```js
'\r\nabc \t'.trim() // 'abc'
```

### trimStart()，trimEnd()

[ES2019](https://github.com/tc39/proposal-string-left-right-trim) 对字符串实例新增了`trimStart()`和`trimEnd()`这两个方法。它们的行为与`trim()`一致，`trimStart()`消除字符串头部的空格，`trimEnd()`消除尾部的空格。**它们返回的都是新字符串，不会修改原始字符串。**

```js
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```

上面代码中，`trimStart()`只消除头部的空格，保留尾部的空格。`trimEnd()`也是类似行为。

除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。

**浏览器还部署了额外的两个方法，`trimLeft()`是`trimStart()`的别名，`trimRight()`是`trimEnd()`的别名。**

### toLowerCase()，toUpperCase()

`toLowerCase`方法用于将一个字符串全部转为小写，`toUpperCase`则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

```js
'Hello World'.toLowerCase()
// "hello world"

'Hello World'.toUpperCase()
// "HELLO WORLD"
```

### split()

**`split`方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。**

```js
'a|b|c'.split('|') // ["a", "b", "c"]
```

如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。

```js
'a|b|c'.split('') // ["a", "|", "b", "|", "c"]
```

如果省略参数，则返回数组的唯一成员就是原字符串。

```js
'a|b|c'.split() // ["a|b|c"]
```

如果满足分割规则的两个部分紧邻着（即两个分割符中间没有其他字符），则返回数组之中会有一个空字符串。

```js
'a||c'.split('|') // ['a', '', 'c']
```

如果满足分割规则的部分处于字符串的开头或结尾（即它的前面或后面没有其他字符），则返回数组的第一个或最后一个成员是一个空字符串。

```js
'|b|c'.split('|') // ["", "b", "c"]
'a|b|'.split('|') // ["a", "b", ""]
```

`split`方法还可以接受第二个参数，限定返回数组的最大成员数。

```js
'a|b|c'.split('|', 0) // []
'a|b|c'.split('|', 1) // ["a"]
'a|b|c'.split('|', 2) // ["a", "b"]
'a|b|c'.split('|', 3) // ["a", "b", "c"]
'a|b|c'.split('|', 4) // ["a", "b", "c"]
```

上面代码中，`split`方法的第二个参数，决定了返回数组的成员数。

`split`方法还可以使用正则表达式作为参数。

### repeat()

**`repeat`方法返回一个新字符串，表示将原字符串重复`n`次。**

```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

**参数如果是小数，会被取整。**

```js
'na'.repeat(2.9) // "nana"
```

如果`repeat`的参数是负数或者`Infinity`，会报错。

```js
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
```

但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于`-0`，`repeat`视同为 0。

```js
'na'.repeat(-0.9) // ""
```

参数`NaN`等同于 0。

```js
'na'.repeat(NaN) // ""
```

如果`repeat`的参数是字符串，则会先转换成数字。

```js
'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"
```

### padStart()，padEnd()

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。**`padStart()`用于头部补全，`padEnd()`用于尾部补全。这两个方法均返回一个新字符串**

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```

**上面代码中，`padStart()`和`padEnd()`一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。**

如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

```js
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
```

**如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。**

```js
'abc'.padStart(10, '0123456789')
// '0123456abc'
```

如果省略第二个参数，默认使用空格补全长度。

```js
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```

**`padStart()`的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。**

```js
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
```

**另一个用途是提示字符串格式。**

```js
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```

### localeCompare()

**`localeCompare`方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。**

```js
'apple'.localeCompare('banana') // -1
'apple'.localeCompare('apple') // 0
```

**该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。**

```js
'B' > 'a' // false
```

上面代码中，字母`B`小于字母`a`。因为 JavaScript 采用的是 Unicode 码点比较，`B`的码点是66，而`a`的码点是97。

**但是，`localeCompare`方法会考虑自然语言的排序情况，将`B`排在`a`的前面。**

```js
'B'.localeCompare('a') // 1
```

上面代码中，`localeCompare`方法返回整数1，表示`B`较大。

**`localeCompare`还可以有第二个参数，指定所使用的语言（默认是英语），然后根据该语言的规则进行比较。**

```js
'ä'.localeCompare('z', 'de') // -1
'ä'.localeCompare('z', 'sv') // 1
```

上面代码中，`de`表示德语，`sv`表示瑞典语。德语中，`ä`小于`z`，所以返回`-1`；瑞典语中，`ä`大于`z`，所以返回`1`。

### normalize()

许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如`Ǒ`（\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如`O`（\u004F）和`ˇ`（\u030C）合成`Ǒ`（\u004F\u030C）。

这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。

```js
'\u01D1'==='\u004F\u030C' //false

'\u01D1'.length // 1
'\u004F\u030C'.length // 2
```

上面代码表示，JavaScript 将合成字符视为两个字符，导致两种表示方法不相等。

ES6 提供字符串实例的`normalize()`方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

```js
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true
```

`normalize`方法可以接受一个参数来指定`normalize`的方式，参数的四个可选值如下。

- `NFC`，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
- `NFD`，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
- `NFKC`，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，`normalize`方法不能识别中文。）
- `NFKD`，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。

```js
'\u004F\u030C'.normalize('NFC').length // 1
'\u004F\u030C'.normalize('NFD').length // 2
```

上面代码表示，`NFC`参数返回字符的合成形式，`NFD`参数返回字符的分解形式。

不过，`normalize`方法目前不能识别三个或三个以上字符的合成。这种情况下，还是只能使用正则表达式，通过 Unicode 编号区间判断。

### match()

**`match`方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回`null`。**

```js
'cat, bat, sat, fat'.match('at') // ["at"]
'cat, bat, sat, fat'.match('xt') // null
```

返回的数组还有`index`属性和`input`属性，分别表示匹配字符串开始的位置和原始字符串。

```js
var matches = 'cat, bat, sat, fat'.match('at');
matches.index // 1
matches.input // "cat, bat, sat, fat"
```

`match`方法还可以使用正则表达式作为参数。

### search()，replace()

**`search`方法的用法基本等同于`match`，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回`-1`。**

```js
'cat, bat, sat, fat'.search('at') // 1
```

`search`方法还可以使用正则表达式作为参数。

`replace`方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有`g`修饰符的正则表达式）。

```js
'aaa'.replace('a', 'b') // "baa"
```

`replace`方法还可以使用正则表达式作为参数。

### matchAll()

`matchAll()`方法返回一个正则表达式在当前字符串的所有匹配。

### replaceAll()

历史上，字符串的实例方法`replace()`只能替换第一个匹配。

```js
'aabbcc'.replace('b', '_')
// 'aa_bcc'
```

上面例子中，`replace()`只将第一个`b`替换成了下划线。

如果要替换所有的匹配，不得不使用正则表达式的`g`修饰符。

```js
'aabbcc'.replace(/b/g, '_')
// 'aa__cc'
```

正则表达式毕竟不是那么方便和直观，[ES2021](https://github.com/tc39/proposal-string-replaceall) 引入了`replaceAll()`方法，可以一次性替换所有匹配。

```js
'aabbcc'.replaceAll('b', '_')
// 'aa__cc'
```

它的用法与`replace()`相同，返回一个新字符串，不会改变原字符串。

```js
String.prototype.replaceAll(searchValue, replacement)
```

上面代码中，`searchValue`是搜索模式，可以是一个字符串，也可以是一个全局的正则表达式（带有`g`修饰符）。

如果`searchValue`是一个不带有`g`修饰符的正则表达式，`replaceAll()`会报错。这一点跟`replace()`不同。

```js
// 不报错
'aabbcc'.replace(/b/, '_')

// 报错
'aabbcc'.replaceAll(/b/, '_')
```

上面例子中，`/b/`不带有`g`修饰符，会导致`replaceAll()`报错。

`replaceAll()`的第二个参数`replacement`是一个字符串，表示替换的文本，其中可以使用一些特殊字符串。

- `$&`：匹配的子字符串。
- `$``：匹配结果前面的文本。
- `$'`：匹配结果后面的文本。
- `$n`：匹配成功的第`n`组内容，`n`是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
- `$$`：指代美元符号`$`。

下面是一些例子。

```js
// $& 表示匹配的字符串，即`b`本身
// 所以返回结果与原字符串一致
'abbc'.replaceAll('b', '$&')
// 'abbc'

// $` 表示匹配结果之前的字符串
// 对于第一个`b`，$` 指代`a`
// 对于第二个`b`，$` 指代`ab`
'abbc'.replaceAll('b', '$`')
// 'aaabc'

// $' 表示匹配结果之后的字符串
// 对于第一个`b`，$' 指代`bc`
// 对于第二个`b`，$' 指代`c`
'abbc'.replaceAll('b', `$'`)
// 'abccc'

// $1 表示正则表达式的第一个组匹配，指代`ab`
// $2 表示正则表达式的第二个组匹配，指代`bc`
'abbc'.replaceAll(/(ab)(bc)/g, '$2$1')
// 'bcab'

// $$ 指代 $
'abc'.replaceAll('b', '$$')
// 'a$c'
```

`replaceAll()`的第二个参数`replacement`除了为字符串，也可以是一个函数，该函数的返回值将替换掉第一个参数`searchValue`匹配的文本。

```js
'aabbcc'.replaceAll('b', () => '_')
// 'aa__cc'
```

上面例子中，`replaceAll()`的第二个参数是一个函数，该函数的返回值会替换掉所有`b`的匹配。

这个替换函数可以接受多个参数。第一个参数是捕捉到的匹配内容，第二个参数捕捉到是组匹配（有多少个组匹配，就有多少个对应的参数）。此外，最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置，最后一个参数是原字符串。

```js
const str = '123abc456';
const regex = /(\d+)([a-z]+)(\d+)/g;

function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join(' - ');
}

str.replaceAll(regex, replacer)
// 123 - abc - 456
```

上面例子中，正则表达式有三个组匹配，所以`replacer()`函数的第一个参数`match`是捕捉到的匹配内容（即字符串`123abc456`），后面三个参数`p1`、`p2`、`p3`则依次为三个组匹配。

### 总结

1. 会改变原字符串的方法：
   * 暂无

2. 返回新字符串，不会改变原字符串的方法：
   * concat()
   * slice()
   * substring()
   * substr()
   * trim()
   * trimStart()，trimEnd()
   * toLowerCase()，toUpperCase()
   * repeat()
   * padStart()，padEnd()

