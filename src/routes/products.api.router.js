import express from 'express'
import { productController } from '../controllers/products.controller.js'

export const productsRouter = express.Router()

productsRouter.get('/', productController.getAll)
