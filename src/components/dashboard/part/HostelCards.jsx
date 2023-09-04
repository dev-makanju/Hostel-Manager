import React from 'react'
import Image from 'next/image';
import HostelOne from '../../../assets/images/hostelOne.png'

const HostelCards = () => {
   return (
      <div className='relative rounded-lg'>
         <div>
           <Image src={HostelOne} alt="slider main" className=' h-[200px] rounded-lg w-full object-cover'/>
         </div>

         <div className="absolute bottom-[2px] p-2 w-full">
            <div className="backdrop-blur-sm bg-[#45424257] rounded-lg p-1 flex items-center justify-between">
               <div className='w-[70%]'>
                     <h2 className="text-[#fff] text-base font-bold truncate">Ariremako Villa</h2>
                     <p className='flex items-center text-[#fff]'>
                        <svg className='mr-1' width="13" height="13" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4.51777 5.45527C4.22508 5.74796 3.61299 6.36005 3.19181 6.78122C2.94773 7.0253 2.5524 7.02543 2.30832 6.78136C1.89448 6.36752 1.29425 5.76728 0.982233 5.45527C0.00592233 4.47896 0.00592233 2.89604 0.982233 1.91973C1.95854 0.943422 3.54146 0.943422 4.51777 1.91973C5.49408 2.89604 5.49408 4.47896 4.51777 5.45527Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M3.6875 3.6875C3.6875 4.20527 3.26777 4.625 2.75 4.625C2.23223 4.625 1.8125 4.20527 1.8125 3.6875C1.8125 3.16973 2.23223 2.75 2.75 2.75C3.26777 2.75 3.6875 3.16973 3.6875 3.6875Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='truncate'>Ipaja est., Mayfair</span>
                     </p>
                     <span className="text-[yellow] font-sm">&#9733; <span className='text-[#fff]'>5.0</span></span>
               </div>
               <div>
                  <h2 className="text-[#fff] text-base font-bold">₦80k</h2>
                  <span className="text-[#fff] text-sm">/year</span>
               </div>
            </div>
         </div>
         <div className='w-full absolute top-0 right-0 flex justify-between p-2'>
            <h1 className='bg-[#C97B2C] p-1 h-[33px] rounded-lg text-[#fff]'>Single room</h1>
            <div 
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#ffffff3f] backdrop-blur-sm  rounded-lg">
            <svg width="20" height="25" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.31997 0.271484C7.90369 0.271452 8.46536 0.494476 8.89006 0.894925C9.31475 1.29537 9.57038 1.84298 9.60462 2.42569L9.60844 2.55995V13.2394C9.60847 13.367 9.5765 13.4926 9.51544 13.6046C9.45439 13.7167 9.36621 13.8116 9.25896 13.8808C9.15172 13.9499 9.02885 13.991 8.9016 14.0004C8.77435 14.0098 8.64678 13.9871 8.53057 13.9344L8.45353 13.8932L5.03075 11.8404L1.6095 13.8932C1.5001 13.9588 1.37599 13.996 1.24851 14.0013C1.12104 14.0065 0.994277 13.9798 0.87983 13.9234C0.765384 13.867 0.666909 13.7828 0.593418 13.6785C0.519927 13.5742 0.473769 13.4531 0.459167 13.3264L0.45459 13.2394V2.55995C0.454557 1.97623 0.677581 1.41456 1.07803 0.989862C1.47848 0.565165 2.02608 0.309543 2.6088 0.275299L2.74305 0.271484H7.31997Z" fill="#C97B2C"/>
            </svg>
            </div>
         </div>
      </div>
   )
}

export default HostelCards