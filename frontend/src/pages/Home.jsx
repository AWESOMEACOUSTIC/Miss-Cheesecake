import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="relative bg-[#F6E0DE]">
      <div
        className="
          absolute inset-0
          bg-[url('assets/images/noodle_illustration.png')]
          bg-cover
          bg-center
          bg-no-repeat
          opacity-5
        "
      />
      {/* section - navbar */}
      <div className="relative px-[1vw] py-[2.02vw] flex justify-center h-full">
        <Navbar />
      </div>

        {/* section - hero */}
        <div>
            <Hero />
        </div>
    </div>
  )
}
