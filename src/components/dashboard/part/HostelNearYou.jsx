import React from 'react'
import HostelCards from './HostelCards'

const HostelNearYou = () => {
   const parentCard = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px , 1fr))',
      gridGap: '1em',
   }
  
   return (
   <div className='p-3'>
      <div className='flex justify-between mt-4'>
         <h3 className="font-gilroy font-light">Hostel Nearby</h3>
         <p className="text-[#868080] font-bold">see all</p>
      </div>
      <div style={parentCard} className='mt-5'>
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