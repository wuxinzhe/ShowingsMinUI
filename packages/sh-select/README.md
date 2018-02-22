# sh-select

> 选择器 - 小程序组件

## Install

``` bash
$ min install @showings-min/sh-select
```


## API

### Select

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`name`     |String: 当触发表单容器的onSubmit方法时，所返回的字段名称（参考原生输入控件与form标签的onSubmit方法介绍）|
|`value`    |String: 当触发表单容器的onSubmit方法时，所返回的值|
|`label`    |String: 字段名称，与name不同意义|
|`labelWidth`|String: 字段名宽度，例如：100rpx|
|`title`    |String: 选择器标题|
|`options`|Array: 待选选项|
|`onConfirm(e)`|Function: 点击确定后回调的函数，参数e中携带value|


## ChangeLog

#### v1.0.0（2018-2-21）

- 初始版本
