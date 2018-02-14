'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  properties: {
    title: {
      type: String,
      value: '示例标题'
    },
    desc: {
      type: String,
      value: '示例描述'
    },
    source: {
      type: String,
      value: ''
    }
  },
  data: {
    viewSourceClass: 'source-isclose',
    isExpandSource: false
  },
  methods: {
    bindViewSourceEvent: function bindViewSourceEvent() {
      this.setData({
        isExpandSource: !this.data.isExpandSource
      });
    }
  },
  attached: function attached() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJkZXNjIiwic291cmNlIiwiZGF0YSIsInZpZXdTb3VyY2VDbGFzcyIsImlzRXhwYW5kU291cmNlIiwibWV0aG9kcyIsImJpbmRWaWV3U291cmNlRXZlbnQiLCJzZXREYXRhIiwiYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1FQSxjQUFZO0FBQ1ZDLFdBQU87QUFDTEMsWUFBTUMsTUFERDtBQUVMQyxhQUFPO0FBRkYsS0FERztBQUtWQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZILEtBTEk7QUFTVkUsWUFBUTtBQUNOSixZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRDtBQVRFLEc7QUFjWkcsUUFBTTtBQUNKQyxxQkFBaUIsZ0JBRGI7QUFFSkMsb0JBQWdCO0FBRlosRztBQUlOQyxXQUFTO0FBQ1BDLHVCQURPLGlDQUNnQjtBQUNyQixXQUFLQyxPQUFMLENBQWE7QUFDWEgsd0JBQWdCLENBQUMsS0FBS0YsSUFBTCxDQUFVRTtBQURoQixPQUFiO0FBR0Q7QUFMTSxHO0FBT1RJLFUsc0JBQVksQ0FDWCIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ2V4YW1wbGUtbWQnOiAnQG1pbnVpL3d4Yy1leGFtcGxlLW1kJ1xuICAgIH1cbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ+ekuuS+i+agh+mimCdcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAn56S65L6L5o+P6L+wJ1xuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICB2aWV3U291cmNlQ2xhc3M6ICdzb3VyY2UtaXNjbG9zZScsXG4gICAgaXNFeHBhbmRTb3VyY2U6IGZhbHNlXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiaW5kVmlld1NvdXJjZUV2ZW50ICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzRXhwYW5kU291cmNlOiAhdGhpcy5kYXRhLmlzRXhwYW5kU291cmNlXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgYXR0YWNoZWQgKCkge1xuICB9XG59Il19