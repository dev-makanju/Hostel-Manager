import React from 'react'

const DashHeader = () => {
  return (
   <div className="border-3  flex flex-col gap-4 pb-2">
      <div className='flex justify-between'>
         <h1 className="text-sm">Let's find you the perfect place</h1>
         <span>
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12.5002 14.1686H16.6668L15.4961 12.9978C15.1785 12.6803 15.0002 12.2497 15.0002 11.8007V9.16862C15.0002 6.99159 13.6088 5.13953 11.6668 4.45313V4.16862C11.6668 3.24815 10.9206 2.50195 10.0002 2.50195C9.07969 2.50195 8.3335 3.24815 8.3335 4.16862V4.45313C6.39151 5.13953 5.00016 6.99159 5.00016 9.16862V11.8007C5.00016 12.2497 4.82179 12.6803 4.50427 12.9978L3.3335 14.1686H7.50016M12.5002 14.1686V15.002C12.5002 16.3827 11.3809 17.502 10.0002 17.502C8.61945 17.502 7.50016 16.3827 7.50016 15.002V14.1686M12.5002 14.1686H7.50016" stroke="#111827" stroke-width="1.14952" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
         </span>
      </div>
      <div>
      <input type="text" className="w-full p-2 rounded-lg"/>
      </div>
   </div>
  )
}

export default DashHeader