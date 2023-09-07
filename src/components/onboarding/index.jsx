import React, { useState } from 'react'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
const OnboardingScreen = ({setShowOnboardingScreen}) => {
  // const [firstPage, setFirstPage] = useState(true)
  const [nextPage, setNextPage] = useState(true);

  return (
    <div>
      {
        nextPage ?
        <Screen1 setNextPage={setNextPage}/> : <Screen2 setShowOnboardingScreen={setShowOnboardingScreen}/>
      }
    </div>
  )
}

export default OnboardingScreen