import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import MainNav from './components/MainNav'
import Home from './pages/Home'
import CampgroundIndex from './pages/campgrounds/Index'
import NewCampground from './pages/campgrounds/New'
import CampgroundDetails from './pages/campgrounds/Details'

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/campgrounds/' element={<CampgroundIndex />} />
        <Route path='/campgrounds/new' element={<NewCampground />} />
        <Route path='/campgrounds/:id' element={<CampgroundDetails />} />
      </Routes>
    </>
  )
}

export default App
