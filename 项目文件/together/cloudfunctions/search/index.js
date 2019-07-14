const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {

  const good_list = event.goods
  const linshilist = event.goods
  const input = event.inputVal

   var i = 0;
   for (i = 0; good_list[i]; i++) {
     if (good_list[i].goodname.indexOf(input) >= 0 || good_list[i].description.indexOf(input) >= 0) {
       await db.collection('goods').doc(good_list[i]._id).update({
         data: {
           show: 1
         }
       })
     } else {
       await db.collection('goods').doc(good_list[i]._id).update({
        data: {
          show: 0
        }
      })
    }
  }


  const goodslist = await db.collection('goods').where({
    show: 1
  }).orderBy('timepai', 'desc').get({
    
  })

  for (i = 0; linshilist[i]; i++) {
    await db.collection('goods').doc(linshilist[i]._id).update({
      data: {
        show: 1
      }
    })
  }

  return {
    goodslist
  }
}