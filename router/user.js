const express = require('express')
const router = express.Router()

const userscontroller = require('../controllers/users')

router.get('/users', userscontroller.index)
router.get('/users/:id', userscontroller.show)
  
  router.post('/users', userscontroller.store)
  
  router.put('/user/:id', userscontroller.update) 
  
  router.delete('/user/:id', userscontroller.delete)

  module.exports = router