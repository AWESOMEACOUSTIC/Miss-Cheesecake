// src/components/VideoBanner.jsx
import React, { useRef, useEffect } from 'react'
import videoBanner from '../assets/videos/bannerVideo.mp4'

export default function VideoBanner() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    const container = containerRef.current
    if (!vid || !container) return

    // 1) As soon as enough data is loaded, kick off playback (muted so browser allows autoplay)
    const onCanPlay = () => {
      vid.muted = true
      vid.play().catch(() => {})
    }
    vid.addEventListener('canplay', onCanPlay)

    // In case canplay already fired before listener
    if (vid.readyState >= 3) {
      onCanPlay()
    }

    // 2) IntersectionObserver to toggle sound + ensure play when unmuted
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.muted = false            // unmute
          vid.play().catch(() => {})   // re‑play in case it was paused
        } else {
          vid.muted = true             // mute again
        }
      },
      { threshold: 0.5 }               // 50% visible
    )
    observer.observe(container)

    return () => {
      vid.removeEventListener('canplay', onCanPlay)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="bg-[#F9E7CF] py-10 px-4">
      <div
        ref={containerRef}
        className="relative mx-auto w-full h-[100vh] bg-white rounded-3xl overflow-hidden"
      >
        <video
          ref={videoRef}
          src={videoBanner}
          preload="auto"
          loop
          playsInline
          className="
            absolute inset-0
            w-full h-full
            object-cover
            filter blur-sm 
            pointer-events-none
            select-none
          "
        />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-[#FF4646] font-[emiken] text-5xl md:text-[4.89em] text-center leading-tight">
            We Bake<br/>You Bite
          </h2>
        </div>
      </div>
    </section>
  )
}
