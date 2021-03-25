import axios from 'axios'

const API = {}

API.getUserPosts = async (user_id) => {
  try {
    const res = await axios.get(`/kipper/${user_id}`)
    console.log('updating settings response: ', res)
    return res
  }catch(err) {
    return err
  }
}

export default API 