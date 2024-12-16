import axiosInstance from './axiosInstance'

export default class UserService {

  static async getUsers() {
    try {
      const response = await axiosInstance.get('/v1/users')

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getDealer() {
    try {
      const response = await axiosInstance.get(`/v1/users/dealer`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async register({ username, email, password, role }) {
    try {
      const response = await axiosInstance.post('/v1/register', {
        email,
        username,
        password,
        role
      })

      const token = response.data.token
      if (token) localStorage.setItem('token', token)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async updateUser(userInfo) {
    try {
      const response = await axiosInstance.put(`/v1/users`, userInfo)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async login({ email, password }) {
    try {
      const response = await axiosInstance.post('/v1/login', { email, password })

      const token = response.data?.token
      if (token) localStorage.setItem('token', token)
      return response.data
    } catch (error) {
      console.log(error.message)
      return error.message
    }
  }

  static async verifyUser(token) {
    try {
      const response = await axiosInstance.post('/v1/verify-user', { token })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async changePassword(passwordInfo) {
    try {
      const response = await axiosInstance.put(`/v1/users/change-password`, passwordInfo)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async forgotPassword(email) {
    try {
      const response = await axiosInstance.post('/v1/forgot-password', { email })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async resetPassword({ password, token }) {
    try {
      const response = await axiosInstance.post(`/v1/reset-password/${token}`, {
        password
      })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async logout() {
    try {
      // TODO : Store token in cookies (if-possible)
      // https://medium.com/@amavictor/storing-tokens-in-cookies-with-react-93a5a818c3a8

      // const response = await axiosInstance.post('/logout')
      // localStorage.removeItem('auth:token')

      // return response.data
      localStorage.removeItem('token')
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getDealerProfileById(userId) {
    try {
      const response = await axiosInstance.get(`/v1/dealer/profile/${userId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}
