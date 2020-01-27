import { Router } from 'express'
import logger from '../helpers/logger'

const router = new Router()

router.get('/lessons', (req, res) => {
  logger.info('Request /lessons}')
})

export default router
