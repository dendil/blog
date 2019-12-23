(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{321:function(v,_,l){"use strict";l.r(_);var i=l(1),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"架构五要素"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#架构五要素"}},[v._v("#")]),v._v(" 架构五要素")]),v._v(" "),l("p",[v._v("一般在做架构设计时，我们会关注以下五个要素：")]),v._v(" "),l("ul",[l("li",[v._v("高性能")]),v._v(" "),l("li",[v._v("高可用")]),v._v(" "),l("li",[v._v("伸缩性")]),v._v(" "),l("li",[v._v("扩展性")]),v._v(" "),l("li",[v._v("安全性")])]),v._v(" "),l("h2",{attrs:{id:"高性能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#高性能"}},[v._v("#")]),v._v(" 高性能")]),v._v(" "),l("p",[v._v("性能的测试指标主要有：")]),v._v(" "),l("ul",[l("li",[v._v("响应时间：指应用执行一个操作需要的时间")]),v._v(" "),l("li",[v._v("并发数：指系统能够同时处理请求的数目")]),v._v(" "),l("li",[v._v("QPS：指单位时间内系统处理的请求量")]),v._v(" "),l("li",[v._v("系统性能计数器：描述服务器或者操作系统性能的一些数据指标")])]),v._v(" "),l("p",[v._v("性能优化，根据网站分层架构，可以分为三大类：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Web前端性能优化")]),v._v(" "),l("ul",[l("li",[v._v("减少http请求")]),v._v(" "),l("li",[v._v("适用浏览器缓存")]),v._v(" "),l("li",[v._v("启用压缩")]),v._v(" "),l("li",[v._v("减少Cookie传输")])])]),v._v(" "),l("li",[l("p",[v._v("应用服务器性能优化：缓存、集群、异步")]),v._v(" "),l("ul",[l("li",[v._v("多线程（设计为无状态，使用局部对象，并发访问资源使用锁）")]),v._v(" "),l("li",[v._v("资源复用（单例，对象池）")]),v._v(" "),l("li",[v._v("数据结构")]),v._v(" "),l("li",[v._v("异步操作（消息队列，削峰作用）")]),v._v(" "),l("li",[v._v("多台应用服务器组成一个集群共同对外服务，提高整体处理能力")]),v._v(" "),l("li",[v._v("使用CDN，将网站静态内容分发至里用户最近的网络服务器机房，使用户通过最短访问路径获取数据。可以在网站机房部署反向代理服务器，缓存热点文件，加快请求响应速度，减轻应用服务器负载压力")]),v._v(" "),l("li",[v._v("应用服务器端，可以使用服务器本地缓存和分布式缓存（网站性能优化第一定律：考虑使用缓存优化性能）")]),v._v(" "),l("li",[v._v("代码层面，通过使用多线程、改善内存管理等手段优化性能")]),v._v(" "),l("li",[v._v("数据库服务器端，索引、缓存、SQL优化等手段优化性能")]),v._v(" "),l("li",[v._v("NoSQL数据库通过优化数据模型、存储结构、伸缩特性等")])])]),v._v(" "),l("li",[l("p",[v._v("存储服务器性能优化")]),v._v(" "),l("ul",[l("li",[v._v("机械硬盘 vs 固态硬盘")]),v._v(" "),l("li",[v._v("B+树 vs LSM树")]),v._v(" "),l("li",[v._v("RAID vs HDFS")])])])]),v._v(" "),l("h2",{attrs:{id:"高可用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[v._v("#")]),v._v(" 高可用")]),v._v(" "),l("p",[v._v("高可用的网站架构：目的是保证服务器硬件故障时服务依然可用、数据依然保存并能够被访问，主要手段有数据和服务的冗余备份及失效转移。")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("高可用的应用：")]),v._v(" "),l("ul",[l("li",[v._v("通过负载均衡进行无状态服务的失效转移")]),v._v(" "),l("li",[v._v("应用服务器集群的Session管理")])])]),v._v(" "),l("li",[l("p",[v._v("高可用的服务：无状态的服务，可使用类似负载均衡的失效转移策略，此外还有如下策略")]),v._v(" "),l("ul",[l("li",[v._v("超时设置")]),v._v(" "),l("li",[v._v("异步调用")]),v._v(" "),l("li",[v._v("服务降级")]),v._v(" "),l("li",[v._v("限流")])])]),v._v(" "),l("li",[l("p",[v._v("高可用的数据：主要手段是数据备份和失效转移机制")]),v._v(" "),l("ul",[l("li",[v._v("失效确认")]),v._v(" "),l("li",[v._v("访问转移")]),v._v(" "),l("li",[v._v("数据恢复")]),v._v(" "),l("li",[v._v("冷备：缺点是不能保证数据最终一致和数据可用性")]),v._v(" "),l("li",[v._v("热备：分为异步热备和同步热备")]),v._v(" "),l("li",[v._v("数据一致性（Consistency）")]),v._v(" "),l("li",[v._v("数据可用性（Availability）")]),v._v(" "),l("li",[v._v("分区容错性（Partition Tolerance）")]),v._v(" "),l("li",[v._v("CAP原理")]),v._v(" "),l("li",[v._v("数据备份")])])]),v._v(" "),l("li",[l("p",[v._v("软件质量保证")]),v._v(" "),l("ul",[l("li",[v._v("自动化测试")]),v._v(" "),l("li",[v._v("预发布验证")]),v._v(" "),l("li",[v._v("灰度发布")])])]),v._v(" "),l("li",[l("p",[v._v("网站实时监控")]),v._v(" "),l("ul",[l("li",[v._v("警报系统")]),v._v(" "),l("li",[v._v("自动优雅降级")]),v._v(" "),l("li",[v._v("用户行为日志采集（服务端和客户端）")]),v._v(" "),l("li",[v._v("服务器性能监控")]),v._v(" "),l("li",[v._v("监控数据采集")]),v._v(" "),l("li",[v._v("监控管理")])])])]),v._v(" "),l("h2",{attrs:{id:"伸缩性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#伸缩性"}},[v._v("#")]),v._v(" 伸缩性")]),v._v(" "),l("p",[v._v("概括起来伸缩性分为如下几个方面：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("应用服务器集群的伸缩性设计")]),v._v(" "),l("ul",[l("li",[v._v("轮询（Round Robin，RR）")]),v._v(" "),l("li",[v._v("加权轮询（Weighted Round Robin，WRR）")]),v._v(" "),l("li",[v._v("随机（Random）")]),v._v(" "),l("li",[v._v("最少链接（Least Connections）")]),v._v(" "),l("li",[v._v("源地址散列（Source Hashing）")]),v._v(" "),l("li",[v._v("DNS域名解析负载均衡")]),v._v(" "),l("li",[v._v("反向代理负载均衡（在HTTP协议层里，应用层负载均衡）")]),v._v(" "),l("li",[v._v("IP负载均衡（在内核进程完成数据分发）")]),v._v(" "),l("li",[v._v("数据链路层负载均衡（数据链路层修改mac地址，三角传输模式，LVS）")])])]),v._v(" "),l("li",[l("p",[v._v("分布式缓存集群的伸缩性设计")]),v._v(" "),l("ul",[l("li",[v._v("Redis集群")]),v._v(" "),l("li",[v._v("分布式缓存的一致性Hash算法（一致性Hash环，虚拟层）")])])]),v._v(" "),l("li",[l("p",[v._v("数据存储服务集群的伸缩性设计")]),v._v(" "),l("ul",[l("li",[v._v("关系数据库集群的伸缩性设计")]),v._v(" "),l("li",[v._v("NoSQL数据库的伸缩性设计")])])])]),v._v(" "),l("h2",{attrs:{id:"扩展性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#扩展性"}},[v._v("#")]),v._v(" 扩展性")]),v._v(" "),l("p",[v._v("系统架构设计层面的“开闭原则”，构建可扩展的网站架构。")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("利用分布式消息队列降低耦合性")]),v._v(" "),l("ul",[l("li",[v._v("分布式消息队列")]),v._v(" "),l("li",[v._v("事件驱动架构（Event Driven Architecture）")])])]),v._v(" "),l("li",[l("p",[v._v("利用分布式服务打造可复用的业务平台")])]),v._v(" "),l("li",[l("p",[v._v("可扩展的数据结构（如HBase的ColumnFamily设计）")])]),v._v(" "),l("li",[l("p",[v._v("利用开放平台建设网站生态圈")])])]),v._v(" "),l("h2",{attrs:{id:"安全性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[v._v("#")]),v._v(" 安全性")]),v._v(" "),l("p",[v._v("XSS攻击和SQL注入时构成网站应用攻击最主要的两种手段，此外还包括CSRF，Session劫持等手段。")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("攻击与防御")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Error Code")])]),v._v(" "),l("li",[l("p",[v._v("表单Token")])]),v._v(" "),l("li",[l("p",[v._v("验证码")])]),v._v(" "),l("li",[l("p",[v._v("Jsonp请求的，Referer校验")])]),v._v(" "),l("li",[l("p",[v._v("SQL注入")])]),v._v(" "),l("li",[l("p",[v._v("html危险字符转义")])]),v._v(" "),l("li",[l("p",[v._v("XSS攻击：跨站点脚本攻击（Cross Site Script）")]),v._v(" "),l("blockquote",[l("p",[v._v("对js转义，使其失去执行能力，只能作为纯字符串展示")])])]),v._v(" "),l("li",[l("p",[v._v("CSRF攻击：跨站点请求伪造（Cross Site Request Forgery）")]),v._v(" "),l("blockquote",[l("p",[v._v("防范：httpOnly；增加token校验；通过Referer识别。")])])]),v._v(" "),l("li",[l("p",[v._v("网站安全漏洞扫描")])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);