<template><div><h2 id="数据结构与算法" tabindex="-1"><a class="header-anchor" href="#数据结构与算法"><span>数据结构与算法</span></a></h2>
<h3 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识"><span>前置知识</span></a></h3>
<p><code v-pre>时间复杂度</code>：指执行这个算法所需要的计算工作量。<br>
<code v-pre>空间复杂度</code>：指一个算法在运行过程中临时占用存储空间大小的量度。<br>
计算时间复杂度：计算算法执行所需要需要的执行次数，时间复杂度只关注最高数量级，且与之系数也没有关系。<br>
计算空间复杂度：计算算法执行所需要的临时空间随着某个变量n的大小而变化的次数。</p>
<details class="hint-container details"><summary>常用的算法复杂度</summary>
<blockquote>
<p>O(1):常数复杂度<br>
O(log n):对数复杂度<br>
O(n):线性时间复杂度<br>
O(n^2):平方<br>
O(n^3):立方<br>
O(2^n):指数<br>
O(n!):阶乘<br>
以上复杂度从上到下依次递增</p>
</blockquote>
</details>
<details class="hint-container details"><summary>常见的数据结构时间复杂度</summary>
<table>
<thead>
<tr>
<th style="text-align:center">数据结构</th>
<th style="text-align:center">索引</th>
<th style="text-align:center">查找</th>
<th style="text-align:center">插入</th>
<th style="text-align:center">删除</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">数组</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">栈</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">队列</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">单链表</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">双链表</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">哈希表</td>
<td style="text-align:center">N/A</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">二叉搜索树</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">笛卡尔树</td>
<td style="text-align:center">N/A</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">B树</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">红黑树</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">伸展树</td>
<td style="text-align:center">N/A</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">平衡二叉树</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">KD树</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
<td style="text-align:center">O(log n)</td>
</tr>
</tbody>
</table>
</details>
<details class="hint-container details"><summary>主定理</summary>
<table>
<thead>
<tr>
<th style="text-align:center">算法</th>
<th style="text-align:center">运算时间</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">二分搜寻算法</td>
<td style="text-align:center">O(log n)</td>
</tr>
<tr>
<td style="text-align:center">二叉树遍历</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">最佳排序矩阵搜索</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">合并排序</td>
<td style="text-align:center">O(n logn)</td>
</tr>
</tbody>
</table>
</details>
<details class="hint-container details"><summary>常见的排序算法时间复杂度</summary>
<table>
<thead>
<tr>
<th style="text-align:center">算法（数组）</th>
<th style="text-align:center">最佳</th>
<th style="text-align:center">平均</th>
<th style="text-align:center">最差</th>
<th style="text-align:center">空间复杂度（最差）</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">快速排序</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">归并排序</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">堆排序</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(n logn)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">冒泡排序</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">插入排序</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(1)</td>
</tr>
<tr>
<td style="text-align:center">选择排序</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(n^2)</td>
<td style="text-align:center">O(1)</td>
</tr>
</tbody>
</table>
</details>
<h3 id="数组和链表" tabindex="-1"><a class="header-anchor" href="#数组和链表"><span>数组和链表</span></a></h3>
<p><code v-pre>数组</code>:一个存储元素的线性集合(collection)，元素可以通过索引来任意存 取，索引通常是数字，用来计算元素之间存储位置的偏移量。查询比较快，插入和删除比较慢。<br>
<code v-pre>链表</code>:由一组节点组成的集合。适合频繁的插入和删除操作，在未知数据长度的情况下，每一条都插在最后一条。<br>
<code v-pre>单链表</code>:每个节点都使用一个对象的引用指向它的后继节点。<br>
<code v-pre>双链表</code>:相比于单链表，每个节点都使用一个对象的引用指向它的前驱节点。<br>
<strong>链表时间复杂度</strong></p>
<blockquote>
<p>寻找节点 O(n)
添加节点 O(1)
删除节点 O(1)</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// js实现链表</span></span>
<span class="line"><span class="token comment">// 描述：链表每一个节点有一个指针指向下一节点</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 创建步骤</span>
<span class="line">1.创建头节点，抽离创建节点方法 </span>
<span class="line">2.创建查询节点方法</span>
<span class="line">3.创建插入节点方法 </span>
<span class="line">4.创建移除节点方法</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createNode</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> elment<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 创建指向下一节点的指针变量</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 双向链表需要字段</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>previous <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LinkList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">createNode</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>findElement <span class="token operator">=</span> findElement<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>insert <span class="token operator">=</span> insert<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>remove <span class="token operator">=</span> remove<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>showList <span class="token operator">=</span> showList<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>findPre <span class="token operator">=</span> findPre<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">findElement</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>element <span class="token operator">!=</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">newElement<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">createNode</span><span class="token punctuation">(</span>newElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 找到被插入的节点</span></span>
<span class="line">    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 将新节点的next指针指向被插入节点next的指向</span></span>
<span class="line">    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 双向链表的前驱节点</span></span>
<span class="line">    newNode<span class="token punctuation">.</span>previous <span class="token operator">=</span> current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 将被插入节点的next指向新节点</span></span>
<span class="line">    current<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">findPre</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>currentNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>element <span class="token operator">!=</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 单链表删除</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 找到要删除节点的前一个节点</span></span>
<span class="line">    <span class="token keyword">let</span> preNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findPre</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>preNode<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 将前一个节点的指针移到删除节点指针指向的地方</span></span>
<span class="line">        preNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 双链表移除</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> currNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findElement</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>currNode<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        currNode<span class="token punctuation">.</span>previous<span class="token punctuation">.</span>next <span class="token operator">=</span> currNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        currNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>previous <span class="token operator">=</span> currNode<span class="token punctuation">.</span>previous<span class="token punctuation">;</span></span>
<span class="line">        currNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        currNode<span class="token punctuation">.</span>previous <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">showList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 练习题</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * leetcode 206 反转链表</span>
<span class="line"> * Input：1->2->3->4->5->null</span>
<span class="line"> * Output:5->4->3->-2->1->null</span>
<span class="line"> */</span></span>
<span class="line"><span class="token comment">// 解法一</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> preNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 暂存当前节点的指针指向</span></span>
<span class="line">        <span class="token keyword">let</span> next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 将当前节点的指针指向上一节点</span></span>
<span class="line">        currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> preNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 将预设置的节点设为当前节点</span></span>
<span class="line">        preNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 将当前节点设置为下一节点</span></span>
<span class="line">        currentNode <span class="token operator">=</span> next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> preNode<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解法二</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 始终保持每个节点的指向都指向翻转前的后一个节点的next指向</span></span>
<span class="line">    head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 防止循环指向</span></span>
<span class="line">    head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * leetcode 24 给定链表 反转相邻两节点</span>
<span class="line"> * Input：1->2->3->4->5</span>
<span class="line"> * Output:2->1->4->-3->5</span>
<span class="line"> * </span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val, next) {</span>
<span class="line"> *     this.val = (val===undefined ? 0 : val)</span>
<span class="line"> *     this.next = (next===undefined ? null : next)</span>
<span class="line"> * }</span>
<span class="line"> */</span></span>
<span class="line"><span class="token comment">// 递归调用</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> head<span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token keyword">let</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">// 第一个节点的next指向第三个节点</span></span>
<span class="line">   <span class="token comment">// 递归调用 </span></span>
<span class="line">   <span class="token comment">// 第三个节点的next指向第五个节点</span></span>
<span class="line">   head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">// 第二个节点的next指向第一个节点</span></span>
<span class="line">   next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">return</span> next<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 迭代法</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> head<span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token comment">// 新建链表</span></span>
<span class="line">   <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">// 建立头节点</span></span>
<span class="line">   result<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">let</span> pre <span class="token operator">=</span> result<span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">while</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token comment">// 第一个节点为头节点的next，第二个节点为头节点的next.next</span></span>
<span class="line">       <span class="token keyword">let</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>pre<span class="token punctuation">.</span>next<span class="token punctuation">,</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">       <span class="token comment">// 头节点的next指向原来的第二个节点</span></span>
<span class="line">       <span class="token comment">// 原来的第一个节点的next指向原来的第三个节点</span></span>
<span class="line">       <span class="token comment">// 原来的第二个节点的next指向原来的第一个节点</span></span>
<span class="line">       <span class="token punctuation">[</span>pre<span class="token punctuation">.</span>next<span class="token punctuation">,</span>first<span class="token punctuation">.</span>next<span class="token punctuation">,</span>second<span class="token punctuation">.</span>next<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>second<span class="token punctuation">,</span>second<span class="token punctuation">.</span>next<span class="token punctuation">,</span>first<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">       <span class="token comment">// 将头节点向后移动两位，挪过已经反转过的两个节点</span></span>
<span class="line">       pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">   <span class="token keyword">return</span> result<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * leetcode 141 给定一个链表，判断链表中是否有环。</span>
<span class="line"> *</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val) {</span>
<span class="line"> *     this.val = val;</span>
<span class="line"> *     this.next = null;</span>
<span class="line"> * }</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴力循环</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> began <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> node <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 时间超过0.5s 或1s 就证明是有环</span></span>
<span class="line">        <span class="token comment">// 设置1s会导致leetcode提交超时</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>end <span class="token operator">-</span> began <span class="token operator">></span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// set 判重</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> node <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>setArr<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 快慢指针</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> fast<span class="token punctuation">,</span> slow<span class="token punctuation">;</span></span>
<span class="line">    fast <span class="token operator">=</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> slow <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 快指针一次两步</span></span>
<span class="line">        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 慢指针一次一步</span></span>
<span class="line">        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="堆栈-stack-和队列-queue" tabindex="-1"><a class="header-anchor" href="#堆栈-stack-和队列-queue"><span>堆栈（Stack）和队列（Queue）</span></a></h3>
<p><code v-pre>堆栈</code>:先进后出（FILO），可由数组或者单链表组成
<code v-pre>队列</code>:先进先出（FIFO），可由数组和双链表组成</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// js数组实现堆栈/队列</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 入栈</span></span>
<span class="line">stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 出栈</span></span>
<span class="line">stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 入队</span></span>
<span class="line">stack<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 出队</span></span>
<span class="line">stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>enterQueue <span class="token operator">=</span> enterQueue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>outQueue <span class="token operator">=</span> outQueue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>startEle <span class="token operator">=</span> startEle<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>endEle <span class="token operator">=</span> endEle<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>toString <span class="token operator">=</span> toString<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>empty <span class="token operator">=</span> empty<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">enterQueue</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">outQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">startEle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">endEle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 练习题</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * leetcode 20 有效括号</span>
<span class="line"> * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效</span>
<span class="line"> * 有效字符串需满足：</span>
<span class="line"> * 左括号必须用相同类型的右括号闭合。</span>
<span class="line"> * 左括号必须以正确的顺序闭合。</span>
<span class="line"> * 注意空字符串可被认为是有效字符串。</span>
<span class="line"> */</span></span>
<span class="line"> <span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token comment">// 长度为奇数 直接返还</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>s <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"("</span><span class="token operator">:</span> <span class="token string">")"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"{"</span><span class="token operator">:</span> <span class="token string">"}"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"["</span><span class="token operator">:</span> <span class="token string">"]"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">!=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * leetcode 232 用栈实现队列</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">MyQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>outStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Push element x to the back of queue. </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Removes the element from in front of queue and returns that element.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Get the front element.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Returns whether the queue is empty.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>enterStack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outStack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"> <span class="token comment">/*</span>
<span class="line"> * leetcode 225 用队列实现栈</span>
<span class="line"> */</span></span>
<span class="line"> <span class="token keyword">var</span> <span class="token function-variable function">MyStack</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>quque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Push element x onto stack. </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>quque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Removes the element on top of the stack and returns that element.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>quque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Get the top element.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">top</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>quque<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>quque<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Returns whether the stack is empty.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>quque<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先队列-priorityqueue" tabindex="-1"><a class="header-anchor" href="#优先队列-priorityqueue"><span>优先队列(PriorityQueue)</span></a></h3>
<h3 id="双端队列" tabindex="-1"><a class="header-anchor" href="#双端队列"><span>双端队列</span></a></h3>
<h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆"><span>堆</span></a></h3>
<h4 id="大顶堆" tabindex="-1"><a class="header-anchor" href="#大顶堆"><span>大顶堆</span></a></h4>
<h4 id="小顶堆" tabindex="-1"><a class="header-anchor" href="#小顶堆"><span>小顶堆</span></a></h4>
</div></template>


