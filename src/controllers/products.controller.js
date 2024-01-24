import { productsServices } from '../services/products.services.js'

class ProductsController {
  async getAll(_, res) {
    try {
      const allProducts = await productsServices.getAllProducts()

      return res.status(200).json({
        status: 'success',
        payload: allProducts
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }
}

export const productController = new ProductsController()
