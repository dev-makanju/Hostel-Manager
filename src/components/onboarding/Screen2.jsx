import React from 'react'
import Image from 'next/image'
import { arrowLeft, screen, signature } from '@/assets'

const Screen2 = ({ setShowOnboardingScreen }) => {
  return (
    <div className="relative h-screen px-5  " >
      <div className=' z-10 pt-16 flex flex-col gap-16  ' >
        <div>
          <h1 className=' text-5xl font-normal  pr-10 ' >Manage Your Rental Properties Effortlessly</h1>
          <Image src={signature} alt="Signature" />
        </div>

        <button onClick={() => setShowOnboardingScreen(false)} className=' bg-black text-white flex justify-center text-[16px] items-center gap-4 p-4 rounded-lg w-full ' >Get Started <span><Image src={arrowLeft} alt='arrow_left' />  </span> </button>
        {/* <Button icon={arrowLeft} >Get Started</Button> */}
      </div>

      <div className=' absolute left-0 right-0 bottom-0  -z-10   '>
        <Image src={screen} className='   ' alt='Onboarding_Bg' />
      </div>
    </div>
  )
}

export default Screen2

// onClick={() => setNextPage(false)}