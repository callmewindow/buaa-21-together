// pages/findmore/findmore.js
var sort_num=0;
var type_num=0;
var array_num=0;
var screen_num=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeimg: '../../icon/homen.png',
    goodsimg: '../../icon/jinmu.jpg',

    sortshow: '时间升序',
    sort_color1: 'rgb(255, 60, 0)',
    sort_icon1: 'block',
    sort_icon2: 'none',
    sort_icon3: 'none',
    sort_icon4: 'none',
    sort1: '时间升序',
    sort2: '时间降序',
    sort3: '价格升序',
    sort4: '价格降序',
    sort_dis: 'none',
    sort_icon: 'ios-arrow-down',

    typeshow: '全部类型',
    type_color1: 'rgb(255, 60, 0)',
    type_icon1: 'block',
    type_icon2: 'none',
    type_icon3: 'none',
    type1: '全部类型',
    type2: '出售',
    type3: '拼单',
    type_dis: 'none',

    arrayimg: '../../icon/alert.png',

    screen_dis: 'none',
    screen_li1: 'screen_li2',
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
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  showsort: function (e) {
    if (sort_num == 0) {
      this.setData({
        sort_dis: 'block',
        type_dis: 'none',
        screen_dis: 'none',
        sort_color: 'rgb(255, 60, 0)',
        type_color: 'rgb(65, 65, 65)',
        screen_color: 'rgb(65, 65, 65)',
      });
      sort_num = 1;
      type_num = 0;
      screen_num = 0;
    } else {
      this.setData({
        sort_dis: 'none',
        sort_color: 'rgb(65, 65, 65)',
      });
      sort_num = 0;
    }
  },
  sortchoose1: function (e) {
    this.setData({
      sortshow: '时间升序',
      sort_icon1: 'block',
      sort_color1: 'rgb(255, 60, 0)',
      sort_icon2: 'none',
      sort_color2: 'rgb(65, 65, 65)',
      sort_icon3: 'none',
      sort_color3: 'rgb(65, 65, 65)',
      sort_icon4: 'none',
      sort_color4: 'rgb(65, 65, 65)',
    })
  },
  sortchoose2: function (e) {
    this.setData({
      sortshow: '时间降序',
      sort_icon2: 'block',
      sort_color2: 'rgb(255, 60, 0)',
      sort_icon1: 'none',
      sort_color1: 'rgb(65, 65, 65)',
      sort_icon3: 'none',
      sort_color3: 'rgb(65, 65, 65)',
      sort_icon4: 'none',
      sort_color4: 'rgb(65, 65, 65)',
    })
  },
  sortchoose3: function (e) {
    this.setData({
      sortshow: '价格升序',
      sort_icon3: 'block',
      sort_color3: 'rgb(255, 60, 0)',
      sort_icon2: 'none',
      sort_color2: 'rgb(65, 65, 65)',
      sort_icon1: 'none',
      sort_color1: 'rgb(65, 65, 65)',
      sort_icon4: 'none',
      sort_color4: 'rgb(65, 65, 65)',
    })
  },
  sortchoose4: function (e) {
    this.setData({
      sortshow: '时间降序',
      sort_icon4: 'block',
      sort_color4: 'rgb(255, 60, 0)',
      sort_icon2: 'none',
      sort_color2: 'rgb(65, 65, 65)',
      sort_icon3: 'none',
      sort_color3: 'rgb(65, 65, 65)',
      sort_icon1: 'none',
      sort_color1: 'rgb(65, 65, 65)',
    })
  },

  showtype: function (e) {
    if (type_num == 0) {
      this.setData({
        type_dis: 'block',
        sort_dis: 'none',
        screen_dis: 'none',
        type_color: 'rgb(255, 60, 0)',
        sort_color: 'rgb(65, 65, 65)',
        screen_color: 'rgb(65, 65, 65)',
      });
      type_num = 1;
      sort_num = 0;
      screen_num = 0;
    } else {
      this.setData({
        type_dis: 'none',
        type_color: 'rgb(65, 65, 65)',
      });
      type_num = 0;
    }
  },
  typechoose1: function (e) {
    this.setData({
      typeshow: '全部类型',
      type_icon1: 'block',
      type_color1: 'rgb(255, 60, 0)',
      type_icon2: 'none',
      type_color2: 'rgb(65, 65, 65)',
      type_icon3: 'none',
      type_color3: 'rgb(65, 65, 65)',
    })
  },
  typechoose2: function (e) {
    this.setData({
      typeshow: '出售',
      type_icon2: 'block',
      type_color2: 'rgb(255, 60, 0)',
      type_icon1: 'none',
      type_color1: 'rgb(65, 65, 65)',
      type_icon3: 'none',
      type_color3: 'rgb(65, 65, 65)',
    })
  },
  typechoose3: function (e) {
    this.setData({
      typeshow: '拼单',
      type_icon3: 'block',
      type_color3: 'rgb(255, 60, 0)',
      type_icon2: 'none',
      type_color2: 'rgb(65, 65, 65)',
      type_icon1: 'none',
      type_color1: 'rgb(65, 65, 65)',
    })
  },

  showscreen: function (e) {
    if (screen_num == 0) {
      this.setData({
        screen_dis: 'block',
        sort_dis: 'none',
        type_dis: 'none',
        screen_color: 'rgb(255, 60, 0)',
        sort_color: 'rgb(65, 65, 65)',
        type_color: 'rgb(65, 65, 65)',
      });
      screen_num = 1;
      sort_num = 0;
      type_num = 0;
    } else {
      this.setData({
        screen_dis: 'none',
        screen_color: 'rgb(65, 65, 65)',
      });
      screen_num = 0;
    }
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    sort_num = 0;
    type_num = 0;
    array_num = 0;
    screen_num = 0;
    this.setData({
      homeimg: '../../icon/homen.png',
      goodsimg: '../../icon/jinmu.jpg',

      sortshow: '时间升序',
      sort_color1: 'rgb(255, 60, 0)',
      sort_icon1: 'block',
      sort_icon2: 'none',
      sort_icon3: 'none',
      sort_icon4: 'none',
      sort1: '时间升序',
      sort2: '时间降序',
      sort3: '价格升序',
      sort4: '价格降序',
      sort_dis: 'none',
      sort_icon: 'ios-arrow-down',
             
      typeshow: '全部类型',
      type_color1: 'rgb(255, 60, 0)',
      type_icon1: 'block',
      type_icon2: 'none',
      type_icon3: 'none',
      type1: '全部类型',
      type2: '出售',
      type3: '拼单',
      type_dis: 'none',
      
      arrayimg: '../../icon/alert.png',
      
      screen_dis: 'none',
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