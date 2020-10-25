// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')
const Category = require('../../models/category')

// 定義首頁路由
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .sort({ date: 'asc' })
    .then(records => {
      let sum = 0
      for (const record of records) {
        sum += record.amount
      }
      Category.find()
        .lean()
        .then(categories => res.render('index', { sum, records, categories }))
    })
    .catch(error => console.error(error))
})
// 篩選支出路由
router.get('/sort', (req, res) => {
  const { category } = req.params
  const { sort } = req.query
  if (sort === 'all') {
    res.redirect('/')
  } else {
    Record.find({ category: sort })
      .lean()
      .sort(sort)
      .then(records => {
        let sum = 0
        for (const record of records) {
          sum += record.amount
        }
        Category.find()
          .lean()
          .then(categories => res.render('index', { categories, records, sort, category, sum }))
      })
      .catch(error => console.log(error))
  }
})

// 匯出路由模組
module.exports = router
