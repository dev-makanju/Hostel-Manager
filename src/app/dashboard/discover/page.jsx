'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import HostelCards from '../../../components/dashboard/part/HostelCards';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Checkbox, Slider, Switch, Button } from 'antd';

const page = () => {
   const [isFilter, setIsFilter] = useState(false);
   const [ searchFounded , setSearchFounded] = useState(true);
   const router = useRouter();
   const handlePrev = () => {
      router.back();
   }
   const parentCard = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px , 1fr))',
      gridGap: '1em',
   }
   const onChange = (checked) => {
      console.log(`switch to ${checked}`);
   };


   return (
      <DashboardLayout>
        <div className='p-3 flex justify-between items-center gap-4'>
           <span onClick={handlePrev} className='p-2 bg-[#F5F5F5] rounded-lg'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76566 13.3661C7.45324 13.6785 6.94671 13.6785 6.63429 13.3661L1.83429 8.56607C1.52187 8.25366 1.52187 7.74712 1.83429 7.4347L6.63429 2.63471C6.94671 2.32229 7.45324 2.32229 7.76566 2.63471C8.07808 2.94712 8.07808 3.45366 7.76566 3.76608L4.33135 7.20039H13.6C14.0418 7.20039 14.4 7.55856 14.4 8.00039C14.4 8.44222 14.0418 8.80039 13.6 8.80039L4.33135 8.80039L7.76566 12.2347C8.07808 12.5471 8.07808 13.0537 7.76566 13.3661Z" fill="#111827"/>
            </svg>
           </span>
           <h2 className='font-bold text-lg'>Hostels Nearby</h2>
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
        { !searchFounded ? 
               <div className='p-4 flex justify-center items-center h-[80%]'>
                  <div className='flex justify-center flex-col items-center'>
                     <span>
                     <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="45.9483" cy="49.9483" r="36.9483" fill="#F1F1F1"/>
                           <circle cx="45.6464" cy="50.0082" r="21.6421" fill="#F1F1F1" stroke="#C4C4C4" stroke-width="0.904192"/>
                           <circle cx="45.6458" cy="50.0081" r="15.3295" fill="#FFFEFF" stroke="#C4C4C4" stroke-width="0.904192"/>
                           <path d="M45.6465 38.404C45.6465 38.1722 45.4585 37.9836 45.2269 37.9917C42.3274 38.0929 39.5566 39.2401 37.4314 41.2291C35.3063 43.2181 33.9785 45.9071 33.6858 48.7936C33.6625 49.0242 33.8383 49.2242 34.0695 49.2395C34.3007 49.2549 34.4998 49.0796 34.5238 48.8491C34.8019 46.1751 36.0353 43.6853 38.0049 41.8418C39.9745 39.9983 42.5404 38.9323 45.2269 38.8315C45.4585 38.8228 45.6465 38.6357 45.6465 38.404Z" fill="#C4C4C4"/>
                           <rect x="62.5564" y="73.4375" width="7.08157" height="21.4955" rx="3.54078" transform="rotate(-45 62.5564 73.4375)" fill="#F1F1F1" stroke="#C4C4C4" stroke-width="0.904192"/>
                           <rect x="70.0742" y="75.1719" width="1.00298" height="8.40969" rx="0.501489" transform="rotate(-45 70.0742 75.1719)" fill="white"/>
                           <rect x="61.7358" y="68.3359" width="1.02956" height="4.11825" transform="rotate(-45 61.7358 68.3359)" fill="#C4C4C4"/>
                           <rect x="72.6597" y="47.4141" width="10.2956" height="1.02956" rx="0.514781" fill="#C4C4C4"/>
                           <rect x="9" y="55.9336" width="10.2956" height="1.02956" rx="0.514781" fill="#C4C4C4"/>
                           <rect x="85.0142" y="47.4141" width="5.14781" height="1.02956" rx="0.514781" fill="#C4C4C4"/>
                           <rect x="75.2334" y="51.1914" width="5.14781" height="1.02956" rx="0.514781" fill="#C4C4C4"/>
                           <rect x="11.5742" y="59.7109" width="5.14781" height="1.02956" rx="0.514781" fill="#C4C4C4"/>
                        </svg>
                     </span>
                     <div className='flex justify-center flex-col items-center pt-5'>    
                           <h2 className='font-bold text-[#414141] text-xl'>Nothing found!</h2>
                           <p className='text-center text-[#414141] mt-2'>Sorry, something went wrong, we are working hard to fix this.</p>
                     </div>
                  </div>
               </div> :
               <div>
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
                     <div className='fixed bg-[#00000065] z-20 bottom-0 top-0 overflow-scroll w-full h-[100%]'>
                        <div className="bg-[#fff] rounded-t-2xl w-full h-[120%] mt-[10%] p-3 mb-0">
                              <div className='p-3 flex justify-between items-center gap-4'>
                                 <span onClick={() => setIsFilter(false)} className='p-1 bg-[#F5F5F5] rounded-lg'>
                                    X
                                 </span>
                                 <h2 className='font-bold text-base'>Filter</h2>
                                 <h2 className='text-[#C97B2C] text-base'>Reset</h2>
                              </div>
                              <h2 className='font-bold p-3 text-sm'>I am looking for</h2>
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
            }
        </div>
      </DashboardLayout>
   )
}

export default page