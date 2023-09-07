'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import HostelCards from '../../../components/dashboard/part/HostelCards';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Checkbox, Slider, Switch } from 'antd';

const page = () => {
   const tags = ['2year', '120$ - 150$' , 'Self con', 'Room and parlor' , 'Flat']
   const [isFilter, setIsFilter] = useState(false)
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
           <h2 className='font-bold text-lg'>Discover</h2>
           <div/>
        </div>
        <div className="flex gap-4 items-center p-3">
            <div className="flex items-center bg-[#FAFAFA] rounded-lg border-1">
               <span className="p-3">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8.82491" cy="9.3254" r="6.74142" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.5137 14.3652L16.1567 17.0014" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </span>
               <input
                  type="text"
                  className="w-full outline-none p-3 bg-transparent"
                  aria-label='input search'
                  aria-describedby='kindly enter a text to search'
                  role="textbox"
                  placeholder='Orona Ap'
               />
               <span className="p-3">X</span>
            </div>
            <span onClick={() => setIsFilter(true)} className='p-3 bg-[#F5F5F5] rounded-lg'>
               <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="3.85" cy="4.61953" r="2.85" stroke="#C97B2C" stroke-width="2"/>
               <line x1="11.5" y1="3.96875" x2="20" y2="3.96875" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
               <circle cx="3.85" cy="3.85" r="2.85" transform="matrix(-1 0 0 1 21 12.5293)" stroke="#C97B2C" stroke-width="2"/>
               <line x1="1" y1="-1" x2="9.5" y2="-1" transform="matrix(-1 0 0 1 10.5 16.7285)" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
               </svg>
            </span>
        </div>
        <div className="flex gap-4 items-center p-3">
           <h2 className='font-bold text-2xl'><span className="text-[#C97B2C] mr-2">48</span>Hostel Options</h2>
        </div>
        <div className='pl-3 flex gap-4 overflow-auto w-[100%]'>
            {tags.map(tag => (
               <div className='whitespace-nowrap p-2 font-bold rounded-lg bg-[#F5F5F5] text-[#9E9E9E]'>
                  {tag} <span className="text-[#fff] rounded-full  p-1 bg-[#000]">x</span>
               </div>
            ))}
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
        { isFilter && 
            <div className='fixed bg-[#00000065] z-20 bottom-0 w-full h-[100%]'>
               <div className="bg-[#fff] rounded-t-2xl w-full h-[100%] mt-[30%]">
                     <div className='p-3 flex justify-between items-center gap-4'>
                        <span onClick={() => setIsFilter(false)} className='p-2 bg-[#F5F5F5] rounded-lg'>
                           X
                        </span>
                        <h2 className='font-bold text-lg'>Filter</h2>
                        <h2 className='text-[#C97B2C]'>Reset</h2>
                     </div>
                     <h2 className='font-bold p-3 text-2xl'>I am looking for</h2>
                     <div className='flex justify-between w-full p-3'>
                        <div className='flex flex-col gap-4'>
                           <Checkbox>All</Checkbox>
                           <Checkbox>Single Room</Checkbox>
                           <Checkbox>2 bedroom</Checkbox>
                        </div>
                        <div className='flex flex-col gap-4'>    
                           <Checkbox>Self con</Checkbox>
                           <Checkbox>Room and Palour</Checkbox>
                           <Checkbox>3 bedroom</Checkbox>
                        </div>
                     </div>
                     <div className='p-3'>   
                        <h2 className='font-bold text-2xl'>Price range</h2>
                        <Slider className='mt-2' range defaultValue={[80, 100]}/>
                     </div>
                     <h2 className='font-bold p-3 text-2xl'>Facilities</h2>
                     <div className='p-3 flex flex-col gap-4'>    
                        <Checkbox>Wardrobe</Checkbox>
                        <Checkbox>Wifi</Checkbox>
                        <Checkbox>Pop</Checkbox>
                        <Checkbox>Tv</Checkbox>
                     </div>
               </div>
            </div>
        }
      </DashboardLayout>
   )
}

export default page;

