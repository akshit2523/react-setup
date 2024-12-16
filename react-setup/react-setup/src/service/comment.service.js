import axiosInstance from './axiosInstance'

export default class CommentService {
  static async getComments(catalogId) {
    try {
      const response = await axiosInstance.get(`/v1/comments/${catalogId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getCommentForDealerDashboard() {
    try {
      const response = await axiosInstance.get('/v1/comments')

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createComment(comment) {
    try {
      const response = await axiosInstance.post('/v1/comments', comment)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async updateComment(commentId, comment) {
    try {
      const response = await axiosInstance.put(`/v1/comments/${commentId}`, comment)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async deleteComment(commentId) {
    try {
      const response = await axiosInstance.delete(`/v1/comments/${commentId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}