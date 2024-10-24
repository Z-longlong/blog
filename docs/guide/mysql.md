# mysql学习  

[[toc]]

## 数据库概述  

### 什么是数据库

`数据库DB(DataBase)`：保存有组织的数据的容器，数据仓库，软件，安装在操作系统上 作用是**存储数据管理数据**

### 数据库分类

- 关系型数据库 SQL (Structured Query Language)
  - MySQL、Oracle、Sql Server、DB2、SQLlite
  - 通过表和表之间，行和列之间的关系进行数据的存储
  - 通过外键关联来建立表与表之间的关系
- 非关系型数据库 NoSQL(Not Only SQL)
  - Redis、MongoDB
  - 指数据以对象的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定

### 相关概念

`数据库管理系统(DBMS)`：数据库的管理软件 例：MySQL  
`SQL`： 结构化查询语言的缩写，用来访问和操作数据库系统，定义了`DDL`、`DML`和`DQL`集中操作数据库的能力。既可以查询数据库中的数据，也可以添加、更新和删除数据库中的数据，还可以对数据库进行管理和维护操作。不同的数据库，都支持SQL（此处说的支持是支撑标准SQL的核心功能，有些数据库有各自的扩展功能还是不支持的）。  
`DDL(Data Definition Language)`：允许用户定义数据，也就是创建表、删除表、修改表结构这些操作。通常，DDL由数据库管理员执行。  
`DML(Data Manipulation Language)`：为用户提供添加、删除、更新数据的能力，这些是应用程序对数据库的日常操作。  
`DQL(Data Query Language)`：允许用户查询数据，这也是通常最频繁的数据库日常操作。  
`表`：某种特定类型数据的结构化清单。  
`列`：表由列组成。列中存储着表中某部分的信息。  
`数据类型`： 所容许的数据的类型。每个表列都有相 应的数据类型，它限制(或容许)该列中存储的数据。  
`行`：表中的数据是按行存储的，所保存的每个记录存储在自己的行内。如果将表想象为网格，网格中垂直的列为表列，水平行为表行。  
`主键`：表中每一行都应该有可以唯一标识自己的一列(或一组列)。  

- 任意两行都不具有相同的主键值;
- 每个行都必须具有一个主键值(主键列不允许NULL值)。

## 三大范式

三大范式是 Mysql 数据库设计表结构所遵循的规范和指导方法，目的是为了`减少冗余`，建立`结构合理`的数据库，从而提高数据存储和使用的性能。  

三大范式之间是`具有依赖关系`的，比如第二范式是在第一范式的基础上建设的、第三范式是在第二范式的基础上建设的。  

当然 Mysql 数据库的范式不止三大范式，除了三大范式，还有`巴斯-科德范式（BCNF`）、`第四范式(4NF`）、`第五范式（5NF，又称“完美范式"）`。  

### 第一范式-1NF

遵循原子性。**即表中字段的数据不可再拆分**  

::: details 不符合第一范式的示例

|   员工编码   |   姓名    |   年龄    |
| :----------: | :-------: | :-------: |
|   001   | 技术部小王 | 18 |
|   002   | 销售部小李| 18 |
|   003   | 行政部小张 | 18 |

:::

::: details 符合第一范式的示例

|   员工编码   |   姓名    |   年龄    |   部门    |
| :----------: | :-------: | :-------: | :-------: |
|   001   | 小王 | 18 | 技术部 |
|   002   | 小李| 18 | 销售部 |
|   003   | 小张 | 18 | 行政部 |

:::

### 第二范式-2NF

在满足第一范式的情况下，遵循唯一性，消除部分依赖。**即表中任意一个主键或任意一组联合主键，可以确定除该主键外的所有的非主键值**。  

再通俗点讲就是，**一个表只能描述一件事情**。  

::: details 案例

|   学号   |   姓名    |   年龄    |   课程名称   |   成绩    |   学分    |  
| :---: | :---: | :---: | :---: | :---: | :---: |
|   001   | 技术部小王 | 18 | 语文  | 90 | 3 |
|   002   | 销售部小李 | 18 | 数学  | 90 | 2 |
|   003   | 行政部小张 | 18 | 语文  | 90 | 3 |

分析一下表结构。  

1. 假设学号是表中的唯一主键，那由学号就可以确定姓名和年龄了，但是却不能确定课程名称和成绩。

2. 假设课程名称是表中的唯一主键，那由课程名称就可以确定学分了，但是却不能确定姓名、年龄和成绩。

