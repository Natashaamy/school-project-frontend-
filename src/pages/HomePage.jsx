import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Services from '../components/Services'
import AppointmentBooking from '../components/AppointmentBooking'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
          <Navbar />
          <Home />
          <Services />
          <AppointmentBooking />
          <Testimonials />
          <Contact />
          <Footer />
    </div>
  )
}

export default HomePage
