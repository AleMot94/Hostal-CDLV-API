import BedroomsDao from '../DAO/mongo-dev/bedrooms.dao.js'

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
}

export const bedroomsServices = new BedroomsService()
