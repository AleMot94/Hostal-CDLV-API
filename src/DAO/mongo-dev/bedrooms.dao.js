import { bedroomsModel } from './models/bedrooms.model.js'

export default class BedroomsDao {
  get = async () => {
    try {
      const bedrooms = await bedroomsModel.find({})
      return bedrooms
    } catch (error) {
      throw new Error(error)
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
      throw new Error(error)
    }
  }
}
