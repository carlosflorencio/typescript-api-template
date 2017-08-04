import { Router, Request, Response } from 'express'
import HelloWorld from '../models/HelloWorld'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send({ message: HelloWorld.message() })
})

export default router
