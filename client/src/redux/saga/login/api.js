import axios from 'axios'


const API = {}

API.login = async (user) => {
  try {
    const response = await axios.post('/login', {
      email: user.email, 
      password: user.password
    })
    return response
  }catch(err){
    return err
  }
}

API.redirect = async () => {
  try{ 
    await axios.get('/login')
  }catch(err) {
    console.log(err)
  }
}

export default API 