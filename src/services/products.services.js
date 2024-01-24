import ProductsDao from '../DAO/mongo-dev/products.dao.js'

const productsDao = new ProductsDao()

class ProductsService {
  async getAllProducts() {
    try {
      const products = await productsDao.get()
      return products
    } catch (error) {
      console.log(error)
    }
  }
}

export const productsServices = new ProductsService()
