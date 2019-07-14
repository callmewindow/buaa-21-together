// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: [
      { id: 1, img: '../../images/violet2.jpg', to: 'toad1' },
      { id: 2, img: '../../images/cat.png', to: 'toad2' },
    ],
    circular: true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current: 0,
    homeimg: '../../icon/homen.png',
    fairimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',
    inputShowed: false,
    inputVal: ""
  },
  to1: function (e) {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  to2: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  to3: function (e) {
    wx.navigateTo({
      url: '../upload/upload',
    })
  },
  to4: function (e) {
    wx.navigateTo({
      url: '../open/open',
    })
  },
  to5: function (e) {
    wx.navigateTo({
      url: '../question/question',
    })
  },
  to6: function (e) {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  to7: function (e) {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  to8: function (e) {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  to9: function (e) {
    wx.navigateTo({
      url: '../class/class',
    })
  },
  to10: function (e) {
    wx.navigateTo({
      url: '../person/person',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
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