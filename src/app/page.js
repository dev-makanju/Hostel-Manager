'use client'
import Image from 'next/image'
import { Button } from 'antd'
import { hostel1, bookmark, bookmarkFilled, mapIcon, hostel2, hostel3, hostel4, hostel5 } from '@/assets'
import AccomodationCard from '@/components/common/accomodationCard'
import Link from 'next/link'
import { useState } from 'react'


const accomodations = [
  {
    id: 1,
    name: "First Accomodation"
  }, {
    id: 2,
    name: "Second Accomodation"
  }, {
    id: 3,
    name: "Third Accomodation"
  }, {
    id: 4,
    name: "Fourth Accomodation"
  }, {
    id: 5,
    name: "Fifth Accomodation"
  }, {
    id: 6,
    name: "Sixth Accomodation"
  }
]



export default function Home() {

  const nearby = [
    {
      id: 1,
      name: "Ariremako Hostel",
      image: 'hostel1',
    }, {
      id: 2,
      name: "Moremi Estate",
      image: "hostel2"
    }, {
      id: 3,
      name: "Oduduwa Estate",
      image: "hostel3",
    },
  ]
  const placeTypes = ["Single Room", "Self Con", "Room and Parlor", "1 BedRoom", "2 BedRoom", "3 BedRoom"]
  const [bookmarked, setBookMarked] = useState(false)

  const handleBookMarked = () => {
    setBookMarked(!bookmarked)
  }

  return (
    <div className=' px-5 '>
      <div className=' flex flex-row  gap-2 overflow-hidden scrollbar-hide  '>
        {
          placeTypes.map(place => <Button key={place} className=' px-10 py-2 text-[14px] h-10 leading-5 focus:bg-black border-0 text-[#9E9E9E] bg-[#D8D8D8] font-bold focus:text-white' > {place} </Button>)
        }
      </div>
      <div className=' pt-8 '>
        <p className=' text-black text-[16px] mb-4 ' >Recommended for you</p>
        <div className=' flex flex-row gap-2  overflow-auto  '>
          {
            accomodations.map((accomodation) => <AccomodationCard id={accomodation.id} name={accomodation.name} />
            )}
        </div>
      </div>
      <div className=' '>
        <div className=' flex justify-between items-center mt-6 mb-4 '>
          <p className=' font-bold text-[16px] ' >Hostel Nearby</p>
          <Link href={"/"} >
            <p className=' text-[10px] text-[rgba(158, 158, 158, 1)]  '>See all</p>
          </Link>
        </div>
        <div className=' grid grid-cols-2 gap-y-3 '>

          {/* {nearby.map((hostel) => {
              <div key={hostel.id} className=' relative w-full max-w-[183px] flex-wrap shrink-0  h-[200px] '>
                <div className=' relative w-full'>
                  <p className=' py-[3px] px-[6px] text-[8px] rounded-[2px] bg-[#C97B2CB2] w-fit absolute top-2 left-2 text-white '>Self con</p>
                  <div className='bg-gradient-to-tr from-white-26 to-white-7 cursor-pointer absolute top-2 right-2' >
                    <Image src={ bookmarked ? bookmark : bookmarkFilled} alt='bookmark' className='  ' />
                  </div>
                  <Image className=' w-full absolute inset-0 -z-10' src={hostel.image} alt='Hostel' />
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

            })
          } */}

          <div className=' relative w-full max-w-[183px] flex-wrap shrink-0  h-[200px] '>
            <div className=' relative w-full'>
              <p className=' py-[3px] px-[6px] text-[8px] rounded-[2px] bg-[#C97B2CB2] w-fit absolute top-2 left-2 text-white '>Self con</p>
              <div className='bg-gradient-to-tr from-white-26 to-white-7 absolute top-2 right-2' >
                <Image src={bookmarkFilled} alt='bookmark' className='  ' />
              </div>
              <Image className=' w-full absolute inset-0 -z-10' src={hostel2} alt='Hostel' />
            </div>
            <div className=' z-30 absolute right-0 left-0 flex px-2 py-2  mx-2 bottom-4  rounded-[3.662px] bg-gradient-to-br from-[rgba(255, 255, 255, 0.26)] to-[rgba(255, 255, 255, 0.07)] backdrop-blur-[5px] text-white shadow-lg  ' >
              <div className="  w-full  ">
                <h1 className=' font-semibold leading-[18px] text-sm '>Ariremako Villa</h1>
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

           <div className=' relative w-full max-w-[183px] flex-wrap shrink-0  h-[200px] '>
            <div className=' relative w-full'>
              <p className=' py-[3px] px-[6px] text-[8px] rounded-[2px] bg-[#C97B2CB2] w-fit absolute top-2 left-2 text-white '>3 Bedroom</p>
              <div className='bg-gradient-to-tr from-white-26 to-white-7 absolute top-2 right-2' >
                <Image src={bookmarkFilled} alt='bookmark' className='  ' />
              </div>
              <Image className=' w-full absolute inset-0 -z-10' src={hostel3} alt='Hostel' />
            </div>
            <div className=' z-30 absolute right-0 left-0 flex px-2 py-2  mx-2 bottom-4  rounded-[3.662px] bg-gradient-to-br from-[rgba(255, 255, 255, 0.26)] to-[rgba(255, 255, 255, 0.07)] backdrop-blur-[5px] text-white shadow-lg  ' >
              <div className="  w-full  ">
                <h1 className=' font-semibold leading-[18px] text-sm '>Ariremako Villa</h1>
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

          <div className=' relative w-full max-w-[183px] flex-wrap shrink-0  h-[200px] '>
            <div className=' relative w-full'>
              <p className=' py-[3px] px-[6px] text-[8px] rounded-[2px] bg-[#C97B2CB2] w-fit absolute top-2 left-2 text-white '>Self con</p>
              <div className='bg-gradient-to-tr from-white-26 to-white-7 absolute top-2 right-2' >
                <Image src={bookmarkFilled} alt='bookmark' className='  ' />
              </div>
              <Image className=' w-full absolute inset-0 -z-10' src={hostel4} alt='Hostel' />
            </div>
            <div className=' z-30 absolute right-0 left-0 flex px-2 py-2  mx-2 bottom-4  rounded-[3.662px] bg-gradient-to-br from-[rgba(255, 255, 255, 0.26)] to-[rgba(255, 255, 255, 0.07)] backdrop-blur-[5px] text-white shadow-lg  ' >
              <div className="  w-full  ">
                <h1 className=' font-semibold leading-[18px] text-sm '>Ariremako Villa</h1>
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

          <div className=' relative w-full max-w-[183px] flex-wrap shrink-0  h-[200px] '>
            <div className=' relative w-full'>
              <p className=' py-[3px] px-[6px] text-[8px] rounded-[2px] bg-[#C97B2CB2] w-fit absolute top-2 left-2 text-white '>Self con</p>
              <div className='bg-gradient-to-tr from-white-26 to-white-7 absolute top-2 right-2' >
                <Image src={bookmarkFilled} alt='bookmark' className='  ' />
              </div>
              <Image className=' w-full absolute inset-0 -z-10' src={hostel3} alt='Hostel' />
            </div>
            <div className=' z-30 absolute right-0 left-0 flex px-2 py-2  mx-2 bottom-4  rounded-[3.662px] bg-gradient-to-br from-[rgba(255, 255, 255, 0.26)] to-[rgba(255, 255, 255, 0.07)] backdrop-blur-[5px] text-white shadow-lg  ' >
              <div className="  w-full  ">
                <h1 className=' font-semibold leading-[18px] text-sm '>Ariremako Villa</h1>
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
        </div>
      </div>
    </div>
  )
}
