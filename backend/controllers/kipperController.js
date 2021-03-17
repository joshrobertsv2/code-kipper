const express = require('express')
const Snippets = require('../models/Snippets')

const kipperController = {}


kipperController.addCodeSnippet = async (req, res) => {
  const { user_id } = req.params
  const { snippet, likes, tags, private, description, language } = req.body


  try {
    const data = await Snippets.create({ user_id , snippet, likes, tags, private, description, language })
    
    res.status(200).send({message: 'success', data})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}
kipperController.getUserSnippets = (req, res) => {
  const { user_id } = req.params

  Snippets.find({user_id}, (err, data) => {
    if(err) res.status(500).send({message: 'failed', err})

    else res.status(200).send({message: 'success', data})
  })
}

kipperController.editSnippet = async (req, res) => {
  const { user_id, _id, snippet, likes, tags, private, description, language } = req.body
  const post_id = _id

  console.log( {user_id, post_id, snippet, likes, tags, private, description, language} )
  try{
    const doc = await Snippets.findOneAndUpdate(
      {user_id, _id: post_id},
      { snippet, likes, tags, private, description, language}, 
      {new: true}
    )
      console.log(doc)
    res.status(200).send({message: 'success', doc})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}

kipperController.deletePost = async (req, res) => {
  const { post_id } = req.body
  const { user_id} = req.params
  console.log(post_id, user_id)
  try {
    const doc = await Snippets.findOneAndDelete({_id: post_id, user_id })
    res.status(200).send({message: 'success', doc})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
} 

module.exports = kipperController