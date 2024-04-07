import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Universal/Navbar.jsx'
import HeroSec from "./components/HomeComp/HeroSec.jsx"
import Head from './components/Universal/Head.jsx'
import SubHero1 from './components/HomeComp/SubHero1.jsx'
import SubHero2 from './components/HomeComp/SubHero2.jsx'
import SubHero3 from './components/HomeComp/SubHero3.jsx'
import Footer from "./components/Universal/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSec />
      <Head title="Why Able Innovation Exists" />
      <SubHero1 />
      <Head title="Our Innovation" />
      <SubHero2 />
      <Head title="How Able Glasses Work" />
      <div className="video flex justify-center items-center bg-[#5bc4a1] px-5 py-5">
        <video className='rounded-lg w-[60%] h-[60%]' src="src/assets/Home 1 - AI Chat Bot - Google Chrome 2024-03-02 12-35-30.mp4"></video>
      </div>
      <Head title="Our Supporters" />
      <SubHero3/>
      <Footer/>
    </>
  )
}

export default App
