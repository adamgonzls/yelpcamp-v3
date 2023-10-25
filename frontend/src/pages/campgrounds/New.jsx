import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const New = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
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
          <input
            type='text'
            placeholder='Description'
            onChange={handleChange}
            name='description'
            value={formData.description}
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
