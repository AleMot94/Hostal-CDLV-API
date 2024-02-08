import { galleryServices } from '../services/gallery.services.js'
// import BedroomDTO from '../DAO/mongo-dev/dto/bedroom.dto.js'
import GalleryDTO from '../DAO/mongo-dev/dto/gallery.dto.js'

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

  async post(req, res) {
    try {
      const { category } = req.body
      const image = '/uploads/' + req.file.filename

      const pictureDTO = new GalleryDTO(category, image)

      const picturePost = await galleryServices.post(pictureDTO)

      res.status(200).json({
        status: 'success',
        payload: picturePost
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
