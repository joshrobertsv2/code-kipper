const Users = require('../models/Users') 
const express = require('express')
const router = express.Router()
const passport = require('passport')
const loginController = require('../controllers/loginController')

router.post('/', 
  passport.authenticate('local', {failureRedirect: '/login'}), 
  loginController.sendResponse
)

module.exports = router