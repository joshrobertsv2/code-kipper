import axios from 'axios'

const API = {}

API.fetchFeed = async (user_id) => {
  console.log('API CALL: ', user_id)
  try {
    const res = await axios.get(`/feed/${user_id}`)
    const {data: {posts}} = res
    return posts
  }catch(err) {
    return err
  }
}

export default API