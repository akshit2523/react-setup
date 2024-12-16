import axios from 'axios'
import { removeUser } from '../store/reducers/slices'
import { store } from '../store'

// store.subscribe(listener)

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// function selectToken(state) {
//   return state.user?.user?.token
// }

// function listener() {
//   const token = selectToken(store.getState())

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (!token) return config

  config.headers.Authorization = token
  return config
})

axiosInstance.interceptors.response.use((response) => response, (error) => {
  if (error?.response?.data?.error === 'Token has expired') {
    store.dispatch(removeUser())
  }

  return error
})
// }

export default axiosInstance