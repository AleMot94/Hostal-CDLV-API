import { loggerDev } from './logger.dev.js'
import { loggerProd } from './logger.prod.js'
import { entorno } from '../config/dotenv.config.js'

let logger = null

if (entorno.NODE_ENV === 'DEV') {
  logger = loggerDev()
}

if (entorno.NODE_ENV === 'PROD') {
  logger = loggerProd()
}

export default logger
