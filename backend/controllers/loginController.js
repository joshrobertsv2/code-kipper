const express = require('express')

const loginController = {}

loginController.sendResponse = (req, res) => {
  const { name, email, _id, interests } = req.user
  if(req.user)
    res.status(200).send({message: 'success', name, email, _id, email, interests, })
  else 
    res.status(404).send({message: 'failed'})
}


module.exports = loginController