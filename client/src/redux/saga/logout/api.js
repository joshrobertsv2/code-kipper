import axios from 'axios'

const API = {}

API.logoutUser = () => {
  axios.get(`/logout`)
}

export default API