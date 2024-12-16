import axiosInstance from './axiosInstance'

export default class VehicleService {

  static async getVehicleByVRM(vrm, vin) {
    try {
      const response = await axiosInstance.post('/v1/vehicles', { vrm, vin })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}