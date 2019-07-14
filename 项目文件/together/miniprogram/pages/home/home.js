// pages/home/home.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    good_list:[],
    linshilist:[],

    homeIcon: '../../icon/homen.png',
    fairIcon: '../../icon/buffer.png',
    meIcon: '../../icon/identity.png',
    
    imgUrls: [
      '../../images/wel.png',
      '../../images/wel.png',
      '../../images/wel.png'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (!wx.cloud) {
      wx.showToast({
        title: '网络未连接',
      })
      return
    }
    var that = this
    wx.cloud.callFunction({
      name: 'getall',
      data: {

      },
      success: res => {
        console.log(res)
        that.setData({
          good_list: res.result.goodslist.data,
          linshilist: res.result.goodslist.data
        })
      },
      fail: err => {
        console.error('[云函数] 调用失败', err)
      }
    })
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
    // var that = this
    // const db = wx.cloud.database({})
    // db.collection('goods').where({
      
    // }).orderBy('timepai', 'asc').get({
    //   success(res) {
    //     that.setData({
    //       good_list: res.data,
    //       linshilist: res.data
    //     })
    //   }
    // })

    wx.showLoading({
      title: '......',
    })

    setTimeout(function () {
      wx.hideLoading();
    }, 1000)
    
  },
  toabout(){
    wx.navigateTo({
      url: '../about/about',
    })
  },

  search() {

    wx.cloud.callFunction({
      name: 'search',
      data: {
        inputVal:this.data.inputVal,
        goods: this.data.linshilist,
      },
      success: res => {
        // console.log(res)
        this.setData({
          good_list: res.result.goodslist.data,
        })
      },
      fail: err => {
        console.error('[云函数] 调用失败', err)
      }
    })

    // this.setData({
    //   good_list: this.data.linshilist
    // })
    // var i = 0;
    // const db = wx.cloud.database()
    // for (i = 0; this.data.good_list[i]; i++) {
    //   if (this.data.good_list[i].goodname.indexOf(this.data.inputVal) >= 0 || this.data.good_list[i].description.indexOf(this.data.inputVal) >= 0) {
    //     db.collection('goods').doc(this.data.good_list[i]._id).update({
    //       data: {
    //         show: 1
    //       }
    //     })
    //   } else {
    //     db.collection('goods').doc(this.data.good_list[i]._id).update({
    //       data: {
    //         show: 0
    //       }
    //     })
    //   }
    // }

    // db.collection('goods').where({
    //   show: 1
    // }).orderBy('timepai', 'desc').get({
    //   success: res => {
    //     this.setData({
    //       good_list: res.data
    //     })
    //     for (i = 0; this.data.linshilist[i]; i++) {
    //       db.collection('goods').doc(this.data.linshilist[i]._id).update({
    //         data: {
    //           show: 1
    //         }
    //       })
    //     }
    //   }
    // })

  },
  toclass(){
    wx.redirectTo({
      url: '../linshi2/linshi2',
    })
  },
  toperson(){
    wx.redirectTo({
      url: '../information/information',
    })
  },

  onOpen(e) {
    this.setData({
      pageStyle: 'height: 100%; overflow: hidden',
    })
  },
  onClose(e) {
    this.setData({
      pageStyle: '',
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    this.search()
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    this.search()
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    })
    this.search()
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