import axios from 'axios'

const API = {}

API.getUserPosts = async (user_id) => {
  try {
    console.log('requesting server')
    const res = await axios.get(`/kipper/${user_id}`)
    return res
  }catch(err) {
    console.log(err)
    return err
  }
}

export default API 