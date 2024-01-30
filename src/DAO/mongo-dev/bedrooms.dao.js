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
        message: 'coleccion "habitaciones" no encontrada',
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
        name: 'error ID',
        message: 'id inexistente en base de datos',
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
        message: 'no se pudo crear el documento habitacion',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }
}
