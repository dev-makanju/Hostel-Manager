'use client';
import {useState} from 'react'
import Image from 'next/image' 
import SearchInput from '../../common/utility/InputSearch';
import house from '../../../assets/house.svg';
import HostelTag from './HostelTag';
import Overlay from '../../common/utility/Overlay';

const hideScroll = {
   overflow: '-moz-scrollbars-none'
}

const DashHeader = () => {
   const [isActive, setIsActive] = useState('');
   const [isSearching, setIsSearching ] = useState(false);
   const tags = ['All', 'single room' , 'Self con', 'Room and parlor' , 'Flat']
    
   const handleSearchChange = (val) => {
      if(val == ''){
         setIsSearching(false);
         return;
      };
      setIsSearching(true);
   }

   const handleSelectTag = (val) => {
      setIsActive(val);
   }
   return (
      <>
         {
            isSearching &&
            <Overlay>
               <div className="overlay mt-10 p-2">
                  <div className="flex items-center bg-[#FAFAFA] rounded-lg border-1">
                     <span className="p-3">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.82491" cy="9.3254" r="6.74142" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5137 14.3652L16.1567 17.0014" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </span>
                     <input
                        className="w-full outline-none p-3 bg-transparent"
                        aria-label='input search'
                        aria-describedby='kindly enter a text to search'
                        role="textbox" 
                     />
                     <span onClick={ () => (setIsSearching(false))} className="p-3">X</span>
                  </div>
               </div>
            </Overlay>
         }
         <div className="border-3 flex flex-col gap-4 p-4">
            <div className='flex justify-between items-center'>
               <div class="flex items-center">    
                  <h1 className="text-xl font-bold">Let's find you the perfect place</h1>
                  <Image src={house} alt="notification icon"/>
               </div>
               <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.5002 14.1686H16.6668L15.4961 12.9978C15.1785 12.6803 15.0002 12.2497 15.0002 11.8007V9.16862C15.0002 6.99159 13.6088 5.13953 11.6668 4.45313V4.16862C11.6668 3.24815 10.9206 2.50195 10.0002 2.50195C9.07969 2.50195 8.3335 3.24815 8.3335 4.16862V4.45313C6.39151 5.13953 5.00016 6.99159 5.00016 9.16862V11.8007C5.00016 12.2497 4.82179 12.6803 4.50427 12.9978L3.3335 14.1686H7.50016M12.5002 14.1686V15.002C12.5002 16.3827 11.3809 17.502 10.0002 17.502C8.61945 17.502 7.50016 16.3827 7.50016 15.002V14.1686M12.5002 14.1686H7.50016" stroke="#111827" stroke-width="1.14952" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </div>
            </div>
            <div>
               <SearchInput 
               type="text" 
               placeholder="Search..." 
               onChange={handleSearchChange}
               />
            </div>
            <div className='flex gap-4 overflow-auto w-[100%]' style={hideScroll}>
               {tags.map(tag => (
                  <HostelTag active={isActive} name={tag} onSelectTag={handleSelectTag}/>
               ))}
            </div>
            <h1 className="text-lg font-bold">Recommended for you</h1>
         </div>
      </>
   )
}

export default DashHeader