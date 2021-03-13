const express = require('express')
const router = express.Router()
const kipperController = require('../controllers/kipperController')

router.post('/', kipperController.addCodeSnippet)

router.get('/:user_id', kipperController.getUserSnippets)

router.put('/', kipperController.editSnippet)

module.exports = router