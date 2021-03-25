const Users = require('../models/Users')
const controller = {}

controller.editUserInfo = async (req, res) => {
  const { id, interests, name, email, theme } = req.body
  try {
    const data = await Users.findByIdAndUpdate(id, {$set: {name, email, interests, theme}}, {new: true, useFindAndModify: false})
    
    res.status(200).send({message: 'success', data})
  }catch(err) {
    res.status(500).send({message: 'failed', err})
  }
}

module.exports = controller