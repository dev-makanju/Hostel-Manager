'use client'
import React from 'react'
import HostelCards from '@/components/dashboard/part/HostelCards';
import Image from 'next/image';
import HostelOne from '../../../../assets/images/hostelOne.png'
import BathRoom from '../../../../assets/images/bathroom.png'
import BedRoom from '../../../../assets/images/bedroom.png'
import Closet from '../../../../assets/images/closet.png'
import { useRouter } from 'next/navigation';

const SingleSavedProduct = () => {
  const router = useRouter();
  const parentCard = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px , 1fr))',
    gridGap: '1em',
  }
  const handlePrev = () => {
    router.back();
  }

  return (
    <div>
       <div className='relative'>
          <Image src={HostelOne} alt="slider main" className=' h-[300px] w-full object-cover'/>
          <div className="h-[300px] w-full absolute top-0">
            <div className='w-full absolute top-0 right-0 flex justify-between p-2'>
              <div onClick={handlePrev} className="bg-[#ffffff3f] backdrop-blur-sm rounded p-1 w-[24px] h-[24px] mt-2 pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76566 13.3661C7.45324 13.6785 6.94671 13.6785 6.63429 13.3661L1.83429 8.56607C1.52187 8.25366 1.52187 7.74712 1.83429 7.4347L6.63429 2.63471C6.94671 2.32229 7.45324 2.32229 7.76566 2.63471C8.07808 2.94712 8.07808 3.45366 7.76566 3.76608L4.33135 7.20039H13.6C14.0418 7.20039 14.4 7.55856 14.4 8.00039C14.4 8.44222 14.0418 8.80039 13.6 8.80039L4.33135 8.80039L7.76566 12.2347C8.07808 12.5471 8.07808 13.0537 7.76566 13.3661Z" fill="#fff"/>
                </svg>
              </div>
              <div className='flex flex-col gap-4'>
                  <div 
                    className="flex items-center justify-center w-[30px] h-[30px] bg-[#ffffff3f] backdrop-blur-sm  rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.31997 0.271484C7.90369 0.271452 8.46536 0.494476 8.89006 0.894925C9.31475 1.29537 9.57038 1.84298 9.60462 2.42569L9.60844 2.55995V13.2394C9.60847 13.367 9.5765 13.4926 9.51544 13.6046C9.45439 13.7167 9.36621 13.8116 9.25896 13.8808C9.15172 13.9499 9.02885 13.991 8.9016 14.0004C8.77435 14.0098 8.64678 13.9871 8.53057 13.9344L8.45353 13.8932L5.03075 11.8404L1.6095 13.8932C1.5001 13.9588 1.37599 13.996 1.24851 14.0013C1.12104 14.0065 0.994277 13.9798 0.87983 13.9234C0.765384 13.867 0.666909 13.7828 0.593418 13.6785C0.519927 13.5742 0.473769 13.4531 0.459167 13.3264L0.45459 13.2394V2.55995C0.454557 1.97623 0.677581 1.41456 1.07803 0.989862C1.47848 0.565165 2.02608 0.309543 2.6088 0.275299L2.74305 0.271484H7.31997Z" fill="#C97B2C"
                    />
                    </svg>
                  </div>
                  <div 
                    className="flex items-center justify-center w-[30px] h-[30px] bg-[#ffffff3f] backdrop-blur-sm  rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.42079 11.0398C7.57812 10.7258 7.66667 10.3713 7.66667 9.99609C7.66667 9.62092 7.57812 9.26642 7.42079 8.95237M7.42079 11.0398C7.03771 11.8045 6.24682 12.3294 5.33333 12.3294C4.04467 12.3294 3 11.2848 3 9.99609C3 8.70743 4.04467 7.66276 5.33333 7.66276C6.24682 7.66276 7.03771 8.1877 7.42079 8.95237M7.42079 11.0398L12.5792 13.619M7.42079 8.95237L12.5792 6.37315M12.5792 6.37315C12.9623 7.13783 13.7532 7.66276 14.6667 7.66276C15.9553 7.66276 17 6.61809 17 5.32943C17 4.04076 15.9553 2.99609 14.6667 2.99609C13.378 2.99609 12.3333 4.04076 12.3333 5.32943C12.3333 5.7046 12.4219 6.0591 12.5792 6.37315ZM12.5792 13.619C12.4219 13.9331 12.3333 14.2876 12.3333 14.6628C12.3333 15.9514 13.378 16.9961 14.6667 16.9961C15.9553 16.9961 17 15.9514 17 14.6628C17 13.3741 15.9553 12.3294 14.6667 12.3294C13.7532 12.3294 12.9623 12.8544 12.5792 13.619Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
              </div>
            </div>
            <div className='w-full absolute bottom-0 flex gap-2 justify-between p-4'>
              <Image src={HostelOne} alt="slider main" className=' h-[80px] w-[80px] rounded-lg border-2 border-[#FFF] object-cover'/>
              <Image src={BathRoom} alt="slider main" className=' h-[80px] w-[80px] rounded-lg border-2 border-[#FFF] object-cover'/>
              <Image src={BedRoom} alt="slider main" className=' h-[80px] w-[80px] rounded-lg border-2 border-[#FFF] object-cover'/>
              <Image src={Closet} alt="slider main" className=' h-[80px] w-[80px] rounded-lg border-2 border-[#FFF] object-cover'/>
            </div>
          </div>
       </div>
       <div className="">
         
         
       </div>
       <div style={parentCard} className='mt-5 p-4'>
        <HostelCards/>
        <HostelCards/>
        <HostelCards/>
        <HostelCards/>
        <HostelCards/>
        <HostelCards/>
        <HostelCards/>
      </div>
    </div>
  )
}

export default SingleSavedProduct