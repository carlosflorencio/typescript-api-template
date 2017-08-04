import * as request from 'supertest'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { errorHandler, utilsHandler } from '../services/middlewares'
import router from './home'

let app

beforeAll(() => {
  // order matters
  app = express()
  app.use(bodyParser.json())
  app.use(utilsHandler)
  app.use(router)
  app.use(errorHandler)
})

test('test status code is 200', () => {
  return request(app).get('/').expect(200)
})
