const mongoose = require('mongoose')

const options = {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
}

const SnippetsSchema = new mongoose.Schema({
  user_id: {
    type: String, 
    required: true,
  },  
  snippet: {
    type: String, 
    required: true,
  }, 
  likes: {
    type: Number,
    required: true, 
    default: 0,
  }, 
  tags: {
    type: Array, 
    default: []
  },
  private: {
    type: Boolean
  }, 
  description: {
    type: String
  }, 
  language: {
    type: String, 
    default: ''
  }
}, options)


module.exports = mongoose.model('Snippets', SnippetsSchema)