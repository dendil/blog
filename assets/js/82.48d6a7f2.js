(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{354:function(e,l,t){"use strict";t.r(l);var v=t(1),_=Object(v.a)({},(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"java多线程知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java多线程知识点"}},[e._v("#")]),e._v(" Java多线程知识点")]),e._v(" "),t("p",[e._v("Java多线程相关的一些面试题。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("线程和进程有什么区别？")]),e._v(" "),t("p",[e._v("一个进程是一个独立(self contained)的运行环境，它可以被看作一个程序或者一个应用。而线程是在进程中执行的一个任务。线程是进程的子集，一个进程可以有很多线程，每条线程并行执行不同的任务。不同的进程使用不同的内存空间，而所有的线程共享一片相同的内存空间。别把它和栈内存搞混，每个线程都拥有单独的栈内存用来存储本地数据。")])]),e._v(" "),t("li",[t("p",[e._v("如何在Java种实现线程？")]),e._v(" "),t("p",[e._v("创建线程有两种方式：1、继承 Thread 类，扩展线程。2、实现 Runnable 接口。")])]),e._v(" "),t("li",[t("p",[e._v("启动一个线程是调用run()还是start()方法？")]),e._v(" "),t("p",[e._v("启动一个线程是调用start()方法，使线程所代表的虚拟处理机处于可运行状态，这意味着它可以由JVM 调度并执行，这并不意味着线程就会立即运行。run()方法是线程启动后要进行回调（callback）的方法。")])]),e._v(" "),t("li",[t("p",[e._v("Thread类的sleep()方法和对象的wait()方法都可以让线程暂停执行，它们有什么区别？")]),e._v(" "),t("p",[e._v("sleep()方法（休眠）是线程类（Thread）的静态方法，调用此方法会让当前线程暂停执行指定的时间，将执行机会（CPU）让给其他线程，但是对象的锁依然保持，因此休眠时间结束后会自动恢复（线程回到就绪状态，请参考第66题中的线程状态转换图）。wait()是Object类的方法，调用对象的wait()方法导致当前线程放弃对象的锁（线程暂停执行），进入对象的等待池（wait pool），只有调用对象的notify()方法（或notifyAll()方法）时才能唤醒等待池中的线程进入等锁池（lock pool），如果线程重新获得对象的锁就可以进入就绪状态。")])]),e._v(" "),t("li",[t("p",[e._v("线程的sleep()方法和yield()方法有什么区别？")]),e._v(" "),t("ol",[t("li",[e._v("sleep()方法给其他线程运行机会时不考虑线程的优先级，因此会给低优先级的线程以运行的机会；yield()方法只会给相同优先级或更高优先级的线程以运行的机会；")]),e._v(" "),t("li",[e._v("线程执行sleep()方法后转入阻塞（blocked）状态，而执行yield()方法后转入就绪（ready）状态；")]),e._v(" "),t("li",[e._v("sleep()方法声明抛出InterruptedException，而yield()方法没有声明任何异常；")]),e._v(" "),t("li",[e._v("sleep()方法比yield()方法（跟操作系统CPU调度相关）具有更好的可移植性。")])])]),e._v(" "),t("li",[t("p",[e._v("请说出线程同步以及线程调度相关的方法。")]),e._v(" "),t("ul",[t("li",[e._v("wait()：使一个线程处于等待（阻塞）状态，并且释放所持有的对象的锁；")]),e._v(" "),t("li",[e._v("sleep()：使一个正在运行的线程处于睡眠状态，是一个静态方法，调用此方法要处理InterruptedException异常；")]),e._v(" "),t("li",[e._v("notify()：唤醒一个处于等待状态的线程，当然在调用此方法的时候，并不能确切的唤醒某一个等待状态的线程，而是由JVM确定唤醒哪个线程，而且与优先级无关；")]),e._v(" "),t("li",[e._v("notityAll()：唤醒所有处于等待状态的线程，该方法并不是将对象的锁给所有线程，而是让它们竞争，只有获得锁的线程才能进入就绪状态。")])])])])])}),[],!1,null,null,null);l.default=_.exports}}]);