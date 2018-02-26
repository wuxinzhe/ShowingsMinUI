# ShowingsMinUI

> ShowingsMinUI-小程序组件库

![qrcode](http://image.showings.com.cn/qrcode.jpeg)

##随便聊聊
>本组件库是由我个人基于MIT协议开源，说实在的，我也不知道MIT协议是什么。= =第一次做开源项目，小程序目前有很多不错的组件库，会产生再做一个UI库是因为Min的组件开发CLI真的非常方便，一开始本只想做一个自己用的组件库（我在开发小程序的时候，市面上还没有什么开源UI组件库，所以那时候都是直接写原生），但后来发现了Min-Cli，就觉得这么方便的东西，不如直接把我的组件库开源了。于是就开始翻写，把之前写原生的都翻写到Min了，最终就有了这个ShowingsUI组件库。而且由于Min的UI组件库缺乏表单控件，所以我感觉自己做这个还是挺有意义的。

###安装
``` bash
$ min install @showings-min/${组件名}
```
>安装时，只需要把上述组件名换成你想安装的组件名称即可，组件名如何获取？很简单，在项目根目录下，打开[packages](https://github.com/wuxinzhe/ShowingsMinUI/tree/master/packages)目录，你会看到诸如sh-*这样的组件列表，比如你想安装input表单控件，你就 min install @showings-min/sh-input 如此即可。再不济，你扫一下上述二维码，打开小程序Demo，每个控件都有详细使用文档，文档中就有记录该控件的安装代码，这个是最直白的方式（推荐）。


###基于Min
>吃水不忘挖井人，本组件库是基于Min-Cli开发套件开发的UI库，当然也借助Min的特性，本组件库可以结合Wepy进行开发，至于怎么开发，查看[Min的文档](https://meili.github.io/min/docs/min-cli/third-project/tutorial/with-wepy.html)即可。
