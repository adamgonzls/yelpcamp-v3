import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/campgrounds'>All Campgrounds</Link>
    </nav>
  )
}

export default MainNav
