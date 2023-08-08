import React from 'react';
import Image from 'next/image';
import { hostel1, bookmark, bookmarkFilled, hostel2, hostel3 } from '@/assets';


const AccomodationCard = ({id, name}) => {
  return (
    <div key={id}  className=' relative w-full max-w-[360px] flex-wrap shrink-0  h-[190px] '>
      <div className=' relative w-full'>
        <div className='bg-gradient-to-tr from-white-26 to-white-7 absolute top-2 right-2' >
          <Image src={bookmarkFilled} alt='bookmark' className='  ' />
        </div>

        <Image className=' w-full absolute inset-0 -z-10' src={hostel1} alt='Hostel' />
      </div>


      <div className=' z-30 absolute right-0 left-0 flex justify-between px-2 py-2  mx-2 bottom-4  rounded-[3.662px] bg-gradient-to-br from-[rgba(255, 255, 255, 0.26)] to-[rgba(255, 255, 255, 0.07)] backdrop-blur-[5px] text-white shadow-sm border-[0.1px] border-red-100/90 ' >
        <div className="   ">
          <h1 className=' font-semibold leading-6 '>{name}</h1>
          <div className="flex gap-2" >
            <p className=' text-sm  '>Rating</p>
            <p className=' text-sm  '>Star</p>
            <p className=' text-sm  '>5.0</p>
          </div>
        </div>

        <div className=' flex flex-col'>
          <p className=" font-semibold  mb-0 ">100k</p>
          <p className=" text-[10px] text-right ">/year</p>
        </div>
      </div>
    </div>
  )
}

export default AccomodationCard;