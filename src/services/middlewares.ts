import * as log4js from 'log4js'
const logger = log4js.getLogger('Middleware')

/**
 * Add some useful methods to req and res objects
 */
export const utilsHandler = (req, res, next) => {
  res.sendError = (err: string, statusCode: number = 400) => {
    return res.status(statusCode).send({ error: err })
  }

  return next()
}

/**
 * Not found handler
 */
export const notFoundHandler = (req, res) => {
  res.sendError('That endpoint does not exist.', 404)
}

/**
 * Error handler
 */
export const errorHandler = (err, req, res, next) => {
  logger.error('Error middleware', err)

  res.sendError('Houston, we have a problem!', 500)
}
