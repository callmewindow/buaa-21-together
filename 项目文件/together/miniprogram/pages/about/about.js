// pages/about/about.js
var notice_num = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeimg: '../../icon/home.png',
    fairimg: '../../icon/alertn.png',
    meimg: '../../icon/identity.png',
    homeIcon: '../../icon/home.png',
    fairIcon: '../../icon/alertn.png',
    meIcon: '../../icon/identity.png',
    noticedisplay: 'block',
    flashborder: '',
  },

  toclass:function (){
    wx.redirectTo({
      url: '../linshi2/linshi2',
    })
  },
  toperson: function(){
    wx.redirectTo({
      url: '../information/information',
    })
  },

  shownotice: function(){
    if(notice_num==0){
      this.setData({
        noticedisplay: 'block',
        flashborder: ''
      })
      notice_num=1;
    } else {
      this.setData({
        noticedisplay: 'none',
        flashborder: '1rpx solid rgba(100, 100, 102, 0.322)'
      })
      notice_num = 0;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    notice_num=1;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})