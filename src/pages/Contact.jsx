import React from 'react'
import Footer from '../components/Universal/Footer'
import Navbar from '../components/Universal/Navbar'
import Head from '../components/Universal/Head'
import HeroSec from '../components/ContactComp/HeroSec'
import Info from '../components/ContactComp/Info'

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroSec/>
      <Info/>
      <Footer />
    </>
  )
}

export default Contact
