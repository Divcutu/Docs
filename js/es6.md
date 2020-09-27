
<h1 class="title">es6 笔记</h1>

<a href="javascript:void 0" class="href-title" onclick="document.querySelector('#ID-1').scrollIntoView()">变量的解构赋值</a>

<span id="ID-1"></span>
### 变量的解构D-1赋值

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
  background: #F2CD96
}
</style>