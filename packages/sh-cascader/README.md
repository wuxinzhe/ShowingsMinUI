# sh-cascader

> 级联选择器 - 小程序组件

## Install

``` bash
$ min install @showings-min/sh-cascader
```


## API

### Cascader

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`name`     |String: 当触发表单容器的onSubmit方法时，所返回的字段名称（参考原生输入控件与form标签的onSubmit方法介绍）|
|`value`    |String: 当触发表单容器的onSubmit方法时，所返回的值|
|`label`    |String: 字段名称，与name不同意义|
|`labelWidth`|String: 字段名宽度，例如：100rpx|
|`title`    |String: 选择器标题|
|`options`|Array: 级联选项，数据结构是嵌套的树形结构，具体请参考示例代码|

## ChangeLog

#### v1.0.0（2018-2-18）

- 初始版本
