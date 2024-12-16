import axiosInstance from './axiosInstance'

export default class FavouriteService {

  static async getFavourites() {
    try {
      const response = await axiosInstance.get('/v1/favourites')
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createFavourites(favouriteInfo) {
    try {
      const response = await axiosInstance.post('/v1/favourites', favouriteInfo)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async deleteFavourites(favouriteId) {
    try {
      const response = await axiosInstance.delete(`/v1/favourites/${favouriteId}`)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}