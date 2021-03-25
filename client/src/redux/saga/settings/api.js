import axios from 'axios'

const API = {}

API.editUser = (settings) => {
  console.log('in the edit user function')
  console.log(settings)
  try{
    const res = axios.put(`/user/${settings.id}`, settings)
    console.log(res)
  }catch(err) {
    console.log(err)
  }
  
}

export default API

