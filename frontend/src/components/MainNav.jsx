import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <header className='header'>
      <nav className='navigation--default'>
        <Link to='/'>YelpCamp</Link>
        <Link to='/campgrounds'>All Campgrounds</Link>
        <Link to='/campgrounds/new'>Add Campground</Link>
      </nav>
    </header>
  )
}

export default MainNav
