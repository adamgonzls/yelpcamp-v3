import express from 'express'
import { PORT } from './config.js'
const app = express()
import 'dotenv/config'
import mongoose from 'mongoose'

app.get('/', (req, res) => {
  res.send('YelpCamp Version 3')
})

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('DB is connected')
    app.listen(PORT, () => {
      console.log(`App is listening on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(`Mongo Error: ${error}`)
  })
