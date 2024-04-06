import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-[#142726] backdrop-blur-2xl font-[Helvetica] sticky top-0 h-[13vh] flex justify-between px-20 items-center'>
            <div className='logo'>
                <img className='h-16' src="src/assets/download.png" alt="" />
            </div>
            <div className='flex gap-20 text-white text-lg font-bold font-sans'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar
