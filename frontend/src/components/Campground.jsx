import React from 'react'
import { Link } from 'react-router-dom'
import { formatUSD } from '../utilities/utilities'

const Campground = ({ campgroundData }) => {
  // console.log(campgroundData)

  return (
    <div>
      <span>{campgroundData.location}</span>
      <h2>{campgroundData.name}</h2>
      <span>{formatUSD.format(campgroundData.price)} night</span>
      <br />
      <Link to={`/campgrounds/${campgroundData._id}`}>
        View {campgroundData.name}
      </Link>
    </div>
  )
}

export default Campground
