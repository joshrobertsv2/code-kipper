import axios from 'axios'

const API = {}

API.editUser = (settings) => {
  const res = axios.put(`/user/${settings.id}`, settings)
  return res
}

export default API

