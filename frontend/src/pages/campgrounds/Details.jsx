import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { formatUSD } from '../../utilities/utilities'

const Details = () => {
  const [campground, setCampground] = useState()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:5555/campgrounds/${id}`)
      const json = await data.json()
      // console.log(json)
      setCampground(json.data)
      setLoading(false)
    }

    fetchData().catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5555/campgrounds/${id}`)
      navigate('/campgrounds')
    } catch (error) {
      alert('An error occurred, please check console')
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <div>
          <h1>{campground.name}</h1>
          <h2>Campground Details:</h2>
          <p>{campground.description}</p>
          <span>{campground.location}</span>
          <br />
          <span>{formatUSD.format(campground.price)} night</span>
          <Link to={`/campgrounds/${campground._id}/edit`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  )
}

export default Details
