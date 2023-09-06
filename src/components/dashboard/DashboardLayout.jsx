'use client' 

import React, {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation';
import DashFooter from './part/DashFooter'
import DashHeader from './part/DashHeader'


const DashboardLayout = ({children}) => {
   const pathname = usePathname();
   const routesToShowHeader = ['/dashboard'];
   const [showHeader, setShowHeader] = useState(false) 
   
   useEffect (() => {
      if (routesToShowHeader.includes(pathname)) {
         setShowHeader(true);
         return;
      } 
      setShowHeader(false);
   }, [showHeader, setShowHeader])

   return (
    <div className="relative h-screen">
      {showHeader && <DashHeader/>}
         {children}
      <DashFooter/>
    </div>
   )
}

export default DashboardLayout