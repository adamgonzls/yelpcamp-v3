import express from 'express'
import { PORT } from './config.js'
const app = express()
import 'dotenv/config'
import mongoose from 'mongoose'
import { Campground } from './models/campground.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('YelpCamp Version 3')
})

app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({})
  console.log(campgrounds)
  return res.status(200).json({
    count: campgrounds.length,
    data: campgrounds,
  })
})

app.get('/campgrounds/:id/edit', (req, res) => {
  // edit campground form
})

app.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  console.log(campground)
  return res.status(200).json({
    data: campground,
  })
})

app.get('/campgrounds/new', async (req, res) => {
  // new campground form
})

app.post('/campgrounds', async (req, res) => {
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

app.put('/campgrounds/:id', async (req, res) => {
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
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body)
    if (!campground) {
      return res.status(404).json({ message: 'Campground not found' })
    }
    return res.status(200).send({ message: 'Campground updated successfully' })
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})

app.delete('/campgrounds/:id', async (req, res) => {
  try {
    const campground = await Campground.findByIdAndDelete(req.params.id)
    if (!campground) {
      return res.status(404).json({ message: 'Campground not found' })
    }
    return res
      .status(200)
      .send({ message: `Campground ${campground.name} deleted successfully` })
  } catch (error) {
    return res.status(500).send({ message: error.message })
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
