import axiosInstance from './axiosInstance'

export default class CatalogService {

  static async getPendingCatalogs() {
    try {
      const response = await axiosInstance.get(`/v1/catalogs/pending`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getCatalogs() {
    try {
      const response = await axiosInstance.get('/v1/catalogs')

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getCatalogByUserId(userId) {
    try {
      const response = await axiosInstance.get(`/v1/dealer/posted/${userId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getCatalogById(id) {
    try {
      const response = await axiosInstance.get(`/v1/catalog/${id}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getCatalog(id) {
    try {
      const response = await axiosInstance.get(`/v1/catalogs/${id}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async getRecentlyAddedCatalogs() {
    try {
      const response = await axiosInstance.get('/v1/recent')

      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  static async getFeaturedCatalogs() {
    try {
      const response = await axiosInstance.get('/v1/featured')

      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  static async globalSearch(query) {
    try {
      const response = await axiosInstance.post('/v1/global-search', { query })
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async createCatalog(catalog) {
    try {
      delete catalog?._id
      const response = await axiosInstance.post('/v1/catalogs', catalog)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async updateCatalog(catalogId, catalog) {
    try {
      const response = await axiosInstance.put(`/v1/catalogs/${catalogId}`, catalog)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async deleteCatalog(catalogId) {
    try {
      const response = await axiosInstance.delete(`/v1/catalogs/${catalogId}`)

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async compareCatalog(catalogIds = []) {
    try {
      const response = await axiosInstance.post('/v1/compare', {
        catalogIds
      })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}