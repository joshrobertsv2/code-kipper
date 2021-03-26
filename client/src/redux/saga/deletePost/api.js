import axios from 'axios'

const API = {}

API.deletePost = async ({post_id}) => {
  axios.delete(`/kipper`, {data: {post_id}})
}

export default API 