const express = require('express')

const logoutController = {}


logoutController.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid')
    res.redirect('/');
  })
  
}

module.exports = logoutController