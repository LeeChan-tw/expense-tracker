// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')
const Category = require('../../models/category')

// 新增項目頁面路由
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categories => res.render('new', { categories }))
})
// 新增項目路由
router.post('/', (req, res) => {
  // 用解構賦值寫法從 req.body 拿出表單裡的資料
  const { name, date, category, amount } = req.body
  // 存入資料庫
  return Record.create({ name, date, category, amount })
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})
// 修改項目頁面路由
router.get('/:id/edit', (req, res) => {
  Category.find()
    .lean()
    .then(categories => {
      const id = req.params.id
      return Record.findById(id)
        .lean()
        .then(record => res.render('edit', { categories, record })
        )
    })
    .catch(error => console.log(error))
})
// 修改項目路由(RESTful)
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      record = Object.assign(record, req.body) // 好酷的方法 但我不是很懂
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 刪除項目路由(RESTful)
router.delete('/:id/', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 匯出路由模組
module.exports = router
