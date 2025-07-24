import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'

export default function HorizontalScroll({ cards }) {
  const ref = useRef(null)
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, duration: 1.2, lerp: 0.1 })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], 
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  const looped = [...cards, ...cards]

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {looped.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[clamp(10rem,50vw,60rem)]"
            >
              <img
                src={card.url}
                alt={card.description}
                className="w-full h-auto object-contain"
              />
              <p className="mt-4 text-white uppercase text-center">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
