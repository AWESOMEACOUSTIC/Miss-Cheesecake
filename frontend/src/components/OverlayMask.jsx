import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Lenis from 'lenis'

export default function OverlayMask() {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, duration: 1.2, lerp: 0.1 })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  // scroll progress
  const { scrollYProgress } = useScroll()

  // transforms
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.9],
    [
      'polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,34% 40%,34% 83%,72% 83%,72% 40%,32% 40%)',
      'polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,0% 0%,0% 100%,100% 100%,100% 0%,0% 0%)',
    ]
  )
  const slideUp = useTransform(scrollYProgress, [0, 0.2], ['0%', '-100%'])
  const imageDown = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <div className="relative">
      <div className="relative h-[calc(100vh/0.9)]">
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-0 -z-10">
            <motion.img
              src="https://b.zmtcdn.com/data/pictures/9/21343499/0124065a6617673b4011acd4bf7baa1e.png"
              alt="Background"
              className="w-full h-full object-cover object-top"
              style={{ y: imageDown }}
            />
          </div>
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-start pt-26 bg-[#F6E0DE] text-neutral-950"
            style={{ clipPath }}
          >
            <motion.h1
              className="text-[7vw] text-[#FF6E6E] font-[emiken] uppercase tracking-tighter text-center"
              style={{ y: slideUp }}
            >
              MISS CHEESECAKE
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
