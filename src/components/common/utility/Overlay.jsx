import React from 'react'

const Overlay = ({children}) => {
  return (
    <div className='bg-[#00000096] h-screen w-screen fixed z-20'>
      {children}
    </div>
  )
}

export default Overlay