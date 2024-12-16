import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (!token) return config

  config.headers.Authorization = token
  return config
})

// axiosInstance.interceptors.response.use((response) => response, (error) => {
//   if (error?.response?.data?.error === 'Token has expired') {
//     store.dispatch(removeUser())
//   }

//   return error
// })

export default axiosInstance
