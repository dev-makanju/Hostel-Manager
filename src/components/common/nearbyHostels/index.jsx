import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { bookmarkFilled, bookmark, mapIcon } from '@/assets'

const NearbyHostel = ({ id, image, name, bookmarked, setBookMarked  }) => {
  return (
    <div key={id} className=' relative w-full max-w-[183px] flex-wrap shrink-0  h-[200px] '>
      <div className=' relative w-full'>
        <p className=' py-[3px] px-[6px] text-[8px] rounded-[2px] bg-[#C97B2CB2] w-fit absolute top-2 left-2 text-white '>Self con</p>
        <div className='bg-gradient-to-tr from-white-26 to-white-7 absolute top-2 right-2' onClick={() => setBookMarked(!bookmarked)} >
          <Image src={bookmarkFilled} alt='bookmark' className='  ' />
        </div>
        <Image className=' w-full absolute inset-0 -z-10' src={image} alt='Hostel' width={100} height={100} />
      </div>
      <div className=' z-30 absolute right-0 left-0 flex px-2 py-2  mx-2 bottom-4  rounded-[3.662px] bg-gradient-to-br from-[rgba(255, 255, 255, 0.26)] to-[rgba(255, 255, 255, 0.07)] backdrop-blur-[5px] text-white shadow-lg  ' >
        <div className="  w-full  ">
          <h1 className=' font-semibold leading-[18px] text-sm '>{name}</h1>
          <div className=' flex items-center space-x-2 '>
            <Image src={mapIcon} alt='location' className=' h-4 w-4 ' />
            <p className=' text-[10px]  '>Ipaja est., Mayfair</p>
          </div>
          <div className=' flex justify-between '>
            <p className=' text-[10px] font-bold ' >80k <span className=' text-[8px] ' >/year</span></p>
            <div className=' flex text-[10px] '>
              <p>ST</p>
              <p>5.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NearbyHostel