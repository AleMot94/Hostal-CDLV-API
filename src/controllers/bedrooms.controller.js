import { bedroomsServices } from '../services/bedrooms.services.js'
// import { validate } from '../utils/validate.img.js'

class BedroomsController {
  async getAll(req, res) {
    try {
      const id = req.params

      const allBedrooms =
        id === undefined
          ? await bedroomsServices.getAllBedrooms()
          : await bedroomsServices.getAllBedrooms() // tendria que ser un getByIdBedroom

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
      const image = req.file.filename

      // const validation = validate(name, description, category, image)

      await bedroomsServices.postBedroom(name, description, category, image)

      res.status(200).json({
        status: 'piola',
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
