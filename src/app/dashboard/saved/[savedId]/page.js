'use client'
import React from 'react'
import HostelCards from '@/components/dashboard/part/HostelCards';
import Image from 'next/image';
import HostelOne from '../../../../assets/images/hostelOne.png'
import BathRoom from '../../../../assets/images/bathroom.png'
import BedRoom from '../../../../assets/images/bedroom.png'
import Profile from '../../../../assets/images/profile.png';
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
       <div className="p-4">
          <span className='bg-[#F4E1CD] text-xs p-2 rounded-lg text-[#C97B2C]'>Single room</span>
          <div className="rounded-lg p-1 flex items-center justify-between mt-6">
              <div className='w-[70%]'>
                    <h2 className="text-[#0E0E0E] text-lg font-bold">Ariremako Villa</h2>
                    <p className='flex items-center text-[#fff]'>
                      <svg className='mr-1' width="20" height="20" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.51777 5.45527C4.22508 5.74796 3.61299 6.36005 3.19181 6.78122C2.94773 7.0253 2.5524 7.02543 2.30832 6.78136C1.89448 6.36752 1.29425 5.76728 0.982233 5.45527C0.00592233 4.47896 0.00592233 2.89604 0.982233 1.91973C1.95854 0.943422 3.54146 0.943422 4.51777 1.91973C5.49408 2.89604 5.49408 4.47896 4.51777 5.45527Z" stroke="#414141" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M3.6875 3.6875C3.6875 4.20527 3.26777 4.625 2.75 4.625C2.23223 4.625 1.8125 4.20527 1.8125 3.6875C1.8125 3.16973 2.23223 2.75 2.75 2.75C3.26777 2.75 3.6875 3.16973 3.6875 3.6875Z" stroke="#414141" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span className='text-[#414141] text-sm'>Ipaja est., Mayfair</span>
                    </p>
                    <div className='flex items-center gap-1'>
                      <div className="h-[16px] text-[yellow] text-[15px]">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </div>
                      <span className='p-1 rounded-lg bg-[#F5F5F5]'>5.0</span>
                      <span className='text-[#C97B2C] underline'>(34Review)</span>
                    </div> 
              </div>
              <div>
                <div className='flex flex-col'>    
                  <h2 className="text-[#0E0E0E] text-sm font-bold">₦100k</h2>
                  <span className="text-[#414141] text-sm">year</span>
                </div>
              </div>
          </div>
          <div className="bg-[#F5F5F5] rounded-lg p-4 flex items-center justify-between mt-6">
              <div className='w-[70%] flex'>
                    <Image src={Profile} alt="slider main" className='border-1 rounded-full'/>
                    <div className='ml-2'>
                      <h2 className="text-[#0E0E0E] text-lg font-bold">Ariremako Villa</h2>
                      <p className='flex items-center text-[#fff]'>
                        <svg className='mr-1' width="20" height="20" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.51777 5.45527C4.22508 5.74796 3.61299 6.36005 3.19181 6.78122C2.94773 7.0253 2.5524 7.02543 2.30832 6.78136C1.89448 6.36752 1.29425 5.76728 0.982233 5.45527C0.00592233 4.47896 0.00592233 2.89604 0.982233 1.91973C1.95854 0.943422 3.54146 0.943422 4.51777 1.91973C5.49408 2.89604 5.49408 4.47896 4.51777 5.45527Z" stroke="#414141" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.6875 3.6875C3.6875 4.20527 3.26777 4.625 2.75 4.625C2.23223 4.625 1.8125 4.20527 1.8125 3.6875C1.8125 3.16973 2.23223 2.75 2.75 2.75C3.26777 2.75 3.6875 3.16973 3.6875 3.6875Z" stroke="#414141" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='text-[#414141] text-sm'>Ipaja est., Mayfair</span>
                      </p>
                    </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='p-2 bg-[#EEEEEE] rounded-full'>
                  <svg width="18" height="16" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.05523 4.31901H4.06155M6.58301 4.31901H6.58933M9.11079 4.31901H9.1171M4.68717 8.11068H2.1594C1.46137 8.11068 0.895508 7.54482 0.895508 6.84679V1.79123C0.895508 1.09321 1.46137 0.527344 2.1594 0.527344H11.0066C11.7046 0.527344 12.2705 1.09321 12.2705 1.79123V6.84679C12.2705 7.54482 11.7046 8.11068 11.0066 8.11068H7.8469L4.68717 11.2704V8.11068Z" stroke="#C97B2C" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span className='p-2 bg-[#EEEEEE] rounded-full'>
                 <svg width="18" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5625 3.57248C2.5625 2.87446 3.12836 2.30859 3.82639 2.30859H5.89869C6.17069 2.30859 6.41219 2.48265 6.4982 2.7407L7.44474 5.5803C7.54419 5.87865 7.40912 6.20473 7.12784 6.34537L5.70137 7.0586C6.39793 8.60353 7.64256 9.84817 9.18749 10.5447L9.90072 9.11826C10.0414 8.83697 10.3674 8.70191 10.6658 8.80136L13.5054 9.74789C13.7634 9.83391 13.9375 10.0754 13.9375 10.3474V12.4197C13.9375 13.1177 13.3716 13.6836 12.6736 13.6836H12.0417C6.80647 13.6836 2.5625 9.43963 2.5625 4.20443V3.57248Z" stroke="#00C247" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
          </div>
          <div className="p-1 mt-4">
              <h2 className='text-[#0E0E0E] text-base font-bold'>Description</h2>
              <p className='text-[#747474] text-sm'>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis <span className='text-[#C97B2C]'>...Read more</span> 
              </p>
          </div>

          <div className="p-1 mt-4">
              <h2 className='text-[#0E0E0E] text-base font-bold pb-4'>Facilities</h2>
              <span className='p-2 font-bold rounded-lg border border-[#747474] text-[#747474]'>Wardrobe</span>
          </div>

          <div className="p-1 mt-4">
              <h2 className='text-[#0E0E0E] text-base font-bold pb-4'>Location</h2>
              <div className='bg-[#F5F5F5] rounded-lg p-4 flex items-center justify-between'>
                <span>

                </span>
                <p>5.6km from O.A.U</p>
              </div>
              
          </div>

          <div className="p-1 mt-4 flex gap-2 ">
            <button className='p-3 border flex-1 font-bold rounded-lg text-[#0E0E0E]'>Book A Tour</button>
            <button className=' p-2 border-1 flex-1 font-bold rounded-lg bg-[#0E0E0E] text-[#fff]'>Pay Rent</button>
          </div>

          <div className="p-1 mt-4">
              <h2 className='text-[#0E0E0E] text-base font-bold'>Location</h2>
              <p className='text-[#747474] text-sm'>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis <span className='text-[#C97B2C]'>...Read more</span> 
              </p>
          </div>

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