(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{309:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux系统设置静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux系统设置静态ip"}},[s._v("#")]),s._v(" Linux系统设置静态IP")]),s._v(" "),a("p",[s._v("在日常工作中，常常会由于动态IP分配导致指定主机或者服务器的内网IP发生变化，造成很多不便，通过设置静态IP可以有效解决此问题。本文简单介绍如何在CentOS 7和Ubuntu 18.04系统中设置静态IP。")]),s._v(" "),a("h2",{attrs:{id:"centos-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[s._v("#")]),s._v(" CentOS 7")]),s._v(" "),a("h3",{attrs:{id:"_1-通过ifconfig命令查看当前的网络设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过ifconfig命令查看当前的网络设置"}},[s._v("#")]),s._v(" 1. 通过ifconfig命令查看当前的网络设置")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/Linux%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE%E9%9D%99%E6%80%81IP/%E8%8E%B7%E5%8F%96%E7%BD%91%E5%8D%A1%E4%BF%A1%E6%81%AF.png",alt:"获取网卡信息"}})]),s._v(" "),a("h3",{attrs:{id:"_2-修改网卡配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改网卡配置"}},[s._v("#")]),s._v(" 2. 修改网卡配置")]),s._v(" "),a("p",[s._v("找到 "),a("code",[s._v("/etc/sysconfig/network-scripts/")]),s._v(" 目录下网卡xxx的配置文件并修改为如下内容：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/Linux%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE%E9%9D%99%E6%80%81IP/%E7%BD%91%E5%8D%A1%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.png",alt:"网卡配置文件"}})]),s._v(" "),a("div",{staticClass:"language-toml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ethernet"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("PROXY_METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"none"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("BROWSER_ONLY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"static"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV4_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV6INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV6_AUTOCONF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV6_DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV6_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV6_ADDR_GEN_MODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stable-privacy"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p8p1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("UUID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d7fcxxxx-xxxx-xxxx-xxxx-xxxx4d87xxxx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p8p1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.101"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"255.255.255.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("DNS1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"114.114.114.114"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("DNS2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"24"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("IPV6_PRIVACY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ZONE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("IPADDR")]),s._v(" 即是我们设置的静态IP地址。")]),s._v(" "),a("h3",{attrs:{id:"_3-重启network服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启network服务"}},[s._v("#")]),s._v(" 3. 重启network服务")]),s._v(" "),a("p",[s._v("修改配置文件之后，执行 "),a("code",[s._v("service network restart")]),s._v(" 命令重启network服务即可让配置生效。")]),s._v(" "),a("h2",{attrs:{id:"ubuntu-18-04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04"}},[s._v("#")]),s._v(" Ubuntu 18.04")]),s._v(" "),a("h3",{attrs:{id:"_1-修改网卡配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改网卡配置"}},[s._v("#")]),s._v(" 1. 修改网卡配置")]),s._v(" "),a("p",[s._v("找到 "),a("code",[s._v("/etc/netplan/")]),s._v(" 目录下的 "),a("code",[s._v("yaml")]),s._v(" 格式配置文件，修改配置文件内容为：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ethernets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("p8p1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dhcp4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" no\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("192.168.1.101/24"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("optional")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gateway4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.1.1\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nameservers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("114.114.114.114"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 192.168.1.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_2-配置生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置生效"}},[s._v("#")]),s._v(" 2. 配置生效")]),s._v(" "),a("p",[s._v("执行 "),a("code",[s._v("sudo netplan apply")]),s._v(" 命令使配置生效。")])])}),[],!1,null,null,null);t.default=r.exports}}]);