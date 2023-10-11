import React from 'react'

const Button = ({onButtonClicked, submit}) => {
   const isSubmiting = false;
   const submitUpdate = (e) => {
      e.preventDefault();
      onButtonClicked();
   }

   return (
     <button 
      type="button"
      onClick={submitUpdate}
      disabled={submit} 
      className={`text-white rounded-lg p-3 w-full font-bold hover:bg-[#0e0e0eaa] ${submit ? 'bg-[#0e0e0eaa] cursor-not-allowed' : 'bg-[#0E0E0E]'}`}>Submit</button>
   )
}

export default Button