 ### MutationObserved 微任务

**注意: 只在浏览器环境有效，node中无效。**

`Mutation Observer`（变动观察器）是监视`DOM`变动的接口。当DOM对象树发生任何变动时，`Mutation Observer`会得到通知

可以理解为，当`DOM`发生变动会触发`Mutation Observer`事件。但是，它与事件有一个本质不同：事件是同步触发，也就是说`DOM`发生变动立刻会触发相应的事件；`Mutation Observer`则是异步触发，`DOM`发生变动以后，并不会马上触发，而是要等到当前所有`DOM`操作都结束后才触发。

这样设计是为了应付`DOM`变动频繁的情况。举例来说，如果在文档中连续插入1000个段落（`p`元素），会连续触发1000个插入事件，执行每个事件的回调函数，这很可能造成浏览器的卡顿；而`Mutation Observer`完全不同，只在1000个段落都插入结束后才会触发，而且只触发一次。


#### 特点

1. 它等待所有脚本任务完成后，才会运行，即采用异步方式

2. 它把`DOM`变动记录封装成一个数组进行处理，而不是一条条地个别处理`DOM`变动。

3. 它即可以观察发生在`DOM`节点的所有变动，也可以观察某一类变动

#### 使用方法

  ```js
    // 初始化实例
    var observer = new MutationObserver(callback);
    // 选择需要观察的dom元素
    var article = document.querySelector('article');
    // 配置观察的变动类型
    var options = {
        'childList': true,
        'arrtibutes': true
    };
    // 开始观察
    observer.observer(article, options)
  ```

1. `MutationObserver`所观察的`DOM`变动（即上面代码的`option`对象），包含以下类型
    + `childList`: 子元素变动
    + `attributes`: 属性的变动
    + `characterData`: 节点内容或者节点文本的变动
    + `subtree`: 所有下属节点（包括子节点和子节点的子节点）的变动

    **注意：不能单独观察`subtree`变动，必须同时指定`childList`、`attributes`和`characterData`中的一种或多种**

2. 其余属性
    + `attributeOldValue`: 值为`true`或者为`false`。如果为`true`，则表示需要记录变动前的属性值
    + `characterDataOldValue`: 值为`true`或者为`false`。如果为`true`则表示需要记录变动前的数据值
    + `attributesFilter`: 值为一个数组，表示需要观察的特定属性（比如`['class', 'str']`）

#### 对象方法

1. `observer.disconnect()` 方法用来停止观察。发生相应变动时，不再调用回调函数。

2. `observer.takeRecord()` 方法用来清除变动记录，即不再处理未处理的变动

#### MutationRecord 对象

`MutationRecord`对象包含了`DOM`的相关信息，有如下属性：
+ `type`: 观察的变动类型（`attribute`、`characterData`或者`childList`）。
+ `target`: 发生变动的`DOM`对象。
+ `addedNodes`: 新增的`DOM`对象。
+ `removeNodes`: 删除的`DOM`对象。
+ `previousSibling`: 前一个同级的`DOM`对象，如果没有则返回`null`。
+ `nextSibling`: 下一个同级的`DOM`对象，如果没有就返回`null`。
+ `attributeName`: 发生变动的属性。如果设置了`attributeFilter`，则只返回预先指定的属性。
+ `oldValue`: 变动前的值。这个属性只对`attribute`和`characterData`变动有效，如果发生`childList`变动，则返回`null`。