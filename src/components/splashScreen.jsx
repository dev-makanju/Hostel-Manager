import React from 'react'
import Image from 'next/image'
import { logo } from '@/assets'
const SplashScreen = () => {
  return (
    <div className=' bg-black h-screen text-white flex items-center justify-center ' >
      <div className=' flex justify-center flex-col items-center gap-4 '>
        <Image src={logo} alt='Hostel_Manager_Logo' className=' h-10 w-10'/>
        <h1 className=' text-2xl font-normal ' >HostelManager</h1>
      </div>
    </div>
  )
}

export default SplashScreen