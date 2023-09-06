'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import HostelCards from '../../../components/dashboard/part/HostelCards';
import DashboardLayout from '@/components/dashboard/DashboardLayout';


const page = () => {
   const router = useRouter();
   const handlePrev = () => {
      router.back();
   }

   const parentCard = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px , 1fr))',
      gridGap: '1em',
   }

   return (
      <DashboardLayout>
        <div className='p-3 flex justify-between items-center gap-4'>
           <span onClick={handlePrev} className='p-2 bg-[#F5F5F5] rounded-lg'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76566 13.3661C7.45324 13.6785 6.94671 13.6785 6.63429 13.3661L1.83429 8.56607C1.52187 8.25366 1.52187 7.74712 1.83429 7.4347L6.63429 2.63471C6.94671 2.32229 7.45324 2.32229 7.76566 2.63471C8.07808 2.94712 8.07808 3.45366 7.76566 3.76608L4.33135 7.20039H13.6C14.0418 7.20039 14.4 7.55856 14.4 8.00039C14.4 8.44222 14.0418 8.80039 13.6 8.80039L4.33135 8.80039L7.76566 12.2347C8.07808 12.5471 8.07808 13.0537 7.76566 13.3661Z" fill="#111827"/>
            </svg>
           </span>
           <h2 className='font-bold text-lg'>Hostels Nearby</h2>
           <span className='p-2 bg-[#F5F5F5] rounded-lg'>
               <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="3.85" cy="4.61953" r="2.85" stroke="#C97B2C" stroke-width="2"/>
               <line x1="11.5" y1="3.96875" x2="20" y2="3.96875" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
               <circle cx="3.85" cy="3.85" r="2.85" transform="matrix(-1 0 0 1 21 12.5293)" stroke="#C97B2C" stroke-width="2"/>
               <line x1="1" y1="-1" x2="9.5" y2="-1" transform="matrix(-1 0 0 1 10.5 16.7285)" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
               </svg>
           </span>
        </div>
        <div style={parentCard} className='mt-5 p-3'>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
         </div>
      </DashboardLayout>
   )
}

export default page