import React from 'react'

const Body = () => {
    return (
        <>
        <div className='hero-section bg-[#142726] h-[87vh] pl-20 pr-2 flex font-[Helvetica]'>
            <div className=' text-white gap-8 flex flex-col w-[50vw] justify-center'>
                <div className="headings">
                    <h1 className='heading text-[80px] font-bold'>World's 1st Smart</h1>
                    <h1 className='heading text-[80px] font-bold'>Aid Glasses for</h1>
                </div>
                <div className="spans pl-2 font-bold text-white font-sans flex justify-start gap-10 text-2xl w-[44vw]">
                    <span>Deaf</span>
                    <span>Mute</span>
                    <span>Blind</span>
                </div>
                <div className="button py-4"><button className='cursor-pointer border font-bold rounded-full px-10 py-3 text-xl'>Get Early Access</button></div>
            </div>
            <div className="eye flex justify-end items-center">
                <img className='w-[1000px]' src="https://kshaminnovation.in/static/media/glass.0c02447d5baf7e6778c3.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default Body
