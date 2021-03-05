
<h1 class="title">es6 笔记</h1>

<a href="javascript:void 0" class="href-title" onclick="document.querySelector('#ID-1').scrollIntoView()">变量的解构赋值</a>

<span id="ID-1"></span>

### 变量的解构赋值

#### 数组

  ``` JavaScript
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
    ``` JavaScript
      function f() {
        console.log('aaa');
      }
      let [x = f()] = [1]; 
      因为x能取到值，所以函数f根本不会执行
    ```

#### 对象

``` JavaScript
  let obj = {};
  let arr = [];

  ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

  obj // {prop:123}
  arr // [true]

  let {a, ...obj} = {prop: 555, a:10}
  obj // {prop: 555}
  a // 10
```

1.  对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
    ``` JavaScript
      let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
      baz // "aaa"
      foo // error: foo is not defined
    ```
2. 要将一个已经声明的变量用于解构赋值，必须非常小心。
因为 JavaScript 引擎会将{x}理解成一个代码块
    ``` JavaScript
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

``` JavaScript
  function move({x = 0, y = 0} = {}) {
    return [x, y];
  }

  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]
```
上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
``` JavaScript
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
    ``` JavaScript
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
   ``` JavaScript
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

2. `Number.isFinite()` `Number.isNaN()`
  
   **它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效**
   + `Number.isFinite()`用来检查一个数值是否为有限的（`finite`），即不是`Infinity`。
   + `Number.isNaN()`用来检查一个值是否为`NaN`。

3. `Number.parseInt()`, `Number.parseFloat()` ES6 将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。

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

3. `Math.cbrt()` `Math.cbrt()`方法用于计算一个数的立方根。对于非数值，`Math.cbrt()`方法内部也是先使用`Number()`方法将其转为数值。

4. `Math.clz32()`, `Math.clz32()`方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0
   
   **左移运算符（<<）与Math.clz32方法直接相关。**
   ``` JavaScript
    Math.clz32(0) // 32
    Math.clz32(1) // 31
    Math.clz32(1 << 1) // 30
    Math.clz32(1 << 2) // 29
    Math.clz32(1 << 29) // 2 
   ```

5. Math.imul() Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。

   ``` JavaScript
    (0x7fffffff * 0x7fffffff)|0 // 0

    上面这个乘法算式，返回结果为 0。但是由于这两个二进制数的最低位都是 1，所以这个结果肯定是不正确的，因为根据二进制乘法，计算结果的二进制最低位应该也是 1。这个错误就是因为它们的乘积超过了 2 的 53 次方，JavaScript 无法保存额外的精度，就把低位的值都变成了 0。Math.imul方法可以返回正确的值 1

    Math.imul(0x7fffffff, 0x7fffffff) // 1
   ```

6. Math.fround() Math.fround方法返回一个数的32位单精度浮点数形式。

7. Math.hypot() Math.hypot方法返回所有参数的平方和的平方根。

   如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。

   ``` JavaScript
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

10. **指数运算** ES2016 新增了一个指数运算符（`**`）。
   
   这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
   ``` JavaScript
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
  
  **为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。**

  **BigInt 同样可以使用各种进制表示，都要加上后缀n**

  **BigInt 与普通整数是两种值，它们之间并不相等。**
  
  **typeof运算符对于 BigInt 类型的数据返回bigint。**

  ``` JavaScript
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

**BigInt()构造函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错。**

  ``` JavaScript
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
    
    **转为字符串时后缀n会消失**

    **取反运算符（!）也可以将 BigInt 转为布尔值**

    ``` JavaScript
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

   **BigInt 不能与普通数值进行混合运算。** 因为无论返回的是 BigInt 或 Number，都会导致丢失精度信息
   同样的原因，如果一个标准库函数的参数预期是 Number 类型，但是得到的是一个 BigInt，就会报错。
   ``` JavaScript
    // 错误的写法
    Math.sqrt(4n) // 报错

    // 正确的写法
    Math.sqrt(Number(4n)) // 2
   ```

   **比较运算符（比如>）和相等运算符（==）允许 BigInt 与其他类型的值混合计算，因为这样做不会损失精度。**
   ``` JavaScript
    0n < 1 // true
    0n < true // true
    0n == 0 // true
    0n == false // true
    0n === 0 // false
   ```

