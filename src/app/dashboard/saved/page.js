'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HostelCards from '@/components/dashboard/part/HostelCards';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Checkbox, Slider, Switch, Button } from 'antd';
import { useAuth } from '@/context/AuthContext';

const Saved = () => {
   const {logout} = useAuth();
   const router = useRouter();
   const [isFilter, setIsFilter] = useState(false)
   const [ searchFounded , setSearchFounded] = useState(true)
   
   const handlePrev = () => {
      router.back();
   }

   const handleLogout = () => {
      logout();
   }

   const onChange = (checked) => {
      console.log(`switch to ${checked}`);
   };


   const parentCard = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px , 1fr))',
      gridGap: '1em',
   }

   return (
   <DashboardLayout>
      <div className='p-4 flex justify-between items-center gap-4'>
         <span onClick={handlePrev} className='p-2 bg-[#F5F5F5] rounded-lg'>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76566 13.3661C7.45324 13.6785 6.94671 13.6785 6.63429 13.3661L1.83429 8.56607C1.52187 8.25366 1.52187 7.74712 1.83429 7.4347L6.63429 2.63471C6.94671 2.32229 7.45324 2.32229 7.76566 2.63471C8.07808 2.94712 8.07808 3.45366 7.76566 3.76608L4.33135 7.20039H13.6C14.0418 7.20039 14.4 7.55856 14.4 8.00039C14.4 8.44222 14.0418 8.80039 13.6 8.80039L4.33135 8.80039L7.76566 12.2347C8.07808 12.5471 8.07808 13.0537 7.76566 13.3661Z" fill="#111827"/>
         </svg>
         </span>
         <h2 className='font-bold text-base'>Saved Hostels</h2>
         <span onClick={() => setIsFilter(true)} className='p-2 bg-[#F5F5F5] rounded-lg'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.85" cy="4.61953" r="2.85" stroke="#C97B2C" stroke-width="2"/>
            <line x1="11.5" y1="3.96875" x2="20" y2="3.96875" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
            <circle cx="3.85" cy="3.85" r="2.85" transform="matrix(-1 0 0 1 21 12.5293)" stroke="#C97B2C" stroke-width="2"/>
            <line x1="1" y1="-1" x2="9.5" y2="-1" transform="matrix(-1 0 0 1 10.5 16.7285)" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
            </svg>
         </span>
      </div>
      <div>
         <div style={parentCard} className='mb-[6rem] p-4'>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
            <HostelCards/>
         </div>
         { isFilter && 
            <div className='fixed bg-[#00000065] z-20 bottom-0 top-0 overflow-scroll w-full h-[100%]'>
               <div className="bg-[#fff] rounded-t-2xl w-full h-[120%] mt-[10%] p-3 mb-0">
                     <div className='p-3 flex justify-between items-center gap-4'>
                        <span onClick={() => setIsFilter(false)} className='p-1 bg-[#F5F5F5] rounded-lg'>
                           X
                        </span>
                        <h2 className='font-bold text-base'>Filter</h2>
                        <h2 className='text-[#C97B2C] text-base'>Reset</h2>
                     </div>
                     <div className="p-3 flex justify-between items-center gap-4">    
                        <h2 className='font-bold text-sm'>I am looking for</h2>
                        <h2 onClick={handleLogout} className='font-bold text-[#e74e3c] p-3 text-sm'>log out</h2>
                     </div>
                     <div className='flex justify-between w-full p-3'>
                        <div className='flex flex-col gap-4'>
                           <Checkbox className='text-xs'>All</Checkbox>
                           <Checkbox className='text-xs'>Single Room</Checkbox>
                           <Checkbox className='text-xs'>2 bedroom</Checkbox>
                        </div>
                        <div className='flex flex-col gap-4'>    
                           <Checkbox className='text-xs'>Self con</Checkbox>
                           <Checkbox className='text-xs'>Room and Palour</Checkbox>
                           <Checkbox className='text-xs'>3 bedroom</Checkbox>
                        </div>
                     </div>
                     <div className='p-3'>   
                        <h2 className='font-bold text-base'>Price range</h2>
                        <Slider className='mt-2' range defaultValue={[80, 100]}/>
                     </div>
                     <h2 className='font-bold p-3 base'>Facilities</h2>
                     <div className='p-3 flex flex-col gap-4'>    
                        <Checkbox className='text-xs'>Wardrobe</Checkbox>
                        <Checkbox className='text-xs'>Wifi</Checkbox>
                        <Checkbox className='text-xs'>Pop</Checkbox>
                        <Checkbox className='text-xs'>Tv</Checkbox>
                     </div>
                     <h2 className='text-[#C97B2C] p-3 text-xs underline'>show more</h2>
                     <h2 className='font-bold p-3 text-base'>Others</h2>
                     <div className='flex justify-between p-3'>
                        <h4 className='text-xs'>Rental listing by House Owner</h4>
                        <Switch defaultChecked onChange={onChange} /> 
                     </div>
                     <div className='flex justify-between p-3'>
                        <h4 className='text-xs'>Rental listing by Agents</h4>
                        <Switch defaultChecked onChange={onChange} /> 
                     </div>
                     <div className='p-3'>
                        <Button 
                           className="w-full text-base bg-[#000]" 
                           size="large" 
                           type="primary"
                        >
                           Show 15 results
                        </Button>
                     </div>
               </div>
            </div>
         }
      </div>
   </DashboardLayout>
  )
}

export default Saved