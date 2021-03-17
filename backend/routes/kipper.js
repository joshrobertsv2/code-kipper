const express = require('express')
const router = express.Router()
const kipperController = require('../controllers/kipperController')

router.post('/:user_id', kipperController.addCodeSnippet)

router.get('/:user_id', kipperController.getUserSnippets)

router.put('/:user_id', kipperController.editSnippet)

router.delete('/:user_id', kipperController.deletePost)

module.exports = router