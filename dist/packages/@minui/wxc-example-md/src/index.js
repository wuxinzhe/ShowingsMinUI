'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  properties: {
    type: { // doc or demo
      type: String,
      value: 'doc'
    },
    content: {
      type: String | Array,
      value: ''
    }
  },
  attached: function attached() {
    // let { content, isRawCode } = this.data
    // content = decodeURIComponent(content)
    // if (isRawCode) {
    //   content = '``` html \r\n' + content + '\r\n```'
    // }


    // content = marked(content)
    // content = content.replace(/\<(|\/)pre\>/ig, '')
    // content = content.replace(/\n/g, '<br/>')
    // content = content.replace(/  /g, '<span class="tab-1"></span>')
    // // content = markdownFormat(content)
    // console.log(content)
    // this.setData({
    //   nodes: content
    // })
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwiY29udGVudCIsIkFycmF5IiwiYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNFQSxjQUFZO0FBQ1ZDLFVBQU0sRUFBRTtBQUNOQSxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQURJO0FBS1ZDLGFBQVM7QUFDUEgsWUFBTUMsU0FBU0csS0FEUjtBQUVQRixhQUFPO0FBRkE7QUFMQyxHO0FBVVpHLFUsc0JBQVk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRiIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiB7IC8vIGRvYyBvciBkZW1vXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2RvYydcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyB8IEFycmF5LFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9LFxuICBhdHRhY2hlZCAoKSB7XG4gICAgLy8gbGV0IHsgY29udGVudCwgaXNSYXdDb2RlIH0gPSB0aGlzLmRhdGFcbiAgICAvLyBjb250ZW50ID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvbnRlbnQpXG4gICAgLy8gaWYgKGlzUmF3Q29kZSkge1xuICAgIC8vICAgY29udGVudCA9ICdgYGAgaHRtbCBcXHJcXG4nICsgY29udGVudCArICdcXHJcXG5gYGAnXG4gICAgLy8gfVxuXG5cbiAgICAvLyBjb250ZW50ID0gbWFya2VkKGNvbnRlbnQpXG4gICAgLy8gY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXFw8KHxcXC8pcHJlXFw+L2lnLCAnJylcbiAgICAvLyBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXG4vZywgJzxici8+JylcbiAgICAvLyBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8gIC9nLCAnPHNwYW4gY2xhc3M9XCJ0YWItMVwiPjwvc3Bhbj4nKVxuICAgIC8vIC8vIGNvbnRlbnQgPSBtYXJrZG93bkZvcm1hdChjb250ZW50KVxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgIG5vZGVzOiBjb250ZW50XG4gICAgLy8gfSlcblx0fVxufSJdfQ==