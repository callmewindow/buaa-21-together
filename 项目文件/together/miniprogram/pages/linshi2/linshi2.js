const app = getApp()

Page({
  data: {
    homeIcon: '../../icon/home.png',
    fairIcon: '../../icon/buffern.png',
    meIcon: '../../icon/identity.png',
    goodtype:"book",
    x: 390,
    y: 580,
    buttons: [{
      label: '关于偕行',
      icon: '../../icon/information-variant.png',
      to: '../about/about'
    },
    {
      label: '收藏夹',
      icon: '../../icon/clipboard-text.png',
      to: '../collection/collection'
    },
    {
      label: '常见问题',
      icon: '../../icon/help.png',
      to: '../question/question'
    },
    {
      label: '我的店铺',
      icon: '../../icon/store1.png',
      to: '../shop/shop'
    },
    ],
  },
  totextbook: function () {
    wx.navigateTo({
      url: '../test2/test2?id=学习书籍',
    })
  },
  toentertain: function () {
    wx.navigateTo({
      url: '../test2/test2?id=娱乐书籍',
    })
  },
  totick: function () {
    wx.navigateTo({
      url: '../test2/test2?id=学习用品',
    })
  },
  tovirt: function () {
    wx.navigateTo({
      url: '../test2/test2?id=虚拟产品',
    })
  },
  toelec: function () {
    wx.navigateTo({
      url: '../test2/test2?id=电子产品',
    })
  },
  todaily: function () {
    wx.navigateTo({
      url: '../test2/test2?id=生活用品',
    })
  },
  tofood: function () {
    wx.navigateTo({
      url: '../test2/test2?id=食品',
    })
  }, 
  tomakeup: function () {
    wx.navigateTo({
      url: '../test2/test2?id=美妆用品',
    })
  },
  toother: function () {
    wx.navigateTo({
      url: '../test2/test2?id=其他',
    })
  },
  totick: function () {
    wx.navigateTo({
      url: '../test2/test2?id=票券',
    })
  },

  tohome: function () {
    wx.redirectTo({
      url: '../home/home',
    })
  },
  toperson: function () {
    wx.redirectTo({
      url: '../information/information',
    })
  },
  onClick(e) {
    console.log('onClick', e.detail)
    if (e.detail.index == 3) {
      wx.navigateTo({
        url: '../shop/shop',
      })
    }
    if (e.detail.index == 2) {
      wx.navigateTo({
        url: '../question/question',
      })
    }
    if (e.detail.index == 1) {
      wx.navigateTo({
        url: '../collection/collection',
      })
    }
    if (e.detail.index == 0) {
      wx.navigateTo({
        url: '../about/about',
      })
    }
  },
  onLoad(){
    
  },
})