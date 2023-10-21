import React from 'react'
import { Link } from 'react-router-dom'

const Campground = ({ campgroundData }) => {
  console.log(campgroundData)
  return (
    <div key={campgroundData._id}>
      <h3>{campgroundData.name}</h3>
      <p>{campgroundData.description}</p>
      <span>{campgroundData.location}</span>
      <Link to={`/campgrounds/${campgroundData._id}`}>
        View {campgroundData.name}
      </Link>
    </div>
  )
}

export default Campground
