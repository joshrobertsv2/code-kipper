const Users = require('../models/Users') 
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Users.find({}, (err, data) => 
    res.send({data, string: 'all users'})
  )
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  Users.create({name: 'dummy', email, password}, (err, data) => {
    if(err) console.log(err)
    else res.send(data ?? err)
  })
})

module.exports = router