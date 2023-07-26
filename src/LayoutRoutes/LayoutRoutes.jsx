import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import AboutUs from '../components/Pages/AboutUs/AboutUs'
import ContactUs from '../components/Pages/ContactUs/ContactUs'
import SupportUs from '../components/Pages/SupportUs/SupportUs'

function LayoutRoutes() {
  return (
    <Router>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Plans />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/supportus' element={<SupportUs />} />
            </Routes>
        <Footer />
    </Router>
  )
}

export default LayoutRoutes