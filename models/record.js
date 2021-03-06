const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String, // 資料型別是字串
    trim: true,
    required: true // 這是個必填欄位
  },
  category: {
    type: String, // 資料型別是字串
    trim: true,
    required: true // 這是個必填欄位
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number, // 資料型別是數字
    min: 1,
    trim: true,
    required: true // 這是個必填欄位
  }
})
module.exports = mongoose.model('Record', recordSchema)
