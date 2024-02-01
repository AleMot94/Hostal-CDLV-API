import BedroomsDao from '../DAO/mongo-dev/bedrooms.dao.js'
import fs from 'fs'
import path from 'path'
import { __dirname } from '../utils/dirname.js'
import CustomError from '../utils/errors/custom.error.js'
import ErrorCode from '../utils/errors/status.code.js'

const bedroomsDao = new BedroomsDao()

class BedroomsService {
  async getAllBedrooms() {
    return bedroomsDao.get()
  }

  async getById(id) {
    return bedroomsDao.getById(id)
  }

  async postBedroom({ name, description, category, image }) {
    return bedroomsDao.postOne(name, description, category, image)
  }

  async deleteById(id) {
    const bedroom = await this.getById(id)
    const imagePath = path.join(__dirname, '../../public', bedroom.image)

    fs.unlinkSync(imagePath)

    const deleteBedroom = await bedroomsDao.deleteById(id)
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

      const imagePath = path.join(__dirname, '../../public', bedroom.image)
      let prevImg = ''

      if (image === null) {
        prevImg = bedroom.image
      } else {
        prevImg = image
        fs.unlinkSync(imagePath)
      }

      const updateBedroom = { name, description, category, image: prevImg }
      const result = await bedroomsDao.updateById({ _id: id }, updateBedroom)

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

export const bedroomsServices = new BedroomsService()
