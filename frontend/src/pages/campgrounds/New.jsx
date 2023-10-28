import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
const unsplashAPIEndpoint = import.meta.env.VITE_UNSPLASH_API_URL

const New = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    price: 0,
    location: '',
    image: '',
    featured: false,
  })
  const [loading, setLoading] = useState(false)

  const handleSaveCampground = async () => {
    const newCampground = { ...formData }
    try {
      const res = await axios.post(
        'http://localhost:5555/campgrounds',
        newCampground
      )
      // console.log(res)
      navigate(`/campgrounds/${res.data._id}`)
    } catch (error) {
      alert('an error occurred')
      console.log(error)
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleGetImage = async () => {
    console.log(unsplashAccessKey)
    try {
      const res = await axios.get(unsplashAPIEndpoint, {
        headers: {
          Authorization: `Client-ID ${unsplashAccessKey}`,
        },
      })
      // console.log(res)
      const randomPhoto =
        res.data[Math.floor(Math.random() * res.data.length)].urls.regular
      console.log(randomPhoto)
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: randomPhoto,
      }))
    } catch (error) {}
  }

  return (
    <div>
      <h1>Add New Campground</h1>
      <div>
        <div>
          <label htmlFor='name'>Campground Name:</label>
          <input
            id='name'
            type='text'
            placeholder='Campground Name'
            onChange={handleChange}
            name='name'
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor='image'>Campground Image:</label>
          <input
            id='image'
            type='text'
            placeholder='Campground Image'
            onChange={handleChange}
            name='image'
            value={formData.image}
          />
          <p>Need a placeholder?</p>
          <button onClick={handleGetImage}>Get an Image</button>
          {formData.image ? (
            <img className='campground-grid__image' src={formData.image} />
          ) : (
            'No Image'
          )}
        </div>
        <div>
          <label htmlFor='tagline'>Campground Tagline:</label>
          <input
            id='tagline'
            type='text'
            placeholder='Wonderful trail situated along the mountainside'
            onChange={handleChange}
            name='tagline'
            value={formData.tagline}
          />
        </div>
        <div>
          <label htmlFor='price'>Price:</label>
          <input
            id='price'
            type='number'
            placeholder='150'
            onChange={handleChange}
            name='price'
            value={formData.price}
          />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea
            name='description'
            id='description'
            onChange={handleChange}
            value={formData.description}
            placeholder='Description'
          />
        </div>
        <div>
          <label htmlFor='location'>Location:</label>
          <input
            type='text'
            placeholder='Big Bend, Texas'
            onChange={handleChange}
            name='location'
            value={formData.location}
          />
        </div>
        <div>
          <label htmlFor='featured'>Make featured:</label>
          <input
            type='checkbox'
            id='featured'
            checked={formData.featured}
            name='featured'
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSaveCampground}>Add New Campground</button>
      </div>
    </div>
  )
}

export default New
