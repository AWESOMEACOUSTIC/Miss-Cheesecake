import React from 'react'
import noodle from '../assets/images/noodle_illustration.png'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import ProductsSection from '../components/ProductSection'

export default function Home() {
    return (
        <div className="relative bg-[#F6E0DE] min-h-screen">
            {/* 1) Background image at 40% opacity, sits at z‑0 */}
            <img
                src={noodle}
                alt="Noodle Illustration"
                className="
          absolute inset-0
          w-full h-full
          object-cover object-center
          opacity-5
          z-0
          pointer-events-none
          select-none
        "
            />
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navbar section */}
                <div className="px-[1vw] py-[2.02vw] flex justify-center">
                    <Navbar />
                </div>

                {/* Hero section */}
                <Hero />

                {/* why us section */}
                <WhyUs />

                {/* Our Products section */}
                <ProductsSection />
            </div>
        </div>
    )
}
