import { bedroomsModel } from './models/bedrooms.model.js'
import CustomError from '../../utils/errors/custom.error.js'
import ErrorCode from '../../utils/errors/status.code.js'
import logger from '../../logger/index.js'

export default class BedroomsDao {
  get = async () => {
    try {
      const bedrooms = await bedroomsModel.find({})
      logger.info(bedrooms)
      return bedrooms
    } catch (error) {
      throw CustomError.createError({
        name: 'error collection',
        message: 'coleccion "habitaciones" no encontrada',
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
