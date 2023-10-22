import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <nav>
      <Link to='/'>YelpCamp</Link>
      <Link to='/campgrounds'>All Campgrounds</Link>
      <Link to='/campgrounds/new'>Add Campground</Link>
    </nav>
  )
}

export default MainNav
