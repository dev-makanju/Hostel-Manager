'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/common/utility/Button';
import Modal from '@/components/auth/forgotpass/modal';
import { toast } from 'react-toastify';
import { forgotService } from '@/service/eventService';
import PrivateRoute from '@/routes/PrivateRoute';


const ForgotPassword = () => {
    const [isSelectedOption , SetIsSelectedOption] = useState(false);
    const [email, setEmail] = useState('');
    const [emailFailed, setEmailFailed] = useState(false)
    const [ isSubmiting , setIsSubmiting ] = useState(false)
    const getMail = localStorage.getItem('service-email');
  
    useEffect( () => {
      if(getMail){
        setEmail(getMail)
      }
    }, [])

    let show_modal = true;
    const initialTab = [
      { name: 'Email', isTabActive: true,},
      { name:'Phone number', isTabActive: false}
    ]

    const [tab, setTab] = useState(initialTab);

    const tabHandler = (val) => {
      const newUpdate = tab.map(item => ({
        ...item,
        isTabActive: item.name === val
      }))
      setTab(newUpdate);
    }

    const handleInput = (e) => {
      setEmail(e.target.value);
    }
    
    const handleButtonEvent = async () => {
      //check the reset type;
      const _emailFailed = email === ''
      if(tab[0].isTabActive) {
        show_modal = true;
        setEmailFailed(_emailFailed);
        if(!_emailFailed){
          if(!isSubmiting){
            const input = {
              email: email,
            }
            setIsSubmiting(true);
            try {
              const res = await forgotService(input);
              if(res.status === 200){
                setIsSubmiting(false);
                setEmail('');
                SetIsSelectedOption(true);
                router.push('auth/otp');
                return;
              }
            }catch(e){
              toast.error(e.response.data.message);
              setIsSubmiting(false);
            }      
          }
        }
      }else{
        toast.error('You can only use the email service for now')
        //SetIsSelectedOption(true);
      }
    }


  return (
    <PrivateRoute>
      <div className="relative h-screen px-5 " >
      {isSelectedOption && <Modal/>} 
      <div className="bg-[#FAFAFA] rounded p-2 w-[36px] mt-2 pointer">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76566 13.3661C7.45324 13.6785 6.94671 13.6785 6.63429 13.3661L1.83429 8.56607C1.52187 8.25366 1.52187 7.74712 1.83429 7.4347L6.63429 2.63471C6.94671 2.32229 7.45324 2.32229 7.76566 2.63471C8.07808 2.94712 8.07808 3.45366 7.76566 3.76608L4.33135 7.20039H13.6C14.0418 7.20039 14.4 7.55856 14.4 8.00039C14.4 8.44222 14.0418 8.80039 13.6 8.80039L4.33135 8.80039L7.76566 12.2347C8.07808 12.5471 8.07808 13.0537 7.76566 13.3661Z" fill="#111827"/>
        </svg>
      </div>

      <div className='md:w-[70%] h-full m-auto z-10 pt-16 flex items-center flex-col gap-16'>
        <div className="md:w-[450px]">
          <div className='md:w-full flex items-center flex-col'>    
            <span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6666 25.834C15.9833 25.834 15.4166 26.4007 15.4166 27.084V29.584C15.4166 30.2673 15.9833 30.834 16.6666 30.834C17.35 30.834 17.9166 30.2673 17.9166 29.584V27.084C17.9166 26.4007 17.35 25.834 16.6666 25.834Z" fill="#0E0E0E"/>
              <path d="M36.6667 35.4146H35V16.6313C35 15.5979 34.5334 14.6313 33.7167 13.9979L22.05 4.93125C20.85 3.98125 19.15 3.98125 17.95 4.93125L6.28337 13.9979C5.46671 14.6313 5.00004 15.5979 5.00004 16.6146L4.91671 35.4146H3.33337C3.00185 35.4146 2.68391 35.5463 2.44949 35.7807C2.21507 36.0151 2.08337 36.3331 2.08337 36.6646C2.08337 36.9961 2.21507 37.314 2.44949 37.5485C2.68391 37.7829 3.00185 37.9146 3.33337 37.9146H36.6667C36.9982 37.9146 37.3162 37.7829 37.5506 37.5485C37.785 37.314 37.9167 36.9961 37.9167 36.6646C37.9167 36.3331 37.785 36.0151 37.5506 35.7807C37.3162 35.5463 36.9982 35.4146 36.6667 35.4146ZM17.5 11.2479H22.5C23.1834 11.2479 23.75 11.8146 23.75 12.4979C23.75 13.1812 23.1834 13.7479 22.5 13.7479H17.5C16.8167 13.7479 16.25 13.1812 16.25 12.4979C16.25 11.8146 16.8167 11.2479 17.5 11.2479ZM28.3334 35.4146H11.6667V20.8313C11.6667 19.4479 12.7834 18.3313 14.1667 18.3313H25.8334C27.2167 18.3313 28.3334 19.4479 28.3334 20.8313V35.4146Z" fill="#0E0E0E"/>
              </svg>
            </span>
            <h1 className='leading-10 text-lg mt-2 md:leading-normal text-center font-bold'>Forgot Password?</h1>
            <p className="text-center text-sm mt-2">No worries, enter your email or phone number to reset your password</p>
          </div>

          <div className='md:w-full flex items-center gap-[1.5rem] flex-col mt-[3rem]'>    
            <div className='flex flex-1 w-full'>
               {
                  tab.map( el => (
                     <div 
                        role="tab"
                        onClick={() => tabHandler(el.name)}
                        className={`hover:text-[#000] duration-500 cursor-pointer w-full border text-center p-2 rounded ${ el.isTabActive && 'bg-[#FAFAFA] text-[#ABAFB1]' }`}>
                        {el.name }
                     </div>
                  ))
               }
            </div>
            <form className="w-full flex flex-col gap-6">
                {
                    tab[0].isTabActive ? 
                    <div className="flex flex-col gap-2">
                     <label className='text-[#747474] text-sm'>Email Address</label>
                     <input 
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleInput}
                     className={`border p-2 rounded-lg ${ emailFailed ? 'border-[#e74e3c]' : ''}`}
                     placeholder="adelekebolaji0@|gmail.com" 
                    />
                    </div>
                  : 
                   <div className="flex flex-col gap-2">
                     <label className='text-[#747474] text-sm'>Phone number</label>
                     <input 
                     type="phone"
                     placeholder="9079797288" 
                     className='border p-2 rounded-lg'/>
                   </div>
                }
                <Button 
                  onButtonClicked={handleButtonEvent}
                  submit={isSubmiting}
                />
                <div className="flex flex-col gap-2 mt-[3rem] mb-[3rem]">
                  <p className='text-[#414141] text-sm text-center mt-3'>
                  Remember your password now?<Link href="/auth/login">
                      <span className="underline text-[#C97B2C]"> Pls login</span>
                    </Link>
                  </p>
                </div>  
            </form>   
          </div>
        </div>
      </div>
      </div>
    </PrivateRoute>
  )
}

export default ForgotPassword