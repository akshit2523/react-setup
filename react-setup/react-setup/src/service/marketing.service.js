import axiosInstance from './axiosInstance'

export default class marketingService {

  static async createMarketing(userEmail) {
    try {
      const response = await axiosInstance.post('/v1/marketings/add',  { email: userEmail })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}
