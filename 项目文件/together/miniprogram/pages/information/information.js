const app = getApp()

Page({
  data: {
    settingsIcon: '../../icon/information/设置.png',

    openSettings: false,

    newGood: true, 

    homeIcon: '../../icon/home.png',
    fairIcon: '../../icon/buffer.png',
    meIcon: '../../icon/identityn.png',

    closeSettingsIcon:'../../icon/information/关闭.png'
  },

  tohome() {
    wx.redirectTo({
      url: '../home/home',
    })
  },

  toclass() {
    wx.redirectTo({
      url: '../linshi2/linshi2',
    })
  },
  toquestion() {
    wx.navigateTo({
      url: '../question/question',
    })
  },
  toabout() {
    wx.navigateTo({
      url: '../about/about',
    })
  },

  onLoad: function() {
    console.log(app.globalData.openid)
    // if (!wx.cloud) {
    //   return
    // }
    // wx.cloud.callFunction({
    //   name: 'login',
    //   data: {},
    //   success: res => {
    //     console.log('[云函数] [login] user openid: ', res.result.openid)
    //     app.globalData.openid = res.result.openid
    //   },
    //   fail: err => {
    //     console.error('[云函数] [login] 调用失败', err)
    //   }
    // })
  },
 
  jumpToSettings: function() {
    this.setData({
      openSettings: (!this.data.openSettings)
    })
  },

  jumpToStore: function() {
    wx.navigateTo({
      url: '../shop/shop',
    })
  },

  jumpToFavorites: function(){
    wx.navigateTo({
      url: '../collection/collection',
    })
  },

  changeAddress: function() {
    wx.navigateTo({
      url: '../information/address/address',
    })
  },

  jumpToSend:function(){
    wx.navigateTo({
      url: '../send/send',
    })
  }
})