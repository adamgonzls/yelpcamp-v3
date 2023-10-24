import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatUSD } from '../../utilities/utilities'

const Details = () => {
  const [campground, setCampground] = useState()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

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

  function handleDelete() {
    console.log(`Delete ${campground._id}`)
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
