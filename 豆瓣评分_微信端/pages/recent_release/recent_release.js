
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
  }
})
