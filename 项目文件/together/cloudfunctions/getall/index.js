const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const goodslist = await db.collection('goods').orderBy('timepai', 'desc').get({
    success(res) {
    }
  })

  return {
    goodslist
  }
}