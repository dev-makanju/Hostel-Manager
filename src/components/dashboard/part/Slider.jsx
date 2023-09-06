import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import SliderLogo from '../../../assets/images/slider.png'

const contentStyle = {
  height:'300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => (
  <div className="w-screen">     
    <Carousel effect="fade">
      <div className="relative">
        <div style={contentStyle}>
          <Image src={SliderLogo} alt="slider main" className=' h-full w-full object-cover'/>
        </div>
        <div className="absolute bottom-[20px] p-4 w-full">
          <div className="backdrop-blur-sm bg-[#ffffff3f] p-2 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-[#fff] text-2xl font-bold">Wakajaye Villa</h2>
              <span className="text-[#fff] flex items-center">
                Rating: &nbsp; 
                <span className="text-[yellow] font-bold">&#9733;</span>
                <span className="text-[yellow] font-bold">&#9733;</span>
                <span className="text-[yellow] font-bold">&#9733;</span>
                <span className="text-[yellow] font-bold">&#9733;</span>
                <span className="text-[yellow] font-bold">&#9733;</span>
                <h1 className="text-[#fff] center w-[30px] backdrop-blur-sm p-1 rounded-lg">5.0</h1>
              </span> 
            </div>
            <div>
              <h2 className="text-[#fff] text-2xl font-bold">₦100k</h2>
              <span className="text-[#fff] text-sm">/year</span>
            </div>
          </div>
        </div>
        <div 
          className="m-4 flex items-center justify-center w-[40px] h-[40px] bg-[#ffffff3f] backdrop-blur-sm p-2 absolute top-0 right-0 rounded-lg">
          <svg width="20" height="25" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.31997 0.271484C7.90369 0.271452 8.46536 0.494476 8.89006 0.894925C9.31475 1.29537 9.57038 1.84298 9.60462 2.42569L9.60844 2.55995V13.2394C9.60847 13.367 9.5765 13.4926 9.51544 13.6046C9.45439 13.7167 9.36621 13.8116 9.25896 13.8808C9.15172 13.9499 9.02885 13.991 8.9016 14.0004C8.77435 14.0098 8.64678 13.9871 8.53057 13.9344L8.45353 13.8932L5.03075 11.8404L1.6095 13.8932C1.5001 13.9588 1.37599 13.996 1.24851 14.0013C1.12104 14.0065 0.994277 13.9798 0.87983 13.9234C0.765384 13.867 0.666909 13.7828 0.593418 13.6785C0.519927 13.5742 0.473769 13.4531 0.459167 13.3264L0.45459 13.2394V2.55995C0.454557 1.97623 0.677581 1.41456 1.07803 0.989862C1.47848 0.565165 2.02608 0.309543 2.6088 0.275299L2.74305 0.271484H7.31997Z" fill="#C97B2C"/>
          </svg>
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>5</h3>
      </div>
      <div>
        <h3 style={contentStyle}>6</h3>
      </div>
    </Carousel>
  </div>
);

export default Slider;