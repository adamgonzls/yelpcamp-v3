import React from 'react'
import { Link } from 'react-router-dom'
import { formatUSD } from '../utilities/utilities'

const Campground = ({ campgroundData }) => {
  // console.log(campgroundData)

  return (
    <div className='campground-grid__container'>
      <h2>{campgroundData.name}</h2>
      <img
        className='campground-grid__image'
        src={campgroundData.image}
        alt=''
      />
      <p className='campground-grid--tagline'>"{campgroundData.tagline}"</p>
      <span className='campground-grid--bold campground-grid--location'>
        {campgroundData.location}
      </span>
      <br />
      <span>
        <span className='campground-grid--bold'>
          {formatUSD.format(campgroundData.price)}
        </span>{' '}
        night
      </span>
      <br />
      <Link
        className='campground-grid--link'
        to={`/campgrounds/${campgroundData._id}`}
      >
        View {campgroundData.name}
      </Link>
    </div>
  )
}

export default Campground
