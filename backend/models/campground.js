import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CampgroundSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  location: String,
  image: String,
  featured: Boolean,
})

export const Campground = mongoose.model('Campground', CampgroundSchema)
