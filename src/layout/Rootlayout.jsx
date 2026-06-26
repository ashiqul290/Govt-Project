import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../Common/Header/TopBar'
import Header from '../Common/Header/Header'
import Navbar from '../Common/Header/NavBar'
import ScrollTop from '../Common/ScrollTop'
import Footer from '../Common/Footer'

const Rootlayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTop />

    </>
  )
}

export default Rootlayout
