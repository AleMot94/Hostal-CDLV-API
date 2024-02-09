import express from 'express'
import { messageController } from '../controllers/message.controller.js'
// import { uploader } from '../middlewares/multer.js'
// import {
//   multerValidate,
//   galleryValidate
// } from '../validations/bedroom.validate.js'
import { messageValidate } from '../validations/bedroom.validate.js'

export const messageRouter = express.Router()

// messageRouter.delete('/delete-all', messageController.deleteAll)

messageRouter.get('/', messageController.getAll)

messageRouter.get('/:id', messageController.getAll)

messageRouter.post('/', messageValidate, messageController.post)

// messageRouter.delete('/:id', messageController.deleteById)

// messageRouter.put(
//   '/:id',
//   uploader.single('image'),
//   messageController.updateById
// )
