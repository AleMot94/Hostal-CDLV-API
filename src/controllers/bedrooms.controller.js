import { bedroomsServices } from '../services/bedrooms.services.js'
import BedroomDTO from '../DAO/mongo-dev/dto/bedroom.dto.js'

class BedroomsController {
  async getAll(req, res) {
    try {
      const { id } = req.params

      const allBedrooms =
        id === undefined
          ? await bedroomsServices.getAllBedrooms()
          : await bedroomsServices.getById(id)

      return res.status(200).json({
        status: 'success',
        payload: allBedrooms
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }

  async postBedroom(req, res) {
    try {
      const { name, description, category } = req.body
      const image = '/uploads/' + req.file.filename

      const bedroomDTO = new BedroomDTO(name, description, category, image)

      const bedroom = await bedroomsServices.postBedroom(bedroomDTO)

      res.status(200).json({
        status: 'success',
        payload: bedroom
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }

  async deleteById(req, res) {
    try {
      const { id } = req.params

      await bedroomsServices.deleteById(id)

      res.status(200).json({
        status: 'success',
        payload: {}
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }

  async updateById(req, res) {
    try {
      let image = null
      const { name, description, category } = req.body
      const { id } = req.params
      // const image = '/uploads/' + req.file.filename
      if (req.file) {
        image = '/uploads/' + req.file.filename
      }

      const bedroomDTO = new BedroomDTO(name, description, category, image)

      await bedroomsServices.updateById(id, bedroomDTO)

      res.status(200).json({
        status: 'success',
        payload: {}
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        payload: error
      })
    }
  }
}

export const bedroomsController = new BedroomsController()
