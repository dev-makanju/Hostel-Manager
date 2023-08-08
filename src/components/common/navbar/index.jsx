import React, { useState } from 'react'
import Image from 'next/image'
import { chat, bookmark, home, profile } from '@/assets'
const Navbar = () => {
  const navLinks = [{
    icon: home,
    text: "Home"
  }, {
    icon: bookmark,
    text: "Save"
  }, {
    icon: chat,
    text: "Chats"
  }, {
    icon: profile,
    text: "Profile"
  }]

  const [isActive, setIsActive] = useState("Home")

  const handleActive = () =>{

    setIsActive(navlink.text)
  }

  return (
    <div className=' flex justify-between px-5 py-4 ' >
      {navLinks.map((navlink, index) => (

        <div onClick={handleActive} className=' flex flex-col text-center items-center text-black' key={index} >
          <Image src={navlink.icon} />

          <h1 className={` text-[12px] {${isActive ? "text-black" : "text-[#BDBDBD]" }} `}>
            {navlink.text}
          </h1>

        </div>
      ))
      }

    </div>
  )
}

export default Navbar