"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    menus: {
      type: Array,
      value: []
    }
  },
  data: {},
  methods: {
    onToggle: function onToggle(e) {
      var id = e.currentTarget.dataset.id;
      var menus = this.data.menus;

      for (var index = 0; index < menus.length; index++) {
        var menu = menus[index];
        if (menu.id === id) {
          menu.open = !menu.open;
        } else {
          menu.open = false;
        }
      }
      this.setData({
        menus: menus
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwibWVudXMiLCJ0eXBlIiwiQXJyYXkiLCJ2YWx1ZSIsImRhdGEiLCJtZXRob2RzIiwib25Ub2dnbGUiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwibGVuZ3RoIiwibWVudSIsIm9wZW4iLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJRUEsYUFBVyxFO0FBQ1hDLGNBQVk7QUFDVkMsV0FBTztBQUNMQyxZQUFNQyxLQUREO0FBRUxDLGFBQU87QUFGRjtBQURHLEc7QUFNWkMsUUFBTSxFO0FBQ05DLFdBQVM7QUFDUEMsWUFETyxvQkFDRUMsQ0FERixFQUNLO0FBQUEsVUFDTEMsRUFESyxHQUNDRCxFQUFFRSxhQUFGLENBQWdCQyxPQURqQixDQUNMRixFQURLO0FBQUEsVUFFTFIsS0FGSyxHQUVJLEtBQUtJLElBRlQsQ0FFTEosS0FGSzs7QUFHVixXQUFLLElBQUlXLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFYLE1BQU1ZLE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxZQUFJRSxPQUFPYixNQUFNVyxLQUFOLENBQVg7QUFDQSxZQUFJRSxLQUFLTCxFQUFMLEtBQVlBLEVBQWhCLEVBQW9CO0FBQ2xCSyxlQUFLQyxJQUFMLEdBQVksQ0FBQ0QsS0FBS0MsSUFBbEI7QUFDRCxTQUZELE1BRU87QUFDTEQsZUFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDRDtBQUNGO0FBQ0QsV0FBS0MsT0FBTCxDQUFhO0FBQ1hmO0FBRFcsT0FBYjtBQUdEO0FBZk0iLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHt9XG4gIH0sXG4gIGJlaGF2aW9yczogW10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBtZW51czoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWx1ZTogW11cbiAgICB9XG4gIH0sXG4gIGRhdGE6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgb25Ub2dnbGUoZSkge1xuICAgICAgbGV0IHtpZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgbGV0IHttZW51c30gPSB0aGlzLmRhdGFcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW51cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG1lbnUgPSBtZW51c1tpbmRleF1cbiAgICAgICAgaWYgKG1lbnUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgbWVudS5vcGVuID0gIW1lbnUub3BlblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnUub3BlbiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIG1lbnVzXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSJdfQ==