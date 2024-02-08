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

  async post({ name, description, category, image }) {
    return gallryDao.postOne(name, description, category, image)
  }

  async deleteById(id) {
    const bedroom = await this.getById(id)
    const imagePath = path.join('public', bedroom.image)

    fs.unlinkSync(imagePath)

    const deleteBedroom = await gallryDao.deleteById(id)
    return deleteBedroom
  }

  async updateById(id, { name, description, category, image }) {
    try {
      const bedroom = await this.getById(id)

      if (!bedroom) {
        throw CustomError.createError({
          name: 'error update',
          message: 'No se encontró el dormitorio con el ID proporcionado',
          statusCode: ErrorCode.Not_Found
        })
      }

      const imagePath = path.join('public', bedroom.image)
      let prevImg = ''

      if (image === null) {
        prevImg = bedroom.image
      } else {
        prevImg = image
        fs.unlinkSync(imagePath)
      }

      const updateBedroom = { name, description, category, image: prevImg }
      const result = await gallryDao.updateById({ _id: id }, updateBedroom)

      return result
    } catch (error) {
      throw CustomError.createError({
        name: 'error update',
        message: 'error en la conexión DB',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }

  async deleteAll() {
    try {
      const allBedrooms = await gallryDao.get()

      for (const bedroom of allBedrooms) {
        const imagePath = path.join('public', bedroom.image)
        fs.unlinkSync(imagePath)
      }

      const deleteAllBedrooms = await gallryDao.deleteAll()

      return deleteAllBedrooms
    } catch (error) {
      throw CustomError.createError({
        name: 'error deleteAll',
        message: 'Error al eliminar todos los dormitorios',
        statusCode: ErrorCode.Internal_Server_Error
      })
    }
  }
}

export const galleryServices = new GalleryService()
