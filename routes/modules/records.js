// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')

// 送出新增項目路由
router.post('/', (req, res) => {
  // 用解構賦值寫法從 req.body 拿出表單裡的資料
  const { name, date, category, amount } = req.body
  // 存入資料庫
  return Record.create({ name, date, category, amount })
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router
