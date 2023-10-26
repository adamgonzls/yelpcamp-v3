import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams()
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

  useEffect(() => {
    axios
      .get(`http://localhost:5555/campgrounds/${id}`)
      .then((res) => {
        // console.log(res)
        setFormData(res.data.data)
      })
      .catch((error) => {
        alert('An error occurred, please check console')
        console.log(error)
      })
  }, [])

  const handleEditCampground = async () => {
    const campground = { ...formData }
    try {
      const res = await axios.put(
        `http://localhost:5555/campgrounds/${id}`,
        campground
      )
      console.log(res)
      navigate(`/campgrounds/${id}`)
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
      <h1>Edit Campground</h1>
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
        <button onClick={handleEditCampground}>Update {}</button>
      </div>
    </div>
  )
}

export default Edit
