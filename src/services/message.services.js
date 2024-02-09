import MessageDao from '../DAO/mongo-dev/message.dao.js'
// import fs from 'fs'
// import path from 'path'
// import CustomError from '../utils/errors/custom.error.js'
// import ErrorCode from '../utils/errors/status.code.js'

const messageDao = new MessageDao()

class MessageService {
  async getAll() {
    return messageDao.get()
  }

  async getById(id) {
    return messageDao.getById(id)
  }

  async post({ name, email, message }) {
    return messageDao.postOne(name, email, message)
  }

  // async deleteById(id) {
  //   const picture = await this.getById(id)
  //   const imagePath = path.join('public', picture.image)

  //   fs.unlinkSync(imagePath)

  //   const deletePicture = await messageDao.deleteById(id)
  //   return deletePicture
  // }

  // async updateById(id, { category, image }) {
  //   try {
  //     const picture = await this.getById(id)

  //     if (!picture) {
  //       throw CustomError.createError({
  //         name: 'error update',
  //         message: 'No se encontró el dormitorio con el ID proporcionado',
  //         statusCode: ErrorCode.Not_Found
  //       })
  //     }

  //     const imagePath = path.join('public', picture.image)
  //     let prevImg = ''

  //     if (image === null) {
  //       prevImg = picture.image
  //     } else {
  //       prevImg = image
  //       fs.unlinkSync(imagePath)
  //     }

  //     const updatePicture = { category, image: prevImg }
  //     const result = await messageDao.updateById({ _id: id }, updatePicture)

  //     return result
  //   } catch (error) {
  //     throw CustomError.createError({
  //       name: 'error update',
  //       message: 'error en la conexión DB',
  //       statusCode: ErrorCode.Internal_Server_Error
  //     })
  //   }
  // }

  // async deleteAll() {
  //   try {
  //     const allPictures = await messageDao.get()

  //     for (const picture of allPictures) {
  //       const imagePath = path.join('public', picture.image)
  //       fs.unlinkSync(imagePath)
  //     }

  //     const deleteAllGallery = await messageDao.deleteAll()

  //     return deleteAllGallery
  //   } catch (error) {
  //     throw CustomError.createError({
  //       name: 'error deleteAll',
  //       message: 'Error al eliminar todos los dormitorios',
  //       statusCode: ErrorCode.Internal_Server_Error
  //     })
  //   }
  // }
}

export const messageServices = new MessageService()
