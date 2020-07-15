### 任务队列
![asdasd](./assets/event-loop-task.jpg '任务队列')

---

### async/await

它的运行时基础是 Promise

**async必定返回一个promise**

----

### 函数种类

1. 普通函数: 用**function**关键字定义的函数
2. 箭头函数： 用 **=>** 定义的函数
3. 方法：在 **class** 中定义的函数
4. 生成器函数: 用 **function\*（）**定义的函数
` function *foo(){} `
5. 类： 用 **class** 定义的类也是一个函数
```
class foo() {
  constructor(){
    ....
  }
}
```
6. 7. 8. 异步函数：普通函数、箭头函数和生成器函数加上 **async** 关键字
```
async function foo(){ .... }
const foo = async () => { .... }
async function foo*(){ .... }
```

### this指向

1. 普通函数、异步普通函数、生成器函数、异步生成器函数

   **调用函数时使用的引用，决定了函数执行时刻的 this 值。**
   > 简单来说 对于一般函数而言 谁调用 this 就指向谁。或者通过 call applay bind 方法改变this 指向

2. 箭头函数、异步箭头函数

   > 初始化时的this指向。 箭头函数没有自己的执行上下文。

3. 方法

   > 除了实例本身外，其他调用都是undefined。

#### this关键字的机制

* lexical：表示从上下文中找 this，这对应了箭头函数
* global：表示当 this 为 undefined 时，取全局对象，对应了普通函数。
* strict：当严格模式时使用，this 严格按照调用时传入的值，可能为 null 或者 undefined。

**方法的行为跟普通函数有差异，恰恰是因为 class 设计成了默认按 strict 模式执行**
