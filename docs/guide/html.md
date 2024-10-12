# HTML

## BFC
### 概念：BFC（Box Formatting Context）：box是css布局的基本单元，BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
### 块级格式化上下文布局规则
- 内部的box会在垂直方向一个接一个的放置
- 属于用一个BFC的两个相邻box的margin会重叠，不同BFC就不会
- 到页面上一个隔离的独立容器，里面的元素不会影响到外面的元素。反之亦然。
- BFC的区域不会与float box 重叠
- 计算BFC的高度，浮动元素也参与计算
### 触发条件
1. 根元素 html
2. 浮动元素 元素的float不是none
3. 绝对定位元素 position：absolute/fixed
4. 行内块元素 display：inline-block
5. 表格单元格 display：tabel-cell html表单默认为此值
6. 表格标题 display：table-caption html表格标题默认此值
7. 匿名 表格单元格元素
8. `overflow`不为`visible`的块元素
9. display值为flow-root的元素
10. `contain` 值为`layout` ，`content`，`paint`的元素
11. 弹性元素 display flex/inline-flex 的直接子元素
12. 网格元素 display grid
13. 多列容器
### 应用场景
- 清除内部的浮动，触发父元素的BFC属性，会包含float元素
  - 防止浮动导致父元素高度塌陷父级设置overflow：hidden，元素float：right
- 分属于不同的BFC，组织margin重叠
- 阻止元素被浮动元素覆盖，各自是独立的渲染区域
- 自适应两栏布局