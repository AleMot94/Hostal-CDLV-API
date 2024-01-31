import BedroomsDao from '../DAO/mongo-dev/bedrooms.dao.js'
import fs from 'fs'
import path from 'path'
import { __dirname } from '../utils/dirname.js'

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
}

export const bedroomsServices = new BedroomsService()
