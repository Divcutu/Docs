
<h1 class="title">es6 笔记</h1>

<a href="javascript:void 0" class="href-title" onclick="document.querySelector('#ID-1').scrollIntoView()">变量的解构赋值</a>

<span id="ID-1"></span>

### 变量的解构赋值

#### 数组

  ```

    let [ , , third] = ["foo", "bar", "baz"];
    third // "baz"

    let [x, , y] = [1, 2, 3];
    x // 1
    y // 3

    let [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]
    
  ```

1. 只能解构 可遍历结构 （具有Iterator接口）

2. 如果解构不成功，变量的值就等于undefined

3. ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

4. 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
    ```
      function f() {
        console.log('aaa');
      }
      let [x = f()] = [1]; 
      因为x能取到值，所以函数f根本不会执行
    ```

#### 对象

```
  let obj = {};
  let arr = [];

  ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

  obj // {prop:123}
  arr // [true]
```

1.  对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
    ```
      let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
      baz // "aaa"
      foo // error: foo is not defined
    ```
2. 要将一个已经声明的变量用于解构赋值，必须非常小心。
因为 JavaScript 引擎会将{x}理解成一个代码块
    ```
      // 错误的写法
      let x;
      {x} = {x: 1};
      // SyntaxError: syntax error
      // 正确的写法
      let x;
      ({x} = {x: 1});
    ```

#### 其他


1. 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值.
2. 如果等号右边是数值和布尔值，则会先转为对象

#### 函数参数的解构赋值 

```
  function move({x = 0, y = 0} = {}) {
    return [x, y];
  }

  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]
```
上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
```
  function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }

  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]
```
上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。

## 字符串扩展

1. ES6 为字符串添加了遍历器接口(Iterator)
2. 模板字符串可以嵌套、可以调用函数、若不是字符串则转为字符串
3. 模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能
    ```
      alert`hello`
      // 等同于
      alert(['hello'])

      let a = 5;
      let b = 10;

      tag`Hello ${ a + b } world ${ a * b }`;
      // 等同于
      tag(['Hello ', ' world ', ''], 15, 50);
      // 相当于通过split 分割
    ```
### 新增方法

1. String.raw() 原生的 String 对象，提供了一个raw()方法。它会将所有变量替换，而且对斜杠进行转义

2. includes(), startsWidths(), endsWidths()
   + includes()：返回布尔值，表示是否找到了参数字符串。
   + startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
   + endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
这三个方法都支持第二个参数，表示开始搜索的位置

3. repeat() 方法返回一个新字符串，表示将原字符串重复n次。

4. padStart(), padEnd() 符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全
   ```
    // 第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
    'x'.padEnd(5, 'ab') // 'xabab'
    // 原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串
    'xxx'.padStart(2, 'ab') // 'xxx'
    // 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
    '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
    // 如果省略第二个参数，默认使用空格补全长度。
    'x'.padStart(4) // '   x'
   ```

5. trimStart()，trimEnd() 它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。

## 数值的扩展

1. 二进制用 0b || 0B 八进制用 0o || 0O 如果要转为十进制 使用Number 方法

2. Number.isFinite() Number.isNaN()
  
   **它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效**
   + Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
   + Number.isNaN()用来检查一个值是否为NaN。

3. Number.parseInt(), Number.parseFloat() ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

4. Number.isInteger() 用来判断一个数值是否为整数。如果参数不是数值，Number.isInteger返回false。

5. Number.EPSILON 新增一个极小的常量Number.EPSILON

6. 安全整数跟 Number.isSafeInteger() 

    JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
   ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。


<div class="grid-layout">
  <span style="color:red" class="text">aaaa</span>
  <span style="color:red" class="text">aaaa</span>
  <span style="color:red" class="text">aaaa</span>
  <span style="color:red" class="text">aaaa</span>
</div>
<style>
.text {color: #3333 !important}
span {
  animation: xx 3s ease 0s infinite
}
.grid-layout{
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 50px 50px;
}
@keyframes xx {
  0% {opacity: 0}
  50% {opacity: 1}
  100% {opacity: 0}
}
.title {
  text-align: center;
  font-weight: 600
}
pre {
  background: #EFF4F7
}
</style>