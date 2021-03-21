const express = require('express')

const logoutController = {}


logoutController.logout = (req, res) => {
  req.logOut()
  res.redirect('/login')
  console.log('done')
}

module.exports = logoutController