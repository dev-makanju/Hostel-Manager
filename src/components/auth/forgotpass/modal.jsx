import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import modal from '../../../assets/logo.svg';


const Modal = () => {
  return (
   <div className='bg-[#FFF] absolute h-full inset-0'>
         <div className='md:w-[450px] p-6 md:p-2 h-full m-auto z-10 pt-16 flex items-center flex-col'>    
            <span className='rounded bg-[#000000] flex items-center justify-center w-20 h-20' >
                <Image src={modal} alt='confirm_modal_Logo' className=' h-10 w-10 '/>
            </span>
            <h1 className='leading-10 text-lg mt-2 md:leading-normal text-center font-bold'>You’ve got a mail!!</h1>
            <p className="text-center text-sm mt-2">Pls copy the otp in the email to reset your password, the code expires every 48mins and can be used only one</p>
            <button className="bg-[#0E0E0E] text-white rounded-lg p-3 mt-[4rem] mb-[2rem] w-full font-bold">
               <Link href="/auth/password-otp">Verify Otp</Link>     
            </button>
            <p className='text-[#414141] text-sm text-center mt-3'>
            Did not receive the email? Check your spam folder or <Link href="/auth/signup">
                  <span className="underline text-[#C97B2C]">try another email address</span>
               </Link>
            </p>
         </div>   
   </div>
  )
}

export default Modal