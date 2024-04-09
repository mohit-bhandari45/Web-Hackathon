import React from 'react'

const HeroSec = () => {
    return (
        <div className='w-full flex h-[87vh] bg-[#142726] relative'>
            <div className="text w-[55vw] text-6xl font-bold relative bg-[#142726] p-10 flex justify-center items-center text-white font-[Helvetica]">
                Your satisfaction is our number one focus
            </div>
            <div className="form w-[42vw] bg-white p-10 flex flex-col gap-8 justify-center items-center rounded-xl absolute right-10">
                <div className='text-5xl font-bold font-[Helvetica]'>Contact Us</div>
                <form action="" className='flex flex-col gap-8 w-[35vw] justify-start items-start'>
                    <div className="first flex flex-col w-full">
                        <input className='h-12 w-full bg-transparent focus:outline-none rounded-xl text-xl placeholder-black' placeholder='First Name' type="text" />
                        <div className="line1 h-[1px] bg-black w-full"></div>
                    </div>
                    <div className="first flex flex-col w-full">
                        <input className='h-12 w-full bg-transparent rounded-xl focus:outline-none text-xl placeholder-black' placeholder='Last Name' type="text" />
                        <div className="line2 h-[1px] bg-black w-full"></div>
                    </div>
                    <div className="first flex flex-col w-full">
                        <input className='h-12 w-full bg-transparent rounded-xl text-xl focus:outline-none placeholder-black' placeholder='Mobile Number' type="number" />
                        <div className="line2 h-[1px] bg-black w-full"></div>
                    </div>
                    <div className="first flex flex-col w-full">
                        <input className='h-12 w-full bg-transparent rounded-xl focus:outline-none text-xl placeholder-black' placeholder='Email' type="email" />
                        <div className="line2 h-[1px] bg-black w-full"></div>
                    </div>
                    <div className="first flex flex-col w-full">
                        <input className='h-12 w-full bg-transparent rounded-xl text-xl focus:outline-none placeholder-black' placeholder='What do you want to tell us?' type="email" />
                        <div className="line2 h-[1px] bg-black w-full"></div>
                    </div>
                    <input type="submit" value="Submit" className='placeholder:black w-full bg-[#4fd3ab] px-12 py-3 my-1 rounded-full font-[Helvetica] font-bold text-xl hover:cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default HeroSec
