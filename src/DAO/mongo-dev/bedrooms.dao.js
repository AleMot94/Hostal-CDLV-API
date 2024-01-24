import { productsModel } from './models/bedrooms.model.js'

export default class ProductsDao {
  get = async () => {
    try {
      const products = await productsModel.find({})
      return products
    } catch (error) {
      throw new Error(error)
    }
  }
}