## 函数的扩展

1. 函数可以使用默认值

    **参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。**
    ``` JavaScript
      let x = 99;
      function foo(p = x + 1) {
        console.log(p);
      }

      foo() // 100

      x = 100;
      foo() // 101

      // 写法一
      function m1({x = 0, y = 0} = {}) {
        return [x, y];
      }

      // 写法二
      function m2({x, y} = { x: 0, y: 0 }) {
        return [x, y];
      }

      // 函数没有参数的情况
      m1() // [0, 0]
      m2() // [0, 0]

      // x 和 y 都有值的情况
      m1({x: 3, y: 8}) // [3, 8]
      m2({x: 3, y: 8}) // [3, 8]

      // x 有值，y 无值的情况
      m1({x: 3}) // [3, 0]
      m2({x: 3}) // [3, undefined]

      // x 和 y 都无值的情况
      m1({}) // [0, 0];
      m2({}) // [undefined, undefined]

      m1({z: 3}) // [0, 0]
      m2({z: 3}) // [undefined, undefined]
    ```

2. 函数的length属性  指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真.
    
   **如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。**

3. 函数参数的作用域

   **一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。**
   ``` JavaScript
    var x = 1;
    function foo(x = x) {
      // ...
    }
    foo() // ReferenceError: x is not define
    参数x = x形成一个单独作用域。实际执行的是let x = x，由于暂时性死区的原因，这行代码会报错”x 未定义“
   ```
4. rest 参数 rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

  ``` JavaScript
    function add(...values) {
      let sum = 0;

      for (var val of values) {
        sum += val;
      }

      return sum;
    }

    add(2, 5, 3) // 10
  ```
  **rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错, 函数的length属性，不包括 rest 参数**

5. 严格模式 从 ES5 开始，函数内部可以设定为严格模式 ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错

  **这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。**

    + 第一种是设定全局性的严格模式，这是合法的
      ``` JavaScript
        'use strict';

        function doSomething(a, b = a) {
          // code
        }

      ```
    + 第二种是把函数包在一个无参数的立即执行函数里面。
    ``` JavaScript
      const doSomething = (function () {
        'use strict';
        return function(value = 42) {
          return value;
        };
      }());
    ```

### 箭头函数

1. 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
  ``` JavaScript
    var sum = (num1, num2) => { return num1 + num2; }
  ```
  
2. 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
  ``` JavaScript
    // 报错
    let getTempItem = id => { id: id, name: "Temp" };

    // 不报错
    let getTempItem = id => ({ id: id, name: "Temp" });
  ```

3. 箭头函数可以与变量解构,rest 参数 结合使用
  ``` javascript

    const full = ({ first, last }) => first + ' ' + last;

    // 等同于
    function full(person) {
      return person.first + ' ' + person.last;
    }

    const numbers = (...nums) => nums;

    numbers(1, 2, 3, 4, 5)
    // [1,2,3,4,5]

    const headAndTail = (head, ...tail) => [head, tail];

    headAndTail(1, 2, 3, 4, 5)
    // [1,[2,3,4,5]]
  ```

### 注意点

1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误.
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

  ``` javascript
    function Timer() {
      this.s1 = 0;
      this.s2 = 0;
      // 箭头函数
      setInterval(() => this.s1++, 1000);
      // 普通函数
      setInterval(function () {
        this.s2++;
      }, 1000);
    }

    var timer = new Timer();

    setTimeout(() => console.log('s1: ', timer.s1), 3100);
    setTimeout(() => console.log('s2: ', timer.s2), 3100);
    // s1: 3
    // s2: 0
  ```
  上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）。所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新

  箭头函数转成 ES5 的代码如下
  ``` javascript
    // ES6
    function foo() {
      setTimeout(() => {
        console.log('id:', this.id);
      }, 100);
    }

    // ES5
    function foo() {
      var _this = this;

      setTimeout(function () {
        console.log('id:', _this.id);
      }, 100);
    }
  ```
  **由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向**

### 不适用场合

