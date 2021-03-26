const express = require('express')

const logoutController = {}


logoutController.logout = (req, res) => {
  req.logOut()
  res.status(200).send({message: 'success'})
}

module.exports = logoutController