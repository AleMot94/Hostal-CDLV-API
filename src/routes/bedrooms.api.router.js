import express from 'express'
import { bedroomsController } from '../controllers/bedrooms.controller.js'
import { uploader } from '../middlewares/multer.js'

export const bedroomsRouter = express.Router()

bedroomsRouter.get('/', bedroomsController.getAll)

bedroomsRouter.post(
  '/',
  uploader.single('image'),
  bedroomsController.postBedroom
)
