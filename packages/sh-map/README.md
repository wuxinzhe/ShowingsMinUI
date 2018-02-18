# sh-map

> 地图选择 - 小程序组件

## Install

``` bash
$ min install @showings-min/sh-map
```


## API

### Map

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`name`     |String: 当触发表单容器的onSubmit方法时，所返回的字段名称（参考原生输入控件与form标签的onSubmit方法介绍）|
|`value`    |Object: 当触发表单容器的onSubmit方法时，所返回的经纬度对象，同时也是地图初始定位经纬度|
|`label`    |String: 字段名称，与name不同意义|
|`labelWidth` |String: 字段名宽度，例如：100rpx|
|`marker` |Object: 数据结构与微信地图原生组件中的marker相同，但注意，本组件只支持一个marker所以此参数不是数组，只是原生markers数组中的一个子元素而已|
|`scale`    |Number: 地图缩放等级|
|`iconPath` |String: marker标记的图片地址，支持本地图片，建议路径采用绝对值，上述参数marker对象中也有这个字段，这两个字段特性相同，但本参数与marker中的iconPath使用场景不同，所以都要分别定义。|


## ChangeLog

#### v1.0.0（2018-2-18）

- 初始版本
