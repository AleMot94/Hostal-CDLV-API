import BedroomsDao from '../DAO/mongo-dev/bedrooms.dao.js'

const bedroomsDao = new BedroomsDao()

class BedroomsService {
  async getAllBedrooms() {
    try {
      const bedrooms = await bedroomsDao.get()
      return bedrooms
    } catch (error) {
      console.log(error)
    }
  }

  async postBedroom(name, description, category, image) {
    try {
      const bedrooms = await bedroomsDao.postOne(
        name,
        description,
        category,
        image
      )
      return bedrooms
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const bedroomsServices = new BedroomsService()
