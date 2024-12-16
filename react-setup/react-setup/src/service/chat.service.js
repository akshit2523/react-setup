import axiosInstance from './axiosInstance'

export default class ChatService {

  static async getMessages(dealerId) {
    try {
      const response = await axiosInstance.post('/v1/chat', { dealerId })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getUserMessages(userId) {
    try {
      const response = await axiosInstance.post('/v1/chat/all-chats', { userId })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createMessage(message) {
    try {
      const response = await axiosInstance.post('/v1/chat/create', message)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}