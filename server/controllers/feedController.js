const express = require('express')
const Snippets = require('../models/Snippets')
const Users = require('../models/Users')

const feedController = {}

feedController.getUserFollowingList = async (req, res, next) => {
  const { user_id } = req.params
  try {
    const data = await Users.findById(user_id)
    if(data && data.following.length > 0) {
      res.locals.following = data.following
      next()
    }else res.status(200).send({message: 'success', posts: []})

  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}

feedController.getUserFeedPosts = async (req, res) => {
  try {
    const { following } = res.locals
    const posts = await Snippets.find({user_id: {$in: following }})
    res.status(200).send({message: 'success', posts})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}

module.exports = feedController