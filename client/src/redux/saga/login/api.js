import axios from 'axios'


const API = {}

API.login = async (user) => {
  try {
    const response = await axios.post('/login', {
      email: user.email, 
      password: user.password,
      id: user._id,
      interests: user.interests,
    })
    console.log('API response: ', response)
    return response
  }catch(err){
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