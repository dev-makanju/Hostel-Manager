import Image from 'next/image'
import React, { useState , useEffect } from 'react'
import { screen, screenn, signature } from '@/assets'
Image
import { arrowLeft } from '@/assets'
import { Button } from 'antd'

const Screen1 = ({ setNextPage }) => {
  const [fadeProp, setFadeProp] = useState({fade: 'fade-in'});
  const FADE_INTERVER = 1790; 
  const WORD_CHANGE_INTERVAL_MS = FADE_INTERVER * 2
  const WORDS_TO_ANIMATE =  ['Find Your Perfect Place, Hassle-Free','Manage Your Rental Properties Effortlessly'] 
  const [wordOrder, setWordOrder] = useState(0)



  useEffect(() => {
    const timeOut = setInterval(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({fade: 'fade-out'}) : setFadeProp({fade: 'fade-in'})
    }, FADE_INTERVER );
    return () => clearInterval(timeOut)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  

  return (
    <div className="relative h-screen px-5 overflow-hidden">
      <div className='md:w-3/4 h-full md:text-center m-auto z-10 pt-16 flex md:justify-center items-center flex-col gap-16'>
        <div>
          <h1 className={`text-2xl font-bold pr-10 ${fadeProp.fade}`}>{WORDS_TO_ANIMATE[wordOrder]}</h1>
          <Image src={signature} alt="Signature"/>
        </div>

        <button 
          onClick={() => setNextPage(false)} 
          className='bg-black text-white flex justify-center text-[16px] items-center gap-4 p-3 rounded-lg w-full md:w-1/2'>
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