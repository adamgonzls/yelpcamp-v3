import express from 'express'
const router = express.Router()
import { Campground } from '../models/campground.js'

router.get('/', async (req, res) => {
  // this route does nothing, it is to be removed
  // console.log('routes/index.js')
  // console.log(req.query)
  // const featuredCampgrounds = await Campground.find({
  //   featured: true,
  // })
  // // console.log(featuredCampgrounds)
  // return res.status(200).json({
  //   count: featuredCampgrounds.length,
  //   data: featuredCampgrounds,
  // })
  // res.json('YelpCamp Version 3')
})

export default router
