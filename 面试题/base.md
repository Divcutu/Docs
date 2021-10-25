### 基础知识

#### 网络相关
1. 多级域名
    > + 顶级域名就是一级域名，比如 .com .org .cn。
    > + N级域名就是在N-1级域名前追加一级。 比如二级域名是在一级域名前加一级，二级域名示例：http://baidu.com http://zhihu.com http://qq.com。
    > + 三级域名 就如 www.baidu.com 

2. `Cookie` 的 `domain` 与 `path`
    > 1. `domain`表示的是`cookie`所在的域，默认为请求的地址，如网址为`www.jb51.net/test/test.aspx`，那么domain默认为`www.jb51.net`。而跨域访问，如域A为`t1.test.com`，域B为`t2.test.com`，那么在域A生产一个令域A和域B都能访问的cookie就要将该cookie的domain设置为`.test.com`；如果要在域A生产一个令域A不能访问而域B能访问的cookie就要将该`cookie`的domain设置为`t2.test.com`。
    > 2. path表示cookie所在的目录，asp.net默认为/，就是根目录。在同一个服务器上有目录如下：/test/,/test/cd/,/test/dd/，现设一个cookie1的path为/test/，cookie2的path为/test/cd/，那么test下的所有页面都可以访问到cookie1，而/test/和/test/dd/的子页面不能访问cookie2。这是因为cookie能让其path路径下的页面访问。
    > 3. 浏览器会将domain和path都相同的cookie保存在一个文件里，cookie间用*隔开。

#### JS 基础

1. 中断 `Promise` (Promise 无法终止 只能中断)
    > 1. 抛出一个异常。 抛出的异常后不会执行
    > 2. return 一个pending 状态的promise


#### 打包方面

1. `base64`: `webpack`中使用图片压缩时 可以将小于一定大小的图片压缩为`base64`字符串。
    > + 优点: 网页中使用base64格式的图片时，不用再请求服务器调用图片资源，减少了服务器访问次数
    > - 缺点：base64格式的内容太多，所以加载网页的速度会降低，可能会影响用户的体验
    > - 缺点：base64无法缓存，要缓存只能缓存包含base64的文件，比如js或者css，这比直接缓存图片要差很多