3. 虽然通过学号和课程名称的联合主键，可以确定除联合主键外的所有的非主键值，但是基于上述两个假设，也不符合第二范式的要求。

**基于上述三种主键的可能，拆分成 3 张表，保证一张表只描述一件事情。**  

学生表 - 学号做主键  

|   学号   |   姓名    |   年龄    |
| :---: | :---: | :---: |
|   001   | 技术部小王 | 18 |
|   002   | 销售部小李 | 18 |
|   003   | 行政部小张 | 18 |

课程表 - 课程名做主键  

|   课程名称   |   成绩    |   学分    |  
| :---: | :---: | :---: |
| 语文  | 90 | 3 |
| 数学  | 90 | 2 |
| 语文  | 90 | 3 |

成绩表 - 学号和课程名称做联合主键

|   学号   |   课程名称   |   成绩    |
| :---: | :---: | :---: |
|   001   | 语文  | 90 |
|   002   | 数学  | 90 |
|   003   | 语文  | 90 |

:::
::: warning 不遵循第二范式的后果

- 整表数据冗余
- 更新数据不便
- 插入数据不方便或产生异常

:::

### 第三范式-3NF

在满足第二范式的情况下，消除传递依赖。**即，在任一主键都可以确定所有非主键字段值的情况下，不能存在某非主键字段 A 可以获取 某非主键字段 B。**  

::: details 不符合第三范式的示例

|   学号   |   姓名    |   班主任    | 班级 |
| :----------: | :-------: | :-------: | :-------: |
|   001   | 小王 | 高老师 | 一年级（1）班 |

这个表中，学号是主键，它可以唯一确定姓名、班级、班主任，符合了第二范式，但是在非主键字段中，我们也可以通过班级推导出该班级的班主任，所以它是不符合第三范式的。

:::

::: details 符合第三范式的示例
学生表

|   学号   |   姓名    | 班级 |
| :----------: | :-------: | :-------: |
|   001   | 小王 | 一年级（1）班 |

班级表

|   班主任    | 班级 |
| :-------: | :-------: |
| 高老师 | 一年级（1）班 |

通过把班级与班主任的映射关系另外做成一张映射表，我们就成功地消除了表中的传递依赖了。
:::

## 操作数据库

### 操作数据库命令

创建数据库

```SQL
CREATE DATABASE [IF NOT EXISTS] 数据库名;
-- IF NOT EXISTS：
-- 在创建数据库之前进行判断，只有该数据库目前尚不存在时才能执行操作。此选项可以用来避免数据库已经存在而重复创建的错误。
```

删除数据库

```SQL
DROP DATABASE [if EXISTS] 数据库名;
-- IF EXISTS：用于防止当数据库不存在时发生错误。
```

使用数据库

```SQL
--如果表名或者字段名是特殊字符，则需要带``
use 数据库名;
```

查看数据库

```SQL
SHOW DATABASES;
```

修改数据库

```SQL
ALTER DATABASE [数据库名]
```

### 数据库列的类型

#### 数值

| 数据类型 |  描述 | 大小 |
| :---: | :---: | :---: |
| tinyint | 十分小的数据 | 1个字节 |
| smallint | 较小的数据 | 2个字节 |
| mediumint | 中等大小的数据 | 3个字节 |
| int | 标准的整数 | 4个字节 |
| bigint | 较大的数据 | 8个字节 |
| float | 浮点数 | 4个字 |
| double | 浮点数 | 8个字节 |
| decimal | 字符串形式的浮点数，一般用于金融计算 |

#### 字符串

| 数据类型 |  描述 | 大小 |
| :---: | :---: | :---: |
| char | 字符串固定大小 | 0-255 |
| varchar | 可变字符串 | 0-65535 |
| tinytext | 微型文本 | 2^8-1 |
| text | 文本串 | 2^16-1 |

#### 时间日期

| 数据类型 |  描述 | 大小 |
| :---: | :---: | :---: |
| date | 日期格式 | YYYY-MM-DD |
| time | 时间格式 | HH:mm:ss |
| datetime | 最常用的时间格式 | YYYY-MM-DD HH:mm:ss |
| timestamp | 时间戳，1970.1.1到现在的毫秒数 | |
| year | 年份表示 | |

#### null

- 没有值
- 不要使用NULL值进行计算

### 数据库的字段属性

#### UnSigned

