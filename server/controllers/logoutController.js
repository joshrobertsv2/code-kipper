const express = require('express')

const logoutController = {}


logoutController.logout = (req, res) => {
  console.log(req.session)
  console.log('authentication status 1: ', req.isAuthenticated())
  req.logOut()
  console.log('authentication status 2: ', req.isAuthenticated())
  res.status(200).send({message: 'success'})
}

module.exports = logoutController