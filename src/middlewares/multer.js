import multer from 'multer'

const save = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    if (file !== null) {
      // guarda el archivo poniéndole al nombre del archivo la fecha con la extensión
      // evita guardar 2 nombres iguales
      const ext = file.originalname.split('.').pop()
      cb(null, Date.now() + '.' + ext)
    }
  }
})

const filter = (req, file, cb) => {
  if (
    file &&
    (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg')
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

export const uploader = multer({ storage: save, fileFilter: filter })
