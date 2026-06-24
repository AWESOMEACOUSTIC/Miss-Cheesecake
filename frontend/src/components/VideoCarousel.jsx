import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion, AnimatePresence } from 'framer-motion'

const video1 = 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/savour.mp4'
const video2 = 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/blue_video.mp4'
const video3 = 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/bannerVideo.mp4'

const videos = [
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
]

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)
  const vidRefs = useRef([])

  const goTo = (i) => setCurrent((i + videos.length) % videos.length)
  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  // play active / pause others
  useEffect(() => {
    vidRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === current) v.play().catch(() => { })
      else {
        v.pause()
        v.currentTime = 0
      }
    })
  }, [current])

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, lerp: 0.1 })
    const raf = (t) => {
      lenis.raf(t)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handleStop = () => lenis.stop()
    const handleStart = () => lenis.start()
    window.addEventListener('lenis-stop', handleStop)
    window.addEventListener('lenis-start', handleStart)

    return () => {
      window.removeEventListener('lenis-stop', handleStop)
      window.removeEventListener('lenis-start', handleStart)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="flex justify-center mb-12">
      <div className="group relative w-[94%] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
        {/* Track */}
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          {videos.map((vid, i) => (
            <div
              key={vid.id}
              className="relative min-w-full h-64 md:h-[39vw] bg-neutral-900"
            >
              <video
                ref={(el) => (vidRefs.current[i] = el)}
                src={vid.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                onEnded={next}
              />
              {/* subtle gradient for contrast */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous video"
          className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md opacity-0 transition group-hover:opacity-100 hover:bg-white/40"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next video"
          className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md opacity-0 transition group-hover:opacity-100 hover:bg-white/40"
        >
          ›
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === current
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}