import axios from 'axios'

const API = {}

API.createPost = (post) => {
  axios.post(`/kipper/${post.user_id}`, post)
}

export default API 