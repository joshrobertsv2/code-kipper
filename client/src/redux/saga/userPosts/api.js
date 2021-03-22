import axios from 'axios'

const API = {}

API.getUserPosts = async (user_id) => {
  try {
    const res = await axios.get(`/kipper/${user_id}`)
    return res
  }catch(err) {
    return err
  }
}

export default API 