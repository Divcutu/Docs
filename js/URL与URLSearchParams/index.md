<!-- URL 与 URLSearchParams -->

### URLSearchParams

#### 实现方式

1. 浏览器实现方式
  ```js
    const urlSearchParams = new URLSearchParams();
  ```

2. Node服务器实现方式
  ```js
    const { URLSearchParams } = require('url');
    const urlSearchParams = new URLSearchParams();
  ```

3. 构造方式
  ```js
    // 字符串参数解析
    const params = new URLSearchParams('k=%E5%85%B3%E9%94%AE%E5%AD%97&p=1');
    // 对象参数
    const params = new URLSearchParams({
      k: '关键字',
      p: 1
    });
    console.log(params.toString());
  ```

    **注意: 在 Chrome 和 Node.js 上可以获得我们预期的结果，而在 FireFox 和 Polyfill 类库上则不支持 JSON 的构造函数**

#### 常用方法

1. `URLSearchParams.append(name, key)`

    可以通过append 增加多个名字相同的参数。多用于传入一个数组参数。

2. `URLSearchParams.set(name, value)`

    相比于`append`, `set` 方法会替换掉已有的属性

3. `URLSearchParams.delete(name)`

4. `URLSearchParams.get(name)`

5. `URLSearchParams.getAll(name)` 以数组形式返回所有当前查询关键字对应的值

    多为查询某个数组形式的参数

6. `URLSearchParams.has(name)` 返回布尔值，`true`或者`false`，是否包含某个查询关键字。

7. `URLSearchParams.forEach(callback)`

8. `URLSearchParams.entries()` 返回查询参数们的迭代器对象，我们可以迭代该迭代器对象获得所有的键值对

9. `URLSearchParams.keys()`, `URLSearchParams.values()` 返回一个迭代器对象，允许迭代该对象中所有的关键字 跟关键字的值

10. `URLSearchParams.toString()` 把URLSearchParams对象转换成查询字符串

11. `URLSearchParams.sort()` 

    方法将此对象中包含的所有键/值对就地排序，并返回undefined。排序顺序根据键的Unicode码位。该方法使用一种稳定的排序算法（即保留具有相同键的键/值对之间的相对顺序）

---