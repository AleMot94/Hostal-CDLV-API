import GalleryDao from '../DAO/mongo-dev/gallery.dao.js'
import fs from 'fs'
import path from 'path'
// import CustomError from '../utils/errors/custom.error.js'
// import ErrorCode from '../utils/errors/status.code.js'

const gallryDao = new GalleryDao()

class GalleryService {
  async getAll() {
    return gallryDao.get()
  }

  async getById(id) {
    return gallryDao.getById(id)
  }

  async post({ category, image }) {
    return gallryDao.postOne(category, image)
  }

  async deleteById(id) {
    const picture = await this.getById(id)
    const imagePath = path.join('public', picture.image)

    fs.unlinkSync(imagePath)

    const deletePicture = await gallryDao.deleteById(id)
    return deletePicture
  }
}

export const galleryServices = new GalleryService()
