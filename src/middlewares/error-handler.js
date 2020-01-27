import logger from '../helpers/logger'

const errorHandler = (app) => {
  app.use((req, res, next) => {
    next(new Error('Not found'))
  })

  app.use((err, req, res, next) => {
    logger.error(err.message)
    res.status(err.statusCode || 500).json({ message: err.message || 'Internal Server Error' })
  })
}

export default errorHandler
