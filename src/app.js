import express from 'express'
import cors from 'cors'
import { connectMongo } from './utils/mongoose.js'
import { homeRouter } from './routes/home.router.js'
import { bedroomsRouter } from './routes/bedrooms.api.router.js'
import { galleryRouter } from './routes/gallery.api.router.js'
import { messageRouter } from './routes/message.api.router.js'
import { entorno } from './config/dotenv.config.js'
import handleError from './middlewares/handleError.js'
import CustomError from './utils/errors/custom.error.js'
import ErrorCode from './utils/errors/status.code.js'
import logger from './logger/index.js'

// CONFIGURACION EXPRESS
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
const port = entorno.PORT || 9000

// CONECCION A MONGO
connectMongo()

// ENDPOINTS VISTAS
app.use('/', homeRouter)

app.use((req, res, next) => {
  console.log('Request Headers:', req.headers)
  console.log('Request Body:', req.body)
  next()
})

// ENDPOINTS API
app.use('/api/bedrooms', bedroomsRouter)
app.use('/api/gallery', galleryRouter)
app.use('/api/message', messageRouter)

app.get('*', (req, res, next) => {
  try {
    throw CustomError.createError({
      name: 'error page not found',
      message: 'the path not exist',
      code: ErrorCode.Not_Found
    })
  } catch (error) {
    next(error)
  }
})

app.use(handleError)

app.listen(port, () => logger.info(`escuchando el puerto ${port}`))
