import { connect } from 'mongoose'
import logger from '../logger/index.js'
import { entorno } from '../config/dotenv.config.js'

const stringConection = `mongodb+srv://${entorno.MONGO_USUARIO}:${entorno.MONGO_PASS}@cluster-ale.7qtgufr.mongodb.net/${entorno.MONGO_DB}?retryWrites=true&w=majority`

const connectMongoose = async () => {
  try {
    await connect(stringConection)
    logger.info('Mongo Conectado')
  } catch (error) {
    throw new Error({ error: 'no se pudo conectar a mongo' })
  }
}

export const connectMongo = async () => {
  try {
    await connectMongoose()
  } catch (error) {
    return error
  }
}
