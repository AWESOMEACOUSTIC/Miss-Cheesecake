import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

import video1 from '../assets/videos/savour.mp4'
import video2 from '../assets/videos/blue_video.mp4'
import video3 from '../assets/videos/bannerVideo.mp4'

const videos = [
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
]

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)
  const vidRefs = useRef([])

  // autoplay current
  useEffect(() => {
    const vid = vidRefs.current[current]
    vid?.play().catch(() => {})
  }, [current])

  // advance on end (now loops)
  const handleEnded = () => {
    setCurrent(idx => (idx + 1) % videos.length)
  }

  // init Lenis once
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, duration: 1.2, lerp: 0.1 })
    function raf(t) {
      lenis.raf(t)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="flex justify-center mb-12">
      <div className="relative w-[94%] overflow-hidden rounded-3xl">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: 'tween', duration: 0.8 }}
        >
          {videos.map((vid, i) => (
            <div key={vid.id} className="min-w-full bg-black h-64 md:h-[39vw]">
              <video
                ref={el => (vidRefs.current[i] = el)}
                src={vid.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                onEnded={handleEnded}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
