import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../Common/Header/TopBar'
import Header from '../Common/Header/Header'
import Navbar from '../Common/Header/NavBar'
import ScrollTop from '../Common/ScrollTop'
import Footer from '../Common/Footer'
import NavbarRes from '../Common/Header/Responsive/NavBarRes'
import TopBarRes from '../Common/Header/Responsive/TopBarRes'
import HeaderRes from '../Common/Header/Responsive/HeaderRes'

const Rootlayout = () => {
  return (
    <>
      <TopBar />
      <TopBarRes />
      <Header />
      <HeaderRes />
      <Navbar />
      <NavbarRes />
      <Outlet />
      <Footer />
      <ScrollTop />

    </>
  )
}

export default Rootlayout
