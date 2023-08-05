import Image from 'next/image'
import React from 'react'
import { screen, screenn, signature } from '@/assets'
Image
import { arrowLeft } from '@/assets'
import { Button } from 'antd'


const Screen1 = ({ setNextPage }) => {
  return (
    <div className="relative h-screen px-5  " >
      <div className=' z-10 pt-16 flex flex-col gap-16  ' >
        <div>
          <h1 className=' text-5xl font-normal  pr-10 ' >Find Your Perfect Place, Hassle-Free</h1>
          <Image src={signature} alt="Signature" />
        </div>

        <button onClick={() => setNextPage(false)} className=' bg-black text-white flex justify-center text-[16px] items-center gap-4 p-4 rounded-lg w-full ' >Get Started <span><Image src={arrowLeft} alt='arrow_left' />  </span> </button>
        {/* <Button icon={arrowLeft} >Get Started</Button> */}
      </div>

      <div className=' absolute inset-0  h-full -z-10   '>
        <Image src={screenn} className='   ' alt='Onboarding_Bg' />
      </div>
    </div>
  )
}

export default Screen1