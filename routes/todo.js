var express = require('express')
var router = express.Router()
var Todo = require('../models/todo')

router.get ('/', function (req, res) {
  Todo.find (function (err, todos) {
    if (!err) {
      res.json(todos)
    }
  })
})

router.post ('/', function (req, res) {
  Todo.create ({ content: req.body.content }, function (err, todo) {
    if (!err) {
      res.json(todo)
    }
  })
})

router.delete ('/:id', function (req, res) {
  Todo.findByIdAndRemove (req.params.id, function (err, todo) {
    if (!err) {
      res.json(todo)
    }
  })
})

router.put ('/:id', function (req, res) {
  Todo.findByIdAndUpdate (req.params.id, { content: req.body.content }, function (err, todo) {
    if (!err) {
      Todo.findById(req.params.id, function (_err, _todo) {
        if (!_err) {
          res.json(_todo)
        }
      })
    }
  })
})

module.exports = router
