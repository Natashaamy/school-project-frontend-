import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingsPage from './pages/Bookings'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bookings' element={<BookingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
