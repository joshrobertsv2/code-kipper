const express = require('express')
const Snippets = require('../models/Snippets')
const ObjectId = require('mongoose').Types.ObjectId

const kipperController = {}


kipperController.addCodeSnippet = async (req, res) => {
  const { user_id } = req.params
  const { snippet, likes, tags, public, description, language } = req.body

  try {
    const data = await Snippets.create({ user_id , snippet, likes, tags, public, description, language })
    
    res.status(200).send({message: 'success', data})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}


kipperController.getUserSnippets = (req, res) => {
  const { user_id } = req.params
  
  Snippets.find({user_id: user_id}, (err, data) => {
    if(err) res.status(500).send({message: 'failed', err})

    else res.status(200).send({message: 'success', data})
  })
}


kipperController.editSnippet = async (req, res) => {
  const { user_id, _id, snippet, likes = 0, tags, public, description, language } = req.body
  const post_id = _id
  
  try{
    const doc = await Snippets.findOneAndUpdate(
      {user_id, _id: post_id},
      { snippet, likes, tags, public, description, language}, 
      {new: true, useFindAndModify: true}
    )
    res.status(200).send({message: 'success', doc})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}


kipperController.deletePost = async (req, res) => {
  const { post_id } = req.body
  try {
    const doc = await Snippets.findOneAndDelete(
      {_id: post_id}, 
      {useFindAndModify: true}
    )
    res.status(200).send({message: 'success', doc})
  }catch(err) {
    console.log(err)
    res.status(500).send({message: 'failed', err})
  }
} 

module.exports = kipperController