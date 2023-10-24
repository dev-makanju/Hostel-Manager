'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import HostelCards from './HostelCards'


const HostelNearYou = () => {
   const router = useRouter()
   const seeAll = () => {
      router.push('/dashboard/discover')
   }

   const parentCard = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px , 1fr))',
      gridGap: '1em',
   }
   return (
   <div className='p-4'>
      <div className='flex justify-between mt-4'>
         <h3 className="text-base font-bold">Hostel Nearby</h3>
         <p className="text-[#868080] text-sx font-bold" onClick={seeAll}>see all</p>
      </div>
      <div style={parentCard} className='mt-5 mb-[6rem]'>
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

export default HostelNearYou