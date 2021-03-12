const express = require('express')

const loginController = {}

loginController.sendResponse = (req, res) => {
  if(req.user)
    res.status(200).send({message: 'success', name: req.user.name, email: req.user.email})
  else 
    res.status(404).send({message: 'failed'})
}


module.exports = loginController