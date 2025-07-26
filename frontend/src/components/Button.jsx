import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Button({ btn }) {
  return (
    <button
      className="
        mt-4 sm:mt-6 md:mt-8
        flex justify-center items-center gap-x-1 sm:gap-x-4
        w-[31vw] sm:w-1/2 md:w-[14vw]
        py-[0.8vw] sm:py-3 md:py-4
        border border-gradient-to-r from-[#C8654E]/80 to-[#C8654E]/40
        rounded-full
        bg-[#FCEDDE] text-[#C8654E] hover:text-[#FCEDDE]
        text-[0.71em] text-sm sm:text-base md:text-[1.29em]
        hover:bg-[#C8654E] transition
      "
    >
     
      <div className='flex gap-x-2 md:gap-x-3 items-center'>
         <Link to={"/cheesecakes"} className="font-[satoshi]">{btn}</Link>
         <FaArrowRight className='w-2 h-2 md:w-4 md:h-4'/>
      </div>
      
    </button>
  )
}

export default Button
