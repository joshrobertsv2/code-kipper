const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.put('/:user_id', userController.editUserInfo)

module.exports = router