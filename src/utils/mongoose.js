import { connect } from 'mongoose'
import logger from '../logger/index.js'

const connectMongoose = async () => {
  try {
    await connect(
      'mongodb+srv://alector666:NtD6kKKF3ig3uDE6@cluster-ale.7qtgufr.mongodb.net/hostal-api?retryWrites=true&w=majority'
    )
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
