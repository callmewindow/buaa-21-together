Page({
  data: {
    homeimg: '../../icon/homen.png',
    fairimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',
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
  onClick(e) {
    console.log('onClick', e.detail)
    if (e.detail.index == 3) {
      wx.navigateTo({
        url: '../open/open',
      })
    }
    if (e.detail.index == 2) {
      wx.navigateTo({
        url: '../question/question',
      })
    }
    if (e.detail.index == 1) {
      wx.navigateTo({
        url: '../mystore/mystore',
      })
    }
    if (e.detail.index == 0) {
      wx.navigateTo({
        url: '../about/about',
      })
    }
  },
})