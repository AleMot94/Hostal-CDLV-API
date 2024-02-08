import GalleryDao from '../DAO/mongo-dev/gallery.dao.js'
import fs from 'fs'
import path from 'path'
import CustomError from '../utils/errors/custom.error.js'
import ErrorCode from '../utils/errors/status.code.js'

const gallryDao = new GalleryDao()

class GalleryService {
  async getAll() {
    return gallryDao.get()
  }

  async getById(id) {
    return gallryDao.getById(id)
  }

  async post({ category, image }) {
    return gallryDao.postOne(category, image)
  }

  async deleteById(id) {
    const picture = await this.getById(id)
    const imagePath = path.join('public', picture.image)

    fs.unlinkSync(imagePath)

    const deletePicture = await gallryDao.deleteById(id)
    return deletePicture
  }

  async updateById(id, { category, image }) {
    try {
      const picture = await this.getById(id)

      if (!picture) {
        throw CustomError.createError({
          name: 'error update',
          message: 'No se encontró el dormitorio con el ID proporcionado',
          statusCode: ErrorCode.Not_Found
        })
      }

      const imagePath = path.join('public', picture.image)
      let prevImg = ''

      if (image === null) {
        prevImg = picture.image
      } else {
        prevImg = image
        fs.unlinkSync(imagePath)
      }

      const updatePicture = { category, image: prevImg }
      const result = await gallryDao.updateById({ _id: id }, updatePicture)

      return result
    } catch (error) {
      throw CustomError.createError({
        name: 'error update',
        message: 'error en la conexión DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }
}

export const galleryServices = new GalleryService()
