(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{375:function(v,_,t){"use strict";t.r(_);var a=t(1),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"重载与覆盖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载与覆盖"}},[v._v("#")]),v._v(" 重载与覆盖")]),v._v(" "),t("h2",{attrs:{id:"重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载"}},[v._v("#")]),v._v(" 重载")]),v._v(" "),t("p",[v._v("重载（overloading）是在一个类里面，方法名称相同，而参数不同。返回类型可以相同也可以不同。")]),v._v(" "),t("p",[v._v("每个重载的方法（包括构造方法）都必须有一个独一无二的参数类型列表。")]),v._v(" "),t("p",[v._v("重载规则：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("被重载的方法必须改变参数列表（参数个数或类型不一样）。")])]),v._v(" "),t("li",[t("p",[v._v("被重载的方法可以改变返回类型。")])]),v._v(" "),t("li",[t("p",[v._v("被重载的方法可以改变访问修饰符。")])]),v._v(" "),t("li",[t("p",[v._v("被重载的方法可以声明新的或更广的检查异常。")])]),v._v(" "),t("li",[t("p",[v._v("方法能够在同一个类中或者在一个子类中被重载。")])]),v._v(" "),t("li",[t("p",[v._v("无法以返回值类型作为重载方法的区分标准。")])])]),v._v(" "),t("h2",{attrs:{id:"覆盖（又称重写）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖（又称重写）"}},[v._v("#")]),v._v(" 覆盖（又称重写）")]),v._v(" "),t("p",[v._v("覆盖（Override）是子类对父类的允许访问的方法的实现过程进行重新编写，返回值和形参都不能改变。")]),v._v(" "),t("p",[v._v("覆盖的好处在于子类可以根据需要，定义特定于自己的行为，也就是说子类能够根据需要实现父类的方法。")]),v._v(" "),t("p",[v._v("覆盖方法不能抛出新的检查异常或者比被覆盖方法声明更加宽泛的异常。")]),v._v(" "),t("p",[v._v("覆盖规则：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("参数列表必须完全于被覆盖方法的相同。")])]),v._v(" "),t("li",[t("p",[v._v("返回类型必须完全于被覆盖方法的返回类型相同。")])]),v._v(" "),t("li",[t("p",[v._v("访问权限不能比父类中被覆盖的方法的访问权限更低。例如：如果父类的一个方法被声明为public，在子类中覆盖该方法就不能声明为protected。")])]),v._v(" "),t("li",[t("p",[v._v("父类的成员方法只能被它的子类覆盖。")])]),v._v(" "),t("li",[t("p",[v._v("声明为final的方法不能被覆盖。")])]),v._v(" "),t("li",[t("p",[v._v("声明为static的方法不能被覆盖，但是能够被再次声明（不使用@Override注解修饰方法）。")])]),v._v(" "),t("li",[t("p",[v._v("子类和父类在同一个包中，子类可以覆盖父类所有方法，除了声明为private和final的方法。")])]),v._v(" "),t("li",[t("p",[v._v("子类和父类不在同一个包中，子类只能够覆盖父类声明为public和protected的非final方法。")])]),v._v(" "),t("li",[t("p",[v._v("覆盖的方法能够抛出任何非强制类异常，无论被覆盖的方法是否抛出异常。但是，覆盖的方法不能抛出新的强制性异常，或者比被覆盖方法声明的更广泛的强制性异常。")])]),v._v(" "),t("li",[t("p",[v._v("构造方法不能被覆盖。")])]),v._v(" "),t("li",[t("p",[v._v("如果不能继承一个方法，则不能覆盖这个方法。")])])]),v._v(" "),t("p",[v._v("super关键字的使用：当需要在子类中调用父类的被覆盖方法时，需要使用super关键字。")]),v._v(" "),t("h2",{attrs:{id:"两者的区别与联系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者的区别与联系"}},[v._v("#")]),v._v(" 两者的区别与联系")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("区别点")]),v._v(" "),t("th",[v._v("重载")]),v._v(" "),t("th",[v._v("覆盖")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("参数列表")]),v._v(" "),t("td",[v._v("必须修改")]),v._v(" "),t("td",[v._v("不能修改")])]),v._v(" "),t("tr",[t("td",[v._v("返回类型")]),v._v(" "),t("td",[v._v("可以修改")]),v._v(" "),t("td",[v._v("不能修改")])]),v._v(" "),t("tr",[t("td",[v._v("异常")]),v._v(" "),t("td",[v._v("可以修改")]),v._v(" "),t("td",[v._v("可以减少或删除，不能抛出新的或更宽泛的异常")])]),v._v(" "),t("tr",[t("td",[v._v("访问")]),v._v(" "),t("td",[v._v("可以修改")]),v._v(" "),t("td",[v._v("不能做更严格的限制（可以降低限制）")])])])]),v._v(" "),t("p",[v._v("方法的重载和覆盖时Java多态性的不同表现，覆盖时父类与子类之间多态性的一种表现，重载可以理解为多态的具体表现形式。")])])}),[],!1,null,null,null);_.default=r.exports}}]);