- 无符号的
- 声明了该列不能为负数

#### Zero Fill

- 0填充的
- 不足位数的用0来填充

#### Auto_InCrement

- 通常认为自增，自动在上一条的基础上+1
- 通常用来设计唯一的主键，必须是整数型
- 可定义起始值和步长

#### NULL 与 NOT NULL

- 默认值为 NULL，没有插入该列的数值
- 设置为NOT NULL 则意味该列必须有值

#### DEFAULT

- 默认值
- 例：性别字段,默认为"男" , 否则为 “女” ; 若无指定该列的值 , 则默认值为"男"的值

## MYSQL数据管理

### 外键

如果公共关键字在一个关系中是主关键字，那么这个公共关键字被称为另一个关系的外键。由此可见，外键`表示了两个关系之间的相关联系`。以另一个关系的外键作主关键字的表被称为`主表`，具有此外键的表被称为主表的`从表`。  

在实际操作中，将一个表的值放入第二个表来表示关联，所使用的值是第一个表的主键值(在必要时可包括复合主键值)。此时，第二个表中保存这些值的属性称为外键(foreign key)。  

`外键作用`：保持数据一致性，完整性，主要目的是控制存储在外键表中的数据,约束。使两张表形成关联，外键只能引用外表中的列的值或使用空值。  

```SQL
-- 目标：学生表（student）的gradeid字段 要去引用年级表（grade）的 gradeid字段

/*
1. 定义外键key
2. 给外键添加约束（执行引用）references 引用
*/
-- IF NOT EXISTS 防止表重复
-- COMMENT 注释
-- KEY 索引约束，对表中字段进行约束索引的，都是通过primary foreign unique等创建的。常见有foreign key，外键关联用的。
-- CONSTRAINT 增加数据约束  常见约束有 
--    PRIMARY KEY 约束唯一标识数据库表中的每条记录。 必须包含唯一的值，且不能包含 NULL 值。 每个表只能有一个 PRIMARY KEY，该主键可以由单个列或多个列组成。
--    FOREIGN KEY 一个或多个字段的组合，它引用另一个表的主键。外键约束用于确保引用的数据存在，并维护数据之间的引用完整性。
--    UNIQUE 这个约束确保表中的一个字段（或字段组合）的值在整个表中都是唯一的。
--    CHECK 这个约束确保列中的值满足指定的条件。例如，你可以使用CHECK约束确保某个字段的值大于0。
--    NOT NULL 这个约束确保列中的值不能为NULL
--    DEFAULT 这不是真正的约束，但它允许你为列设置默认值。如果在插入数据时没有为该列提供值，系统将使用这个默认值。
CREATE TABLE IF NOT EXISTS `student`(
  `id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',
  `name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
  `pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
  `sex` VARCHAR(2) NOT NULL DEFAULT '女' COMMENT '性别',
  `birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
  `address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
  `email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
  `gradeid` INT(10) NOT NULL COMMENT '学生的年级',
  PRIMARY KEY (`id`),
  KEY `FK_gradeid` (`gradeid`),
  CONSTRAINT `FK_gradeid` FOREIGN KEY (`gradeid`) REFERENCES `grade`(`gradeid`)
)ENGINE=INNODB DEFAULT CHARSET=utf8

-- 创建年级表
CREATE TABLE `grade`(
`gradeid` INT(10) NOT NULL COMMENT '年级id',
`gradename` VARCHAR(50) NOT NULL COMMENT '年纪名称',
PRIMARY KEY (`gradeid`)
)ENGINE=INNODB DEFAULT CHARSET=utf8

```

### DML语言

#### 添加 insert

#### 修改 update  

#### 删除 delete

## DQL查询语言

### 基础查询

### 条件查询

### 分组查询


### 链接查询

### 排序和分页

### 子查询

### MySQL函数

#### 常用函数

#### 聚合函数

## 事务

### 事务原则 ACID

### 事务并发导致的问题

### 隔离级别

### 执行事务的过程

## 索引

### 索引的分类

#### 主键索引(PRIMARY KEY)

#### 普通索引(KEY/INDEX)

#### 唯一索引(UNIQUE KEY)

#### 全文索引(FULLTEXT)

### 索引的使用

#### 索引的创建

#### 索引的删除


#### 显示索引信息

#### explain分析sql执行情况

### 测试索引

### 索引原则

## explain关键字

## 权限管理和备份

### 用户管理

### 数据库备份