import React from 'react'

const showcase = 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/hero_image.avif'

export default function FooterShowcase() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="group relative">
        {/* layered soft glows */}
        <div className="absolute inset-0 -z-10 scale-95 rounded-full bg-[#C47F6E]/20 blur-3xl transition-all duration-700 group-hover:scale-110" />
        {/* decorative dashed ring */}
        <div className="absolute -inset-4 -z-10 rounded-full border border-dashed border-[#C47F6E]/30 transition-transform duration-700 group-hover:rotate-12" />
        <img
          src={showcase}
          alt="Handcrafted with love at Miss Cheesecake"
          className="h-64 w-64 animate-[float_6s_ease-in-out_infinite] rounded-full object-cover shadow-xl ring-[5px] ring-white sm:h-72 sm:w-72"
        />
      </div>

      {/* signature-style quote */}
      <p className="mt-8 max-w-[15rem] text-center font-serif text-2xl italic leading-snug text-[#a9614f]">
        “Serving up smiles from our Jodhpur
        <br />
        ovens straight to your heart.”
      </p>
      <span className="mt-3 h-px w-16 bg-[#C47F6E]/40" />
      <span className="mt-3 text-xs font-[emiken] tracking-[0.12em]  text-[#C47F6E]/90">
        — Miss Cheesecake
      </span>
    </div>
  )
}
