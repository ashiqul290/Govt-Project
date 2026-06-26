import React from 'react'
import Container from '../Common/Container'
import Hero from '../Components/Home/HeroSection'
import NoticeTicker from '../Components/Home/NoticeTicker'

import Leadership from '../Components/Home/Leadership'
import BodySeciton from '../Components/Home/BodySeciton'

const Home = () => {
  return (
    <>
      <Hero />
      <NoticeTicker />
      <BodySeciton />

      {/* <Leadership /> */}
    </>
  )
}

export default Home
