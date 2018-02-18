# sh-input-number

> 数字输入 - 小程序组件

## Install

``` bash
$ min install @showings-min/sh-input-number
```


## API

### InputNumber

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`name`     |String: 当触发表单容器的onSubmit方法时，所返回的字段名称（参考原生输入控件与form标签的onSubmit方法介绍）|
|`value`    |String: 当触发表单容器的onSubmit方法时，所返回的字段值|
|`label`    |String: 字段名称，与name不同意义|
|`labelWidth` |String: 字段名宽度，例如：100rpx|
|`min`    |Number: 最小值|
|`max` |Number: 最大值|
|`onInput(e)` |Function: 输入变化回调函数，参数内带值|
|`onPlus(e)` |Function: 数字增加回调函数，参数内带值|
|`onMinus(e)` |Function: 数字减少回调函数，参数内带值|

## ChangeLog

#### v1.0.0（2018-2-17）

- 初始版本
