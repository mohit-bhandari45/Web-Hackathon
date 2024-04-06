import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Universal/Navbar.jsx'
import HeroSec from "./components/HomeComp/HeroSec.jsx"
import Head from './components/Universal/Head.jsx'
import SubHero1 from './components/HomeComp/SubHero1.jsx'
import SubHero2 from './components/HomeComp/SubHero2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSec/>
    <Head title="Why Able Innovation Exists"/>
    <SubHero1/>
    <Head title="Our Innovation"/>
    <SubHero2/>
    </>
  )
}

export default App