1. 定义对象的方法，且该方法内部包括this
  ``` javascript
    const cat = {
      lives: 9,
      jumps: () => {
        this.lives--;
      }
    }
  ```
  cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。这是因为对象不构成单独的作用域，导致jumps箭头函数定义时的作用域就是全局作用域。

2. 需要动态this的时候，也不应使用箭头函数
  ``` javascript
    var button = document.getElementById('press');
    button.addEventListener('click', () => {
      this.classList.toggle('on');
    });
  ```
  上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象。


### 尾调用
尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

1. 尾调用不一定出现在函数尾部，只要是最后一步操作即可 且不能再进行其它操作（赋值等。）

2. 尾调用优化
   
   **函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack） 
    尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了**

  ```javascript
      function f() {
        let m = 1;
        let n = 2;
        return g(m + n);
      }
      f();

      // 等同于
      function f() {
        return g(3);
      }
      f();

      // 等同于
      g(3);
  ```
  只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。

  ** 注意，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。 **
  ```javascript
    function addOne(a){
      var one = 1;
      function inner(b){
        return b + one;
      }
      return inner(a);
    }
  ```
  上面的函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。

  ** 注意，目前只有 Safari 浏览器支持尾调用优化，Chrome 和 Firefox 都不支持。 **

3. ES6 的尾调用优化只在严格模式下开启，正常模式是无效的.
   这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈.
   + func.arguments：返回调用时函数的参数。
   + func.caller：返回调用当前函数的那个函数。
    
  尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。

4. 为递归优化 使用蹦床函数。。看阮一峰的吧。


## 数组的扩展

1. 扩展运算符
   + 扩展运算符后可以跟表达式
      ```javascript
        const arr = [
          ...(x > 0 ? ['a'] : []),
          'b',
        ];
        // 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。
        (...[1, 2])
        // Uncaught SyntaxError: Unexpected number
      ```
    + concat() 与扩展运算符都是浅拷贝
    + 将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
      ```Javascript
        const [...butLast, last] = [1, 2, 3, 4, 5];
        // 报错
        const [first, ...middle, last] = [1, 2, 3, 4, 5];
        // 报错
      ```
    + 扩展运算符可以将字符串转为数组
      ```js
        [...'hello']
        // [ "h", "e", "l", "l", "o" ]
        // 有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符
        'x\uD83D\uDE80y'.length // 4
        [...'x\uD83D\uDE80y'].length // 3
      ```
    + 任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。

2. `Array.form()` 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象

    只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组。

    扩展运算符（...）也可以将某些数据结构转为数组。

    扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from方法还支持类似数组的对象
    所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换

    + `Array.from`还可以接受第二个参数，作用类似于数组的`map`方法，用来对每个元素进行处理，将处理后的值放入返回的数组
      ```js
        Array.from(arrayLike, x => x * x);
        // 等同于
        Array.from(arrayLike).map(x => x * x);
      ```
    + 如果`map`函数里面用到了`this`关键字，还可以传入`Array.from`的第三个参数，用来绑定`this`

3. `Array.of` 用于将一组值，转换为数组。主要目的是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
    ```js
      Array() // []
      Array(3) // [, , ,]
      Array(3, 11, 8) // [3, 11, 8]
      // 只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。

      // 可以用下面的代码实现
      function ArrayOf(){
        return [].slice.call(arguments);
      }
    ```
    ** 如果没有参数，就返回一个空数组 **

4. `copyWithin` 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组 **会修改当前数组**

    + target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
    + start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
    + end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
    ```js
      // 将3号位复制到0号位
      [].copyWithin.call({length: 5, 3: 1}, 0, 3)
      // {0: 1, 3: 1, length: 5}
    ```
5. `find()`、`findeIndex()`
    数组实例的`find`方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为`true`的成员，然后返回该成员。如果没有符合条件的成员，则返回`undefined`。
    + `find`方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
    + 数组实例的`findIndex`方法的用法与`find`方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`。
      ```js
        [1, 5, 10, 15].findIndex(function(value, index, arr) {
          return value > 9;
        }) // 2
      ```
    + 这两个方法都可以接受第二个参数，用来绑定回调函数的`this`对象
    + 两个方法都可以发现`NaN`，弥补了数组的`indexOf`方法的不足

6. `fill()` 方法使用给定值，填充一个数组

    + `fill`方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
      ```js
        ['a', 'b', 'c'].fill(7, 1, 2)
        // ['a', 7, 'c']
      ```
    + **如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。**

7. `entries()`,`keys()`,`values()`
    `entries()`，`keys()`和`values()`——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历。

8. `includes()` 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似

    该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

    `indexOf` 内部使用严格相等运算符(`===`) 这会导致对`NaN`的误判

9. `flat()`, `flatMap()` 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响

    + `flat()`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将`flat()`方法的参数写成一个整数，表示想要拉平的层数，默认为1。

      ```js
        [1, 2, [3, [4, 5]]].flat()
        // [1, 2, 3, [4, 5]]

        [1, 2, [3, [4, 5]]].flat(2)
        // [1, 2, 3, 4, 5]

        //如果不管有多少层嵌套，都要转成一维数组
        [1, [2, [3]]].flat(Infinity)

        // 如果原数组有空位，flat()方法会跳过空位
        [1, 2, , 4, 5].flat()
        // [1, 2, 4, 5] 
      ```
    + `flatMap()`方法对原数组的每个成员执行一个函数（相当于执行`Array.prototype.map()`），然后对返回值组成的数组执行`flat()`方法
    + `flatMap()`只能展开一层数组
    + `flatMap()`方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组
    + `flatMap()`方法还可以有第二个参数，用来绑定遍历函数里面的`this`

10. 数组的空位  数组的空位指，数组的某一个位置没有任何值。比如，`Array`构造函数返回的数组都是空位。

    **空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值**
    
    ES5 对空位的处理:
      + `forEach()`, `filter()`, `reduce()`, `every()` 和`some()`都会跳过空位 
      + `map()`会跳过空位，但会保留这个值
      + `join()`和`toString()`会将空位视为`undefined`，而`undefined`和`null`会被处理成空字符串。
      ```js
        // forEach方法
        [,'a'].forEach((x,i) => console.log(i)); // 1

        // filter方法
        ['a',,'b'].filter(x => true) // ['a','b']

        // every方法
        [,'a'].every(x => x==='a') // true

        // reduce方法
        [1,,2].reduce((x,y) => x+y) // 3

        // some方法
        [,'a'].some(x => x !== 'a') // false

        // map方法
        [,'a'].map(x => 1) // [,1]

        // join方法
        [,'a',undefined,null].join('#') // "#a##"

        // toString方法
        [,'a',undefined,null].toString() // ",a,,"
      ```
    ES6 则是明确将空位转为`undefined`
      + `Array.from`、扩展运算符（`...`）、`entries()`、`keys()`、`values()`、`find()`和`findIndex()`方法会将数组的空位，转为`undefined`
      + `for...of`循环也会遍历空位
      + `fill()`会将空位视为正常的数组位置, `copyWithin()`会连空位一起拷贝

## 对象的扩展

1. 属性名表达式
    ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。还可以用于定义方法名.
    ```js
      let propKey = 'foo';
      let obj = {
        [propKey]: true,
        ['a' + 'bc']: 123
      };
    ```
    注意： 属性名表达式与简洁表示法，不能同时使用，会报错

2. 属性的可枚举与遍历 
    + 对象的每个属性都有一个描述对象（`Descriptor`），用来控制该属性的行为。`Object.getOwnPropertyDescriptor`方法可以获取该属性的描述对象。
      ```js
        let obj = { foo: 123 };
        Object.getOwnPropertyDescriptor(obj, 'foo')
        //  {
        //    value: 123,
        //    writable: true,
        //    enumerable: true,
        //    configurable: true
        //  }
      ```
      描述对象的`enumerable`属性，称为“可枚举性”，如果该属性为`false`，就表示某些操作会忽略当前属性。
      目前，有四个操作会忽略`enumerable`为`false`的属性
        - `for...in`循环：只遍历对象自身的和继承的可枚举的属性。
        - `Object.keys()`：返回对象自身的所有可枚举的属性的键名。
        - `JSON.stringify()`：只串行化对象自身的可枚举的属性。
        - `Object.assign()`： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
      另外，ES6 规定，所有 `Class` 的原型的方法都是不可枚举的。
    
3. 属性的遍历
  ES6 一共有 5 种方法可以遍历对象的属性 注意 是属性
  + `for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
  + `Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
  + `Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
  + `Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名。
  + `Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

    - 首先遍历所有数值键，按照数值升序排列。
    - 其次遍历所有字符串键，按照加入时间升序排列。
    - 最后遍历所有 Symbol 键，按照加入时间升序排列

