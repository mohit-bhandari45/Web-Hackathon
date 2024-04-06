import React from 'react'

const Head = (props) => {
  return (
    <div className='h-40 flex justify-center items-center font-bold text-6xl'>
      {props.title}
    </div>
  )
}

export default Head
