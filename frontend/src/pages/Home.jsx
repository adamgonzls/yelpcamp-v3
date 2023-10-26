import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Campground from '../components/Campground'

const Home = () => {
  const [count, setCount] = useState(0)
  const [featuredCampgrounds, setFeaturedCampgrounds] = useState([])

  useEffect(() => {
    const featuredObj = { featured: true }
    axios
      .get(`http://localhost:5555/campgrounds/featured`)
      .then((res) => {
        console.log(res)
        setFeaturedCampgrounds(res.data.data)
      })
      .catch((error) => {
        alert('An error occurred, please check console')
        console.log(error)
      })
  }, [])

  const featuredElements = featuredCampgrounds.map((campground, index) => {
    return <Campground key={campground._id} campgroundData={campground} />
  })

  return (
    <>
      <div>
        <h1>Featured Campgrounds</h1>
        <p>These campgrounds have been hand-selected for your enjoyment.</p>
        <div className='campground-grid'>{featuredElements}</div>
      </div>
    </>
  )
}

export default Home
