# sh-input

> 文本输入 - 小程序组件

## Install

``` bash
$ min install @showings-min/sh-input
```


## API

### Input

| 名称             |描述                      |
|-----------------|--------------------------|
|`name`     |String: 当触发表单容器的onSubmit方法时，所返回的字段名称（参考原生输入控件与form标签的onSubmit方法介绍）|
|`value`    |String: 当触发表单容器的onSubmit方法时，所返回的字段值|
|`label`    |String: 字段名称，与name不同意义|
|`labelWidth` |String: 字段名宽度，例如：100rpx|
|`type`     |String: 可选"text/number/idcard/digit",参考小程序文档input部分|
|`password` |Boolean: 是否是密码输入框|
|`disabled` |Boolean: 是否不可用|
|`placeholder` |String: 提示占位文字|
|`max` |Number: 最大输入字数|
|`autoFocus` |Boolean: 是否自动聚焦|
|`focus` |Boolean: 是否聚焦|



## ChangeLog

#### v1.0.0（2018-2-14）

- 初始版本
