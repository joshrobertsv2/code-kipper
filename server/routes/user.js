const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.put('/:user_id', userController.editUserInfo)

router.get('/', userController.checkForUserSession)

module.exports = router