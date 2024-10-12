<template><div><h1 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#浏览器发展">浏览器发展</router-link><ul><li><router-link to="#目前的chrome架构">目前的Chrome架构</router-link></li><li><router-link to="#未来的chrome架构-面向服务的架构">未来的Chrome架构（面向服务的架构）</router-link></li></ul></li><li><router-link to="#tcp-协议-如何保证页面文件能被完整送达浏览器">TCP 协议：如何保证页面文件能被完整送达浏览器？</router-link><ul><li><router-link to="#基于-ip-的传输">基于 IP 的传输</router-link></li><li><router-link to="#基于-ip-udp-的传输">基于 IP +  UDP 的传输</router-link></li><li><router-link to="#基于-tcp-ip-的传输">基于 TCP + IP 的传输</router-link></li></ul></li><li><router-link to="#http请求过程">HTTP请求过程</router-link><ul><li><router-link to="#构建请求">构建请求</router-link></li><li><router-link to="#查找缓存">查找缓存</router-link></li><li><router-link to="#准备-ip-地址和端口">准备 IP 地址和端口</router-link></li><li><router-link to="#等待-tcp-队列">等待 TCP 队列</router-link></li><li><router-link to="#建立-tcp-链接">建立 TCP 链接</router-link></li><li><router-link to="#发送-http-请求">发送 HTTP 请求</router-link></li><li><router-link to="#总结">总结</router-link></li></ul></li><li><router-link to="#导航流程-从输入url到页面展示-这中间发生了什么">导航流程：从输入URL到页面展示，这中间发生了什么？</router-link><ul><li><router-link to="#宏观展现流程">宏观展现流程</router-link></li><li><router-link to="#微观流程">微观流程</router-link></li></ul></li><li><router-link to="#浏览器渲染流程">浏览器渲染流程</router-link><ul><li><router-link to="#构建-dom-树">构建 DOM 树</router-link></li><li><router-link to="#样式计算">样式计算</router-link></li><li><router-link to="#分层">分层</router-link></li><li><router-link to="#图层绘制">图层绘制</router-link></li><li><router-link to="#栅格化操作">栅格化操作</router-link></li><li><router-link to="#合成">合成</router-link></li><li><router-link to="#浏览器渲染总结">浏览器渲染总结</router-link></li></ul></li><li><router-link to="#浏览器执行javascript代码">浏览器执行javaScript代码</router-link><ul><li><router-link to="#变量提升">变量提升</router-link></li><li><router-link to="#代码执行">代码执行</router-link></li><li><router-link to="#调用栈">调用栈</router-link></li><li><router-link to="#作用域-scope">作用域（scope）</router-link></li><li><router-link to="#作用域链和闭包">作用域链和闭包</router-link></li><li><router-link to="#this">this</router-link></li></ul></li><li><router-link to="#v8工作原理">V8工作原理</router-link><ul><li><router-link to="#javascript数据存储">JavaScript数据存储</router-link></li><li><router-link to="#再看闭包变量">再看闭包变量</router-link></li><li><router-link to="#垃圾回收">垃圾回收</router-link></li><li><router-link to="#编译器和解释器">编译器和解释器</router-link></li></ul></li><li><router-link to="#浏览器事件循环">浏览器事件循环</router-link><ul><li><router-link to="#宏任务">宏任务</router-link></li><li><router-link to="#微任务">微任务</router-link></li><li><router-link to="#宏任务和微任务总结">宏任务和微任务总结</router-link></li><li><router-link to="#mutationobserver">MutationObserver</router-link></li><li><router-link to="#settimeout">setTimeOut</router-link></li><li><router-link to="#requestanimationframe">requestAnimationFrame</router-link></li><li><router-link to="#xmlhttprequest">XMLHttpRequest</router-link></li><li><router-link to="#promise">Promise</router-link></li><li><router-link to="#async">Async</router-link></li></ul></li><li><router-link to="#浏览器性能分析">浏览器性能分析</router-link><ul><li><router-link to="#chrome-开发者工具">Chrome 开发者工具</router-link></li><li><router-link to="#网络-network-面板">网络（Network）面板</router-link></li></ul></li></ul></nav>
<h2 id="浏览器发展" tabindex="-1"><a class="header-anchor" href="#浏览器发展"><span>浏览器发展</span></a></h2>
<ul>
<li>单进程
<ul>
<li><code v-pre>页面线程</code>：页面渲染，页面展现，JavaScript环境，插件都运行在页面线程中</li>
<li><code v-pre>网络线程</code>：数据</li>
<li><code v-pre>其他线程</code>：代码</li>
</ul>
</li>
<li>多进程
<ul>
<li><code v-pre>浏览器进程</code>：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。</li>
<li><code v-pre>渲染进程</code>：核心任务是将 <code v-pre>HTML</code>、<code v-pre>CSS</code> 和 <code v-pre>JavaScript</code> 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。</li>
<li><code v-pre>GPU进程</code>：GPU 的使用初衷是为了实现 3D CSS 的效果(Chrome浏览器一开始是没有GPU进程的)。</li>
<li><code v-pre>网络进程</code>：主要负责页面的网络资源加载。</li>
<li><code v-pre>插件进程</code>：主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。
<img src="https://static001.geekbang.org/resource/image/cd/60/cdc9215e6c6377fc965b7fac8c3ec960.png" alt="图解架构"></li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>总结</strong><br>
单进程浏览器具有<code v-pre>不稳定</code>（插件，渲染引擎会导致线程崩溃，导致进程也崩溃），<code v-pre>不流畅</code>（所有页面的渲染模块、JavaScript 执行环境以及插件都是运行在同一个线程中的，这就意味着同一时刻只能有一个模块可以执行），<code v-pre>不安全</code>（插件通过c/c++书写，会调用计算机资源恶意获取信息）的问题。而这些问题都被新出的多进程架构所解决。<br>
不稳定=&gt;稳定：进程是相互隔离的，所以当一个页面或者插件崩溃时，影响到的仅仅是当前的页面进程或者插件进程，并不会影响到浏览器和其他页面，这就完美地解决了页面或者插件的崩溃会导致整个浏览器崩溃，也就是不稳定的问题。<br>
不流畅=&gt;流畅：JavaScript 也是运行在渲染进程中的，所以即使 JavaScript 阻塞了渲染进程，影响到的也只是当前的渲染页面，而并不会影响浏览器和其他页面，因为其他页面的脚本是运行在它们自己的渲染进程中的。<br>
内存泄漏问题：关闭一个页面时，整个渲染进程也会被关闭，之后该进程所占用的内存都会被系统回收。<br>
安全问题：插件进程和渲染进程运行在<code v-pre>沙箱</code>里面，不能读写，且无法获得系统权限。<br>
<strong>总结来说就是利用进程之前相互独立的特性，来分割各个页面的关系，使其成为独立的存在，互不影响。</strong></p>
</blockquote>
<h3 id="目前的chrome架构" tabindex="-1"><a class="header-anchor" href="#目前的chrome架构"><span>目前的Chrome架构</span></a></h3>
<p><img src="https://static001.geekbang.org/resource/image/b6/fc/b61cab529fa31301bde290813b4587fc.png" alt="示例图"></p>
<div class="hint-container warning">
<p class="hint-container-title">带来的问题</p>
<p>更高的资源占用：因为每个进程都会包含公共基础结构的副本（如 JavaScript 运行环境），这就意味着浏览器会消耗更多的内存资源。<br>
更复杂的架构：浏览器各模块之间耦合性高、扩展性差等问题，会导致现在的架构已经很难适应新的需求了。</p>
</div>
<h3 id="未来的chrome架构-面向服务的架构" tabindex="-1"><a class="header-anchor" href="#未来的chrome架构-面向服务的架构"><span>未来的Chrome架构（面向服务的架构）</span></a></h3>
<p>原来的各种模块会被重构成独立的服务（Service），每个服务（Service）都可以在独立的进程中运行，访问服务（Service）必须使用定义好的接口，通过 IPC 来通信，从而构建一个更内聚、松耦合、易于维护和扩展的系统
<img src="https://static001.geekbang.org/resource/image/32/2a/329658fe821252db47b0964037a1de2a.png" alt="示例图"></p>
<details class="hint-container details"><summary>Q&A</summary>
<ol>
<li>Q：偶尔还会碰到一些由于单个页面卡死最终崩溃导致所有页面崩溃的情况。<br>
A：同一站点（same-site）导致的，Chrome的默认策略是，每个标签对应一个渲染进程。但是如果从一个页面打开了新页面，而新页面和当前页面属于同一站点时，那么新页面会复用父页面的渲染进程。官方把这个默认策略叫process-per-site-instance。就是如果几个页面符合同一站点，那么他们将被分配到一个渲染进程里面去。<br>
Q：为什么要跑在一个进程内？<br>
A: 因为在一个渲染进程里面，他们就会共享JS的执行环境，也就是说A页面可以直接在B页面中执行脚本。因为是同一家的站点，所以是有这个需求的。</li>
<li>Q：打开一个Chrome浏览器页面一定是四个进程吗？打开两个是五个进程吗（1个网络进程、1个浏览器进程、1个GPU进程以及2个渲染进程）？<br>
A：
<ul>
<li>如果页面里有iframe的话，iframe也会运行在单独的进程中！</li>
<li>如果页面里有插件，同样插件也需要开启一个单独的进程！</li>
<li>如果你装了扩展的话，扩展也会占用进程</li>
<li>如果2个页面属于同一站点的话，并且从a页面中打开的b页面，那么他们会公用一个渲染进程</li>
</ul>
</li>
<li>Q：浏览器中的页面崩溃的原因该怎么定位呢？
A：首先要了解导致崩溃的原因。1:一些第三方插件注入浏览器或者页面进程，拦截了网页的一些正常操作而导致页面或者浏览器崩溃。2:插件。3:浏览器的一些bug。可以使用JS来统计页面是否崩溃 可以参考<a href="https://juejin.im/entry/6844903705318260743" target="_blank" rel="noopener noreferrer">文章</a></li>
</ol>
</details>
<details class="hint-container details"><summary>进程与线程</summary>
<p><strong>什么是进程？</strong></p>
<blockquote>
<p>一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。</p>
</blockquote>
<p><strong>什么是线程？</strong></p>
<blockquote>
<p>是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。</p>
</blockquote>
<p><strong>单线程与多线程</strong><br>
<img src="https://static001.geekbang.org/resource/image/33/da/3380f0a16c323deda5d3a300804b95da.png" alt="示例图"><br>
<strong>二者关系</strong></p>
<blockquote>
<p>线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率。</p>
</blockquote>
<p><strong>特点</strong></p>
<blockquote>
<ol>
<li>进程中的任意一线程执行出错，都会导致整个进程的崩溃。</li>
<li>线程之间共享进程中的数据。<br>
<img src="https://static001.geekbang.org/resource/image/d0/9e/d0efacd7f299ed99e776cb97da2a799e.png" alt="示例图"></li>
<li>当一个进程关闭之后，操作系统会回收进程所占用的内存。</li>
<li>进程之间的内容相互隔离。保护操作系统中进程互不干扰的技术，一个进程如果崩溃了，不会影响到其他进程的。如果进程之间需要进行数据的通信，需要使用用于进程间通信（IPC）的机制了。</li>
</ol>
</blockquote>
</details>
<h2 id="tcp-协议-如何保证页面文件能被完整送达浏览器" tabindex="-1"><a class="header-anchor" href="#tcp-协议-如何保证页面文件能被完整送达浏览器"><span>TCP 协议：如何保证页面文件能被完整送达浏览器？</span></a></h2>
<p><code v-pre>FP</code>：从页面加载到首次开始绘制的时长，衡量web页面性能的重要指标<br>
<code v-pre>IP</code>：网际协议，计算机的地址，可以把数据包送达目的主机<br>
<code v-pre>UDP</code>：用户数据包协议，把数据包送达应用程序<br>
<code v-pre>TCP</code>：一种面向连接的、可靠的、基于字节流的传输层通信协议，把数据完整的送到应用程序</p>
<h3 id="基于-ip-的传输" tabindex="-1"><a class="header-anchor" href="#基于-ip-的传输"><span>基于 IP 的传输</span></a></h3>
<p><img src="https://static001.geekbang.org/resource/image/00/4d/00d9bcad0bda1fdb43ead428e89ae74d.png" alt="示例图"></p>
<ul>
<li>上层将含有“极客时间”的数据包交给网络层；</li>
<li>网络层再将 IP 头附加到数据包上，组成新的 IP 数据包，并交给底层；</li>
<li>底层通过物理网络将数据包传输给主机 B；</li>
<li>数据包被传输到主机 B 的网络层，在这里主机 B 拆开数据包的 IP 头信息，并将拆开来的数据部分交给上层；</li>
<li>最终，含有“极客时间”信息的数据包就到达了主机 B 的上层了。</li>
</ul>
<h3 id="基于-ip-udp-的传输" tabindex="-1"><a class="header-anchor" href="#基于-ip-udp-的传输"><span>基于 IP +  UDP 的传输</span></a></h3>
<p><img src="https://static001.geekbang.org/resource/image/3e/ea/3edb673a43f23d84253c52124ce447ea.png" alt="示例图"></p>
<ul>
<li>上层将含有“极客时间”的数据包交给传输层；</li>
<li>传输层会在数据包前面附加上 UDP 头，组成新的 UDP 数据包，再将新的 UDP 数据包交给网络层；</li>
<li>网络层再将 IP 头附加到数据包上，组成新的 IP 数据包，并交给底层；数据包被传输到主机 B 的网络层，在这里主机 B 拆开 IP 头信息，并将拆开来的数据部分交给传输层；</li>
<li>在传输层，数据包中的 UDP 头会被拆开，并根据 UDP 中所提供的端口号，把数据部分交给上层的应用程序；</li>
<li>最终，含有“极客时间”信息的数据包就旅行到了主机 B 上层应用程序这里。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">优点</p>
<p>UDP 不能保证数据可靠性，但是传输速度却非常快，所以 UDP 会应用在一些关注速度、但不那么严格要求数据完整性的领域，如在线视频、互动游戏等</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">缺点</p>
<p>在使用 UDP 发送数据时，有各种因素会导致数据包出错，虽然 UDP 可以校验数据是否正确，但是对于错误的数据包，UDP 并不提供重发机制，只是丢弃当前的包，而且 UDP 在发送之后也无法知道是否能达到目的地。<br>
大文件会被拆分成很多小的数据包来传输，这些小的数据包会经过不同的路由，并在不同的时间到达接收端，而 UDP 协议并不知道如何组装这些数据包，从而把这些数据包还原成完整的文件。</p>
</div>
<h3 id="基于-tcp-ip-的传输" tabindex="-1"><a class="header-anchor" href="#基于-tcp-ip-的传输"><span>基于 TCP + IP 的传输</span></a></h3>
<blockquote>
<p><a name="TCP">TCP生命周期</a>：一个完整的 TCP 连接的生命周期包括了“建立连接”“传输数据”和“断开连接”三个阶段。</p>
</blockquote>
<p><img src="https://static001.geekbang.org/resource/image/44/44/440ee50de56edc27c6b3c992b3a25844.png" alt="示例图"></p>
<ul>
<li>建立连接阶段。这个阶段是通过<code v-pre>三次握手</code>来建立客户端和服务器之间的连接。TCP 提供面向连接的通信传输。面向连接是指在数据通信开始之前先做好两端之间的准备工作。所谓三次握手，是指在建立一个 TCP 连接时，客户端和服务器总共要发送三个数据包以确认连接的建立。</li>
<li>传输数据阶段。在该阶段，接收端需要对每个数据包进行确认操作，也就是接收端在接收到数据包之后，需要发送确认数据包给发送端。所以当发送端发送了一个数据包之后，在规定时间内没有接收到接收端反馈的确认消息，则判断为数据包丢失，并触发发送端的重发机制。同样，一个大的文件在传输过程中会被拆分成很多小的数据包，这些数据包到达接收端后，接收端会按照 TCP 头中的序号为其排序，从而保证组成完整的数据。</li>
<li>断开连接阶段。数据传输完毕之后，就要终止连接了，涉及到最后一个阶段<code v-pre>四次挥手</code>来保证双方都能断开连接。</li>
</ul>
<p><img src="https://static001.geekbang.org/resource/image/94/32/943ac29f7d5b45a8861b0cde5da99032.png" alt="示例图"></p>
<div class="hint-container tip">
<p class="hint-container-title">优点</p>
<p>对于数据包丢失的情况，TCP 提供重传机制；<br>
TCP 引入了数据包排序机制，用来保证把乱序的数据包组合成一个完整的文件。</p>
</div>
<h2 id="http请求过程" tabindex="-1"><a class="header-anchor" href="#http请求过程"><span>HTTP请求过程</span></a></h2>
<h3 id="构建请求" tabindex="-1"><a class="header-anchor" href="#构建请求"><span>构建请求</span></a></h3>
<p>浏览器构建请求行信息（如下所示），构建好后，浏览器准备发起网络请求。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html <span class="token constant">HTTP1</span><span class="token number">.1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="查找缓存" tabindex="-1"><a class="header-anchor" href="#查找缓存"><span>查找缓存</span></a></h3>
<p>在真正发起网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件。其中，浏览器缓存是一种在本地保存资源副本，以供下次请求时直接使用的技术。</p>
<ul>
<li>缓解服务器端压力，提升性能（获取资源的耗时更短了）</li>
<li>对于网站来说，缓存是实现快速资源加载的重要组成部分。</li>
</ul>
<h3 id="准备-ip-地址和端口" tabindex="-1"><a class="header-anchor" href="#准备-ip-地址和端口"><span>准备 IP 地址和端口</span></a></h3>
<p>浏览器使用HTTP作为应用层协议，用于封装请求的文本信息，并使用TCP/IP作为传输层协议，所以浏览器需要通过TCP与服务器建立链接。即<strong>HTTP的内容是通过TCP的传输数据阶段来实现的</strong>
<img src="https://static001.geekbang.org/resource/image/12/80/1277f342174b23f9442d3b27016d7980.png" alt="示例图">
HTTP 请求第一步是与服务器建立TCP链接。<br>
建立 TCP 链接的第一步是需要准备IP和端口。<br>
鉴于网站IP难以记忆，出现了<code v-pre>域名系统( DNS )</code>：负责把域名和 IP 地址做一一映射关系<br>
所以第一步浏览器会请求 DNS 返回域名对应的 IP。<br>
拿到 IP 之后，接下来就需要获取端口号了。如果 URL 没有特别指明端口号，那么 HTTP 协议默认是 80 端口。</p>
<details class="hint-container details"><summary>DNS缓存</summary>
<p>浏览器还提供了 DNS 数据缓存服务，如果某个域名已经解析过了，那么浏览器会缓存解析的结果，以供下次查询时直接使用，这样也会减少一次网络请求。</p>
</details>
<h3 id="等待-tcp-队列" tabindex="-1"><a class="header-anchor" href="#等待-tcp-队列"><span>等待 TCP 队列</span></a></h3>
<p>Chrome 有个机制，同一个域名同时最多只能建立 6 个 TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。</p>
<h3 id="建立-tcp-链接" tabindex="-1"><a class="header-anchor" href="#建立-tcp-链接"><span>建立 TCP 链接</span></a></h3>
<p><a href="#TCP">建立链接</a></p>
<h3 id="发送-http-请求" tabindex="-1"><a class="header-anchor" href="#发送-http-请求"><span>发送 HTTP 请求</span></a></h3>
<p>首先浏览器会向服务器发送请求行，它包括了请求方法( GET , POST)、请求 URI（Uniform Resource Identifier）和 HTTP 版本协议。</p>
<p><strong>请求数据</strong><br>
<img src="https://static001.geekbang.org/resource/image/b8/d7/b8993c73f7b60feb9b8bd147545c47d7.png" alt="示例图"></p>
<p><strong>响应数据</strong><br>
<img src="https://static001.geekbang.org/resource/image/3e/76/3e30476a4bbda49fd7cd4fd0ea09f076.png" alt="示例图"></p>
<p><strong>断开连接</strong><br>
通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接。</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Connection:Keep-Alive
那么 TCP 连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个 TCP 连接发送请求。保持 TCP 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度</p>
</div>
<p><strong>重定向操作</strong>
<img src="https://static001.geekbang.org/resource/image/28/43/28d5796c6ab7faa619ed8f1bd17b0843.jpg" alt="示例图"></p>
<details class="hint-container details"><summary>Q&A</summary>
<ol>
<li>为什么很多站点第二次打开速度会很快？</li>
</ol>
<blockquote>
<p>主要原因是第一次加载页面过程中，缓存了一些耗时的数据。DNS 缓存和页面资源缓存这两块数据是会被浏览器缓存的。
<img src="https://static001.geekbang.org/resource/image/5f/08/5fc2f88a04ee0fc41a808f3481287408.png" alt="缓存处理">
<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ" target="_blank" rel="noopener noreferrer">参考网址</a><br>
浏览器是通过响应头中的 Cache-Control 字段来设置是否缓存该资源。通常，我们还需要为这个资源设置一个缓存过期时长，而这个时长是通过 Cache-Control 中的 Max-age 参数来设置的，比如上图设置的缓存过期时间是 2000 秒。
缓存过期了，浏览器则会继续发起网络请求，并且在 HTTP 请求头中带上</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">If<span class="token operator">-</span>None<span class="token operator">-</span>Match<span class="token operator">:</span><span class="token string">"4f80f-13c-3a1xb12a"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>服务器收到请求头后，会根据 If-None-Match 的值来判断请求的资源是否有更新。</p>
<ul>
<li>如果没有更新，就返回 304 状态码，相当于服务器告诉浏览器：“这个缓存可以继续使用，这次就不重复发送数据给你了。</li>
<li>如果资源有更新，服务器就直接返回最新资源给浏览器。</li>
</ul>
</blockquote>
<ol start="2">
<li>登录状态是如何保持的？</li>
</ol>
<blockquote>
<ul>
<li>用户打开登录页面，在登录框里填入用户名和密码，点击确定按钮。点击按钮会触发页面脚本生成用户登录信息，然后调用 POST 方法提交用户登录信息给服务器。</li>
<li>服务器接收到浏览器提交的信息之后，查询后台，验证用户登录信息是否正确，如果正确的话，会生成一段表示用户身份的字符串，并把该字符串写到响应头的 Set-Cookie 字段里。</li>
<li>浏览器在接收到服务器的响应头后，开始解析响应头，如果遇到响应头里含有 Set-Cookie 字段的情况，浏览器就会把这个字段信息保存到本地。</li>
<li>当用户再次访问时，浏览器会发起 HTTP 请求，但在发起请求之前，浏览器会读取之前保存的 Cookie 数据，并把数据写进请求头里的 Cookie 字段里，然后浏览器再将请求头发送给服务器。</li>
<li>服务器在收到 HTTP 请求头数据之后，就会查找请求头里面的“Cookie”字段信息，当查找到信息时，服务器查询后台，并判断该用户是已登录状态，然后生成含有该用户信息的页面数据，并把生成的数据发送给浏览器。</li>
<li>浏览器在接收到该含有当前用户的页面数据后，就可以正确展示用户登录的状态信息了。
<img src="https://static001.geekbang.org/resource/image/d9/b3/d9d6cefe8d3d6d84a37a626687c6ecb3.png" alt="示例图">
<strong>总结</strong>：如果服务器端发送的响应头内有 Set-Cookie 的字段，那么浏览器就会将该字段的内容保持到本地。当下次客户端再往该服务器发送请求时，客户端会自动在请求头中加入 Cookie 值后再发送出去。服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到该用户的状态信息。
<strong>注意</strong>：set cookie 具有安全性问题，可能被恶意js脚本截获。当然也有一些方法规避，常用的一个是将部分cookie设置成httponly的属性，设置了httponly属性后cookie，就无法通过js脚本来读取了，只是在发送http请求时候会被带上！</li>
</ul>
</blockquote>
</details>
<details class="hint-container details"><summary>常见状态码</summary>
<ul>
<li>1xx:informational 信息性状态码 接受的请求正在处理
<ul>
<li>100：部分的请求服务器已经接受，但是客户端应继续发送求请求的剩余部分</li>
<li>101：表示服务器应客户端升级协议的请求（Upgrade请求头）正在进行协议切换</li>
</ul>
</li>
<li>2xx:success 成功状态码 请求正常梳理完毕
<ul>
<li>200：表明请求已经成功. 默认情况下状态码为200的响应可以被缓存。</li>
<li>201：表示请求已经被成功处理，并且创建了新的资源。新的资源在应答返回之前已经被创建。</li>
<li>202：表示服务器端已经收到请求消息，但是尚未进行处理。但是对于请求的处理确实无保证的，即稍后无法通过 HTTP 协议给客户端发送一个异步请求来告知其请求的处理结果。</li>
<li>204：表示目前请求成功，但客户端不需要更新其现有页面。</li>
</ul>
</li>
<li>3xx:redirection 重定向状态码 需要进行附加操作以完成请求
<ul>
<li>301：永久重定向。说明请求的资源已经被移动到了由 Location 头部指定的 url 上，是固定的不会再改变。搜索引擎会根据该响应修正。</li>
<li>302：临时重定向。重定向状态码表明请求的资源被暂时的移动到了由 Location 头部指定的 URL 上。浏览器会重定向到这个URL，但是搜索引擎不会对该资源的链接进行更新。</li>
<li>303：表示重定向链接指向的不是新上传的资源，而是另外一个页面。</li>
<li>304：说明无需再次传输请求的内容，也就是说可以使用缓存的内容。</li>
<li>307：临时重定向。类似 302，区别在于能够确保请求方法和消息主体不会发生改变。</li>
<li>308：永久重定向。类似 301，区别在于能够确保请求方法和消息主体不会发生改变。</li>
</ul>
</li>
<li>4xx:client error 客户端错误状态码 服务器无法处理请求
<ul>
<li>400：表示由于语法无效，服务器无法理解该请求。</li>
<li>401：明由于缺乏目标资源要求的身份验证凭证，发送的请求未得到满足。</li>
<li>403：指的是服务器端有能力处理该请求，但是拒绝授权访问。进入该状态后，不能再继续进行验证。该访问是永久禁止的，并且与应用逻辑密切相关（例如不正确的密码）。</li>
<li>404：说明服务器端无法找到所请求的资源。</li>
<li>405：表明服务器禁止了使用当前 HTTP 方法的请求。GET 与 HEAD 两个方法不得被禁止，当然也不得返回状态码 405。</li>
<li>406：表示服务器端不支持 Accept、Accept-Charset、Accept-Encoding、 Accept-Language header 所要求的。</li>
<li>409：表示请求与服务器端目标资源的当前状态相冲突。例如，当上传文件的版本比服务器上已存在的要旧。</li>
<li>410：说明请求的内容在服务器上不存在了，同时是永久性的丢失。如果不清楚是否为永久或临时的丢失，应该使用404。</li>
<li>412：表示客户端错误，意味着对于目标资源的访问请求被拒绝。这通常发生在采用除 GET 和 HEAD 之外的方法进行条件请求时，由首部字段 If-Unmodified-Since 或 If-None-Match 规定的先决条件不成立的情况下。</li>
<li>413：表示请求主体的大小超过了服务器愿意或有能力处理的限度，服务器可能会（may）关闭连接以防止客户端继续发送该请求。</li>
<li>414：表示客户端所请求的 URI 超过了服务器允许的范围。</li>
<li>431：表示由于请求中的首部字段的值过大，服务器拒绝接受客户端的请求。客户端可以在缩减首部字段的体积后再次发送请求。</li>
</ul>
</li>
<li>5xx:server error 服务器错误状态码 服务器处理请求出错
<ul>
<li>500：表示所请求的服务器遇到意外的情况并阻止其执行请求。</li>
<li>501：表示request header 里的 method 或 Content-* 时不被服务器支持，无法被处理。另，服务器必须支持的方法（即不会返回这个状态码的方法）只有 GET 和 HEAD。501 响应默认是可缓存的。</li>
<li>502：表示作为网关或代理角色的服务器，从上游服务器（如tomcat、php-fpm）中接收到的响应是无效的。</li>
<li>503：表示服务器尚未处于可以接受请求的状态。通常造成这种情况的原因是由于服务器停机维护或者已超载。该种响应应该用于临时状况下，与之同时，在可行的情况下，应该在 Retry-After 首部字段中包含服务恢复的预期时间。</li>
<li>504：表示网关或者代理的服务器无法在规定的时间内获得想要的响应。</li>
</ul>
</li>
</ul>
</details>
<details class="hint-container details"><summary>If-None-Match和If-Modified-Since</summary>
<ul>
<li>Last-Modified 和 If-Modified-Since
<ul>
<li>客户端请求一个文件（A）。 服务器返回文件A，并返回 Last-Modified。</li>
<li>客户端收到响应后，缓存文件A 和 Last-Modified。</li>
<li>客户端再次请求文件A 时，发现该文件有 Last-Modified ，那么 header 离包含 If-Modified-Since，这个时间就是缓存文件的 Last-Modified。</li>
<li>服务端收到请求，只需要判断这个时间和当前请求的文件的修改时间就可以确定是返回 304 还是 200</li>
<li>If-Modified-Since 的主要缺点是只能精确到秒的级别，一旦在一秒内出现多次修改，是无法判断出已修改的状态。所以一般用在对时间不太敏感的静态资源。</li>
<li>ETag 和 If-None-Match
<ul>
<li>客户端请求一个文件（A）。 服务器返回文件A，并在给A加上一个 ETag。</li>
<li>客户端收到响应后，并将文件连同 ETag 一起缓存。</li>
<li>客户再次请求文件A，会发送 If-None-Match，内容是缓存该文件A的 Etag 值</li>
<li>服务器检查该 ETag，和计算出来的 Etag 匹配，来判断文件是否未被修改。如果未修改就直接返回 304 和一个空的响应体。否则返回 200 和 文件。</li>
</ul>
</li>
</ul>
</li>
<li>当与 If-Modified-Since 一同使用的时候，If-None-Match 优先级更高（假如服务器支持的话）</li>
</ul>
</details>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p><img src="https://static001.geekbang.org/resource/image/1b/6c/1b49976aca2c700883d48d927f48986c.png" alt="示例图">
浏览器中的 HTTP 请求从发起到结束一共经历了如下八个阶段：构建请求、查找缓存、准备 IP 和端口、等待 TCP 队列、建立 TCP 连接、发起 HTTP 请求、服务器处理请求、服务器返回请求和断开连接。</p>
<h2 id="导航流程-从输入url到页面展示-这中间发生了什么" tabindex="-1"><a class="header-anchor" href="#导航流程-从输入url到页面展示-这中间发生了什么"><span>导航流程：从输入URL到页面展示，这中间发生了什么？</span></a></h2>
<p>用户发出 URL 请求到页面开始解析的这个过程，就叫做<code v-pre>导航</code>
<img src="https://static001.geekbang.org/resource/image/92/5d/92d73c75308e50d5c06ad44612bcb45d.png" alt="示例图"></p>
<h3 id="宏观展现流程" tabindex="-1"><a class="header-anchor" href="#宏观展现流程"><span>宏观展现流程</span></a></h3>
<ol>
<li>首先，浏览器进程接收到用户输入的 URL 请求，浏览器进程便将该 URL 转发给网络进程。</li>
<li>然后，在网络进程中发起真正的 URL 请求。</li>
<li>接着网络进程接收到了响应头数据，便解析响应头数据，并将数据转发给浏览器进程。</li>
<li>浏览器进程接收到网络进程的响应头数据之后，发送“提交导航 (CommitNavigation)”消息到渲染进程；</li>
<li>渲染进程接收到“提交导航”的消息之后，便开始准备接收 HTML 数据，接收数据的方式是直接和网络进程建立数据管道；</li>
<li>最后渲染进程会向浏览器进程“确认提交”，这是告诉浏览器进程：“已经准备好接受和解析页面数据了”。</li>
<li>浏览器进程接收到渲染进程“提交文档”的消息之后，便开始移除之前旧的文档，然后更新浏览器进程中的页面状态。</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>此处流程不涉及浏览器页面排版，仅从宏观角度看待这一过程</p>
</div>
<h3 id="微观流程" tabindex="-1"><a class="header-anchor" href="#微观流程"><span>微观流程</span></a></h3>
<details class="hint-container details"><summary>用户输入</summary>
<ol>
<li>判断输入的关键字是搜索内容还是请求的URL
<ol>
<li>URL：地址栏会根据规则，将内容加上协议合成完整的URL</li>
<li>所搜内容：使用默认的搜索引擎，合成新的带搜索关键字的URL</li>
</ol>
</li>
<li>输入关键字并键入回车后，这意味着当前页面即将要被替换成新的页面</li>
<li>beforeunload事件：允许页面在退出之前执行一些数据清理操作，还可以询问用户是否要离开当前页面</li>
<li>开始加载一个地址之后，标签页上的图标便进入了加载状态。但此时图中页面显示的依然是之前打开的页面内容，并没立即替换。因为需要等待提交文档阶段，页面内容才会被替换</li>
</ol>
</details>
<details class="hint-container details"><summary>URL请求过程</summary>
<ol>
<li>浏览器进程会通过进程间通信（IPC）把 URL 请求发送至网络进程</li>
<li>网络进程会查找本地缓存是否缓存了该资源。如果有缓存资源，那么直接返回资源给浏览器进程；如果在缓存中没有查找到资源，那么直接进入网络请求流程。</li>
<li>进行 DNS 解析，以获取请求域名的服务器 IP 地址。如果请求协议是 HTTPS，那么还需要建立 TLS 连接。</li>
<li>利用 IP 地址和服务器建立 TCP 连接</li>
<li>连接建立之后，浏览器端会构建请求行、请求头等信息，并把和该域名相关的 Cookie 等数据附加到请求头中，然后向服务器发送构建的请求信息。</li>
<li>服务器接收到请求信息后，会根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程。</li>
<li>等网络进程接收了响应行和响应头之后，就开始解析响应头的内容了。
<ol>
<li><code v-pre>301</code>:网络进程会从响应头的 Location 字段里面读取重定向的地址，然后再发起新的 HTTP 或者 HTTPS 请求，一切又重头开始了。</li>
<li><code v-pre>Content-Type</code>告诉浏览器服务器返回的响应体数据是什么类型。如果 Content-Type 字段的值被浏览器判断为下载类型，那么该请求会被提交给浏览器的下载管理器，同时该 URL 请求的导航流程就此结束。但如果是 HTML，那么浏览器则会继续进行导航流程</li>
<li><code v-pre>渲染进程</code>通常情况下，打开新的页面都会使用单独的渲染进程；如果从 A 页面打开 B 页面，且 A 和 B 都属于<strong>同一站点</strong>（拥有相同的协议和根域名）的话，那么 B 页面复用 A 页面的渲染进程（特殊情况不会复用进程：<strong>noopener noreferrer：新打开的子窗口不需要访问父窗口的任何内容，这是为了防止一些钓鱼网站窃取父窗口的信息。</strong>）；如果是其他情况，浏览器进程则会为 B 创建一个新的渲染进程。</li>
<li><code v-pre>提交文档</code>浏览器进程将网络进程接收到的 HTML 数据提交给渲染进程
<ul>
<li>首先当浏览器进程接收到网络进程的响应头数据之后，便向渲染进程发起“提交文档”的消息；</li>
<li>渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”；</li>
<li>等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程；</li>
<li>浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。</li>
</ul>
</li>
<li>渲染阶段</li>
</ol>
</li>
</ol>
</details>
<h2 id="浏览器渲染流程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染流程"><span>浏览器渲染流程</span></a></h2>
<p>渲染流水线可分为如下几个子阶段：构建 DOM 树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成。
<img src="https://static001.geekbang.org/resource/image/92/e8/9259f8732ddad472e5e08a633ad46de8.png" alt="示例图"></p>
<h3 id="构建-dom-树" tabindex="-1"><a class="header-anchor" href="#构建-dom-树"><span>构建 DOM 树</span></a></h3>
<p>浏览器无法直接理解和使用 HTML，所以需要将 HTML 转换为浏览器能够理解的结构——DOM 树。
DOM 和 HTML 内容几乎是一样的，但是和 HTML 不同的是，DOM 是保存在内存中树状结构，可以通过 JavaScript 来查询或修改其内容。
<img src="https://static001.geekbang.org/resource/image/12/79/125849ec56a3ea98d4b476c66c754f79.png" alt="示例图"></p>
<h3 id="样式计算" tabindex="-1"><a class="header-anchor" href="#样式计算"><span>样式计算</span></a></h3>
<ol>
<li>当渲染引擎接收到 CSS 文本时，会执行一个转换操作，将 CSS 文本转换为浏览器可以理解的结构——styleSheets。<br>
document.styleSheets<br>
CSS样式来源
<ul>
<li>通过 link 引用的外部 CSS 文件</li>
<li>style 标签标记内的 CSS</li>
<li>元素的 style 属性内嵌的 CSS</li>
</ul>
</li>
<li>转换样式表中的属性值，使其标准化
<img src="https://static001.geekbang.org/resource/image/12/60/1252c6d3c1a51714606daa6bdad3a560.png" alt="示例图"></li>
<li>计算出 DOM 树中每个节点的具体样式
<ul>
<li>CSS继承：每个 DOM 节点都包含有父节点的样式。
<img src="https://static001.geekbang.org/resource/image/88/b2/88a3aac427cc7c09361eac01a85fc7b2.png" alt="示例图"></li>
<li><code v-pre>CSS层叠规则</code></li>
</ul>
</li>
<li>布局阶段：计算出 DOM 树中可见元素的几何位置
<ul>
<li>创建布局树，遍历 DOM 树中的所有可见节点，并把这些节点加到布局树中
<img src="https://static001.geekbang.org/resource/image/8e/0e/8e48b77dd48bdc509958e73b9935710e.png" alt="示例图"></li>
<li>布局计算</li>
</ul>
</li>
</ol>
<h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层"><span>分层</span></a></h3>
<p>分层：渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree）。如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。</p>
<ul>
<li>拥有层叠上下文属性的元素会被提升为单独的一层
<img src="https://static001.geekbang.org/resource/image/a0/19/a03eb12053aac1ac496b61a424f20119.png" alt="示例图"></li>
<li>需要剪裁（clip）的地方也会被创建为图层
<img src="https://static001.geekbang.org/resource/image/7b/97/7b6ceaab23c6c6d8e5930864ff9d7097.png" alt="示例图">
<strong>总结</strong>
<img src="https://static001.geekbang.org/resource/image/e8/61/e8a7e60a2a08e05239456284d2aa4061.png" alt="示例图"></li>
</ul>
<p>这些图层叠加后合成了最终的页面。</p>
<h3 id="图层绘制" tabindex="-1"><a class="header-anchor" href="#图层绘制"><span>图层绘制</span></a></h3>
<p>渲染引擎实现图层的绘制与之类似，会把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待<code v-pre>绘制列表</code>
<img src="https://static001.geekbang.org/resource/image/40/08/40825a55214a7990bba6b9bec6e54108.png" alt="示例图"></p>
<h3 id="栅格化操作" tabindex="-1"><a class="header-anchor" href="#栅格化操作"><span>栅格化操作</span></a></h3>
<p>绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的合成线程来完成的。</p>
<p>当图层的绘制列表准备好之后，主线程会把该绘制列表提交（commit）给合成线程。
<img src="https://static001.geekbang.org/resource/image/46/41/46d33b6e5fca889ecbfab4516c80a441.png" alt="示例图"></p>
<p><code v-pre>视口</code>：一个很大的页面，用户看到其中的一部分。</p>
<p>对于长页面，基于性能考虑，会优先绘制用户能看到的部分，基于这点，合成线程会将图层划分为图块（tile）。
<img src="https://static001.geekbang.org/resource/image/bc/52/bcc7f6983d5ece8e2dd716f431d0e052.png" alt="示例图"></p>
<p>然后合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图。而图块是栅格化执行的最小单位。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的，运行方式如下图所示：
<img src="https://static001.geekbang.org/resource/image/d8/20/d8d77356211e12b47bb9f508e2db8520.png" alt="示例图"></p>
<p>通常，栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。
<img src="https://static001.geekbang.org/resource/image/a8/87/a8d954cd8e4722ee03d14afaa14c3987.png" alt="示例图"></p>
<h3 id="合成" tabindex="-1"><a class="header-anchor" href="#合成"><span>合成</span></a></h3>
<p>一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。<br>
浏览器进程里面有一个叫 viz 的组件，用来接收合成线程发过来的 DrawQuad 命令，然后根据 DrawQuad 命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。</p>
<h3 id="浏览器渲染总结" tabindex="-1"><a class="header-anchor" href="#浏览器渲染总结"><span>浏览器渲染总结</span></a></h3>
<p><img src="https://static001.geekbang.org/resource/image/97/37/975fcbf7f83cc20d216f3d68a85d0f37.png" alt="示例图"></p>
<ul>
<li>渲染进程将 HTML 内容转换为能够读懂的 <code v-pre>DOM 树</code>结构。</li>
<li>渲染引擎将 CSS 样式表转化为浏览器可以理解的 <code v-pre>styleSheets</code>，计算出 DOM 节点的样式。</li>
<li>创建<code v-pre>布局树</code>，并计算元素的布局信息。</li>
<li>对布局树进行分层，并生成<code v-pre>分层树</code>。</li>
<li>为每个图层生成<code v-pre>绘制列表</code>，并将其提交到合成线程。</li>
<li>合成线程将图层分成<code v-pre>图块</code>，并在<code v-pre>光栅化线程池</code>中将图块转换成位图。</li>
<li>合成线程发送绘制图块命令 <code v-pre>DrawQuad</code> 给浏览器进程。</li>
<li>浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。</li>
</ul>
<details class="hint-container details"><summary>重排 重绘 合成</summary>
<p>改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫<code v-pre>重排</code>。
<img src="https://static001.geekbang.org/resource/image/b3/e5/b3ed565230fe4f5c1886304a8ff754e5.png" alt="示例图">
如果修改了元素的背景颜色，那么布局阶段将不会被执行，因为并没有引起几何位置的变换，所以就直接进入了绘制阶段，然后执行之后的一系列子阶段，这个过程就叫<code v-pre>重绘</code>。
<img src="https://static001.geekbang.org/resource/image/3c/03/3c1b7310648cccbf6aa4a42ad0202b03.png" alt="示例图">
更改一个既不要布局也不要绘制的属性，渲染引擎将跳过布局和绘制，只执行后续的合成操作，我们把这个过程叫做<code v-pre>合成</code>。
<img src="https://static001.geekbang.org/resource/image/02/2c/024bf6c83b8146d267f476555d953a2c.png" alt="示例图">
CSS 的 transform 实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段。<br>
<strong>重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些，相对于重绘和重排，合成能大大提升绘制效率。</strong><br>
详情参考：<a href="https://juejin.im/post/6844903745914929165" target="_blank" rel="noopener noreferrer">文章</a><br>
<strong>减少重绘重排</strong></p>
<ol>
<li>使用 class 操作样式，而不是频繁操作 style</li>
<li>避免使用 table 布局</li>
<li>批量dom 操作，例如 createDocumentFragment，或者使用框架，例如 React</li>
<li>Debounce window resize 事件</li>
<li>对 dom 属性的读写要分离</li>
<li>will-change: transform 做优化</li>
</ol>
</details>
<details class="hint-container details"><summary>Q&A</summary>
<p>如果下载 CSS 文件阻塞了，会阻塞 DOM 树的合成吗？会阻塞页面的显示吗？</p>
<blockquote>
<p>DOM解析器会先执行JavaScript脚本，执行完成之后，再继续往下解析。当在JavaScript中访问了某个元素的样式，那么这时候就需要等待这个样式被下载完成才能继续往下执行，所以在这种情况下，CSS也会阻塞DOM的解析。页面的显示大概不会阻止，因为Chrome具有一套默认样式</p>
</blockquote>
</details>
<h2 id="浏览器执行javascript代码" tabindex="-1"><a class="header-anchor" href="#浏览器执行javascript代码"><span>浏览器执行javaScript代码</span></a></h2>
<h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升"><span>变量提升</span></a></h3>
<p>区分声明和赋值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">==</span><span class="token operator">></span> </span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 变量声明</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 变量赋值</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">==</span><span class="token operator">></span> </span>
<span class="line"><span class="token comment">// 函数声明</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">==</span><span class="token operator">></span></span>
<span class="line"><span class="token comment">// 先声明再赋值</span></span>
<span class="line"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所谓的<code v-pre>变量提升</code>，是指在 JavaScript 代码执行过程中，JavaScript 引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。变量被提升后，会给变量设置默认值，这个默认值就是我们熟悉的 <code v-pre>undefined</code>。</p>
<blockquote>
<ol>
<li>在执行过程中，若使用了未声明的变量，那么 JavaScript 执行会报错。</li>
<li>在一个变量定义之前使用它，不会出错，但是该变量的值会为 undefined，而不是定义时的值。</li>
<li>在一个函数定义之前使用它，不会出错，且函数能正确执行。</li>
</ol>
</blockquote>
<h3 id="代码执行" tabindex="-1"><a class="header-anchor" href="#代码执行"><span>代码执行</span></a></h3>
<p>变量和函数声明在代码里的位置是不会改变的，而且是在<code v-pre>编译阶段</code>被 JavaScript 引擎放入<code v-pre>内存</code>中;<br>
<img src="https://static001.geekbang.org/resource/image/64/1e/649c6e3b5509ffd40e13ce9c91b3d91e.png" alt="示例图"></p>
<p><strong>编译阶段</strong><br>
经过编译阶段，生成两部分内容：<code v-pre>执行上下文</code>和<code v-pre>可执行代码</code><br>
<img src="https://static001.geekbang.org/resource/image/06/13/0655d18ec347a95dfbf843969a921a13.png" alt="示例图"></p>
<p><strong>执行阶段</strong><br>
JavaScript引擎会从环境变量中查找自定义的变量和函数</p>
<div class="hint-container tip">
<p class="hint-container-title">执行上下文</p>
<ol>
<li>当 JavaScript 执行全局代码的时候，会编译全局代码并创建全局执行上下文，而且在整个页面的生存周期内，全局执行上下文只有一份。</li>
<li>当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行结束之后，创建的函数执行上下文会被销毁。</li>
<li>当使用 eval 函数的时候，eval 的代码也会被编译，并创建执行上下文。</li>
</ol>
</div>
<h3 id="调用栈" tabindex="-1"><a class="header-anchor" href="#调用栈"><span>调用栈</span></a></h3>
<p>栈（stack）是一种<code v-pre>先进后出</code>，用来管理函数调用关系的一种数据结构。<br>
每次调用函数都会将函数的执行上下文压入栈中，函数执行完成会弹出栈。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 下面函数执行的调用栈</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> b<span class="token operator">+</span>c</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">return</span>  a<span class="token operator">+</span>result<span class="token operator">+</span>d</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://static001.geekbang.org/resource/image/a5/1d/a5d7ec1f8f296412acc045835b85431d.png" width="300" height="200" />=&gt;
<img src="https://static001.geekbang.org/resource/image/1d/1d/1d50269dbc5b4c69f83662ecdd977b1d.png" width="350" height="140" />=&gt;
<img src="https://static001.geekbang.org/resource/image/7d/52/7d6c4c45db4ef9b900678092e6c53652.png" width="300" height="200" />=&gt;
<img src="https://static001.geekbang.org/resource/image/cc/37/ccfe41d906040031a7df1e4f1bce5837.png" width="300" height="200" />=&gt;
<img src="https://static001.geekbang.org/resource/image/03/96/03ca801a5372f941bf17d6088fee0f96.png" width="300" height="200" />=&gt;
<img src="https://static001.geekbang.org/resource/image/d0/7b/d0ac1d6e77735338fa97cc9a3f6c717b.png" width="300" height="200" /></p>
<div class="hint-container caution">
<p class="hint-container-title">栈溢出（Stack Overflow）</p>
<p>调用栈是有大小的，当入栈的执行上下文超过一定数目，JavaScript 引擎就会报错，我们把这种错误叫做<code v-pre>栈溢出</code>。</p>
</div>
<h3 id="作用域-scope" tabindex="-1"><a class="header-anchor" href="#作用域-scope"><span>作用域（scope）</span></a></h3>
<p><code v-pre>作用域</code>是指在程序中定义变量的区域，该位置决定了变量的生命周期。通俗地理解，作用域就是<strong>变量与函数的可访问范围</strong>，即作用域控制着变量和函数的可见性和生命周期。<br>
目前js具有<code v-pre>全局作用域</code>，<code v-pre>函数作用域</code>以及<code v-pre>块级作用域</code>（es6新增）</p>
<div class="hint-container tip">
<p class="hint-container-title">es6</p>
<p><strong>let</strong>，<strong>const</strong>，<strong>块级作用域</strong> 来解决变量提升问题。</p>
<blockquote>
<p>如何解决变量提升？</p>
<ol>
<li>函数内部通过 var 声明的变量，在编译阶段全都被存放到变量环境里面了。</li>
<li>通过 let 声明的变量，在编译阶段会被存放到词法环境（Lexical Environment）中。</li>
<li>在函数的作用域块内部，通过 let 声明的变量并没有被存放到词法环境中。</li>
<li>在词法环境内部，维护了一个小型栈结构，栈底是函数最外层的变量，进入一个作用域块后，就会把该作用域块内部的变量压到栈顶；当作用域执行完成之后，该作用域的信息就会从栈顶弹出
<img src="https://static001.geekbang.org/resource/image/06/08/06c06a756632acb12aa97b3be57bb908.png" alt="示例图"></li>
</ol>
</blockquote>
</div>
<h3 id="作用域链和闭包" tabindex="-1"><a class="header-anchor" href="#作用域链和闭包"><span>作用域链和闭包</span></a></h3>
<p><code v-pre>作用域链</code>：每个执行上下文的变量环境中，都包含了一个外部引用，用来指向外部的执行上下文，称为outer。每个执行上下文的变量环境中，都包含了一个外部引用，用来指向外部的执行上下文，如果在当前的变量环境中没有查找到，那么 JavaScript 引擎会继续在 outer 所指向的执行上下文中查找。<br>
<img src="https://static001.geekbang.org/resource/image/20/a7/20a832656434264db47c93e657e346a7.png" alt="示例图"><br>
<code v-pre>词法作用域</code>：词法作用域就是指作用域是由代码中函数声明的位置来决定的，所以词法作用域是静态的作用域，通过它就能够预测代码在执行过程中如何查找标识符。<br>
<img src="https://static001.geekbang.org/resource/image/21/39/216433d2d0c64149a731d84ba1a07739.png" alt="示例图"><br>
<strong>作用域链由词法作用域决定,词法作用域在代码编译阶段就决定好的，和函数是怎么调用的没有关系。</strong><br>
变量查找过程示意图<br>
<img src="https://static001.geekbang.org/resource/image/25/a7/25053af5ae30c8be991fa14631cde0a7.png" alt="示例图"></p>
<p><code v-pre>闭包</code>：在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">"极客时间"</span></span>
<span class="line">    <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">const</span> test2 <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">    <span class="token keyword">var</span> innerBar <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">getName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> myName</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">setName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            myName <span class="token operator">=</span> newName</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> innerBar</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">bar<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"极客邦"</span><span class="token punctuation">)</span></span>
<span class="line">bar<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中执行至bar.setName()时，调用栈状态如下<br>
<img src="https://static001.geekbang.org/resource/image/40/a8/40b8840480a5df4f43ad5f4e7907e3a8.png" alt="示例图"></p>
<p>作用域链为：Local–&gt;Closure(foo)–&gt;Global</p>
<h3 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h3>
<p><strong>为什么需要this：在对象内部的方法中需要使用对象内部的属性</strong><br>
this分为<code v-pre>全局执行上下文的this(window)</code>和<code v-pre>函数执行上下文的this</code>;</p>
<p>更改this的方法</p>
<ul>
<li>call，bind，apply 函数</li>
<li>对象调用方法设置：使用对象来调用其内部的一个方法，该方法的 this 是指向对象本身的。
<ul>
<li>全局环境中调用一个函数，函数内部的 this 指向的是全局变量 window。</li>
<li>通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身。</li>
</ul>
</li>
<li>构造函数设置
<ul>
<li>new Object()</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">new 操作符做了什么</p>
<ol>
<li>创建一个空的简单JavaScript对象（即{}）；</li>
<li>链接该对象（设置该对象的constructor）到另一个对象 ；</li>
<li>将步骤1新创建的对象作为this的上下文 ；</li>
<li>如果该函数没有返回对象，则返回this。</li>
</ol>
</div>
<blockquote>
<p>当函数作为对象的方法调用时，函数中的 this 就是该对象；
当函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象 window；
嵌套函数中的 this 不会继承外层函数的 this 值。
箭头函数没有执行上下文，所以没有this</p>
</blockquote>
<h2 id="v8工作原理" tabindex="-1"><a class="header-anchor" href="#v8工作原理"><span>V8工作原理</span></a></h2>
<h3 id="javascript数据存储" tabindex="-1"><a class="header-anchor" href="#javascript数据存储"><span>JavaScript数据存储</span></a></h3>
<p><code v-pre>静态语言</code>：使用之前就需要确认其变量数据类型语言。<br>
<code v-pre>动态语言</code>：运行过程中需要检查数据类型的语言。<br>
<code v-pre>弱类型语言</code>：支持隐式转换。<br>
<code v-pre>强类型语言</code>：不支持隐式转换。<br>
<img src="https://static001.geekbang.org/resource/image/36/f0/36f0f5bdce0a6d8c36cbb8a76931cff0.png" alt="示例图"><br>
<strong>JavaScript 是一种<code v-pre>弱类型</code>的、<code v-pre>动态</code>的语言。</strong></p>
<ol>
<li><strong>弱类型</strong>，意味着你不需要告诉 JavaScript 引擎这个或那个变量是什么数据类型，JavaScript 引擎在运行代码的时候自己会计算出来。</li>
<li><strong>动态</strong>，意味着你可以使用同一个变量保存不同类型的数据。</li>
</ol>
<p><code v-pre>typeof</code>：检测变量类型<br>
JavaScript<strong>八种</strong>变量类型<br>
<img src="https://static001.geekbang.org/resource/image/85/15/85b87602eac65356c9171bbd023f5715.png" alt="示例图"></p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<ol>
<li>typeof null ==&gt; Object</li>
<li>前七种为<code v-pre>原始类型</code>，Object为<code v-pre>引用类型</code></li>
</ol>
</div>
<p><strong>原始类型的数据值都是直接保存在“栈”中的，引用类型的值是存放在“堆”中的</strong><br>
<img src="https://static001.geekbang.org/resource/image/22/bc/22100df5c75fb51037d7a929777c57bc.png" alt="示例图"></p>
<p>Q：为什么分“堆”和“栈”两个存储空间？<br>
A：js引擎需要用栈来维护程序执行期间上下文的状态，如果栈空间大了话，所有的数据都存放在栈空间里面，那么会影响到上下文切换的效率，进而又影响到整个程序的执行效率。<br>
<img src="https://static001.geekbang.org/resource/image/d7/7b/d7153d003a72dbd0a9ca84b59ac3857b.png" alt="示例图">
通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。<br>
<strong>原始类型的赋值会完整复制变量值，而引用类型的赋值是复制引用地址</strong>。
<img src="https://static001.geekbang.org/resource/image/51/f5/51127624a725a18a0e12e0f5a7aadbf5.png" alt="示例图"></p>
<h3 id="再看闭包变量" tabindex="-1"><a class="header-anchor" href="#再看闭包变量"><span>再看闭包变量</span></a></h3>
<ol>
<li>当 JavaScript 引擎执行到闭包函数时，首先会编译，并创建一个空执行上下文。</li>
<li>遇到引用外部函数的变量时，js引擎判断这是一个闭包，于是在堆空间创建一个closure对象（内部对象，js无法访问）
<strong>产生闭包的核心有两步：第一步是需要预扫描内部函数；第二步是把内部函数引用的外部变量保存到堆中。</strong>
<img src="https://static001.geekbang.org/resource/image/f9/db/f9dd29ff5371c247e10546393c904edb.png" alt="示例图"></li>
</ol>
<h3 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收</span></a></h3>
<p>垃圾数据回收分为<code v-pre>手动回收</code>和<code v-pre>自动回收</code></p>
<p>手动回收：C/C++ 使用手动回收，需要先分配内存，然后free()销毁内存，如数据不再需要且未销毁，被称为<code v-pre>内存泄漏</code></p>
<p>自动回收：JavaScript，Java，Python由垃圾回收器回收</p>
<p>栈内存回收：调用栈中包含一个记录当前执行状态的指针（ESP），每执行完一个函数，ESP指针会发生变化<br>
<img src="https://static001.geekbang.org/resource/image/b8/f3/b899cb27c0d92c31f9377db59939aaf3.jpg" alt="示例图">
当调用另外的函数时，会覆盖掉之前的内存</p>
<p>堆内存回收：</p>
<ul>
<li>代际假说
<ul>
<li>对象一经分配内存，很快就销毁，变得不可访问</li>
<li>对象分配后一直存活</li>
</ul>
</li>
<li>分代收集</li>
</ul>
<p>V8 中会把堆分为<code v-pre>新生代</code>和<code v-pre>老生代</code>两个区域，新生代(1-8M)中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。</p>
<details class="hint-container details"><summary>垃圾回收流程</summary>
<ul>
<li>第一步是标记空间中活动对象和非活动对象。所谓活动对象就是还在使用的对象，非活动对象就是可以进行垃圾回收的对象。</li>
<li>第二步是回收非活动对象所占据的内存。其实就是在所有的标记完成之后，统一清理内存中所有被标记为可回收的对象。</li>
<li>第三步是做内存整理。一般来说，频繁回收对象后，内存中就会存在大量不连续空间，我们把这些不连续的内存空间称为内存碎片。当内存中出现了大量的内存碎片之后，如果需要分配较大连续内存的时候，就有可能出现内存不足的情况。所以最后一步需要整理这些内存碎片，但这步其实是可选的，因为有的垃圾回收器不会产生内存碎片。</li>
</ul>
</details>
<h4 id="副垃圾回收器" tabindex="-1"><a class="header-anchor" href="#副垃圾回收器"><span>副垃圾回收器</span></a></h4>
<p>新生代中使用<code v-pre>Scavenge算法</code>，是把新生代空间对半划分为两个区域，一半是对象区域，一半是空闲区域。</p>
<p>在垃圾回收过程中，首先要对对象区域中的垃圾做标记；标记完成之后，就进入垃圾清理阶段，<strong>副垃圾回收器会把这些存活的对象复制到空闲区域中，同时它还会把这些对象有序地排列起来，所以这个复制过程，也就相当于完成了内存整理操作</strong>，复制后空闲区域就没有内存碎片了。</p>
<p>完成复制后，<strong>对象区域与空闲区域进行角色翻转</strong>，也就是原来的对象区域变成空闲区域，原来的空闲区域变成了对象区域。这样就完成了垃圾对象的回收操作，同时这种角色翻转的操作还能让新生代中的这两块区域无限重复使用下去。</p>
<p>也正是因为新生区的空间不大，所以很容易被存活的对象装满整个区域。为了解决这个问题，JavaScript 引擎采用了对象晋升策略，也就是经过两次垃圾回收依然还存活的对象，会被移动到老生区中。</p>
<p><img src="https://static001.geekbang.org/resource/image/4f/af/4f9310c7da631fa5a57f871099bfbeaf.png" alt="示例图"></p>
<h4 id="主垃圾回收器" tabindex="-1"><a class="header-anchor" href="#主垃圾回收器"><span>主垃圾回收器</span></a></h4>
<p>老生区数据特点：</p>
<ul>
<li>对象占用空间大</li>
<li>对象存活时间长</li>
</ul>
<p>若要在老生区中使用 Scavenge 算法进行垃圾回收，复制这些大的对象将会花费比较多的时间，从而导致回收执行效率不高，同时还会浪费一半的空间。</p>
<p>主垃圾回收器是采用<code v-pre>标记 - 清除（Mark-Sweep）</code>的算法进行垃圾回收的。</p>
<p><em><strong>标记过程</strong></em>：从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素称为活动对象，没有到达的元素就可以判断为垃圾数据。</p>
<p><img src="https://static001.geekbang.org/resource/image/6c/69/6c8361d3e52c1c37a06699ed94652e69.png" alt="标记阶段"></p>
<p><em><strong>清除阶段</strong></em></p>
<p><img src="https://static001.geekbang.org/resource/image/d0/85/d015db8ad0df7f0ccb1bdb8e31f96e85.png" alt="清除阶段"></p>
<p><em><strong>整理阶段段</strong></em>：让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存。</p>
<p><img src="https://static001.geekbang.org/resource/image/65/8c/652bd2df726d0aa5e67fe8489f39a18c.png" alt="整理阶段"></p>
<p>为了降低老生代的垃圾回收而造成的卡顿，V8 将标记过程分为一个个的子标记过程，同时让垃圾回收标记和 JavaScript 应用逻辑交替进行，直到标记阶段完成，我们把这个算法称为<code v-pre>增量标记（Incremental Marking）算法</code>。</p>
<p><img src="https://static001.geekbang.org/resource/image/de/e7/de117fc96ae425ed90366e9060aa14e7.png" alt="示例图"></p>
<h3 id="编译器和解释器" tabindex="-1"><a class="header-anchor" href="#编译器和解释器"><span>编译器和解释器</span></a></h3>
<p>编译型语言在程序执行之前，需要经过编译器的编译过程，并且编译之后会直接保留机器能读懂的二进制文件，这样每次运行程序时，都可以直接运行该二进制文件，而不需要再次重新编译了。比如 C/C++、GO 等都是编译型语言。</p>
<p>而由解释型语言编写的程序，在每次运行时都需要通过解释器对程序进行动态解释和执行。比如 Python、JavaScript 等都属于解释型语言。</p>
<p><img src="https://static001.geekbang.org/resource/image/4e/81/4e196603ecb78188e99e963e251b9781.png" alt="示例图"></p>
<ul>
<li>在编译型语言的编译过程中，编译器首先会依次对源代码进行词法分析、语法分析，生成抽象语法树（AST），然后是优化代码，最后再生成处理器能够理解的机器码。如果编译成功，将会生成一个可执行的文件。但如果编译过程发生了语法或者其他的错误，那么编译器就会抛出异常，最后的二进制文件也不会生成成功。</li>
<li>在解释型语言的解释过程中，同样解释器也会对源代码进行词法分析、语法分析，并生成抽象语法树（AST），不过它会再基于抽象语法树生成字节码，最后再根据字节码来执行程序、输出结果。</li>
</ul>
<h4 id="v8-执行-javascript-代码" tabindex="-1"><a class="header-anchor" href="#v8-执行-javascript-代码"><span>V8 执行 JavaScript 代码</span></a></h4>
<p><img src="https://static001.geekbang.org/resource/image/1a/ae/1af282bdc4036096c03074da53eb84ae.png" alt="示例图"></p>
<p><strong>一、 生成抽象语法树(AST)和执行上下文</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">"极客时间"</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">23</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">myName <span class="token operator">=</span> <span class="token string">"geektime"</span></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://static001.geekbang.org/resource/image/73/36/7320526ef14d974be8393effcf25b436.png" alt="图示"></p>
<p><code v-pre>Babel</code>：先将 ES6 源码转换为 AST，然后再将 ES6 语法的 AST 转换为 ES5 语法的 AST，最后利用 ES5 的 AST 生成 JavaScript 源代码。</p>
<pre><code>1.1 分词（词法分析）：其作用是将一行行的源码拆解成一个个 token。所谓 token，指的是语法上不可能再分的、最小的单个字符或字符串。
</code></pre>
<p><img src="https://static001.geekbang.org/resource/image/83/f5/838028071f63a132cc8b27b23960e5f5.png" alt="示例图"></p>
<pre><code>1.2 解析（语法分析）：其作用是将上一步生成的 token 数据，根据语法规则转为 AST。如果源码符合语法规则，这一步就会顺利完成。但如果源码存在语法错误，这一步就会终止，并抛出一个“语法错误”。
</code></pre>
<p><strong>二、生成字节码</strong></p>
<p><code v-pre>解释器 （Ignition）</code>：根据 AST 生成字节码，并解释执行字节码。</p>
<p>字节码就是介于 AST 和机器码之间的一种代码。但是与特定类型的机器码无关，字节码需要通过解释器将其转换为机器码后才能执行。</p>
<p><img src="https://static001.geekbang.org/resource/image/87/ff/87d1ab147d1dc4b78488e2443d58a3ff.png" alt="示例图"></p>
<details class="hint-container details"><summary>小知识</summary>
<p>其实一开始 V8 并没有字节码，而是直接将 AST 转换为机器码，由于执行机器码的效率是非常高效的，所以这种方式在发布后的一段时间内运行效果是非常好的。但是随着 Chrome 在手机上的广泛普及，特别是运行在 512M 内存的手机上，内存占用问题也暴露出来了，因为 V8 需要消耗大量的内存来存放转换后的机器码。为了解决内存占用问题，V8 团队大幅重构了引擎架构，引入字节码，并且抛弃了之前的编译器，最终花了将进四年的时间，实现了现在的这套架构。</p>
</details>
<p><strong>三、 执行代码</strong></p>
<p>热点代码：多次重复执行的代码。</p>
<p>解释器逐条执行，如果遇到<code v-pre>热点代码</code>，编译器介入将热点代码编译成机器码存在缓存中，这种技术被称为<code v-pre>即时编译(JIT)技术</code>。</p>
<p><img src="https://static001.geekbang.org/resource/image/66/8a/662413313149f66fe0880113cb6ab98a.png" alt="示例图"></p>
<p><strong>JavaScript的性能优化</strong></p>
<ol>
<li>提升单次脚本的执行速度，避免 JavaScript 的长任务霸占主线程，这样可以使得页面快速响应交互；</li>
<li>避免大的内联脚本，因为在解析 HTML 的过程中，解析和编译也会占用主线程；</li>
<li>减少 JavaScript 文件的容量，因为更小的文件会提升下载速度，并且占用更低的内存。</li>
</ol>
<h2 id="浏览器事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器事件循环"><span>浏览器事件循环</span></a></h2>
<ul>
<li>如果有一些确定好的任务，可以使用一个单线程来按照顺序处理这些任务。</li>
<li>要在线程执行过程中接收并处理新的任务，就需要引入循环语句和事件系统。</li>
<li>如果要接收其他线程发送过来的任务，就需要引入消息队列。</li>
<li>如果其他进程想要发送任务给页面主线程，那么先通过 IPC 把任务发送给渲染进程的 IO 线程，IO 线程再把任务发送给页面主线程。</li>
</ul>
<p><img src="https://static001.geekbang.org/resource/image/e2/c6/e2582e980632fd2df5043f81a11461c6.png" alt="事件循环"></p>
<p>弊端：</p>
<ol>
<li>无法处理高优先级的任务</li>
<li>单个任务执行时间过长</li>
</ol>
<p>解决：</p>
<ol>
<li><code v-pre>宏任务(macrotask)</code>和<code v-pre>微任务(microtask)</code></li>
<li>回调函数</li>
</ol>
<h3 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务"><span>宏任务</span></a></h3>
<p><strong>概念</strong>：消息队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列。</p>
<ul>
<li>渲染事件（如解析 DOM、计算布局、绘制）；</li>
<li>用户交互事件（如鼠标点击、滚动页面、放大缩小等）；</li>
<li>JavaScript 脚本执行事件；</li>
<li>网络请求完成、文件读写完成事件。</li>
</ul>
<p><strong>注</strong>：渲染进程内部会维护多个消息队列，比如延迟执行队列和普通的消息队列。执行时从多个队列中选出最老的一个任务，记录执行时间，执行完毕后删除。</p>
<p><strong>弊端</strong>：时间粒度较大，执行时间间隔无法精确控制，对高实时性的需求不适合。</p>
<h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h3>
<p><strong>概念</strong>：微任务就是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。</p>
<ul>
<li>使用 MutationObserver 监控某个 DOM 节点</li>
<li>使用 Promise，当调用 Promise.resolve() 或者 Promise.reject() 的时候</li>
</ul>
<p><strong>注</strong>：通常情况下，在当前宏任务中的 JavaScript 快执行完成时，也就在 JavaScript 引擎准备退出全局执行上下文并清空调用栈的时候，JavaScript 引擎会检查全局执行上下文中的微任务队列，然后按照顺序执行队列中的微任务。如果在执行微任务的过程中，产生了新的微任务，同样会将该微任务添加到微任务队列中，V8 引擎一直循环执行微任务队列中的任务，直到队列为空才算执行结束。</p>
<p><img src="https://static001.geekbang.org/resource/image/83/88/839f468be3d683019c309e0acd8cd788.png" alt="示例图">
<img src="https://static001.geekbang.org/resource/image/1d/92/1db319c879610816c0cfea22723fc492.png" alt="示例图"></p>
<h3 id="宏任务和微任务总结" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务总结"><span>宏任务和微任务总结</span></a></h3>
<ul>
<li>微任务和宏任务是绑定的，每个宏任务在执行时，会创建自己的微任务队列。</li>
<li>微任务的执行时长会影响到当前宏任务的时长。比如一个宏任务在执行过程中，产生了 100 个微任务，执行每个微任务的时间是 10 毫秒，那么执行这 100 个微任务的时间就是 1000 毫秒，也可以说这 100 个微任务让宏任务的执行时间延长了 1000 毫秒。所以你在写代码的时候一定要注意控制微任务的执行时长。</li>
<li>在一个宏任务中，分别创建一个用于回调的宏任务和微任务，无论什么情况下，微任务都早于宏任务执行。</li>
</ul>
<h3 id="mutationobserver" tabindex="-1"><a class="header-anchor" href="#mutationobserver"><span>MutationObserver</span></a></h3>
<p><strong>概念</strong>：用来监听 DOM 变化的一套方法。</p>
<p>监听Dom变化历史：</p>
<ol>
<li>轮询：使用 setTimeout 或者 setInterval 来定时检测 DOM 是否有改变。
<ul>
<li>如果时间间隔设置过长，DOM 变化响应不够及时；反过来如果时间间隔设置过短，又会浪费很多无用的工作量去检查 DOM，会让页面变得低效。</li>
</ul>
</li>
<li>Mutation Event：采用了观察者的设计模式，当 DOM 有变动时就会立刻触发相应的事件，这种方式属于同步回调。
<ul>
<li>采用 Mutation Event 解决了实时性的问题，因为 DOM 一旦发生变化，就会立即调用 JavaScript 接口。但也正是这种实时性造成了严重的性能问题，因为每次 DOM 变动，渲染引擎都会去调用 JavaScript，这样会产生较大的性能开销。已经从web事件中删除。</li>
</ul>
</li>
<li>MutationObserver：用来监视 DOM 的变化，包括属性的变化、节点的增减、内容的变化等。
<ul>
<li>将响应函数改成异步调用，可以不用在每次 DOM 变化都触发异步调用，而是等多次 DOM 变化后，<strong>一次触发异步调用</strong>，并且还会使用一个数据结构来记录这期间所有的 DOM 变化。这样即使频繁地操纵 DOM，也不会对性能造成太大的影响。</li>
<li>消息及时性的问题通过微任务来解决，在每次 DOM 节点发生变化的时候，渲染引擎将变化记录封装成微任务，并将微任务添加进当前的微任务队列中。</li>
</ul>
</li>
</ol>
<h3 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout"><span>setTimeOut</span></a></h3>
<p><strong>概念</strong>：定时器，用来指定某个函数在多少毫秒之后执行。</p>
<p><strong>实现</strong>：因为微任务执行会导致宏任务执行时间变长，所以普通的消息队列时间粒度不可控，Chrome新增了一个延迟执行的队列，创建定时器时，渲染进程会将定时器的回调添加到延迟队列中。每次执行消息队列任务时会有一个函数会根据发起时间和延迟时间计算出到期的任务，然后依次执行这些到期的任务。</p>
<p><strong>注意事项</strong>：</p>
<ol>
<li>setTimeOut函数返还的是一个ID</li>
<li>如果当前任务执行时间过久，会影响定时器任务的执行</li>
<li>在 Chrome 中，定时器被嵌套调用 5 次以上，系统会判断该函数方法被阻塞了，如果定时器的调用时间间隔小于 4 毫秒，那么浏览器会将每次调用的时间间隔设置为 4 毫秒。</li>
<li>未激活的页面，setTimeout 执行最小间隔是 1000 毫秒</li>
<li>Chrome、Safari、Firefox 都是以 32 个 bit 来存储延时值的，32bit 最大只能存放的数字是 2147483647 毫秒，这就意味着，如果 setTimeout 设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，那么相当于延时值被设置为 0 了，这导致定时器会被立即执行</li>
<li>如果使用 setTimeout 设置的回调函数是一个对象中的函数，那么 this 指向全局环境，严格模式this是undefined
<ul>
<li>使用匿名函数解决</li>
<li>使用bind绑定解决</li>
</ul>
</li>
</ol>
<h3 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe"><span>requestAnimationFrame</span></a></h3>
<p><strong>概念</strong>：一个原生的API去执行动画的效果，它会在一帧（Chrome 16ms）间隔内根据选择浏览器情况去执行相关动作。按照系统刷新的节奏调用</p>
<details class="hint-container details"><summary>小知识</summary>
<p>task -&gt; microtask -&gt; update the rendering。不是每次循环都走渲染过程，因为每次循环都特别快不可能每次都走一次渲染，浏览器会遵循17ms一桢的原则走一次update the rendering，其中rAF也在此阶段执行，也是rAF更流畅的原因。而重新布局也是在update the rendering阶段执行的，resize和onscroll都是在update the rendering阶段。标准里在update the rendering阶段，会有“run the resize steps”，“run the scroll steps”，这也是为啥scrolling自带节流效果最多17ms触发一次回调的原因。<br>
rAF是用户调用的，重新布局是渲染引擎自动安排的任务，必然要放到消息队列中！</p>
</details>
<h3 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest"><span>XMLHttpRequest</span></a></h3>
<p><strong>同步回调</strong>：主函数返回前执行。</p>
<p><strong>异步回调</strong>：延迟一段时间后，回调函数在主函数外调用。</p>
<ul>
<li>异步函数做成一个任务，添加到信息队列尾部</li>
<li>异步函数添加到微任务队列中，这样就可以在当前任务的末尾处执行微任务了</li>
</ul>
<p><strong>系统调用栈</strong>：事件循环系统每执行一个任务都要为这个任务维护一个系统调用栈。<br>
<img src="https://static001.geekbang.org/resource/image/d3/77/d3d66afb1a103103e5c3f86c823efb77.png" alt="示例图"></p>
<p><strong>XMLHttpRequest运作机制</strong><br>
<img src="https://static001.geekbang.org/resource/image/29/c6/2914a052f4f249a52077692a22ee5cc6.png" alt="示例图"></p>
<p>渲染进程会将请求发送给网络进程，然后网络进程负责资源的下载，等网络进程接收到数据之后，就会利用 IPC 来通知渲染进程；渲染进程接收到消息之后，会将 xhr 的回调函数封装成任务并添加到消息队列中，等主线程循环系统执行到该任务的时候，就会根据相关的状态来调用对应的回调函数。</p>
<details class="hint-container details"><summary>XMLHttpRequest 请求代码</summary>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"> <span class="token keyword">function</span> <span class="token function">GetWebData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">URL</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token doc-comment comment">/**</span>
<span class="line">      * 1:新建XMLHttpRequest请求对象</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 2:注册相关事件回调处理函数 </span>
<span class="line">     */</span></span>
<span class="line">    <span class="token comment">// 监控后台请求过程中的状态</span></span>
<span class="line">    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">switch</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token comment">//请求未初始化</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"请求未初始化"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">OPENED</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"OPENED"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">HEADERS_RECEIVED</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"HEADERS_RECEIVED"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">LOADING</span>  </span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"LOADING"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token constant">DONE</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token operator">||</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">304</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"DONE"</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 监控超时请求</span></span>
<span class="line">    xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ontimeout'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 监控出错信息</span></span>
<span class="line">    xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onerror'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 3:打开请求</span>
<span class="line">     */</span></span>
<span class="line">    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'Get'</span><span class="token punctuation">,</span> <span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建一个Get请求,采用异步</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 4:配置参数</span>
<span class="line">     */</span></span>
<span class="line">    xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">3000</span> <span class="token comment">//设置xhr请求的超时时间</span></span>
<span class="line">    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">"text"</span> <span class="token comment">//设置响应返回的数据格式</span></span>
<span class="line">    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">"X_TEST"</span><span class="token punctuation">,</span><span class="token string">"time.geekbang"</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 5:发送请求</span>
<span class="line">     */</span></span>
<span class="line">    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h3>
<p>历史原因：</p>
<ul>
<li>嵌套调用，下面的任务依赖上个任务的请求结果，并在上个任务的回调函数内部执行新的业务逻辑，这样当嵌套层次多了之后，代码的可读性就变得非常差了。</li>
<li>任务的不确定性，执行每个任务都有两种可能的结果（成功或者失败），所以体现在代码中就需要对每个任务的执行结果做两次判断，这种对每个任务都要进行一次额外的错误处理的方式，明显增加了代码的混乱程度。</li>
</ul>
<p>Promise 解决：</p>
<ul>
<li>回调函数的延时绑定</li>
<li>回调函数返回值穿透</li>
</ul>
<p>Q：Promise 中为什么要引入微任务？</p>
<p>A：由于promise采用.then延时绑定回调机制，而new Promise时又需要直接执行promise中的方法，即发生了先执行方法后添加回调的过程，此时需等待then方法绑定两个回调后才能继续执行方法回调，便可将回调添加到当前js调用栈中执行结束后的任务队列中，由于宏任务较多容易堵塞，则采用了微任务</p>
<p>Q：Promise 中是如何实现回调函数返回值穿透的？</p>
<p>首先Promise的执行结果保存在promise的data变量中，然后是.then方法返回值为使用resolved或rejected回调方法新建的一个promise对象，即例如成功则返回new Promise（resolved），将前一个promise的data值赋给新建的promise</p>
<p>Q：Promise 出错后，是怎么通过“冒泡”传递给最后那个捕获</p>
<p>promise内部有resolved_和rejected_变量保存成功和失败的回调，进入.then（resolved，rejected）时会判断rejected参数是否为函数，若是函数，错误时使用rejected处理错误；若不是，则错误时直接throw错误，一直传递到最后的捕获，若最后没有被捕获，则会报错。可通过监听unhandledrejection事件捕获未处理的promise错误</p>
<h3 id="async" tabindex="-1"><a class="header-anchor" href="#async"><span>Async</span></a></h3>
<h4 id="生成器-generator" tabindex="-1"><a class="header-anchor" href="#生成器-generator"><span>生成器(Generator)</span></a></h4>
<p><strong>协程</strong>：比线程更加轻量级的存在。协程是跑在线程上的任务，一个线程上可以存在多个协程，但是在线程上同时只能执行一个协程。协程不是被操作系统内核所管理，而完全是由程序所控制（也就是在用户态执行）。这样带来的好处就是性能得到了很大的提升，不会像线程切换那样消耗资源。</p>
<details class="hint-container details"><summary>线程切换</summary>
<p>线程是由CPU进行调度的，CPU的一个时间片内只执行一个线程上下文内的线程，当CPU由执行线程A切换到执行线程B的过程中会发生一系列的操作，这些操作主要有”保存线程A的执行现场“然后”载入线程B的执行现场”，这个过程称之为“上下文切换（context switch）”,这个上下文切换过程并不廉价，如果没有必要，应该尽量减少上下文切换的发生。</p>
</details>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">genDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"开始执行第一段"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token string">'generator 2'</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"开始执行第二段"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token string">'generator 2'</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"开始执行第三段"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token string">'generator 2'</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"执行结束"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'generator 2'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main 0'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> gen <span class="token operator">=</span> <span class="token function">genDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main 1'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main 2'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main 3'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main 4'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://static001.geekbang.org/resource/image/5e/37/5ef98bd693bcd5645e83418b0856e437.png" alt="协程执行流程图">
<img src="https://static001.geekbang.org/resource/image/92/40/925f4a9a1c85374352ee93c5e3c41440.png" alt="调用栈切换"></p>
<p><strong>Async</strong>：是一个通过<strong>异步执行</strong>并<strong>隐式返回 Promise</strong>作为结果的函数。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">100</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://static001.geekbang.org/resource/image/8d/94/8dcd8cfa77d43d1fb928d8b001229b94.png" alt="async/await执行流程"></p>
<p>Q：generator 函数是如何暂停执行程序的？</p>
<p>A：答案是通过协程来控制程序执行。
generator 函数是一个生成器，执行它会返回一个迭代器，这个迭代器同时也是一个协程。一个线程中可以有多个协程，但是同时只能有一个协程在执行。线程的执行是在内核态，是由操作系统来控制；协程的执行是在用户态，是完全由程序来进行控制，通过调用生成器的next()方法可以让该协程执行，通过yield关键字可以让该协程暂停，交出主线程控制权，通过return 关键字可以让该协程结束。协程切换是在用户态执行，而线程切换时需要从用户态切换到内核态，在内核态进行调度，协程相对于线程来说更加轻量、高效。</p>
<p>Q：async function实现原理？</p>
<p>A：async function 是通过 promise + generator 来实现的。generator 是通过协程来控制程序调度的。
​在协程中执行异步任务时，先用promise封装该异步任务，如果异步任务完成，会将其结果放入微任务队列中，然后通过yield 让出主线程执行权，继续执行主线程js，主线程js执行完毕后，会去扫描微任务队列，如果有任务则取出任务进行执行，这时通过调用迭代器的next(result)方法，并传入任务执行结果result，将主线程执行权转交给该协程继续执行，并且将result赋值给yield 表达式左边的变量，从而以同步的方式实现了异步编程。</p>
<h2 id="浏览器性能分析" tabindex="-1"><a class="header-anchor" href="#浏览器性能分析"><span>浏览器性能分析</span></a></h2>
<h3 id="chrome-开发者工具" tabindex="-1"><a class="header-anchor" href="#chrome-开发者工具"><span>Chrome 开发者工具</span></a></h3>
<p><code v-pre>Chrome 开发者工具</code>：一共包含了 10 个功能面板，包括了 Elements、Console、Sources、NetWork、Performance、Memory、Application、Security、Audits 和 Layers。</p>
<p><img src="https://static001.geekbang.org/resource/image/c5/82/c5eb9603e79547ae3d815254e24d4782.png" alt="示例图"></p>
<h3 id="网络-network-面板" tabindex="-1"><a class="header-anchor" href="#网络-network-面板"><span>网络（Network）面板</span></a></h3>
<p><img src="https://static001.geekbang.org/resource/image/46/57/46fba54f54b9bd43918308f9f1ae1357.png" alt="示例图"></p>
<h4 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器"><span>控制器</span></a></h4>
<p><img src="https://static001.geekbang.org/resource/image/f0/42/f02477088c0499247e0ed37f46ad2a42.png" alt="示例图"></p>
<h4 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器"><span>过滤器</span></a></h4>
<p>网络面板中的过滤器，主要就是起过滤功能。因为有时候一个页面有太多内容在详细列表区域中展示了，而你可能只想查看 JavaScript 文件或者 CSS 文件，这时候就可以通过过滤器模块来筛选你想要的文件类型。</p>
<h4 id="抓图信息" tabindex="-1"><a class="header-anchor" href="#抓图信息"><span>抓图信息</span></a></h4>
<p>抓图信息区域，可以用来分析用户等待页面加载时间内所看到的内容，分析用户实际的体验情况。</p>
<h4 id="时间线" tabindex="-1"><a class="header-anchor" href="#时间线"><span>时间线</span></a></h4>
<p>主要用来展示 HTTP、HTTPS、WebSocket 加载的状态和时间的一个关系，用于直观感受页面的加载过程。如果是多条竖线堆叠在一起，那说明这些资源被同时被加载。至于具体到每个文件的加载信息，还需要用到下面要讲的详细列表。</p>
<h4 id="详细列表" tabindex="-1"><a class="header-anchor" href="#详细列表"><span>详细列表</span></a></h4>
<p>详细记录了每个资源从发起请求到完成请求这中间所有过程的状态，以及最终请求完成的数据信息。</p>
<p><img src="https://static001.geekbang.org/resource/image/ba/af/ba91f06503bda4b4dc4a54901bd7a8af.png" alt="示例图">
<strong>图中信息解释</strong></p>
<ul>
<li>Queuing：请求排队时间。
<ul>
<li>资源加载优先级，CSS，HTML，JavaScript优先级搞，图片音视频，优先级低。</li>
<li>一个域名最多6个TCP链接。</li>
<li>网络进程在为数据分配磁盘空间时，新的 HTTP 请求也需要短暂地等待磁盘分配结束。</li>
</ul>
</li>
<li>Stalled：停滞时间。</li>
<li>Proxy Negotiation：代理协商的时间，使用代理服务器才会出现。</li>
<li>Initial connection/SSL：和服务器建立连接的时间，包括TCP连接时间，如果使用了HTTPS协议，还需要额外的SSL握手时间。</li>
<li>Request sent：只需要把浏览器缓冲区的数据发送出去就结束了，并不需要判断服务器是否接收到了，所以这个时间通常不到 1 毫秒。</li>
<li>Waiting (TTFB)：等待接收服务器第一个字节的数据，也称为<strong>第一字节时间</strong>。TTFB 是反映服务端响应速度的重要指标，对服务器来说，TTFB 时间越短，就说明服务器响应越快。</li>
<li>Content Download：从第一字节时间到接收到全部响应数据所用的时间。</li>
</ul>
<p><strong>优化手段</strong></p>
<ul>
<li>Queuing时间过久
<ul>
<li>多域名/升级HTTP2</li>
</ul>
</li>
<li>TTFB时间过久
<ul>
<li>服务器生成页面数据的时间过久  缓存</li>
<li>网络的原因   CDN解决</li>
<li>发送请求头时带上了多余的用户信息   减少不必的cookie信息</li>
</ul>
</li>
<li>Content Download 时间过久
<ul>
<li>减少文件大小</li>
</ul>
</li>
</ul>
<h4 id="下载信息概要" tabindex="-1"><a class="header-anchor" href="#下载信息概要"><span>下载信息概要</span></a></h4>
<p><code v-pre>DOMContentLoaded</code>:说明页面已经构建好 DOM 了，这意味着构建 DOM 所需要的 HTML 文件、JavaScript 文件、CSS 文件都已经下载完成了。<br>
<code v-pre>Load</code>:说明浏览器已经加载了所有的资源（图像、样式表等）。</p>
</div></template>


