
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

### Math 对象的扩展

1. Math.trunc() Math.trunc方法用于去除一个数的小数部分，返回整数部分。 对于非数值，Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。

2. Math.sign() Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    
    + 参数为正数，返回+1；
    + 参数为负数，返回-1；
    + 参数为 0，返回0；
    + 参数为-0，返回-0;
    + 其他值，返回NaN。

3. Math.cbrt() Math.cbrt()方法用于计算一个数的立方根。对于非数值，Math.cbrt()方法内部也是先使用Number()方法将其转为数值。

4. Math.clz32() Math.clz32()方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0
   
   **左移运算符（<<）与Math.clz32方法直接相关。**
   ```
    Math.clz32(0) // 32
    Math.clz32(1) // 31
    Math.clz32(1 << 1) // 30
    Math.clz32(1 << 2) // 29
    Math.clz32(1 << 29) // 2 
   ```

5. Math.imul() Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。

   ```
    (0x7fffffff * 0x7fffffff)|0 // 0

    上面这个乘法算式，返回结果为 0。但是由于这两个二进制数的最低位都是 1，所以这个结果肯定是不正确的，因为根据二进制乘法，计算结果的二进制最低位应该也是 1。这个错误就是因为它们的乘积超过了 2 的 53 次方，JavaScript 无法保存额外的精度，就把低位的值都变成了 0。Math.imul方法可以返回正确的值 1

    Math.imul(0x7fffffff, 0x7fffffff) // 1
   ```

6. Math.fround() Math.fround方法返回一个数的32位单精度浮点数形式。

7. Math.hypot() Math.hypot方法返回所有参数的平方和的平方根。

   如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。

   ```
    Math.hypot(3, 4);        // 5
    Math.hypot(3, 4, 5);     // 7.0710678118654755
    Math.hypot();            // 0
    Math.hypot(NaN);         // NaN
    Math.hypot(3, 4, 'foo'); // NaN
    Math.hypot(3, 4, '5');   // 7.0710678118654755
    Math.hypot(-3);          // 3
   ```

8.  ES6 新增了 4 个对数相关方法。
    + Math.expm1() Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
    + Math.log1p() Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
    + Math.log10() Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
    + Math.log2() Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。

9. ES6 新增了 6 个双曲函数方法。

    + Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    + Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    + Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    + Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    + Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    + Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

10. **指数运算** ES2016 新增了一个指数运算符（**）。
   
   这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
   ```
    // 相当于 2 ** (3 ** 2)
    2 ** 3 ** 2

    let a = 1.5;
    a **= 2;
    // 等同于 a = a * a;

    let b = 4;
    b **= 3;
    // 等同于 b = b * b * b;
   ```

### BigInt 数据类型

  JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。
  
  ** 为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。 **

  ** BigInt 同样可以使用各种进制表示，都要加上后缀n **

  ** BigInt 与普通整数是两种值，它们之间并不相等。 **
  
  ** typeof运算符对于 BigInt 类型的数据返回bigint。 **

  ```
    0b1101n // 二进制
    0o777n // 八进制
    0xFFn // 十六进制

    42n === 42 // false

    typeof 123n // 'bigint'

    -42n // 正确
    +42n // 报错
  ```

### BigInt 对象
JavaScript 原生提供BigInt对象，可以用作构造函数生成 BigInt 类型的数值。转换规则基本与Number()一致，将其他类型的值转为 BigInt。

** BigInt()构造函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错。 **

  ```
    new BigInt() // TypeError
    BigInt(undefined) //TypeError
    BigInt(null) // TypeError
    // 123n无法解析成 Number 类型，所以会报错。
    BigInt('123n') // SyntaxError
    BigInt('abc') // SyntaxError

    // 参数如果是小数，也会报错。
    BigInt(1.5) // RangeError
    BigInt('1.5') // SyntaxError 
  ```

1. BigInt 对象继承了 Object 对象的两个实例方法。
   
   + BigInt.prototype.toString()
   + BigInt.prototype.valueOf()

2. 继承了 Number 对象的一个实例方法

   + BigInt.prototype.toLocaleString()

3. 提供了三个静态方法

    + BigInt.asUintN(width, BigInt)： 给定的 BigInt 转为 0 到 2width - 1 之间对应的值。
    + BigInt.asIntN(width, BigInt)：给定的 BigInt 转为 -2width - 1 到 2width - 1 - 1 之间对应的值。
    + BigInt.parseInt(string[, radix])：近似于Number.parseInt()，将一个字符串转换成指定进制的 BigInt。
    
[阮一峰文档](https://es6.ruanyifeng.com/#docs/number#Number-parseInt-Number-parseFloat)

4. 可以使用Boolean()、Number()和String()这三个方法，将 BigInt 可以转为布尔值、数值和字符串类型。
    
    ** 转为字符串时后缀n会消失 **

    ** 取反运算符（!）也可以将 BigInt 转为布尔值 **

    ```
      Boolean(0n) // false
      Boolean(1n) // true
      Number(1n)  // 1
      String(1n)  // "1"

      !0n // true
      !1n // false 
    ```

5. BigInt 类型的+、-、*和**这四个二元运算符，与 Number 类型的行为一致。除法运算/会舍去小数部分，返回一个整数。

   几乎所有的数值运算符都可以用在 BigInt，但是有两个例外。
   + 不带符号的右移位运算符>>>
   + 一元的求正运算符+

   **  BigInt 不能与普通数值进行混合运算。 ** 因为无论返回的是 BigInt 或 Number，都会导致丢失精度信息
   同样的原因，如果一个标准库函数的参数预期是 Number 类型，但是得到的是一个 BigInt，就会报错。
   ```
    // 错误的写法
    Math.sqrt(4n) // 报错

    // 正确的写法
    Math.sqrt(Number(4n)) // 2
   ```

   ** 比较运算符（比如>）和相等运算符（==）允许 BigInt 与其他类型的值混合计算，因为这样做不会损失精度。**
   ```
    0n < 1 // true
    0n < true // true
    0n == 0 // true
    0n == false // true
    0n === 0 // false
   ```

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
p {
  text-indent: 2em;
}
li p {
  text-indent: 0;
}
</style>