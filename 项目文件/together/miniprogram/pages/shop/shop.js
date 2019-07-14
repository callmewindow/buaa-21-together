const app = getApp()

Page({
 
  data: {
    kongbai:'block',
    name:null,
    description:null,
    goods_list:[],
    show: "block",
    show2:"none",
    shownum : 0
  },

  onLoad:function(options){

    console.log(app.globalData.openid)
    var that = this
    const db = wx.cloud.database({})

    db.collection('goods').where({
      _openid:app.globalData.openid
    }).orderBy('timepai','desc').get({
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

  del:function(e){
    const db = wx.cloud.database({})
    var des = e.target.dataset.id;
    wx.showModal({
      title: '商品删除',
      content: '您上传的该商品将从数据库中删除，请确认',
      success(res) {
        if (res.confirm) {
          db.collection("goods").doc(des).remove({
            success: res => {
              wx.showToast({
                title: '删除成功',
              })
            },
            failed: err => {
              wx.showToast({
                title: '删除失败',
              })
            }
          })
          wx.redirectTo({
            url: '../shop/shop',
          })
        } else if (res.cancel) {
          return
        }
      }
    })
  },

  tranpic: function () {
    if (this.data.shownum == 0) {
      this.setData({
        show : "none",
        show2 : "block",
        shownum : 1
      })
    } else {
      this.setData({
        show2 : "none",
        show : "block",
        shownum : 0
      })
    }
    
  },

  toupload: function () {
    wx.redirectTo({
      url: '../upload/upload',
    })
  },

  nottoupload: function () {
    wx.showToast({
      icon:'none',
      title: '上传商品暂时停用，可查看其他页面深入了解下偕行^_^',
      duration: 3000
    })
  },

})