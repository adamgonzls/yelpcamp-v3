import express from 'express'
import { PORT } from './config.js'
const app = express()
import 'dotenv/config'
import mongoose from 'mongoose'
import { Campground } from './models/campground.js'

app.get('/', (req, res) => {
  res.send('YelpCamp Version 3')
})

app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find()
  console.log(campgrounds)
  return res.status(200).json({
    count: campgrounds.length,
    data: campgrounds,
  })
})

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
