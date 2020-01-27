import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
  res.send('School Node APP')
})

export default router
