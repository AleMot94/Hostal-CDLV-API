export function bedroomValidate(req, res, next) {
  const { name, description, category } = req.body

  const errors = []

  if (!name || name.trim() === '') {
    errors.push('Falta cargar nombre')
  }

  if (!description || description.trim() === '') {
    errors.push('Falta cargar una descripcion')
  }

  if (!category) {
    errors.push('Falta cargar la categoria')
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'error',
      payload: errors
    })
  }

  next()
}

export function galleryValidate(req, res, next) {
  const { category } = req.body

  const errors = []

  if (!category) {
    errors.push('Falta cargar la categoria')
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'error',
      payload: errors
    })
  }

  next()
}

export function multerValidate(req, res, next) {
  if (!req.file) {
    return res.status(400).json({
      status: 'error',
      payload: 'Falta cargar una imagen'
    })
  }
  next()
}
