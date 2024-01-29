import logger from '../../logger/index.js'

export default class CustomError {
  static createError({ name = 'Error', message, code: statusCode }) {
    const error = new Error(message)
    error.name = name
    error.statusCode = statusCode

    logger.error(error.message)

    throw error
  }
}
