import express from 'express'
import { bedroomsController } from '../controllers/bedrooms.controller.js'
import { uploader } from '../middlewares/multer.js'
import {
  bedroomValidate,
  multerValidate
} from '../validations/bedroom.validate.js'

export const bedroomsRouter = express.Router()

bedroomsRouter.get('/', bedroomsController.getAll)

bedroomsRouter.get('/:id', bedroomsController.getAll)

bedroomsRouter.post(
  '/',
  uploader.single('image'),
  bedroomValidate,
  multerValidate,
  bedroomsController.postBedroom
)

bedroomsRouter.delete('/:id', bedroomsController.deleteById)

bedroomsRouter.put(
  '/:id',
  uploader.single('image'),
  bedroomValidate,
  multerValidate,
  bedroomsController.updateById
)
