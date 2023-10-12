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

app.get('/campgrounds/:id/new', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
})

app.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  console.log(campground)
  return res.status(200).json({
    data: campground,
  })
})

app.post('/campgrounds/new', async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.price ||
      !req.body.description ||
      !req.body.location
    ) {
      return res.status(400).send({
        message:
          'Please send all required fields: name, price, description, location',
      })
    }
    const newCampground = new Campground(req.body)
    await newCampground.save()
    return res.status(201).send(newCampground)
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
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
