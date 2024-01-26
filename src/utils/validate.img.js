import * as fs from 'node:fs'

export const validate = (name, description, category, image) => {
  const errors = []

  if (name === undefined || name.trim() === '') {
    errors.push('El nombre no debe estar vacio')
  }
  if (description === undefined || description.trim() === '') {
    errors.push('no hay descripcion')
  }
  if (
    category === undefined ||
    category !== 'habitacion' ||
    category.trim() === ''
  ) {
    errors.push('categoria permitida --> habitacion / o campo vacio')
  }
  if (image === undefined) {
    errors.push('Selecciona una imagen en formato jpg o png')
  } else {
    if (errors !== '') {
      fs.unlinkSync('./public/uploads/' + image)
    }
  }

  return errors
}
