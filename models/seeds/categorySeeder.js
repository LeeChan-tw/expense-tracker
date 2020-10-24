const Category = require('../category')
const db = require('../../config/mongoose')
const categoriesData = require('../../models/data/categories')

db.once('open', () => {
  console.log('categorySeeder done!')
  Category.insertMany(categoriesData, (err, categories) => {
    if (err) {
      return console.error(err)
    }
    db.close()
  })
})
