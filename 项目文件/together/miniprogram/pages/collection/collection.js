const app = getApp()
var array_num = 0;

Page({
  data: {
    kongbai: 'block',
    goods_list: [],
    arrayimg: '../../icon/tiaopai1.png',

    waimaotiao: 'block',
    waimaoge: 'none',
  },

  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad: function (options) {

    var that = this
    const db = wx.cloud.database({})

    db.collection('collection').where({
      _openid: app.globalData.openid
    }).orderBy('timepai','asc').get({
      success(res) {
        console.log(res)
        that.setData({
          goods_list: res.data
        })
        if(res.data.length>0){
          that.setData({
            kongbai: 'none'
          })
        }
      },
      failed(err) {
        console.log(fail)
      }
    })
  },

  changearray: function (e) {
    if (array_num == 0) {
      this.setData({
        arrayimg: '../../icon/gepai1.png',
        waimaotiao: 'none',
        waimaoge: 'block'
      });
      array_num = 1;
    } else {
      this.setData({
        arrayimg: '../../icon/tiaopai1.png',
        waimaotiao: 'block',
        waimaoge: 'none'
      });
      array_num = 0;
    }
  },

  onDeleteTap: function (e) {
    const db = wx.cloud.database({})
    var des = e.target.dataset.id
    console.log(des)
    wx.showModal({
      title: '商品删除',
      content: '将取消收藏该商品，是否确认',
      success(res) {
        if (res.confirm) {
          db.collection("collection").doc(des).remove({
            success:res =>{
              wx.showToast({
                title: '取消收藏成功',
              })
            },
            failed:err =>{
              wx.showToast({
                title: '取消收藏失败',
              })
            }
          })
          wx.redirectTo({
            url: '../collection/collection',
          })
        } else if (res.cancel) {
          return
        }
      }
    })
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