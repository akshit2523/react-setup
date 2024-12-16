import axiosInstance from './axiosInstance'

export default class FilesService {

  static async uploadDealerProfileMedia(files) {
    try {
      const formData = new FormData()
      formData.append('file', files[0])

      const response = await axiosInstance.post('/v1/upload/dealer-profile-media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async uploadDealerCoverMedia(files) {
    try {
      const formData = new FormData()
      formData.append('file', files[0])

      const response = await axiosInstance.post('/v1/upload/dealer-cover-media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async uploadCatalogPreviewImage(catalogId, files) {
    try {
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('catalogId', catalogId)

      const response = await axiosInstance.post('/v1/upload/catalog-preview-media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }

  static async uploadCatalogGalleryMedia(catalogId, files) {
    try {
      const formData = new FormData()
      formData.append('catalogId', catalogId)
      for (let file of files) {
        formData.append('files', file)
      }

      const response = await axiosInstance.post('/v1/upload/catalog-gallery-media', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}