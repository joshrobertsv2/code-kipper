const Users = require('../models/Users')
const controller = {}

controller.checkForUserSession = async (req, res) => {
  if(req?.user) {
    const { name, _id, email, theme, interests } = req.user

    res.status(200).send({
      message: 'success', 
      authStatus: req.isAuthenticated(), 
      user: {name, id: _id, email, theme, interests},
    })
  }else {
    res.status(200).send({message: 'success', authStatus: false})
  }

}

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