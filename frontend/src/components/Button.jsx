import React from 'react'

function Button({btn}) {
  return (
     <button
          className="
            mt-8 flex justify-center items-center gap-x-4
            w-[14vw]
            py-4
            border-1 
            border-gradient-to-r from-[#C8654E]/80 to-[#C8654E]/40
            rounded-full
            bg-[#FCEDDE] text-[#C8654E]  hover:text-[#FCEDDE] text-[1.29em]
            hover:bg-[#C8654E] transition
          "
        >
          <p className='font-[satoshi]'>{btn}</p>
          <span className="text-xl">→</span>
        </button>
  )
}

export default Button