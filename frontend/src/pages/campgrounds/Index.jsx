import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner'
import Campground from '../../components/Campground'

const Index = () => {
  const [allCampgrounds, setAllCampgrounds] = useState([])
  const [loading, setLoading] = useState([])
  useEffect(() => {
    fetch('http://localhost:5555/campgrounds')
      .then((res) => res.json())
      .then((data) => setAllCampgrounds(data.data))
  }, [])

  // console.log(allCampgrounds)
  const campgroundElements = allCampgrounds.map((campground) => (
    <Campground key={campground._id} campgroundData={campground} />
  ))
  return <div>{campgroundElements}</div>
}

export default Index
