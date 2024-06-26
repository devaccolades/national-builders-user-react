import React from 'react'
import Header from '../components/includes/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/includes/Footer'

function Layout() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout