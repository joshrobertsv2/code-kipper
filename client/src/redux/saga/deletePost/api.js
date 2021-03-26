import axios from 'axios'

const API = {}

API.deletePost = async ({post_id}) => {
  console.log(post_id)
  const res = axios.delete(`/kipper`, {data: {post_id}})
  console.log(res)
}

export default API 