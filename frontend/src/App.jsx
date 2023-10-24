import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import MainNav from './components/MainNav'
import Home from './pages/Home'
import About from './pages/About'
import CampgroundIndex from './pages/campgrounds/Index'
import NewCampground from './pages/campgrounds/New'
import EditCampground from './pages/campgrounds/Edit'
import CampgroundDetails from './pages/campgrounds/Details'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/campgrounds/' element={<CampgroundIndex />} />
        <Route path='/campgrounds/new' element={<NewCampground />} />
        <Route path='/campgrounds/:id' element={<CampgroundDetails />} />
        <Route path='/campgrounds/:id/edit' element={<EditCampground />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
