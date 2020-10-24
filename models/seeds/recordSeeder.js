const Record = require('../record')
const db = require('../../config/mongoose')
const recordData = require('../../models/data/records')

db.once('open', () => {
  console.log('recordSeeder done!')
  Record.insertMany(recordData, (err, records) => {
    if (err) {
      return console.error(err)
    }
    db.close()
  })
})
