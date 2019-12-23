(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{259:function(v,_,l){"use strict";l.r(_);var t=l(1),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"jvm参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数"}},[v._v("#")]),v._v(" JVM参数")]),v._v(" "),l("h2",{attrs:{id:"jvm参数-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数-2"}},[v._v("#")]),v._v(" JVM参数")]),v._v(" "),l("ul",[l("li",[v._v("-Xms")])]),v._v(" "),l("p",[v._v("堆最小值")]),v._v(" "),l("ul",[l("li",[v._v("-Xmx")])]),v._v(" "),l("p",[v._v("堆最大值。-Xms与-Xmx的单位默认字节都是以k、m做单位的。通常着两个配置参数相等，避免每次空间不足，动态扩容带来的影响。")]),v._v(" "),l("ul",[l("li",[v._v("-Xmn")])]),v._v(" "),l("p",[v._v("新生代大小")]),v._v(" "),l("ul",[l("li",[v._v("-Xss")])]),v._v(" "),l("p",[v._v("每个线程池的堆栈大小。在jdk5以上的版本，每个线程堆栈大小为1m，jdk5以前的版本是每个线程池大小为256k。一般在相同物理内存下，如果减少 -Xss 值会产生更大的线程数，但不同的操作系统堆进程内线程数是有限制的，不能无限生成。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:NewRatio")])]),v._v(" "),l("p",[v._v("设置新生代与老年代比值，-XX:NewRatio=4 表示新生代与老年代所占比例为 1:4，新生代占比整个堆的五分之一。如果设置了-Xmn的情况下，该参数是不需要再设置的。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:PermSize")])]),v._v(" "),l("p",[v._v("设置持久代初始值，默认是物理内存的64分之一")]),v._v(" "),l("ul",[l("li",[v._v("-XX:MaxPermSize")])]),v._v(" "),l("p",[v._v("设置持久代最大值，默认是物理内存的四分之一")]),v._v(" "),l("ul",[l("li",[v._v("-XX:MaxTenuringThreshold")])]),v._v(" "),l("p",[v._v("新生代中对象存活次数，默认是15。（若对象再eden区，经历一次MinorGC后还活着，则被移动到Survivor区，年龄加1。以后，对象每次经理MinorGC，年龄都加1。达到阈值，则移入老年代）")]),v._v(" "),l("ul",[l("li",[v._v("-XX:SurvivorRatio")])]),v._v(" "),l("p",[v._v("Eden区与Survivor区大小的比值，如果设置为8，两个Survivor区与一个Eden区的比值为2:8，一个Survivor区占整个新生代的十分之一")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+UseFastAccessorMethods")])]),v._v(" "),l("p",[v._v("原始类型快速优化")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+AggressiveOpts")])]),v._v(" "),l("p",[v._v("编译速度加快")]),v._v(" "),l("ul",[l("li",[v._v("-XX:PretenureSizeThreshold")])]),v._v(" "),l("p",[v._v("对象超过多大值时直接再老年代中分配")]),v._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[v._v("说明")]),v._v(" "),l("p",[v._v("整个堆大小的计算公式：JVM堆大小 = 年轻代大小 + 年老代大小 + 持久代大小。")]),v._v(" "),l("p",[v._v("增大新生代大小就会减少对应的年老代大小，设置-Xmn值对系统性能影响较大，所以如果设置新生代大小的调整，则需要严格的测试调整。而新生代是用来存放新创建的对象，大小是随着堆大小增大和减少而有相应的变化，默认值是保持堆大小的十五分之一，-Xmn参数就是设置新生代的大小，也可以通过-XX:NewRatio来设置新生代与年老代的比例，Java官方推荐配置为3:8。")]),v._v(" "),l("p",[v._v("新生代的特点就是内存中的对象更新速度快，在短时间内容易产生大量的无用对象，使用这个参数时就需要考虑垃圾回收期设置参数也需要进行调整。推荐使用：复制清除算法和并行收集器进行垃圾回收，而新生代的垃圾回收叫做初级回收。")]),v._v(" "),l("p",[v._v("StackOverflowError和OutOfMemoryException。当线程中的请求的栈的深度大于最大可用深度，就会抛出前者；如果内存空间不够，则无法创建新的线程，则会抛出后者。栈的大小直接决定了函数调用的最大深度，栈越大，函数嵌套可调用次数就越多。")])]),v._v(" "),l("h3",{attrs:{id:"经验"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#经验"}},[v._v("#")]),v._v(" 经验")]),v._v(" "),l("ol",[l("li",[v._v("-Xmn用于设置新生代的大小。过小会增加Minor GC频率，过大会减小老年代的大小。一般设为整个堆空间的1/4或1/3。")]),v._v(" "),l("li",[v._v("-XX:SurvivorRatio用于设置新生代中survivor空间（from/to）和eden空间的大小比例；-XX:TargetSurvivorRatio表示当经历Minor GC后，survivor空间占有量（百分比）超过它的时候，就会压缩进入老年代（当然，如果survivor空间不够，则直接进入老年代）。默认值为50%。")]),v._v(" "),l("li",[v._v("为了性能考虑，一开始尽量将新生代对象留在新生代，避免新生的大对象直接进入老年代。因为新生对象大部分都是短期的，这就造成了老年代的内存浪费，并且回收代价也高（Full GC发生在老年代和方法去Perm）。")]),v._v(" "),l("li",[v._v("当 -Xms=-Xmx，可以使得堆相对稳定，避免不停震荡。")]),v._v(" "),l("li",[v._v("一般来说，MaxPermSize设为64Mb可以满足绝大多数的应用了。如果依然出现方法区溢出，则可以设为128Mb。如果128Mb还不能满足需求，那么就应该考虑程序优化了，减少"),l("strong",[v._v("动态类")]),v._v("的产生。")])]),v._v(" "),l("h2",{attrs:{id:"垃圾回收"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[v._v("#")]),v._v(" 垃圾回收")]),v._v(" "),l("h3",{attrs:{id:"垃圾回收算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[v._v("#")]),v._v(" 垃圾回收算法")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("引用计数法：会有循环引用的问题，古老的方法；")])]),v._v(" "),l("li",[l("p",[v._v("Mark-Sweep：标记清除。根可达判断，最大的问题是空间碎片（清除垃圾之后剩下不连续的内存空间）；")])]),v._v(" "),l("li",[l("p",[v._v("Copying：复制算法。对于短命对象来说有用，否则需要复制大量的对象，效率低。"),l("strong",[v._v("如Java的新生代堆空间中就是使用了它（survivor空间的from和to区）")]),v._v("；")])]),v._v(" "),l("li",[l("p",[v._v("Mark-Compact：标记整理。对于老年对象来说有用，无需复制，不会产生内存碎片。")])])]),v._v(" "),l("h3",{attrs:{id:"gc考虑的指标"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gc考虑的指标"}},[v._v("#")]),v._v(" GC考虑的指标")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("吞吐量：应用耗时和实际耗时的比值；")])]),v._v(" "),l("li",[l("p",[v._v("停顿时间：垃圾回收的时候，由于Stop the world，应用程序的所有线程会挂起，造成应用停顿。")])])]),v._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[v._v("说明")]),v._v(" "),l("p",[v._v("吞吐量和停顿时间是互斥的。")]),v._v(" "),l("p",[v._v("对于后端服务（比如后台计算任务），吞吐量优先考虑（并行垃圾回收）；")]),v._v(" "),l("p",[v._v("对于前端应用，RT响应时间优先考虑，减少垃圾收集时的停顿时间，使用场景是Web系统（并发垃圾回收）。")])]),v._v(" "),l("h3",{attrs:{id:"回收期的jvm参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#回收期的jvm参数"}},[v._v("#")]),v._v(" 回收期的JVM参数")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+UseSerialGC")])]),v._v(" "),l("p",[v._v("串行垃圾回收，现在基本很少使用。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+UseParNewGC")])]),v._v(" "),l("p",[v._v("新生代使用并行，老年代使用串行。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+UseConcMarkSweepGC")])]),v._v(" "),l("p",[v._v("新生代使用并行，老年代使用CMS（一般都是使用这种方式），CMS是Concurrent Mark Sweep的缩写，并发标记清除，一看就是老年代的算法，所以，它可以作为老年代的垃圾回收器。CMS不是独占式的，它关注停顿时间。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:ParallelGCThreads")])]),v._v(" "),l("p",[v._v("指定并行的垃圾回收线程的数量，最好等于CPU数量。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+DisableExplicitGC")])]),v._v(" "),l("p",[v._v("禁用System.gc()，因为它会触发Full GC，这是很浪费性能的，JVM会在需要GC的时候自己触发GC。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:CMSFullGCsBeforeCompaction")])]),v._v(" "),l("p",[v._v("在多少次GC后进行内存压缩，这个是因为并行收集器不对内存空间进行压缩的，所以运行一段时间后会产生很多碎片，使得运行效率降低。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+CMSParallelRemarkEnabled")])]),v._v(" "),l("p",[v._v("降低标记停顿。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+UseCMSCompactAtFullCollection")])]),v._v(" "),l("p",[v._v("在每次一Full GC时对老年代区域碎片整理，因为CMS是不会移动内存的，因此会非常容易出现碎片导致内存不够用。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+UseCmsInitiatingOccupancyOnly")])]),v._v(" "),l("p",[v._v("使用手动触发或者自定义触发cms收集，同时也会禁止hotspot自行出发CMS GC。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:CMSInitiatingOccupancyFraction")])]),v._v(" "),l("p",[v._v("使用CMS作为垃圾回收，使用70%后开始CMS收集。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:CMSInitiatingPermOccupancyFraction")])]),v._v(" "),l("p",[v._v("使用perm gen使用达到多少百分比时触发垃圾回收，默认时92%。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+CMSIncrementalMode")])]),v._v(" "),l("p",[v._v("设置为增量模式。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+CMSClassUnloadingEnabled")])]),v._v(" "),l("p",[v._v("CMS是不会默认对永久代进行垃圾回收的，设置此参数则是开启。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+PrintGCDetails")])]),v._v(" "),l("p",[v._v("开启详细GC日志模式，日志的格式是和所使用的算法有关。")]),v._v(" "),l("ul",[l("li",[v._v("-XX:+PrintGCDateStamps")])]),v._v(" "),l("p",[v._v("将时间和日期也加入到GC日志中。")]),v._v(" "),l("p",[l("strong",[v._v("配置参考")])]),v._v(" "),l("p",[l("img",{attrs:{src:"/images/JVM%E5%8F%82%E6%95%B0/jvm-param-config.png",alt:"jvm-param-config"}})]),v._v(" "),l("p",[l("strong",[v._v("案例分享")])]),v._v(" "),l("p",[l("img",{attrs:{src:"/images/JVM%E5%8F%82%E6%95%B0/jvm-param-sample.png",alt:"jvm-param-sample"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);