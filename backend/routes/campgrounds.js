import express from 'express'
import { Campground } from '../models/campground.js'
const campgroundRouter = express.Router()

campgroundRouter.get('/', async (req, res) => {
  const campgrounds = await Campground.find({})
  console.log('routes/campgrounds.js')
  // console.log(campgrounds)
  return res.status(200).json({
    count: campgrounds.length,
    data: campgrounds,
  })
})

campgroundRouter.get('/featured', async (req, res) => {
  const campgrounds = await Campground.find({ featured: true })
  console.log('/featured route')
  // console.log(campgrounds)
  return res.status(200).json({
    count: campgrounds.length,
    data: campgrounds,
  })
})

campgroundRouter.get('/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  console.log(campground)
  return res.status(200).json({
    data: campground,
  })
})

campgroundRouter.post('/', async (req, res) => {
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

campgroundRouter.put('/:id', async (req, res) => {
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

campgroundRouter.delete('/:id', async (req, res) => {
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

export default campgroundRouter
