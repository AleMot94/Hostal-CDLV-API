import { galleryModel } from './models/gallery.model.js'
import CustomError from '../../utils/errors/custom.error.js'
import ErrorCode from '../../utils/errors/status.code.js'
import GalleryGetDTO from './dto/gallery.get.dto.js'

export default class GalleryDao {
  get = async () => {
    try {
      const gallery = await galleryModel.find({})

      const galleryGetDTO = gallery.map((picture) => new GalleryGetDTO(picture))

      return galleryGetDTO
    } catch (error) {
      throw CustomError.createError({
        name: 'error collection',
        message: 'coleccion "galeria" no encontrada / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }

  getById = async (id) => {
    try {
      const gallery = await galleryModel.findById(id)

      const galleryDTO = new GalleryGetDTO(gallery)

      return galleryDTO
    } catch (error) {
      throw CustomError.createError({
        name: 'error get id',
        message: 'id no encontrado / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }

  postOne = async (category, image) => {
    try {
      const picture = await galleryModel.create({
        category,
        image
      })

      return picture
    } catch (error) {
      throw CustomError.createError({
        name: 'error create',
        message: 'no se creo el documento gallery / error DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }

  deleteById = async (id) => {
    try {
      const deletePicture = await galleryModel.deleteOne({ _id: id })

      return deletePicture
    } catch (error) {
      throw CustomError.createError({
        name: 'error delete',
        message: 'error DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }
}
