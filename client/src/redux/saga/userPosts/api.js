import axios from 'axios'

const API = {}

API.getUserPosts = async (user_id) => {
  try {
    const res = await axios.get(`/kipper/${user_id}`)
    console.log('data from backend', user_id, res)
    return res
  }catch(err) {
    return err
  }
}

export default API 