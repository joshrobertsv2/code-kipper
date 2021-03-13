const mongoose = require('mongoose')

const options =   {
  timestamps: true,
  createdAt: "created_at", 
  updatedAt: "updated_at",
}

const UsersSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true,
  },
  password: {
    type: String, 
    required: true
  }, 
}, options)

module.exports = mongoose.model('Users', UsersSchema)