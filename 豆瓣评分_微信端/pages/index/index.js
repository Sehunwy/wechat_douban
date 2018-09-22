//index.js
//获取应用实例
const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    
  },
  onLoad: function () {
    var that = this;
    util.ask('in_theaters', function (data) {
      console.log(data);
      that.setData({
        motto: data.subjects
      });
    });
    util.ask('top250', function (data) {
      console.log(data);
      that.setData({
        top: data.subjects
      });
    });

    util.ask('us_box', function (data) {
      console.log(data);
      that.setData({
        us_box: data.subjects
      });
    });

    util.ask('coming_soon', function (data) {
      console.log(data);
      that.setData({
        coming_soon: data.subjects
      });
    });
  }
})
