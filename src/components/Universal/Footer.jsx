import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center px-10 bg-[#142726] text-white py-5'>
            <div className="logo flex justify-center items-center font-bold gap-3 w-96">
                <div className="1"><img className='w-36' src="src/assets/download.png" alt="" /></div>
                <div className="2">Copyright © Ksham Innovation 2023. All Rights Reserved.</div>
            </div>
            <div className="mid font-bold text-xl">
                Privacy Policy | Trademark | Patent
            </div>
            <div className="socials flex justify-center items-center gap-3">
                <div className="1 font-bold">Follow Us On</div>
                <div className='bg-white rounded-full p-2'><img className='w-6' src="src/assets/Screenshot_2024-04-07_090451-removebg-preview.png" alt="" /></div>
                <div className='bg-white rounded-full p-2'><img className='w-6' src="src/assets/Screenshot_2024-04-07_090554-removebg-preview.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Footer
