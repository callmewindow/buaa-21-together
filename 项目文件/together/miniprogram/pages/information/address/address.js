const app = getApp()

Page({
  data: {
    openid: '',
    id: '',
    campus: ["学院路", "沙河", "大运村"],
    campusIndex: 0,
    apartment: '',
    hostel: '',
    studentID:'',
    name:'',
    majorID:'',
  },

  onLoad: function(options) {
    var that = this
    that.setData({
      openid: app.globalData.openid
    })
    const db = wx.cloud.database()
    db.collection('address').where({
        _openid: that.data.openid,
      })
      .get({
        success(res) {
          if (res.data.length != 0) {
            console.log(res.data)
            that.setData({
              apartment: (res.data)[0].apartment,
              hostel: (res.data)[0].hostel,
              campusIndex: (res.data)[0].campusIndex,
              studentID: (res.data)[0].studentID,
              name: (res.data)[0].name,
              majorID: (res.data)[0].majorID,
            })
          }
        }
      })
  },

  addAddress: function(e) {
    var that = this
    const db = wx.cloud.database()
    db.collection('address').where({
        _openid: that.data.openid,
      })
      .get({
        success(res) {
          console.log(res.data.length)
          if (res.data.length == 0) {
            db.collection('address').add({
              data: {
                date: Date(),
                campusIndex: that.data.campusIndex,
                campus: that.data.campus[that.data.campusIndex],
                apartment: e.detail.value.apartment,
                hostel: e.detail.value.hostel,
                studentID:e.detail.value.studentID,
                name: e.detail.value.name,
                majorID: e.detail.value.majorID,
              },

              success: res => {
                wx.showToast({
                  title: '信息已保存',
                })
                console.log('[数据库] [新增记录] 成功')
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '保存信息失败'
                })
                console.error('[数据库] [新增记录] 失败')
              }
            })
          } else {
            db.collection('address').doc(res.data._id).update({
              data: {
                date: Date(),
                campusIndex: that.data.campusIndex,
                campus: that.data.campus[that.data.campusIndex],
                apartment: e.detail.value.apartment,
                hostel: e.detail.value.hostel,
                studentID: e.detail.value.studentID,
                name: e.detail.value.name,
                majorID: e.detail.value.majorID,
              },
              success: res => {
                wx.showToast({
                  title: '信息已更新',
                })
                console.log('[数据库] [更新记录] 成功')
              },
              fail: err => {
                wx.showToast({
                  icon: 'none',
                  title: '更新信息失败'
                })
                console.error('[数据库] [更新记录] 失败')
              }
            })
          }
        }
      })
  },

  bindCampusChange: function(e) {
    var that = this
    console.log('picker campus 发生选择改变，携带值为', e.detail.value);
    that.setData({
      campusIndex: e.detail.value
    })
  }
})