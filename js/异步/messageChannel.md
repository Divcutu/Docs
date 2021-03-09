### MessageChannel 宏任务

  **注意： 仅在浏览器环境支持，node中无法使用**
  
  `MessageChannel`创建了一个通信的管道，这个管道有两个端口，每个端口都可以通过`postMessage`发送数据，而一个端口只要绑定了`onmessage`回调方法，就可以接收从另一个端口传过来的数据。

#### 使用方式
```js
  // 实例化管道
  var messageChannel = new MessageChannel()
  // 拿到 两个端口
  let {port1, port2} = messageChannel
  // 绑定接收数据回调
  port1.onmessage = message => {
    console.log('port1收到来自port2的数据' , message)
  }
  port2.onmessage = message => {
    console.log('port2收到来自port1的数据', message)
  }

  setTimeout(() => {
    console.log('发送数据')
    // 发送数据
    port1.postMessage('发送给port2')
    port2.postMessage('发送给port1')
  }, 5000)

```


#### 额外作用 深拷贝

1. `JSON` 深拷贝的局限性 `JSON.parse(JSON.stringify(object))`

    + 会忽略 `undefined`
    + 不能序列化函数
    + 不能解决循环引用的对象

    ```js
      let demo = {
        a:1,
        b: function() {this.a = 10},
        c() {
          return this.a
        },
        d: undefined,
        f: null,
      }

      let JSON_demo = JSON.stringify(demo)
      console.log(JSON_demo) // {"a":1,"f":null}
      console.log(JSON.parse(JSON_demo)) //{ a: 1, f: null }
    ```

2. `MessageChannnel` 做深拷贝 但拷贝有函数的对象时 会报错.

