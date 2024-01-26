class BedroomDTO {
  constructor(name, description, category, image) {
    this.name = name
    this.description = description
    this.category = category
    this.image = image
  }

  validate() {
    const errors = []

    if (!this.name || this.name.trim() === '') {
      errors.push('Falta el nombre.')
    }

    if (!this.description || this.description.trim() === '') {
      errors.push('Falta description.')
    }

    if (!this.category || this.category.trim() === '') {
      errors.push('Falta la categoria.')
    }

    if (!this.image || this.image.trim() === '') {
      errors.push('Falta imagen.')
    }

    return errors
  }
}

export default BedroomDTO
