import { messageServices } from '../services/message.services.js'
import MessageDTO from '../DAO/mongo-dev/dto/message.dto.js'

class MessageController {
  async getAll(req, res) {
    try {
      const { id } = req.params

      const message =
        id === undefined
          ? await messageServices.getAll()
          : await messageServices.getById(id)

      return res.status(200).json({
        status: 'success',
        payload: message
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }

  async post(req, res) {
    try {
      const { name, email, message } = req.body

      const messageDTO = new MessageDTO(name, email, message)

      const messagePost = await messageServices.post(messageDTO)

      res.status(200).json({
        status: 'success',
        payload: messagePost
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }

  // async deleteById(req, res) {
  //   try {
  //     const { id } = req.params

  //     await messageServices.deleteById(id)

  //     res.status(200).json({
  //       status: 'success',
  //       payload: {}
  //     })
  //   } catch (error) {
  //     return res.status(500).json({
  //       status: 'error',
  //       payload: error
  //     })
  //   }
  // }

  // async updateById(req, res) {
  //   try {
  //     let image = null
  //     const { category } = req.body
  //     const { id } = req.params
  //     if (req.file) {
  //       image = '/uploads/' + req.file.filename
  //     }

  //     const galeryDTO = new MessageDTO(category, image)

  //     await messageServices.updateById(id, galeryDTO)

  //     res.status(200).json({
  //       status: 'success',
  //       payload: {}
  //     })
  //   } catch (error) {
  //     return res.status(500).json({
  //       status: 'error',
  //       payload: error
  //     })
  //   }
  // }

  // async deleteAll(req, res) {
  //   try {
  //     await messageServices.deleteAll()

  //     res.status(200).json({
  //       status: 'success',
  //       payload: {}
  //     })
  //   } catch (error) {
  //     return res.status(500).json({
  //       status: 'error',
  //       payload: error
  //     })
  //   }
  // }
}

export const messageController = new MessageController()
