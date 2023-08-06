import Image from 'next/image'
import React from 'react'
import { screen, screenn, signature } from '@/assets'
Image
import { arrowLeft } from '@/assets'
import { Button } from 'antd'

const Screen1 = ({ setNextPage }) => {
  return (
    <div className="relative h-screen px-5" >
      <div className='md:w-3/4 h-full md:text-center m-auto z-10 pt-16 flex md:justify-center items-center flex-col gap-16'>
        <div>
          <h1 className='text-3xl md:text-5xl font-bold pr-10' >Find Your Perfect Place, Hassle-Free</h1>
          <h1 className='leading-10 text-3xl md:text-5xl md:leading-normal font-bold'>Manage Your Rental Properties Effortlessly</h1>
          <Image src={signature} alt="Signature"/>
        </div>

        <button 
          onClick={() => setNextPage(false)} 
          className='bg-black text-white flex justify-center text-[16px] items-center gap-4 p-4 rounded-lg w-full md:w-1/2'>
          Get Started
          <span><Image src={arrowLeft} alt='arrow_left' /></span>
          </button>
        {/* <Button icon={arrowLeft} >Get Started</Button> */}
      </div>

      <div className='md:hidden absolute inset-0 h-full -z-10'>
        <Image src={screenn}  alt='Onboarding_Bg' />
      </div>
    </div>
  )
}

export default Screen1