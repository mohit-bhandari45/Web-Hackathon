import React from 'react'
import Navbar from '../components/Universal/Navbar'
import Footer from '../components/Universal/Footer'
import HeroSec from '../components/AboutComp/HeroSec'
import Head from '../components/Universal/Head'
import SubHeroSec1 from '../components/AboutComp/SubHeroSec1'
import SubHeroSec2 from '../components/AboutComp/SubHeroSec2'

const About = () => {
  return (
    <>
    <Navbar/>
    <HeroSec/>
    <Head title="Our Vision"/>
    <SubHeroSec1/>
    <Head title="Description"/>
    <SubHeroSec2/>
    <Footer/>
    </>
  )
}

export default About
