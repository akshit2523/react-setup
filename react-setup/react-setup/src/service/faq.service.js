import axiosInstance from './axiosInstance'

export default class FaqService {
  static async getFaqList(catalogId) {
    try {
      const response = await axiosInstance.get(`/v1/faqs/${catalogId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  static async getFaq(id) {
    try {
      const response = await axiosInstance.get(`/v1/faqs/${id}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createFaq(faq) {
    try {
      const response = await axiosInstance.post('/v1/faqs', faq)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async updateFaq(id, faq) {
    try {
      const response = await axiosInstance.put(`/v1/faqs/${id}`, faq)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async deleteFaq(id) {
    try {
      const response = await axiosInstance.delete(`/v1/faqs/${id}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}