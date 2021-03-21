const express = require('express')
const Users = require('../models/Users') 
const bcrypt = require('bcrypt')
const saltRounds = require('../utils/bcrypt')

const registerController = {}

registerController.checkForExistingUser = async(req, res, next) => {
  const { email } = req.body
  Users.find({email}, (err, data) => {
    if(err) res.status(500).send({err, message: 'failed to check for existing user'})
    else if(!data.length) next()
    else res.status(500).send({message: 'Error registering user'})
  })
}

registerController.createUser = async (req, res, next) => {
  const { email, password, name } = req.body

  const hashedPassword = await bcrypt.hash(password, saltRounds)

  Users.create({name, email, password: hashedPassword}, (err, data) => {
    if(err) res.status(500).send({err, message: 'Error registering user'})
    else next()
  })
}

registerController.createSession = (req, res) => {
  const { email, name, _id} = req.body
  res.status(200).send({message: 'success', email, name, _id})
}


module.exports = registerController