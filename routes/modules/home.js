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
    .sort({ _id: 'asc' }) // desc
    .then(records => res.render('index', { records }))
    .catch(error => console.error(error))
})
// 新增項目頁面路由
router.get('/records/new', (req, res) => {
  Category.find()
    .lean()
    .then(categories => res.render('new', { categories }))
})
// 匯出路由模組
module.exports = router
