import ErrorCode from '../utils/errors/status.code.js'

export default (error, req, res, next) => {
  switch (error.statusCode) {
    // 1
    case ErrorCode.Not_Found:
      res
        .status(ErrorCode.Not_Found)
        .send({ statusCode: ErrorCode.Not_Found, error: error.name })
      break
    // 2
    case ErrorCode.Internal_Server_Error:
      res.status(ErrorCode.Internal_Server_Error).send({
        statusCode: ErrorCode.Internal_Server_Error,
        error: error.name
      })
      break

    default:
      res.status(500).send({ statusCode: 500, error: 'Unhandled error' })
      break
  }
}
