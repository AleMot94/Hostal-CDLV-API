import { bedroomsServices } from '../services/bedrooms.services.js'
// import { validate } from '../utils/validate.img.js'
import BedroomDTO from '../DAO/mongo-dev/dto/bedroom.dto.js'

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
      const image = '/uploads/' + req.file.filename

      const bedroomDTO = new BedroomDTO(name, description, category, image)
      // const validation = validate(name, description, category, image)

      const validationBedroom = bedroomDTO.validate()

      if (validationBedroom.length > 0) {
        // Si hay errores de validación, responder con un código de estado 400 (Bad Request) y los errores
        return res.status(400).json({ errors: validationBedroom })
      }

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
}

export const bedroomsController = new BedroomsController()
