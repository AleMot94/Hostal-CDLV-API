class GalleryGetDTO {
  constructor({ _id, category, image }) {
    this.id = _id.toString()
    this.category = category
    this.image = image
  }
}

export default GalleryGetDTO
