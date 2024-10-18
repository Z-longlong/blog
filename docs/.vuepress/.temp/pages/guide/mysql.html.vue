<template><div><h1 id="mysql学习" tabindex="-1"><a class="header-anchor" href="#mysql学习"><span>mysql学习</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#数据库概述">数据库概述</router-link><ul><li><router-link to="#什么是数据库">什么是数据库</router-link></li><li><router-link to="#数据库分类">数据库分类</router-link></li><li><router-link to="#相关概念">相关概念</router-link></li></ul></li><li><router-link to="#三大范式">三大范式</router-link><ul><li><router-link to="#第一范式-1nf">第一范式-1NF</router-link></li><li><router-link to="#第二范式-2nf">第二范式-2NF</router-link></li><li><router-link to="#第三范式-3nf">第三范式-3NF</router-link></li></ul></li><li><router-link to="#操作数据库">操作数据库</router-link><ul><li><router-link to="#操作数据库命令">操作数据库命令</router-link></li><li><router-link to="#数据库列的类型">数据库列的类型</router-link></li><li><router-link to="#数据库的字段属性">数据库的字段属性</router-link></li><li><router-link to="#创建数据库表">创建数据库表</router-link></li><li><router-link to="#数据库存储引擎">数据库存储引擎</router-link></li><li><router-link to="#修改数据库">修改数据库</router-link></li></ul></li><li><router-link to="#mysql数据管理">MYSQL数据管理</router-link><ul><li><router-link to="#外键">外键</router-link></li><li><router-link to="#dml语言">DML语言</router-link></li></ul></li><li><router-link to="#dql查询语言">DQL查询语言</router-link><ul><li><router-link to="#基础查询">基础查询</router-link></li><li><router-link to="#条件查询">条件查询</router-link></li><li><router-link to="#分组查询">分组查询</router-link></li><li><router-link to="#链接查询">链接查询</router-link></li><li><router-link to="#排序和分页">排序和分页</router-link></li><li><router-link to="#子查询">子查询</router-link></li><li><router-link to="#mysql函数">MySQL函数</router-link></li></ul></li><li><router-link to="#事务">事务</router-link><ul><li><router-link to="#事务原则-acid">事务原则 ACID</router-link></li><li><router-link to="#事务并发导致的问题">事务并发导致的问题</router-link></li><li><router-link to="#隔离级别">隔离级别</router-link></li><li><router-link to="#执行事务的过程">执行事务的过程</router-link></li></ul></li><li><router-link to="#索引">索引</router-link><ul><li><router-link to="#索引的分类">索引的分类</router-link></li><li><router-link to="#索引的使用">索引的使用</router-link></li><li><router-link to="#测试索引">测试索引</router-link></li><li><router-link to="#索引原则">索引原则</router-link></li></ul></li><li><router-link to="#explain关键字">explain关键字</router-link></li><li><router-link to="#权限管理和备份">权限管理和备份</router-link><ul><li><router-link to="#用户管理">用户管理</router-link></li><li><router-link to="#数据库备份">数据库备份</router-link></li></ul></li></ul></nav>
<h2 id="数据库概述" tabindex="-1"><a class="header-anchor" href="#数据库概述"><span>数据库概述</span></a></h2>
<h3 id="什么是数据库" tabindex="-1"><a class="header-anchor" href="#什么是数据库"><span>什么是数据库</span></a></h3>
<p><code v-pre>数据库DB(DataBase)</code>：保存有组织的数据的容器，数据仓库，软件，安装在操作系统上 作用是<strong>存储数据管理数据</strong></p>
<h3 id="数据库分类" tabindex="-1"><a class="header-anchor" href="#数据库分类"><span>数据库分类</span></a></h3>
<ul>
<li>关系型数据库 SQL (Structured Query Language)
<ul>
<li>MySQL、Oracle、Sql Server、DB2、SQLlite</li>
<li>通过表和表之间，行和列之间的关系进行数据的存储</li>
<li>通过外键关联来建立表与表之间的关系</li>
</ul>
</li>
<li>非关系型数据库 NoSQL(Not Only SQL)
<ul>
<li>Redis、MongoDB</li>
<li>指数据以对象的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定</li>
</ul>
</li>
</ul>
<h3 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念"><span>相关概念</span></a></h3>
<p><code v-pre>数据库管理系统(DBMS)</code>：数据库的管理软件 例：MySQL<br>
<code v-pre>SQL</code>： 结构化查询语言的缩写，用来访问和操作数据库系统，定义了<code v-pre>DDL</code>、<code v-pre>DML</code>和<code v-pre>DQL</code>集中操作数据库的能力。既可以查询数据库中的数据，也可以添加、更新和删除数据库中的数据，还可以对数据库进行管理和维护操作。不同的数据库，都支持SQL（此处说的支持是支撑标准SQL的核心功能，有些数据库有各自的扩展功能还是不支持的）。<br>
<code v-pre>DDL(Data Definition Language)</code>：允许用户定义数据，也就是创建表、删除表、修改表结构这些操作。通常，DDL由数据库管理员执行。<br>
<code v-pre>DML(Data Manipulation Language)</code>：为用户提供添加、删除、更新数据的能力，这些是应用程序对数据库的日常操作。<br>
<code v-pre>DQL(Data Query Language)</code>：允许用户查询数据，这也是通常最频繁的数据库日常操作。<br>
<code v-pre>表</code>：某种特定类型数据的结构化清单。<br>
<code v-pre>列</code>：表由列组成。列中存储着表中某部分的信息。<br>
<code v-pre>数据类型</code>： 所容许的数据的类型。每个表列都有相 应的数据类型，它限制(或容许)该列中存储的数据。<br>
<code v-pre>行</code>：表中的数据是按行存储的，所保存的每个记录存储在自己的行内。如果将表想象为网格，网格中垂直的列为表列，水平行为表行。<br>
<code v-pre>主键</code>：表中每一行都应该有可以唯一标识自己的一列(或一组列)。</p>
<ul>
<li>任意两行都不具有相同的主键值;</li>
<li>每个行都必须具有一个主键值(主键列不允许NULL值)。</li>
</ul>
<h2 id="三大范式" tabindex="-1"><a class="header-anchor" href="#三大范式"><span>三大范式</span></a></h2>
<p>三大范式是 Mysql 数据库设计表结构所遵循的规范和指导方法，目的是为了<code v-pre>减少冗余</code>，建立<code v-pre>结构合理</code>的数据库，从而提高数据存储和使用的性能。</p>
<p>三大范式之间是<code v-pre>具有依赖关系</code>的，比如第二范式是在第一范式的基础上建设的、第三范式是在第二范式的基础上建设的。</p>
<p>当然 Mysql 数据库的范式不止三大范式，除了三大范式，还有<code v-pre>巴斯-科德范式（BCNF</code>）、<code v-pre>第四范式(4NF</code>）、<code v-pre>第五范式（5NF，又称“完美范式&quot;）</code>。</p>
<h3 id="第一范式-1nf" tabindex="-1"><a class="header-anchor" href="#第一范式-1nf"><span>第一范式-1NF</span></a></h3>
<p>遵循原子性。<strong>即表中字段的数据不可再拆分</strong></p>
<details class="hint-container details"><summary>不符合第一范式的示例</summary>
<table>
<thead>
<tr>
<th style="text-align:center">员工编码</th>
<th style="text-align:center">姓名</th>
<th style="text-align:center">年龄</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">技术部小王</td>
<td style="text-align:center">18</td>
</tr>
<tr>
<td style="text-align:center">002</td>
<td style="text-align:center">销售部小李</td>
<td style="text-align:center">18</td>
</tr>
<tr>
<td style="text-align:center">003</td>
<td style="text-align:center">行政部小张</td>
<td style="text-align:center">18</td>
</tr>
</tbody>
</table>
</details>
<details class="hint-container details"><summary>符合第一范式的示例</summary>
<table>
<thead>
<tr>
<th style="text-align:center">员工编码</th>
<th style="text-align:center">姓名</th>
<th style="text-align:center">年龄</th>
<th style="text-align:center">部门</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">小王</td>
<td style="text-align:center">18</td>
<td style="text-align:center">技术部</td>
</tr>
<tr>
<td style="text-align:center">002</td>
<td style="text-align:center">小李</td>
<td style="text-align:center">18</td>
<td style="text-align:center">销售部</td>
</tr>
<tr>
<td style="text-align:center">003</td>
<td style="text-align:center">小张</td>
<td style="text-align:center">18</td>
<td style="text-align:center">行政部</td>
</tr>
</tbody>
</table>
</details>
<h3 id="第二范式-2nf" tabindex="-1"><a class="header-anchor" href="#第二范式-2nf"><span>第二范式-2NF</span></a></h3>
<p>在满足第一范式的情况下，遵循唯一性，消除部分依赖。<strong>即表中任意一个主键或任意一组联合主键，可以确定除该主键外的所有的非主键值</strong>。</p>
<p>再通俗点讲就是，<strong>一个表只能描述一件事情</strong>。</p>
<details class="hint-container details"><summary>案例</summary>
<table>
<thead>
<tr>
<th style="text-align:center">学号</th>
<th style="text-align:center">姓名</th>
<th style="text-align:center">年龄</th>
<th style="text-align:center">课程名称</th>
<th style="text-align:center">成绩</th>
<th style="text-align:center">学分</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">技术部小王</td>
<td style="text-align:center">18</td>
<td style="text-align:center">语文</td>
<td style="text-align:center">90</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">002</td>
<td style="text-align:center">销售部小李</td>
<td style="text-align:center">18</td>
<td style="text-align:center">数学</td>
<td style="text-align:center">90</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">003</td>
<td style="text-align:center">行政部小张</td>
<td style="text-align:center">18</td>
<td style="text-align:center">语文</td>
<td style="text-align:center">90</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<p>分析一下表结构。</p>
<ol>
<li>
<p>假设学号是表中的唯一主键，那由学号就可以确定姓名和年龄了，但是却不能确定课程名称和成绩。</p>
</li>
<li>
<p>假设课程名称是表中的唯一主键，那由课程名称就可以确定学分了，但是却不能确定姓名、年龄和成绩。</p>
</li>
<li>
<p>虽然通过学号和课程名称的联合主键，可以确定除联合主键外的所有的非主键值，但是基于上述两个假设，也不符合第二范式的要求。</p>
</li>
</ol>
<p><strong>基于上述三种主键的可能，拆分成 3 张表，保证一张表只描述一件事情。</strong></p>
<p>学生表 - 学号做主键</p>
<table>
<thead>
<tr>
<th style="text-align:center">学号</th>
<th style="text-align:center">姓名</th>
<th style="text-align:center">年龄</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">技术部小王</td>
<td style="text-align:center">18</td>
</tr>
<tr>
<td style="text-align:center">002</td>
<td style="text-align:center">销售部小李</td>
<td style="text-align:center">18</td>
</tr>
<tr>
<td style="text-align:center">003</td>
<td style="text-align:center">行政部小张</td>
<td style="text-align:center">18</td>
</tr>
</tbody>
</table>
<p>课程表 - 课程名做主键</p>
<table>
<thead>
<tr>
<th style="text-align:center">课程名称</th>
<th style="text-align:center">成绩</th>
<th style="text-align:center">学分</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语文</td>
<td style="text-align:center">90</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">数学</td>
<td style="text-align:center">90</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">语文</td>
<td style="text-align:center">90</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<p>成绩表 - 学号和课程名称做联合主键</p>
<table>
<thead>
<tr>
<th style="text-align:center">学号</th>
<th style="text-align:center">课程名称</th>
<th style="text-align:center">成绩</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">语文</td>
<td style="text-align:center">90</td>
</tr>
<tr>
<td style="text-align:center">002</td>
<td style="text-align:center">数学</td>
<td style="text-align:center">90</td>
</tr>
<tr>
<td style="text-align:center">003</td>
<td style="text-align:center">语文</td>
<td style="text-align:center">90</td>
</tr>
</tbody>
</table>
</details>
<div class="hint-container warning">
<p class="hint-container-title">不遵循第二范式的后果</p>
<ul>
<li>整表数据冗余</li>
<li>更新数据不便</li>
<li>插入数据不方便或产生异常</li>
</ul>
</div>
<h3 id="第三范式-3nf" tabindex="-1"><a class="header-anchor" href="#第三范式-3nf"><span>第三范式-3NF</span></a></h3>
<p>在满足第二范式的情况下，消除传递依赖。<strong>即，在任一主键都可以确定所有非主键字段值的情况下，不能存在某非主键字段 A 可以获取 某非主键字段 B。</strong></p>
<details class="hint-container details"><summary>不符合第三范式的示例</summary>
<table>
<thead>
<tr>
<th style="text-align:center">学号</th>
<th style="text-align:center">姓名</th>
<th style="text-align:center">班主任</th>
<th style="text-align:center">班级</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">小王</td>
<td style="text-align:center">高老师</td>
<td style="text-align:center">一年级（1）班</td>
</tr>
</tbody>
</table>
<p>这个表中，学号是主键，它可以唯一确定姓名、班级、班主任，符合了第二范式，但是在非主键字段中，我们也可以通过班级推导出该班级的班主任，所以它是不符合第三范式的。</p>
</details>
<details class="hint-container details"><summary>符合第三范式的示例</summary>
<p>学生表</p>
<table>
<thead>
<tr>
<th style="text-align:center">学号</th>
<th style="text-align:center">姓名</th>
<th style="text-align:center">班级</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">001</td>
<td style="text-align:center">小王</td>
<td style="text-align:center">一年级（1）班</td>
</tr>
</tbody>
</table>
<p>班级表</p>
<table>
<thead>
<tr>
<th style="text-align:center">班主任</th>
<th style="text-align:center">班级</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">高老师</td>
<td style="text-align:center">一年级（1）班</td>
</tr>
</tbody>
</table>
<p>通过把班级与班主任的映射关系另外做成一张映射表，我们就成功地消除了表中的传递依赖了。</p>
</details>
<h2 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库"><span>操作数据库</span></a></h2>
<h3 id="操作数据库命令" tabindex="-1"><a class="header-anchor" href="#操作数据库命令"><span>操作数据库命令</span></a></h3>
<p>创建数据库</p>
<div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre v-pre><code><span class="line">CREATE DATABASE [IF NOT EXISTS] 数据库名;</span>
<span class="line">-- IF NOT EXISTS：</span>
<span class="line">-- 在创建数据库之前进行判断，只有该数据库目前尚不存在时才能执行操作。此选项可以用来避免数据库已经存在而重复创建的错误。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除数据库</p>
<div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre v-pre><code><span class="line">DROP DATABASE [if EXISTS] 数据库名;</span>
<span class="line">-- IF EXISTS：用于防止当数据库不存在时发生错误。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用数据库</p>
<div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre v-pre><code><span class="line">--如果表名或者字段名是特殊字符，则需要带``</span>
<span class="line">use 数据库名;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看数据库</p>
<div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre v-pre><code><span class="line">SHOW DATABASES;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>修改数据库</p>
<div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre v-pre><code><span class="line">ALTER DATABASE [数据库名]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="数据库列的类型" tabindex="-1"><a class="header-anchor" href="#数据库列的类型"><span>数据库列的类型</span></a></h3>
<h4 id="数值" tabindex="-1"><a class="header-anchor" href="#数值"><span>数值</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:center">数据类型</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">大小</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tinyint</td>
<td style="text-align:center">十分小的数据</td>
<td style="text-align:center">1个字节</td>
</tr>
<tr>
<td style="text-align:center">smallint</td>
<td style="text-align:center">较小的数据</td>
<td style="text-align:center">2个字节</td>
</tr>
<tr>
<td style="text-align:center">mediumint</td>
<td style="text-align:center">中等大小的数据</td>
<td style="text-align:center">3个字节</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center">标准的整数</td>
<td style="text-align:center">4个字节</td>
</tr>
<tr>
<td style="text-align:center">bigint</td>
<td style="text-align:center">较大的数据</td>
<td style="text-align:center">8个字节</td>
</tr>
<tr>
<td style="text-align:center">float</td>
<td style="text-align:center">浮点数</td>
<td style="text-align:center">4个字</td>
</tr>
<tr>
<td style="text-align:center">double</td>
<td style="text-align:center">浮点数</td>
<td style="text-align:center">8个字节</td>
</tr>
<tr>
<td style="text-align:center">decimal</td>
<td style="text-align:center">字符串形式的浮点数，一般用于金融计算</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h4>
<h4 id="时间日期" tabindex="-1"><a class="header-anchor" href="#时间日期"><span>时间日期</span></a></h4>
<h4 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>null</span></a></h4>
<h3 id="数据库的字段属性" tabindex="-1"><a class="header-anchor" href="#数据库的字段属性"><span>数据库的字段属性</span></a></h3>
<h3 id="创建数据库表" tabindex="-1"><a class="header-anchor" href="#创建数据库表"><span>创建数据库表</span></a></h3>
<h3 id="数据库存储引擎" tabindex="-1"><a class="header-anchor" href="#数据库存储引擎"><span>数据库存储引擎</span></a></h3>
<h3 id="修改数据库" tabindex="-1"><a class="header-anchor" href="#修改数据库"><span>修改数据库</span></a></h3>
<h2 id="mysql数据管理" tabindex="-1"><a class="header-anchor" href="#mysql数据管理"><span>MYSQL数据管理</span></a></h2>
<h3 id="外键" tabindex="-1"><a class="header-anchor" href="#外键"><span>外键</span></a></h3>
<h3 id="dml语言" tabindex="-1"><a class="header-anchor" href="#dml语言"><span>DML语言</span></a></h3>
<h4 id="添加-insert" tabindex="-1"><a class="header-anchor" href="#添加-insert"><span>添加 insert</span></a></h4>
<h4 id="修改-update" tabindex="-1"><a class="header-anchor" href="#修改-update"><span>修改 update</span></a></h4>
<h4 id="删除-delete" tabindex="-1"><a class="header-anchor" href="#删除-delete"><span>删除 delete</span></a></h4>
<h2 id="dql查询语言" tabindex="-1"><a class="header-anchor" href="#dql查询语言"><span>DQL查询语言</span></a></h2>
<h3 id="基础查询" tabindex="-1"><a class="header-anchor" href="#基础查询"><span>基础查询</span></a></h3>
<h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询"><span>条件查询</span></a></h3>
<h3 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询"><span>分组查询</span></a></h3>
<h3 id="链接查询" tabindex="-1"><a class="header-anchor" href="#链接查询"><span>链接查询</span></a></h3>
<h3 id="排序和分页" tabindex="-1"><a class="header-anchor" href="#排序和分页"><span>排序和分页</span></a></h3>
<h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h3>
<h3 id="mysql函数" tabindex="-1"><a class="header-anchor" href="#mysql函数"><span>MySQL函数</span></a></h3>
<h4 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数"><span>常用函数</span></a></h4>
<h4 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h4>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2>
<h3 id="事务原则-acid" tabindex="-1"><a class="header-anchor" href="#事务原则-acid"><span>事务原则 ACID</span></a></h3>
<h3 id="事务并发导致的问题" tabindex="-1"><a class="header-anchor" href="#事务并发导致的问题"><span>事务并发导致的问题</span></a></h3>
<h3 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别"><span>隔离级别</span></a></h3>
<h3 id="执行事务的过程" tabindex="-1"><a class="header-anchor" href="#执行事务的过程"><span>执行事务的过程</span></a></h3>
<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2>
<h3 id="索引的分类" tabindex="-1"><a class="header-anchor" href="#索引的分类"><span>索引的分类</span></a></h3>
<h4 id="主键索引-primary-key" tabindex="-1"><a class="header-anchor" href="#主键索引-primary-key"><span>主键索引(PRIMARY KEY)</span></a></h4>
<h4 id="普通索引-key-index" tabindex="-1"><a class="header-anchor" href="#普通索引-key-index"><span>普通索引(KEY/INDEX)</span></a></h4>
<h4 id="唯一索引-unique-key" tabindex="-1"><a class="header-anchor" href="#唯一索引-unique-key"><span>唯一索引(UNIQUE KEY)</span></a></h4>
<h4 id="全文索引-fulltext" tabindex="-1"><a class="header-anchor" href="#全文索引-fulltext"><span>全文索引(FULLTEXT)</span></a></h4>
<h3 id="索引的使用" tabindex="-1"><a class="header-anchor" href="#索引的使用"><span>索引的使用</span></a></h3>
<h4 id="索引的创建" tabindex="-1"><a class="header-anchor" href="#索引的创建"><span>索引的创建</span></a></h4>
<h4 id="索引的删除" tabindex="-1"><a class="header-anchor" href="#索引的删除"><span>索引的删除</span></a></h4>
<h4 id="显示索引信息" tabindex="-1"><a class="header-anchor" href="#显示索引信息"><span>显示索引信息</span></a></h4>
<h4 id="explain分析sql执行情况" tabindex="-1"><a class="header-anchor" href="#explain分析sql执行情况"><span>explain分析sql执行情况</span></a></h4>
<h3 id="测试索引" tabindex="-1"><a class="header-anchor" href="#测试索引"><span>测试索引</span></a></h3>
<h3 id="索引原则" tabindex="-1"><a class="header-anchor" href="#索引原则"><span>索引原则</span></a></h3>
<h2 id="explain关键字" tabindex="-1"><a class="header-anchor" href="#explain关键字"><span>explain关键字</span></a></h2>
<h2 id="权限管理和备份" tabindex="-1"><a class="header-anchor" href="#权限管理和备份"><span>权限管理和备份</span></a></h2>
<h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h3>
<h3 id="数据库备份" tabindex="-1"><a class="header-anchor" href="#数据库备份"><span>数据库备份</span></a></h3>
</div></template>


