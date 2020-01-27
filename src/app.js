import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import errorHandler from './middlewares/error-handler'
import logger from './helpers/logger'
import routes from './routes'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
errorHandler(app)

app.listen(process.env.PORT, () => logger.info('App listen on port 8000!'))
