import axiosInstance from './axiosInstance'

export default class StripeService {
  static async createCheckoutSession(product, catalogId) {
    try {
      const response = await axiosInstance.post('/v1/stripe/create-checkout-session', { product, catalogId })

      return response.data
    } catch (error) {
      console.log(error.message)
      return error.message
    }
  }

  static async verifySubscriptionToken(token) {
    try {
      const response = await axiosInstance.post('/v1/stripe/verify-subscription-token', { token })

      return response.data
    } catch (error) {
      console.log(error.message)
      return error.message
    }
  }
}
