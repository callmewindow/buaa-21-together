//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    textContent: ["沙河镖局使用注意事项", "[填镖单]沙河至学院路", "[填镖单]学院路至沙河", "[查物流]沙河到学院路方向", "[查物流]学院路到沙河方向"],
    pictureContent: ["../../images/pic1.png", "../../images/pic2.png", "../../images/pic3.png", "../../images/pic4.png", "../../images/pic5.png"]
  },
  topic1: function (e) {
    wx.showToast({
      icon: 'none',
      title: '沙航学生服务中心沟通中，敬请期待！',
    })
  },
  topic2: function (e) {
    wx.showToast({
      icon: 'none',
      title: '沙航学生服务中心沟通中，敬请期待！',
    })
  },
  topic3: function (e) {
    wx.showToast({
      icon: 'none',
      title: '沙航学生服务中心沟通中，敬请期待！',
    })
  },
  topic4: function (e) {
    wx.showToast({
      icon: 'none',
      title: '沙航学生服务中心沟通中，敬请期待！',
    })
  },
  topic5: function (e) {
    wx.showToast({
      icon: 'none',
      title: '沙航学生服务中心沟通中，敬请期待！',
    })
  }
})
