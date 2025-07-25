import React, { useRef, useEffect } from 'react'
import videoBanner from '../assets/videos/bannerVideo.mp4'

export default function VideoBanner() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    const container = containerRef.current
    if (!vid || !container) return

    const onCanPlay = () => {
      vid.muted = true
      vid.play().catch(() => {})
    }
    vid.addEventListener('canplay', onCanPlay)
    if (vid.readyState >= 3) onCanPlay()

    const observer = new IntersectionObserver(
      ([entry]) => {
        vid.muted = !entry.isIntersecting
        if (entry.isIntersecting) vid.play().catch(() => {})
      },
      { threshold: 0.5 }
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
        className="relative mx-auto w-full  h-[60vh] md:h-[100vh] rounded-3xl overflow-hidden"
      >
        <video
          ref={videoRef}
          src={videoBanner}
          preload="auto"
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter blur-sm pointer-events-none select-none"
        />

        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h2 className="
              text-[#FF4646] font-[emiken]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.89em]
              text-center leading-tight
            ">
            We Bake<br/>You Bite
          </h2>
        </div>
      </div>
    </section>
  )
}
