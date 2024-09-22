import { config } from './config'
import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TS')
})

app.listen(config.PORT, config.HOST, () => {
  console.log(`[server]: Server is running at http://${config.HOST}:${config.PORT}`)
})
