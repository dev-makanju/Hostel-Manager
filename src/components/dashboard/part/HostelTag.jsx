import React from 'react'

const HostelTag = ({name , active, onSelectTag}) => {
   const handleTag = () => {
      onSelectTag(name)
   }
   
   return (
      <div
      className={`whitespace-nowrap p-2 font-bold rounded-lg ${active === name ? 'bg-[#000] text-[#fff]' : `bg-[#D8D8D8] text-[#9E9E9E]`}`} 
      onClick={handleTag}>
         {name}
      </div>
   )
}

export default HostelTag