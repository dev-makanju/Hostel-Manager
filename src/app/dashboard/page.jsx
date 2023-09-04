import React from 'react'
import Slider from '@/components/dashboard/part/Slider';
import DashHeader from '@/components/dashboard/part/DashHeader'
import DashFooter from '@/components/dashboard/part/DashFooter';
import HostelNearYou from '@/components/dashboard/part/HostelNearYou';

const page = () => {
  return (
    <div className="relative h-screen">
      <DashHeader/>
      <Slider/>
      <HostelNearYou/>
      <DashFooter/>
    </div>
  )
}

export default page