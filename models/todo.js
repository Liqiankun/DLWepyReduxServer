var mongoose = require('mongoose')
var Schema = mongoose.Schema
var todoSchame = new Schema({
  content: String
})

module.exports = mongoose.model('Todo', todoSchame)
