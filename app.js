// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// 引用資料庫
require('./config/mongoose')
// 載入express-handlebars
const exphbs = require('express-handlebars')
// 建立名為hbs的樣版引擎，傳入exphbs與相關參數
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// 啟用引擎
app.set('view engine', 'hbs')

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定 PORT
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
