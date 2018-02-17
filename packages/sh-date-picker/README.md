# sh-date-picker

> 日期选择器 - 小程序组件

## Install

``` bash
$ min install @showings-min/sh-date-picker
```


## API

### DatePicker

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`name`     |String: 当触发表单容器的onSubmit方法时，所返回的字段名称（参考原生输入控件与form标签的onSubmit方法介绍）|
|`value`    |String: 当触发表单容器的onSubmit方法时，所返回的字段值|
|`label`    |String: 字段名称，与name不同意义|
|`labelWidth`|String: 字段名宽度，例如：100rpx|
|`onChange(e)` |Function: 日期修改即刻回调，参数e中携带currentDate            |
|`onConfirm(e)`|Function: 点击确定后回调的函数，参数e中携带currentDate|

## ChangeLog

#### v1.0.0（2018-2-15）

- 初始版本
