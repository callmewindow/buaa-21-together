
const app = getApp()

Page({
  data:{
    kongbai: 'block',

    good_id:"",
    good_name:"",
    good_price:null,
    good_count:null,
    good_position:"",
    good_img:"",
    good_list:[],
    
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    collectImg: "",

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

  onLoad(options) {
    const that = this
    this.good_id = options.id
    //this.good_id = "XIiPvN7E7L4wsMU-"
    //this.good_id = "XIiz097E7L4wsWPu"
    console.log(this.good_id)
    const db = wx.cloud.database({})

    db.collection('goods').where({
      _id: this.good_id
    }).get({
      success(res) {
        that.setData({
          good_list: res.data,
          good_name: res.data[0].goodname,
          good_price: res.data[0].price,
          good_count: res.data[0].count,
          good_position: res.data[0].position,
          good_img: res.data[0].fileID,
        })
        if(res.data.length>0){
          that.setData({
            kongbai: 'none'
          })
        }
      }
    })

    db.collection('collection').where({
      _id: this.good_id,
      _openid: app.globalData.openid
    }).get({
      success(res) {
        if (res.data.length > 0) {
          that.setData({
            collectImg: '../../icon/收藏实心.png'
          })
        } else {
          that.setData({
            collectImg: '../../icon/收藏.png'
          })
        }
      }
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

  showimage: function(event){
    wx.previewImage({
      urls: [event.currentTarget.dataset.index],
    })
  },

  fuzhi: function (event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.index,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },

  tocollect() {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var date = new Date(n);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    const that =this
    const db = wx.cloud.database({})
    db.collection('collection').where({
      _id: this.good_id,
      _openid: app.globalData.openid
    }).get({
      success(res) {
        if(res.data.length == 0){
          db.collection('collection').add({
            data: {
              _id: that.good_id,
              goodname: that.data.good_name,
              price: that.data.good_price,
              count: that.data.good_count,
              position: that.data.good_position,
              fileID: that.data.good_img,
              time: Y + "." + M + "." + D,
              timepai: parseInt(Y + M + D + h + m + s) / 1000000,
            },
            success:res =>{
              wx.showToast({
                title: '收藏成功',
              })
              that.setData({
                collectImg: '../../icon/收藏实心.png'
              })
            },
            falied:err =>{
              wx.showToast({
                title: '收藏失败',
              })
            }
          })
          console.log("加上他！！！")
        }else{
          if(res.data.length > 0){
            db.collection('collection').doc(that.good_id).remove({
              success:res =>{
                wx.showToast({
                  title: '取消收藏成功',
                })
                that.setData({
                  collectImg: '../../icon/收藏.png'
                })
              },
              failed:err =>{
                wx.showToast({
                  title: '取消收藏失败',
                })
              }
            })
            console.log("删了他！！！")
          }
        }
      }
    })
  }
  
})