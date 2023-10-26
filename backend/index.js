import express from 'express'
import { PORT } from './config.js'
const app = express()
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/index.js'
import campgroundsRouter from './routes/campgrounds.js'

app.use(cors())
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: [],
//   })
// )
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)
app.use('/campgrounds', campgroundsRouter)

// const newCampground = new Campground({
//   name: 'Desert Wonderland',
//   price: 100,
//   description: 'Hope you like scorpions',
//   location: 'El Paso, TX',
// })

// newCampground.save()

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
