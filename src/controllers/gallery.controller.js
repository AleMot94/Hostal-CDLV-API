import { galleryServices } from '../services/gallery.services.js'
// import BedroomDTO from '../DAO/mongo-dev/dto/bedroom.dto.js'

class GalleryController {
  async getAll(req, res) {
    try {
      const { id } = req.params

      const gallery =
        id === undefined
          ? await galleryServices.getAll()
          : await galleryServices.getById(id)

      return res.status(200).json({
        status: 'success',
        payload: gallery
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }
}

export const galleryController = new GalleryController()
