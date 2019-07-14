const isTel = (value) => !/^1[34578]\d{9}$/.test(value)
const db = wx.cloud.database()
import {
  $wuxSelect
} from '../../dist/index'


Page({
  data: {
    urlList: [],
    fileID: '',
    array00: ['学习书籍', '学习用品', '电子产品', '娱乐书籍', '虚拟产品', '美妆用品', '生活用品', '食品', '票券', '其他'],
    index00: 0,
    array0: ['沙河', '学院路', '大运村'],
    index0: 0,
    //array1: ['不限', '春季', '夏季', '秋季', '冬季'],
    //index1: 0,
    array2: ['全新', '九成新', '八成新', '七成新', '六成新', '六成新以下'],
    index2: 0,
    //array3: ['不限', '大一', '大二', '大三', '大四', '研究生', '教师'],
    //index3: 0,
  },

  pickerChange00: function (e) {
    this.setData({
      index00: e.detail.value
    })
  },
  pickerChange0: function (e) {
    this.setData({
      index0: e.detail.value
    })
  },
  /*pickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },*/
  pickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  /*pickerChange3: function (e) {
    this.setData({
      index3: e.detail.value
    })
  },*/

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.showModal({
      content: '商品上架成功！',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '../shop/shop',
          })
        }
      }
    });
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
    const that = this;
    wx.cloud.uploadFile({
      cloudPath: (Math.random().toString(36).substr(2, 15) + ".png"),
      filePath: this.data.urlList[0],
      success: res => {
        this.setData({
          fileID: res.fileID
        }),
          db.collection('goods').add({
            data: {
              time: Y + "." + M + "." + D,
              timepai: parseInt(Y + M + D) + parseInt(h)/100 + parseInt(m)/10000 + parseInt(s)/1000000,
              goodname: e.detail.value.goodname,
              description: e.detail.value.description,
              type: this.data.array00[this.data.index00],
              count: parseInt(e.detail.value.number),
              price: parseInt(e.detail.value.price),
              pricepai: parseInt(e.detail.value.price)*1111,
              position: this.data.array0[this.data.index0],
              //适用季节: this.data.array1[this.data.index1],
              //适用人群: this.data.array3[this.data.index3],
              newold: this.data.array2[this.data.index2],
              wechatnum:e.detail.value.usernum,
              phonenum: e.detail.value.usercall,
              //同地点送货: e.detail.value.send,
              //急出: e.detail.value.immediate,
              //可讲价: e.detail.value.bargain,
              fileID: this.data.fileID,
              show:1
            }
          })
      },
    });


  },



  goUpload: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res.tempFilePaths)
        that.setData({
          urlList: res.tempFilePaths
        })
      }
    })
  }
})