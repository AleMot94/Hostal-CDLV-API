import express from 'express'
import { galleryController } from '../controllers/gallery.controller.js'
import { uploader } from '../middlewares/multer.js'
import {
  multerValidate,
  galleryValidate
} from '../validations/bedroom.validate.js'

export const galleryRouter = express.Router()

galleryRouter.delete('/delete-all', galleryController.deleteAll)

galleryRouter.get('/', galleryController.getAll)

galleryRouter.get('/:id', galleryController.getAll)

galleryRouter.post(
  '/',
  (req, res, next) => {
    console.log('Request Body:', req.body)
    next()
  },
  uploader.single('image'),
  (req, res, next) => {
    console.log('Request Body:', req.body)
    next()
  },
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
