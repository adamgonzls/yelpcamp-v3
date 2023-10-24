import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='navigation--default'>
        <div>
          <h3>YelpCamp</h3>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <h3>Support</h3>
        </div>
      </div>
      <div className='footer--secondary'>
        © {new Date().getFullYear()} YelpCamp
      </div>
    </footer>
  )
}

export default Footer
