import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
 
function Layout() {
  return (
    <>
      <Header></Header>
     <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layout
