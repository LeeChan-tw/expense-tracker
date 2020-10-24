// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// 引用資料庫
require('./config/mongoose')

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('hello world')
})

// 設定 PORT
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
