import React, { useState, useEffect } from 'react'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { useRouter } from 'next/navigation';
const OnboardingScreen = () => {
  const router = useRouter();
  // const [firstPage, setFirstPage] = useState(true)
  const [nextPage, setNextPage] = useState(true);

  

  return (
    <div>
      { nextPage ? <Screen1 setNextPage={setNextPage}/> : <Screen2/> }
    </div>
  )
}

export default OnboardingScreen