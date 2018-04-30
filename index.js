var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var todoRoutes = require('./routes/todo')

// mongoose.connect(process.env.databaseURL || 'mongodb://localhost/wepy_todo')
mongoose.connect('mongodb://david_lee:lleett995162@ds163769.mlab.com:63769/weapptodo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/todos', todoRoutes)

app.listen(process.env.PORT || 5000, process.env.IP, function () {
  console.log('Wepy toto server has started!')
})
