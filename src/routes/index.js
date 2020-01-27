import { Router } from 'express'

import appRoutes from './app'
import lessonRoutes from './lesson'

const router = new Router()

router.use('/', appRoutes)
router.use('/', lessonRoutes)

export default router
