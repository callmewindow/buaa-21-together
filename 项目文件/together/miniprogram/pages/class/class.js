Page({
  data: {
    homeimg: '../../icon/homen.png',
    fairimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',
    homeIcon: '../../icon/homen.png',
    fairIcon: '../../icon/alert.png',
    meIcon: '../../icon/identity.png',
    x: 390,
    y: 580,
    buttons: [{
        label: '关于偕行',
        icon: '../../icon/information-variant.png',
      },
      {
        label: '意见反馈',
        icon: '../../icon/clipboard-text.png',
      },
      {
        label: '常见问题',
        icon: '../../icon/help.png',
      },
      {
        label: '创建店铺',
        icon: '../../icon/store1.png',
      },
    ],
  },
  toele: function () {
    wx.navigateTo({
      url: '../test2/test2?id=电子产品',
    })
  },
  tobook: function () {
    wx.navigateTo({
      url: '../test2/test2?id=书籍',
    })
  },
  totick: function () {
    wx.navigateTo({
      url: '../test2/test2?id=票券',
    })
  },
  toabout: function () {
    wx.redirectTo({
      url: '../about/about',
    })
  },
  toperson: function () {
    wx.redirectTo({
      url: '../information/information',
    })
  },
  /* 生命周期函数--监听页面加载 *
  /
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})