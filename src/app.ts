import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as log4js from 'log4js'
import {
  utilsHandler,
  errorHandler,
  notFoundHandler
} from './services/middlewares'

/**
 * Controllers (route handlers)
 */
import homeController from './controllers/home'

/**
 * log4js Logger
 */
const logger = log4js.getLogger('Express')

/**
 * Create the Express object
 */
const app = express()

/**
 * Express configuration
 */
app.disable('X-Powered-By')
app.use(log4js.connectLogger(logger, { level: 'auto' })) // replaces morgan
app.use(bodyParser.json())
app.use(utilsHandler) // adds some useful functions to req and res objects
//app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Primary app routes
 */
app.use('/', homeController)

/**
 * Catch 404
 */
app.use(notFoundHandler)

/**
 * Last error handler
 */
app.use(errorHandler)

export default app