4. `super` 关键字 指向当前对象的原型对象
  + `Object.setPrototypeOf(obj, proto)` 设置对象的原型对象 `Object.getPrototypeOf(obj)` 获取对象的原型对象
    注意: `super` 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
    ```js
      // 报错
      const obj = {
        foo: super.foo
      }

      // 报错
      const obj = {
        foo: () => super.foo
      }

      // 报错
      const obj = {
        foo: function () {
          return super.foo
        }
      }
    ```
5. 解构赋值
  对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。
  + 由于解构赋值要求等号右边是一个对象，所以如果等号右边是`undefined`或`null`，就会报错，因为它们无法转为对象
  + 解构赋值必须是最后一个参数，否则会报错
  + 扩展运算符的解构赋值，不能复制继承自原型对象的属性

6. 链判断运算符 `?.` 直接在链式调用的时候判断，左侧的对象是否为`null`或`undefined`。如果是的，就不再往下运算，而是返回`undefined`
  + `obj?.prop` // 对象属性
  + `obj?.[expr]` // 同上
  + `func?.(...args)` // 函数或对象方法的调用

  + `?.`运算符相当于一种短路机制，只要不满足条件，就不再往下执行。
    ```js
      a?.[++x]
      // 等同于
      a == null ? undefined : a[++x]
    ```
  + `delete` 运算符
    ```js
      delete a?.b
      // 等同于
      a == null ? undefined : delete a.b
    ```
7. `null` 判断运算符 `??` 它的行为类似`||`，但是只有运算符左侧的值为`null`或`undefined`时，才会返回右侧的值。

## 对象的新增方法

1. `Object.is()`
    比较两个值是否相等，只有两个运算符：相等运算符（`==`）和严格相等运算符（`===`）。它们都有缺点，前者会自动转换数据类型，后者的`NaN`不等于自身，以及`+0`等于`-0`
    `Object.is`它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
    + 不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身。

2. `Object.assign()` 用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
    `Object.assign()`方法的第一个参数是目标对象，后面的参数都是源对象 是浅拷贝
    常见用途
    + 为对象添加属性
      ```js
        class Point {
          constructor(x, y) {
            Object.assign(this, {x, y});
          }
        }
      ```
    + 为对象添加方法
      ```js
        Object.assign(SomeClass.prototype, {
          someMethod(arg1, arg2) {
            ···
          },
          anotherMethod() {
            ···
          }
        });

        // 等同于下面的写法
        SomeClass.prototype.someMethod = function (arg1, arg2) {
          ···
        };
        SomeClass.prototype.anotherMethod = function () {
          ···
        };
      ```
    + 克隆对象、 合并多个对象、 为属性指定默认值
3. `Object.getOwnPropertyDescriptors()`  返回指定对象所有自身属性（非继承属性）的描述对象。 返回一个对象，所有原对象的属性名都是该对象的属性名，对应的属性值就是该属性的描述对象。看阮一峰吧。


4. `_proto_`属性 用来读取或设置当前对象的原型对象(`prototype`)

    由于浏览器广泛支持，才被加入了 ES6。标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性
    而是使用 `Object.getPrototype()`读操作 `Object.setPrototype()`写操作 `Object.create()`生成操作
    `_proto_`原理 调用的是`Object.prototype.__proto__`
    ```js
      Object.defineProperty(Object.prototype, '__proto__', {
        get() {
          let _thisObj = Object(this);
          return Object.getPrototypeOf(_thisObj);
        },
        set(proto) {
          if (this === undefined || this === null) {
            throw new TypeError();
          }
          if (!isObject(this)) {
            return undefined;
          }
          if (!isObject(proto)) {
            return undefined;
          }
          let status = Reflect.setPrototypeOf(this, proto);
          if (!status) {
            throw new TypeError();
          }
        },
      });

      function isObject(value) {
        return Object(value) === value;
      }
    ```


