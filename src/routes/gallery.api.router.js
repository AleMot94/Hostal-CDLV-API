import express from 'express'
import { galleryController } from '../controllers/gallery.controller.js'
import { uploader } from '../middlewares/multer.js'
import {
  multerValidate,
  galleryValidate
} from '../validations/bedroom.validate.js'

export const galleryRouter = express.Router()

galleryRouter.get('/', galleryController.getAll)

galleryRouter.get('/:id', galleryController.getAll)

galleryRouter.post(
  '/',
  uploader.single('image'),
  multerValidate,
  galleryValidate,
  galleryController.post
)

galleryRouter.delete('/:id', galleryController.deleteById)

galleryRouter.put(
  '/:id',
  uploader.single('image'),
  galleryController.updateById
)
