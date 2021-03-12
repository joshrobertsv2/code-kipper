const Users = require('../models/Users') 
const express = require('express')
const router = express.Router()
const passport = require('passport')
const loginController = require('../controllers/loginController')

/* DO NOT UNCOMMENT */
// router.get('/', (req, res) => {
//   Users.find({}, (err, data) => 
//     res.send({data, string: 'all users'})
//   )
// })

router.post('/', 
  passport.authenticate('local'), 
  loginController.sendResponse
)

module.exports = router