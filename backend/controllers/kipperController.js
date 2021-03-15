const express = require('express')
const Snippets = require('../models/Snippets')

const kipperController = {}


kipperController.addCodeSnippet = (req, res) => {
  const { user_id, text, tags } = req.body
  const snippet = text
  Snippets.create({ user_id, snippet, likes: 0, tags }, (err, data) => {
    
    if(err) res.status(500).send({message: 'failed', err})

    else {
      const { snippet } = data
      res.status(200).send({message: 'success', snippet})
    }
  })
}

kipperController.getUserSnippets = (req, res) => {
  const { user_id } = req.params

  Snippets.find({user_id}, (err, data) => {
    if(err) res.status(500).send({message: 'failed', err})

    else res.status(200).send({message: 'success', data})
  })
}

kipperController.editSnippet = async (req, res) => {
  const { user_id, post_id, snippet, likes, tags } = req.body

  try{
    const doc = await Snippets.findOneAndUpdate(
      {user_id, _id: post_id},
      { snippet, likes, tags }, 
      {new: true}
    )

    res.status(200).send({message: 'success', doc})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }



}

module.exports = kipperController