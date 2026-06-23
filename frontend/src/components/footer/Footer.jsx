import React, { useEffect, useRef, useState } from 'react'
import FooterNav from './FooterNav'
import FooterShowcase from './FooterShowcase'
import FooterNewsletter from './FooterNewsletter'
import FooterBottom from './FooterBottom'

const noodle = 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/noodle_illustration.avif?updatedAt=1782154931879&tr=w-1000'

// --- Scroll reveal hook -------------------------------------------------
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, visible]
}

export default function Footer() {
  const [revealRef, visible] = useReveal()

  return (
    <footer
      ref={revealRef}
      className={`relative overflow-hidden bg-[#F6E0DE] px-6 pb-10 pt-8 transition-all duration-700 sm:px-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <img
        src={noodle}
        alt="Background noodle"
        className="absolute inset-0 w-full h-full object-fill object-center opacity-5 z-0 pointer-events-none select-none"
      />
      {/* faint decorative background blooms */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#C47F6E]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#C47F6E]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-3 md:items-center">
        {/* ============ LEFT: Navigation ============ */}
        <FooterNav />

        {/* ============ CENTER: Brand Showcase ============ */}
        <FooterShowcase />

        {/* ============ RIGHT: Newsletter + Social ============ */}
        <FooterNewsletter />
      </div>

      {/* ============ Bottom bar: copyright + legal ============ */}
      <FooterBottom />
    </footer>
  )
}
