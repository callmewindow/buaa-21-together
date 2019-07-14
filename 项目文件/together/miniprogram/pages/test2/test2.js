var sort_num = 0;
var type_num = 0;
var array_num = 0;
var screen_num = 0;
Page({
  data: {
    inputVal:"",
    inputShowed:"",
    goodsimg: '../../icon/jinmu.jpg',

    paixuqian: 'block',
    paixuhou: 'none',
    xueyuanlu: 'block',

    sort_color1: '#f23030',
    sort_icon1: 'block',
    sort_icon2: 'none',
    sort_icon3: 'none',
    sort_icon4: 'none',
    sort1: '从新到旧',
    sort2: '从旧到新',
    sort3: '价格升序',
    sort4: '价格降序',
    sort_dis: 'none',
    sortshow: '从新到旧',

    type_color1: '#f23030',
    type_icon1: 'block',
    type_icon2: 'none',
    type_icon3: 'none',
    type_icon4: 'none',
    type1: '全部地区',
    type2: '沙河',
    type3: '学院路',
    type4: '大运村',
    type_dis: 'none',
    typeshow: '全部地区',

    arrayimg: '../../icon/tiaopai1.png',

    waimaotiao: 'block',
    waimaoge: 'none',
    kong: 'none',
  
    good_list:[],
    linshilist:[],
    goodtype: "",
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
    items: [
      // {
      //   type: 'text',
      //   label: '排序方式',
      //   value: 'sort',
      //   groups: ['001'],
      // },
      // {
      //   type: 'text',
      //   label: '商品类型',
      //   value: 'goodtype',
      //   groups: ['002'],
      // },
      // {
      //   type: 'sort',
      //   label: ' ',
      //   value: 'array',
      //   groups: ['003'],
      // },
      {
        type: 'filter',
        label: '筛选',
        value: 'screen',
        children: [
          // {
          //   type: 'radio',
          //   label: 'Languages（单选）',
          //   value: 'language',
          //   children: [{
          //     label: 'JavaScript',
          //     value: 'javascript',
          //   },
          //   {
          //     label: 'HTML',
          //     value: 'html',
          //   },
          //   {
          //     label: 'CSS',
          //     value: 'css',
          //   },
          //   {
          //     label: 'TypeScript',
          //     value: 'typescript',
          //   },
          //   ],
          // },
          // {
          //   type: 'checkbox',
          //   label: 'Query（复选）',
          //   value: 'query',
          //   children: [{
          //     label: 'Angular',
          //     value: 'angular',
          //   },
          //   {
          //     label: 'Vue',
          //     value: 'vue',
          //   },
          //   {
          //     label: 'React',
          //     value: 'react',
          //   },
          //   {
          //     label: 'Avalon',
          //     value: 'avalon',
          //   },
          //   ],
          // },
          // {
          //   type: 'radio',
          //   label: '所在区域',
          //   value: 'region',
          //   children: [{
          //     label: '沙河',
          //     value: 'shahe',
          //   },
          //   {
          //     label: '学院路',
          //     value: 'xueyuanlu',
          //   },
          //   ],
          // },
          // {
          //   type: 'radio',
          //   label: '适用性别',
          //   value: 'gander',
          //   children: [{
          //     label: '男',
          //     value: 'male',
          //   },
          //   {
          //     label: '女',
          //     value: 'female',
          //   },
          //   {
          //     label: '通用',
          //     value: 'bothsex',
          //   },
          //   ],
          // },
          {
            type: 'radio',
            label: '年级',
            value: 'people',
            children: [{
              label: '大一',
              value: '1',
            },
            {
              label: '大二',
              value: '2',
            },
            {
              label: '大三',
              value: '3',
            },
            {
              label: '大四',
              value: '4',
            },
            {
              label: '研究生',
              value: '5',
            },
            // {
            //   label: '教师',
            //   value: '6',
            // },
            // {
            //   label: '全部',
            //   value: 'allpeople',
            // },
            ],
          },
          {
            type: 'radio',
            label: '学期',
            value: 'term',
            children: [{
              label: '秋季学期',
              value: 'autumn',
            },
            {
              label: '春季学期',
              value: 'spring',
            },
            {
              label: '夏季学期',
              value: 'summer',
            },
            // {
            //   label: '冬',
            //   value: 'winter',
            // },
            // {
            //   label: '全部',
            //   value: 'alltime',
            // },
            ],
          }, 
          {
            type: 'radio',
            label: '书院',
            value: 'college',
            children: [{
              label: '士谔',
              value: 'shie',
            },
            {
              label: '冯如',
              value: 'fengru',
            },
            {
              label: '士嘉',
              value: 'shijia',
            },
            {
              label: '守锷',
              value: 'shoue',
            },
            {
              label: '致真',
              value: 'zhizhen',
            },
            {
              label: '知行',
              value: 'zhixing',
            },
            ],
          },
          {
            type: 'checkbox',
            label: '书籍',
            value: 'book',
            children: [{
              label: '工科数分',
              value: 'gksf',
            },
            {
              label: '程设基础',
              value: 'csjc',
            },
            {
              label: '航概',
              value: 'hg',
            },
            {
              label: '工科高代',
              value: 'gkgd',
            },
            {
              label: '英语A/B',
              value: 'yyab',
            },
            {
              label: '思修',
              value: 'sx',
            },
            {
              label: '军理',
              value: 'jl',
            },
            ],
          },
          // {
          //   type: 'checkbox',
          //   label: '几成新',
          //   value: 'new',
          //   children: [{
          //     label: '全新',
          //     value: '100%',
          //   },
          //   {
          //     label: '八九成',
          //     value: '85%',
          //   },
          //   {
          //     label: '六七成',
          //     value: '65%',
          //   },
          //   {
          //     label: '六成以下',
          //     value: '60%',
          //   },
          //   {
          //     label: '均可',
          //     value: 'allnew',
          //   },
          //   ],
          // },
        ],
        groups: ['001', '002', '003'],
      },
    ],
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

  onLoad(options) {
    this.setData({
      waimaotiao: 'block',
      waimaoge: 'none',
    })
    var that = this
    this.goodtype = options.id
    console.log(this.goodtype)
    wx.setNavigationBarTitle({
      title: this.goodtype,
    })

    const db = wx.cloud.database({})
    db.collection('goods').where({
      type: this.goodtype
    }).orderBy('timepai','desc').get({
      success(res) {
        that.setData({
          good_list: res.data,
          linshilist:res.data
        })
        if(res.data.length==0){
          that.setData({
            kong: 'block'
          })
        }
      }
    })
    
    wx.showLoading({
      title: '......',
    })
    
    setTimeout(function () {
      wx.hideLoading();
    }, 1000)

  },
  
  tosomeone: function(event){
    wx.navigateTo({
      url: '/detail/detail?id='+event.item._id,
    })
  },

  search() {

    wx.cloud.callFunction({
      name: 'searchtype',
      data: {
        inputVal: this.data.inputVal,
        goods: this.data.linshilist,
        type:this.goodtype
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
  
    // const db = wx.cloud.database()
    // var i = 0;
    // this.setData({
    //   good_list: this.data.linshilist
    // })
    // for (i = 0; this.data.good_list[i]; i++) {
    //   if (this.data.good_list[i].goodname.indexOf(this.data.inputVal) >= 0 || this.data.good_list[i].description.indexOf(this.data.inputVal) >= 0) {
    //     db.collection('goods').doc(this.data.good_list[i]._id).update({
    //       data: {
    //         show: 11
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
    //   show: 11,
    //   type: this.goodtype
    // }).orderBy('timepai', 'desc').get({
    //   success: res=>{
    //     this.setData({
    //       good_list: res.data
    //     })
    //     for (i = 0; this.data.linshilist[i]; i++) {
    //       db.collection('goods').doc(this.data.linshilist[i]._id).update({
    //         data: {
    //           show: 11
    //         }
    //       })
    //     }
    //   }
    // })

    
  },

  showsort: function (e) {
    if (sort_num == 0) {
      this.setData({
        sort_dis: 'block',
        type_dis: 'none',
        screen_dis: 'none',
        sort_color: '#f23030',
        type_color: 'rgb(65, 65, 65)',
        screen_color: 'rgb(65, 65, 65)',
      });
      sort_num = 1;
      type_num = 0;
      screen_num = 0;
    }
    const that = this;
    if (sort_num == 1) {
      setTimeout(function () {
        that.setData({
          sort_dis: 'none',
          sort_color: 'rgb(65, 65, 65)',
        })
        sort_num = 0;
      }, 2000)
    }
  },

  sortchoose1: function (e) {
    this.setData({
      sortshow: '从新到旧',
      sort_icon1: 'block',
      sort_color1: '#f23030',
      sort_icon2: 'none',
      sort_color2: 'rgb(65, 65, 65)',
      sort_icon3: 'none',
      sort_color3: 'rgb(65, 65, 65)',
      sort_icon4: 'none',
      sort_color4: 'rgb(65, 65, 65)',
      paixuqian: 'block',
      paixuhou: 'none',
    })
    const db=wx.cloud.database()
    db.collection('goods').where({
      type:this.goodtype
    }).orderBy('timepai','desc').get({
      success:res=>{
        this.setData({
          good_list:res.data
        })
      }
    })
  },
  sortchoose2: function (e) {
    this.setData({
      sortshow: '从旧到新',
      sort_icon2: 'block',
      sort_color2: '#f23030',
      sort_icon1: 'none',
      sort_color1: 'rgb(65, 65, 65)',
      sort_icon3: 'none',
      sort_color3: 'rgb(65, 65, 65)',
      sort_icon4: 'none',
      sort_color4: 'rgb(65, 65, 65)',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype
    }).orderBy('timepai', 'asc').get({
      success: res => {
        this.setData({
          good_list: res.data
        })
      }
    })
  },
  sortchoose3: function (e) {
    this.setData({
      sortshow: '价格升序',
      sort_icon3: 'block',
      sort_color3: '#f23030',
      sort_icon2: 'none',
      sort_color2: 'rgb(65, 65, 65)',
      sort_icon1: 'none',
      sort_color1: 'rgb(65, 65, 65)',
      sort_icon4: 'none',
      sort_color4: 'rgb(65, 65, 65)',
      paixuqian: 'none',
      paixuhou: 'block',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype
    }).orderBy('pricepai', 'asc').get({
      success: res => {
        this.setData({
          good_list: res.data
        })
      }
    })
  },
  sortchoose4: function (e) {
    this.setData({
      sortshow: '价格降序',
      sort_icon4: 'block',
      sort_color4: '#f23030',
      sort_icon2: 'none',
      sort_color2: 'rgb(65, 65, 65)',
      sort_icon3: 'none',
      sort_color3: 'rgb(65, 65, 65)',
      sort_icon1: 'none',
      sort_color1: 'rgb(65, 65, 65)',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype
    }).orderBy('pricepai', 'desc').get({
      success: res => {
        this.setData({
          good_list: res.data
        })
      }
    })
  },

  showtype: function (e) {
    if (type_num == 0) {
      this.setData({
        type_dis: 'block',
        sort_dis: 'none',
        screen_dis: 'none',
        type_color: '#f23030',
        sort_color: 'rgb(65, 65, 65)',
        screen_color: 'rgb(65, 65, 65)',
      });
      type_num = 1;
      sort_num = 0;
      screen_num = 0;
    }
    const that = this;
    if (type_num == 1) {
      setTimeout(function () {
        that.setData({
          type_dis: 'none',
          type_color: 'rgb(65, 65, 65)',
        })
        type_num = 0;
      }, 2000)
    }
  },
  typechoose1: function (e) {
    this.setData({
      typeshow: '全部地区',
      type_icon1: 'block',
      type_color1: '#f23030',
      type_icon2: 'none',
      type_color2: 'rgb(65, 65, 65)',
      type_icon3: 'none',
      type_color3: 'rgb(65, 65, 65)',
      type_icon4: 'none',
      type_color4: 'rgb(65, 65, 65)',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype
    }).get({
      success: res => {
        this.setData({
          good_list: res.data
        })
      }
    })
  },
  typechoose2: function (e) {
    this.setData({
      typeshow: '沙河',
      type_icon2: 'block',
      type_color2: '#f23030',
      type_icon1: 'none',
      type_color1: 'rgb(65, 65, 65)',
      type_icon3: 'none',
      type_color3: 'rgb(65, 65, 65)',
      type_icon4: 'none',
      type_color4: 'rgb(65, 65, 65)',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype,
      position: "沙河"
    }).orderBy('price','asc').get({
      success: res => {
        this.setData({
          good_list: res.data
        })
      }
    })
  },
  typechoose3: function (e) {
    this.setData({
      typeshow: '学院路',
      type_icon3: 'block',
      type_color3: '#f23030',
      type_icon2: 'none',
      type_color2: 'rgb(65, 65, 65)',
      type_icon1: 'none',
      type_color1: 'rgb(65, 65, 65)',
      type_icon4: 'none',
      type_color4: 'rgb(65, 65, 65)',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype,
      position: "学院路"
    }).get({
      success: res => {
        this.setData({
          good_list: res.data
        })
      }
    })
  },
  typechoose4: function (e) {
    this.setData({
      typeshow: '大运村',
      type_icon4: 'block',
      type_color4: '#f23030',
      type_icon2: 'none',
      type_color2: 'rgb(65, 65, 65)',
      type_icon1: 'none',
      type_color1: 'rgb(65, 65, 65)',
      type_icon3: 'none',
      type_color3: 'rgb(65, 65, 65)',
    })
    const db = wx.cloud.database()
    db.collection('goods').where({
      type: this.goodtype,
      position: "大运村"
    }).get({
      success: res => {
        this.setData({
          good_list: res.data
        })
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
  onPullDownRefresh(){
    wx.redirectTo({
      url: '../test2/test2',
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
  onChange(e) {
    const { checkedItems, items } = e.detail
    const params = {}

    console.log(checkedItems, items)

    this.setData({
      xueyuanlu: 'none'
    })

    checkedItems.forEach((n) => {
      if (n.checked) {
        if (n.value === 'updated') {
          const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
          params.sort = n.value
          params.order = selected
        } else if (n.value === 'stars') {
          params.sort = n.value
          params.order = n.sort === 1 ? 'asc' : 'desc'
        } else if (n.value === 'forks') {
          params.sort = n.value
        } else if (n.value === 'filter') {
          n.children.filter((n) => n.selected).forEach((n) => {
            if (n.value === 'language') {
              const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
              params.language = selected
            } else if (n.value === 'query') {
              const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
              params.query = selected
            }
          })
        }
      }
    })

    this.getRepos(params)
  },
  getRepos(params = {}) {
    const language = params.language || 'javascript'
    const query = params.query || 'react'
    const q = `${query}+language:${language}`
    const data = Object.assign({
      q,
    }, params)

    // wx.showLoading()
    // wx.request({
    //   url: `https://api.github.com/search/repositories`,
    //   data,
    //   success: (res) => {
    //     console.log(res)

    //     wx.hideLoading()

    //     this.setData({
    //       repos: res.data.items.map((n) => Object.assign({}, n, {
    //         date: n.created_at.substr(0, 7),
    //       })),
    //     })
    //   },
    // })
  }
})
