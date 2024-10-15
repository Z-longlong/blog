<template><div><h1 id="mysql学习" tabindex="-1"><a class="header-anchor" href="#mysql学习"><span>mysql学习</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#数据库概述">数据库概述</router-link><ul><li><router-link to="#什么是数据库">什么是数据库</router-link></li><li><router-link to="#数据库分类">数据库分类</router-link></li><li><router-link to="#相关概念">相关概念</router-link></li></ul></li><li><router-link to="#三大范式">三大范式</router-link><ul><li><router-link to="#第一范式-1nf">第一范式-1NF</router-link></li></ul></li><li><router-link to="#操作数据库">操作数据库</router-link><ul><li><router-link to="#操作数据库命令">操作数据库命令</router-link></li><li><router-link to="#数据库列的类型">数据库列的类型</router-link></li><li><router-link to="#数据库的字段属性">数据库的字段属性</router-link></li><li><router-link to="#创建数据库表">创建数据库表</router-link></li><li><router-link to="#数据库存储引擎">数据库存储引擎</router-link></li><li><router-link to="#修改数据库">修改数据库</router-link></li></ul></li><li><router-link to="#mysql数据管理">MYSQL数据管理</router-link><ul><li><router-link to="#外键">外键</router-link></li><li><router-link to="#dml语言">DML语言</router-link></li></ul></li><li><router-link to="#dql查询语言">DQL查询语言</router-link><ul><li><router-link to="#基础查询">基础查询</router-link></li><li><router-link to="#条件查询">条件查询</router-link></li><li><router-link to="#分组查询">分组查询</router-link></li><li><router-link to="#链接查询">链接查询</router-link></li><li><router-link to="#排序和分页">排序和分页</router-link></li><li><router-link to="#子查询">子查询</router-link></li><li><router-link to="#mysql函数">MySQL函数</router-link></li></ul></li><li><router-link to="#事务">事务</router-link><ul><li><router-link to="#事务原则-acid">事务原则 ACID</router-link></li><li><router-link to="#事务并发导致的问题">事务并发导致的问题</router-link></li><li><router-link to="#隔离级别">隔离级别</router-link></li><li><router-link to="#执行事务的过程">执行事务的过程</router-link></li></ul></li><li><router-link to="#索引">索引</router-link><ul><li><router-link to="#索引的分类">索引的分类</router-link></li><li><router-link to="#索引的使用">索引的使用</router-link></li><li><router-link to="#测试索引">测试索引</router-link></li><li><router-link to="#索引原则">索引原则</router-link></li></ul></li><li><router-link to="#explain关键字">explain关键字</router-link></li><li><router-link to="#权限管理和备份">权限管理和备份</router-link><ul><li><router-link to="#用户管理">用户管理</router-link></li><li><router-link to="#数据库备份">数据库备份</router-link></li></ul></li></ul></nav>
<h2 id="数据库概述" tabindex="-1"><a class="header-anchor" href="#数据库概述"><span>数据库概述</span></a></h2>
<h3 id="什么是数据库" tabindex="-1"><a class="header-anchor" href="#什么是数据库"><span>什么是数据库</span></a></h3>
<p><code v-pre>数据库DB(DataBase)</code>：数据仓库，软件，安装在操作系统上 作用是<strong>存储数据管理数据</strong></p>
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
<code v-pre>DQL(Data Query Language)</code>：允许用户查询数据，这也是通常最频繁的数据库日常操作。</p>
<h2 id="三大范式" tabindex="-1"><a class="header-anchor" href="#三大范式"><span>三大范式</span></a></h2>
<p>三大范式是 Mysql 数据库设计表结构所遵循的规范和指导方法，目的是为了<code v-pre>减少冗余</code>，建立<code v-pre>结构合理</code>的数据库，从而提高数据存储和使用的性能。</p>
<p>三大范式之间是<code v-pre>具有依赖关系</code>的，比如第二范式是在第一范式的基础上建设的、第三范式是在第二范式的基础上建设的。</p>
<p>当然 Mysql 数据库的范式不止三大范式，除了三大范式，还有<code v-pre>巴斯-科德范式（BCNF</code>）、<code v-pre>第四范式(4NF</code>）、<code v-pre>第五范式（5NF，又称“完美范式&quot;）</code>。</p>
<h3 id="第一范式-1nf" tabindex="-1"><a class="header-anchor" href="#第一范式-1nf"><span>第一范式-1NF</span></a></h3>
<p><strong>遵循原子性。即表中字段的数据不可再拆分</strong></p>
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
<h2 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库"><span>操作数据库</span></a></h2>
<h3 id="操作数据库命令" tabindex="-1"><a class="header-anchor" href="#操作数据库命令"><span>操作数据库命令</span></a></h3>
<h3 id="数据库列的类型" tabindex="-1"><a class="header-anchor" href="#数据库列的类型"><span>数据库列的类型</span></a></h3>
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


