import { galleryServices } from '../services/gallery.services.js'
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

  async deleteById(req, res) {
    try {
      const { id } = req.params

      await galleryServices.deleteById(id)

      res.status(200).json({
        status: 'success',
        payload: {}
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }

  async updateById(req, res) {
    try {
      let image = null
      const { category } = req.body
      const { id } = req.params
      if (req.file) {
        image = '/uploads/' + req.file.filename
      }

      const galeryDTO = new GalleryDTO(category, image)

      await galleryServices.updateById(id, galeryDTO)

      res.status(200).json({
        status: 'success',
        payload: {}
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
