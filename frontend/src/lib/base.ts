import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // if you’re using cookies
})

export default api
