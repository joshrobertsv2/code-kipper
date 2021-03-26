import axios from 'axios'

const API = {}

API.editPost = ({post}) => {
  axios.put(`/kipper/${post.user_id}`, post)
}

export default API 