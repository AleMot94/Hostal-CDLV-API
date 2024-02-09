import { messageModel } from './models/message.model.js'
import CustomError from '../../utils/errors/custom.error.js'
import ErrorCode from '../../utils/errors/status.code.js'
import MessageGetDTO from './dto/message.get.dto.js'

export default class MessageDao {
  get = async () => {
    try {
      const message = await messageModel.find({})

      const messageGetDTO = message.map((message) => new MessageGetDTO(message))

      return messageGetDTO
    } catch (error) {
      throw CustomError.createError({
        name: 'error collection',
        message: 'coleccion "message" no encontrada / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }

  getById = async (id) => {
    try {
      const message = await messageModel.findById(id)

      const messageDTO = new MessageGetDTO(message)

      return messageDTO
    } catch (error) {
      throw CustomError.createError({
        name: 'error get id',
        message: 'id no encontrado -- message / error DB',
        statusCode: ErrorCode.Not_Found
      })
    }
  }

  postOne = async (name, email, message) => {
    try {
      const messages = await messageModel.create({
        name,
        email,
        message
      })

      return messages
    } catch (error) {
      throw CustomError.createError({
        name: 'error create',
        message: 'no se creo el documento gallery / error DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }

  // deleteById = async (id) => {
  //   try {
  //     const deletePicture = await galleryModel.deleteOne({ _id: id })

  //     return deletePicture
  //   } catch (error) {
  //     throw CustomError.createError({
  //       name: 'error delete',
  //       message: 'error DB',
  //       statusCode: ErrorCode.Internal_Server_Error
  //     })
  //   }
  // }

  // updateById = async (id, update) => {
  //   try {
  //     const updatePicture = await galleryModel.updateOne(
  //       { _id: id },
  //       { $set: update }
  //     )

  //     return updatePicture
  //   } catch (error) {
  //     throw CustomError.createError({
  //       name: 'error update',
  //       message: 'error en la coneccion DB',
  //       statusCode: ErrorCode.Internal_Server_Error
  //     })
  //   }
  // }

  // deleteAll = async () => {
  //   try {
  //     await galleryModel.deleteMany({})
  //   } catch (error) {
  //     throw CustomError.createError({
  //       name: 'error delete all',
  //       message: 'error al querer eliminar todos los documentos gallery',
  //       statusCode: ErrorCode.Internal_Server_Error
  //     })
  //   }
  // }
}
