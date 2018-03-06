'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _configJson = require('./config.json.js');

exports.default = Page({
    data: {
        '__code__': {
            readme: ''
        },

        menus: _configJson.menus
    },
    onShareAppMessage: function onShareAppMessage() {
        return {
            title: "Showings Min UI组件库",
            path: '/pages/index/index',
            imageUrl: './logo.png'
        };
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwibWVudXMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicGF0aCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBUUlBLFVBQU07QUFBQTtBQUFBO0FBQUE7O0FBQ0ZDO0FBREUsSztBQUdOQyxxQiwrQkFBcUI7QUFDakIsZUFBTztBQUNIQyxtQkFBTyxvQkFESjtBQUVIQyxrQkFBTSxvQkFGSDtBQUdIQyxzQkFBVTtBQUhQLFNBQVA7QUFLSCIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW51cyB9IGZyb20gJy4vY29uZmlnLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb25maWc6IHtcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnd3hjLWV4YW1wbGUtbWVudSc6ICdAbWludWkvd3hjLWV4YW1wbGUtbWVudSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBtZW51c1xuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IFwiU2hvd2luZ3MgTWluIFVJ57uE5Lu25bqTXCIsXG4gICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4JyxcbiAgICAgICAgICAgIGltYWdlVXJsOiAnLi9sb2dvLnBuZydcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=