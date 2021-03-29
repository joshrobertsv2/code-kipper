const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.ObjectId

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
  interests: {
    type: Array,
  }, 
  theme: {
    type: String,
  }, 
  followers: [{type: ObjectID, ref: 'Users' }], 
  following: [{type: ObjectID, ref: 'Users' }]

}, options)

module.exports = mongoose.model('Users', UsersSchema)