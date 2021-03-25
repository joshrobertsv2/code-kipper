const express = require('express')

const loginController = {}

loginController.sendResponse = (req, res) => {
  const { name, email, _id, interests, theme } = req.user
  if(req.user){
    req.login(req.user, (err) => {
      if(err) done(err)
    })
    res.status(200).send({message: 'success', name, email, _id, email, interests, theme })
  }
    
  else 
    res.status(404).send({message: 'failed'})
}


module.exports = loginController