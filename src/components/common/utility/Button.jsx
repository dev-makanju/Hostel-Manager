import React from 'react'

const Button = ({onButtonClicked}) => {
  
   const submitUpdate = (e) => {
      e.preventDefault();
      onButtonClicked();
   }

   return (
     <button 
      type="button"
      onClick={submitUpdate} 
      className="bg-[#0E0E0E] text-white rounded-lg p-3 w-full font-bold">Submit</button>
   )
}

export default Button