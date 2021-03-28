### BFC 独立渲染区域

#### 介绍

而`BlockFormattingContexts`(`BFC`，块级格式化上下文)，就是一个块级元素的渲染显示规则。具有BFC特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC具有普通容器所没有的一些特性。

#### 布局规则

1.内部的盒子会在垂直方向，一个个地放置；

2.`BFC`是页面上的一个隔离的独立容器；

3.属于同一个BFC的两个相邻`Box`的上下`margin`会发生重叠；

4.计算`BFC`的高度时，浮动元素也参与计算

5.每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此；

6.`BFC`的区域不会与`float`重叠；


#### 触发方式

1. 根元素，即`HTML`标签

2. 浮动元素：`float`值为`left`, `right`

3. `overflow`值不为 `visible`，为 `auto`、`scroll`、`hidden`

4. `display`值为 `inline-block`、`table-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`

5. 定位元素：`position`值为 `absolute`、`fixed`

#### 解决问题

1. 边距重叠问题

2. 盒子塌陷问题

3. 清除浮动

4. 浮动环绕文字问题