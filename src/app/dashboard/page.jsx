'use client'
import React, { useState } from 'react'
import Slider from '@/components/dashboard/part/Slider';
import HostelNearYou from '@/components/dashboard/part/HostelNearYou';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Overlay from '@/components/common/utility/Overlay';

const page = () => {
  const [ isVisible, setIsVisible ] = useState(true);


  return (
    <div id="portal-root" className="relative h-screen">
      {isVisible &&
      <Overlay>
        <div className='flex items-center justify-center h-[100%] w-[100%]'>    
          <div className='relative'>
            <div className='h-[300px] w-[300px] rotate-3 border-2 border-[#fff] rounded-lg'/>
            <div className='h-[300px] w-[300px] flex flex-col gap-4 p-3 items-center absolute top-0 border-2 bg-[#fff] rounded-lg'>
              <span className='h-[70px] w-[70px] flex items-center justify-center bg-[#000] rounded-lg mt-[2rem]'>
                <svg width="50" height="50" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5002 14.1686H16.6668L15.4961 12.9978C15.1785 12.6803 15.0002 12.2497 15.0002 11.8007V9.16862C15.0002 6.99159 13.6088 5.13953 11.6668 4.45313V4.16862C11.6668 3.24815 10.9206 2.50195 10.0002 2.50195C9.07969 2.50195 8.3335 3.24815 8.3335 4.16862V4.45313C6.39151 5.13953 5.00016 6.99159 5.00016 9.16862V11.8007C5.00016 12.2497 4.82179 12.6803 4.50427 12.9978L3.3335 14.1686H7.50016M12.5002 14.1686V15.002C12.5002 16.3827 11.3809 17.502 10.0002 17.502C8.61945 17.502 7.50016 16.3827 7.50016 15.002V14.1686M12.5002 14.1686H7.50016" stroke="#fff" stroke-width="1.14952" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <h2 className='text-lg text-center'>Do you want us to notify you on any hostel updates?</h2>
              <div className='flex gap-4 p-3 w-full'>
                <button 
                className='border-1 drop-shadow-2xl border-[#fff] w-full rounded-lg p-2' 
                onClick={() => (setIsVisible(false))}>Cancel</button>
                <button 
                  className='border-1 drop-shadow-2xl border-[#000] bg-[#000] text-[#fff] w-full rounded-lg p-2' 
                  onClick={() => (setIsVisible(false))}>Allow</button>
              </div>
            </div>
          </div>
        </div>
      </Overlay>
      }
      <DashboardLayout>
        <Slider/>
        <HostelNearYou/>
      </DashboardLayout>
    </div>
  )
}

export default page