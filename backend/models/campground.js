import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CampgroundSchema = new Schema({
  name: String,
  description: String,
  tagline: String,
  price: Number,
  location: String,
  image: String,
  featured: Boolean,
})

export const Campground = mongoose.model('Campground', CampgroundSchema)
