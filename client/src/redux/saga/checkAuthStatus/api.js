import axios from 'axios'

const API = {}

API.checkAuthStatus = async () => {
  let result = await axios.get('/user')
  if(result.status === 200) {
    return {
      authStatus: result.data.authStatus, 
      userInfo: result.data.user
    }
  }else {
    return false
  }
}

export default API