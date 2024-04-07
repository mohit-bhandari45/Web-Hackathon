import React from 'react'

const SubHero = () => {
    return (
        <div className='bg-[#efe6da] font-[Helvetica] flex justify-center h-[430px] items-center'>
            <div className="video w-1/2 flex justify-center items-center">
                <video className='w-[85%] h-[85%] border rounded-lg' autoPlay loop controls src="src/assets/Home 1 - AI Chat Bot - Google Chrome 2024-03-02 12-35-30.mp4"></video>
            </div>
            <div className="text w-1/2 text-2xl font-[helvetica] px-5 flex flex-col justify-center items-center gap-8">
                <div>&#x2022; Globally, there are over 680 million people who are deaf, hard of hearing, mute, or blind.</div>
                <div>&#x2022; India alone is home to more than 80 million individuals belonging to these diverse disability groups.</div>
                <div>&#x2022; Sadly, an estimated 90% of these individuals lack access to education and often face poverty.</div>
                <div>&#x2022; Or these individuals, accessing essential information, education, and communication channels remains a significant challenge.</div>
            </div>
        </div>
    )
}

export default SubHero
