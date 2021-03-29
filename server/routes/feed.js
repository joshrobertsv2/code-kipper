const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feedController')

router.get('/:user_id', feedController.getUserFollowingList, feedController.getUserFeedPosts)

module.exports = router