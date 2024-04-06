import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-[#203332] h-96 text-white font-[helvetica] py-6 px-7 gap-6 flex flex-col border-none rounded-3xl w-[330px]'>
            <div className="image p-2 bg-white border rounded-full w-[65px]">
                <img src={props.image} alt="" />
            </div>
            <div className="main flex flex-col gap-5">
                <div className="heading text-2xl font-bold">
                    {props.title}
                </div>
                <div className="data text-xl flex flex-col gap-3">
                    <div className="data1 flex gap-2">
                        <div>&#x2022; </div>
                        <div className="1">{props.des1}</div>
                    </div>
                    <div className="data1 flex gap-2">
                        <div>&#x2022; </div>
                        <div className="1">{props.des2}</div>
                    </div>
                    {props.des3.length>0 && <div className="data1 flex gap-2">
                        <div>&#x2022; </div>
                        <div className="1">{props.des3}</div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Card
