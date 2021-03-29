const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.ObjectId

const options = {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
}

const SnippetsSchema = new mongoose.Schema({
  user_id: {
    type: ObjectID, 
    ref: "Users",
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
  tags: [{type: String}],
  public: {
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