const express = require('express')
const Users = require('../models/Users') 

const registerController = {}

registerController.createUser = (req, res) => {
  const { email, password, name } = req.body
  Users.create({name, email, password}, (err, data) => {
    const { email, name} = data
    if(err) 
      res.status(500).send('failed')
    else 
      res.status(200).send({message: 'success', email, name})
  })
}


module.exports = registerController