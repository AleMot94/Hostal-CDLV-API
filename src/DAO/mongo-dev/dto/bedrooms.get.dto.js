class BedroomsGetDTO {
  constructor({ _id, __v, name, description, category, image }) {
    this.id = _id.toString()
    this.name = name
    this.description = description
    this.category = category
    this.image = image
  }
}

export default BedroomsGetDTO
