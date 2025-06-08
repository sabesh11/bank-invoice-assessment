import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Invoice from '../pages/Invoice'

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoute
