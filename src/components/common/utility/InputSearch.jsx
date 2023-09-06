import { useState} from "react"
import Overlay from "./Overlay";
const InputSearch = ({type, placeholder, onChange}) => {
   const [inputText, setInputText] = useState('');
   const handleText = (e) => {
      setInputText(e.target.value);
      if(onChange){
         onChange(e.target.value);
      }
   }

   return (
      <div className="flex items-center bg-[#FAFAFA] rounded-lg border-1">
         <span className="p-3">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.82491" cy="9.3254" r="6.74142" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5137 14.3652L16.1567 17.0014" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </span>
         <input
            className="w-full outline-none p-3 bg-transparent"
            type={type}
            value={inputText}
            focused={inputText != ''}
            onChange={handleText}
            placeholder={placeholder}
            aria-label='input search'
            aria-describedby='kindly enter a text to search'
            role="textbox" 
         />
         <span className="p-3">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.85" cy="4.61953" r="2.85" stroke="#C97B2C" stroke-width="2"/>
            <line x1="11.5" y1="3.96875" x2="20" y2="3.96875" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
            <circle cx="3.85" cy="3.85" r="2.85" transform="matrix(-1 0 0 1 21 12.5293)" stroke="#C97B2C" stroke-width="2"/>
            <line x1="1" y1="-1" x2="9.5" y2="-1" transform="matrix(-1 0 0 1 10.5 16.7285)" stroke="#C97B2C" stroke-width="2" stroke-linecap="round"/>
            </svg>
         </span>
      </div>
   )
}

export default InputSearch