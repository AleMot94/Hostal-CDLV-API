import { bedroomsModel } from './models/bedrooms.model.js'
import CustomError from '../../utils/errors/custom.error.js'
import ErrorCode from '../../utils/errors/status.code.js'
import BedroomsGetDTO from './dto/bedrooms.get.dto.js'

export default class BedroomsDao {
  get = async () => {
    try {
      const bedrooms = await bedroomsModel.find({})

      const bedroomsGetDto = bedrooms.map(
        (bedroom) => new BedroomsGetDTO(bedroom)
      )

      return bedroomsGetDto
    } catch (error) {
      throw CustomError.createError({
        name: 'error collection',
        message: 'coleccion "habitaciones" no encontrada / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }

  getById = async (id) => {
    try {
      const bedroom = await bedroomsModel.findById(id)

      const bedroomDTO = new BedroomsGetDTO(bedroom)

      return bedroomDTO
    } catch (error) {
      throw CustomError.createError({
        name: 'error get id',
        message: 'id no encontrado / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }

  postOne = async (name, description, category, image) => {
    try {
      const bedroom = await bedroomsModel.create({
        name,
        description,
        category,
        image
      })

      return bedroom
    } catch (error) {
      throw CustomError.createError({
        name: 'error create',
        message: 'no se creo el documento bedroom / error DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }

  deleteById = async (id) => {
    try {
      const deleteBedroom = await bedroomsModel.deleteOne({ _id: id })

      return deleteBedroom
    } catch (error) {
      throw CustomError.createError({
        name: 'error delete',
        message: 'error DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }
}
