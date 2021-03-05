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


### URL

#### 参数

1. `url`
    相对地址或者绝对地址。如果是相对地址，需要设置`base`参数，**如果是绝对地址，则会忽略base设置**。我们也可以使用`URL`对象作为`url`参数。此时作用的值是`URL`对象中的`href`属性值。
2. `base`
    如果URL地址是相对地址，则需要这个参数，作用是作为相对计算的基础地址。我们也可以使用`URL`对象作为`base`参数，此时作用的值是URL对象中的href属性值。如果不设置该参数，则会按照空字符串''进行处理。 **若需要`base`则 必须带有协议**

  ```js
    let base = 'https://www.baidu.com'

    let url = new URL('abc', base)
  ```

  **注意: 如果参数值无法组合成完整URL地址，则会报TypeError错误**

#### 属性

示例
```js
  var url = new URL('https://www.baidu.com:8080/note?name=URL#study')

  URL {
    href: 'https://www.baidu.com:8080/note?name=URL#study',
    origin: 'https://www.baidu.com:8080',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.baidu.com:8080',
    hostname: 'www.baidu.com',
    port: '8080',
    pathname: '/note',
    search: '?name=URL',
    searchParams: URLSearchParams { 'name' => 'URL' },
    hash: '#study'
  }
```

1. `hash`
    `URL`地址中的锚链值，**包含字符串'#'**

2. `host`
    `URL`地址中`host`主机地址，**包括端口号**

3. `hostname`
    `URL`地址中主机名称，**不包括端口号**

4. `href`
    完整的URL地址.

5. `origin` 只读属性
    返回`URL`地址的来源，会包含`URL`协议，域名和端口

6. `password`
    返回`URL`地址域名前的密码。`ftp`协议中比较常见

7. `username`
    返回`URL`地址域名前的用户名。`ftp`协议中比较常见

8. `pathname`
    返回`URL`中的目录+文件名。

9. `port`
    返回`UR`L地址中的端口号。

10. `protocol`
    返回`URL`地址的协议，**包括后面的冒号':'**

11. `search`
    返回`URL`地址的查询字符串，如果有参数，则返回值以问号`?`开头

12. `searchParams`
    返回一个`URLSearchParams`对象，可以调用`URLSearchParams`对象各种方法，对查询字符串进行非常方便的处理。

**注意:  可以修改的属性 修改时 会修改所有的属性。相当于重新定义**

#### 方法

1. `toString()`
    返回的完整的`URL`地址，你可以理解为`URL.href`的另外一种形式，不过这个**只能输出，不能修改值**。

2. `toJSON()`
    同样返回完整的`URL`地址，**返回的字符串和`href`属性完全一样**

#### 静态方法

1. `URL.createObjectURL(object)`
    可以把`File`，`Blob`或者`MediaSource`对象变成一个一个唯一的`blob URL`。其中参数`object`可以是`File`，`Blob`或者`MediaSource`对象。

2. `URL.revokeObjectURL(objectURL)`
    撤消之前使用`URL.createObjectURL()`创建的`URL`对象。其中参数`objectURL`表示之前使用`URL.createObjectURL()`创建的`URL`返回值。


> 目前问题，静态方法没有彻底理解，与`node`环境中的`URL`模块有什么不同