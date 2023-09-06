import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import modalIcon from '../../../assets/modal-icon.svg';

const ConfirmMadal = () => {
  return (
   <div className='bg-[#FFF] absolute h-full inset-0'>
      <div className='md:w-[450px] p-6 md:p-2 h-full m-auto z-10 pt-16 flex items-center flex-col'>    
         <span className='rounded bg-[#000000] flex items-center justify-center h-20 w-20'>
            <Image src={modalIcon} alt='confirm_modal_Logo' className='h-10 w-10'/>
         </span>
         <h1 className='leading-10 text-2xl md:text-3xl mt-2 md:leading-normal text-center font-bold'>Password updated!</h1>
         <p className="text-center mt-2">
            You have successfully changed your 
            password. Please use your new 
            password when logging in
         </p>
         <button className="bg-[#0E0E0E] text-white rounded-lg p-3 mt-[4rem] mb-[2rem] w-full font-bold">
            <Link href="/auth/login">Log in to continue</Link></button>
      </div>   
   </div>
  )
}

export default ConfirmMadal