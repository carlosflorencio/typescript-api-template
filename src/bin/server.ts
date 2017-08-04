import app from '../app'
import * as log4js from 'log4js'
import * as requireEnv from 'require-environment-variables'
import * as dotenv from 'dotenv'
dotenv.config()

/**
 * Required environment variables
 */
requireEnv([])

/**
 * Default log4js global configuration
 * info is the default log level
 */
log4js.configure({
  appenders: {
    stdout: { type: 'stdout' }
  },
  categories: {
    default: { appenders: ['stdout'], level: 'info' }
  }
})

const log = log4js.getLogger('Server')

/**
 * Start Express server
 */
const port = process.env.PORT || 3000

app.listen(port, () => {
  log.info(
    'App is running at http://localhost:%d in %s mode',
    port,
    app.get('env')
  )
  log.info('Press CTRL-C to stop\n')
})
