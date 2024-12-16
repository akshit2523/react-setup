import axiosInstance from './axiosInstance'

export default class announcementService {

  static async getAnnouncements() {
    try {
      const response = await axiosInstance.get('/v1/announcements')

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getAnnouncement(id) {
    try {
      const response = await axiosInstance.get(`/v1/announcements/${id}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createAnnouncement(announceInfo) {
    try {
      const response = await axiosInstance.post('/v1/announcements', announceInfo)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async updateAnnouncement(announceId, announceInfo) {
    try {
      const response = await axiosInstance.put(`/v1/announcements/${announceId}`, announceInfo)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async deleteAnnouncement(announceId) {
    try {
      const response = await axiosInstance.delete(`/v1/announcements/${announceId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

