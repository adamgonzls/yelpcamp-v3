import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>YelpCamp</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Home
