import axios from 'axios'

const API = {}

API.register = async (user) => {
  try {
    const response = await axios.post('/register', {
      name: user.name, 
      email: user.email, 
      password: user.password,
    })
    return response
  }catch(err) {
    return err
  }
}


API.redirect = async () => {
  try{ 
    await axios.get('/')
  }catch(err) {
    return err
  }
}


export default API