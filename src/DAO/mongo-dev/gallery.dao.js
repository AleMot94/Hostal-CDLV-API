import { galleryModel } from './models/gallery.model.js'
import CustomError from '../../utils/errors/custom.error.js'
import ErrorCode from '../../utils/errors/status.code.js'
// import BedroomsGetDTO from './dto/bedrooms.get.dto.js'

export default class GalleryDao {
  get = async () => {
    try {
      const gallery = await galleryModel.find({})

      // const bedroomsGetDto = bedrooms.map(
      //   (bedroom) => new BedroomsGetDTO(bedroom)
      // )

      return gallery
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

      // const bedroomDTO = new BedroomsGetDTO(bedroom)

      return gallery
    } catch (error) {
      throw CustomError.createError({
        name: 'error get id',
        message: 'id no encontrado / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }
}
