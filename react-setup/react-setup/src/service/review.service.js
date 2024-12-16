import axiosInstance from './axiosInstance'

export default class ReviewService {
  static async getReviews(catalogId) {
    try {
      const response = await axiosInstance.get(`/v1/reviews/${catalogId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getReviewsForDealerDashboard() {
    try {
      const response = await axiosInstance.get('/v1/reviews')

      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  static async createReview(review) {
    try {
      const response = await axiosInstance.post('/v1/reviews', review)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}