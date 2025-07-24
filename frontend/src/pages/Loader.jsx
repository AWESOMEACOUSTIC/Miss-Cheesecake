// Loader.jsx
import React, { useEffect, useRef } from 'react'
import { gsap, Power2, Power1 } from 'gsap'

export default function Loader() {
  const textRef = useRef(null)

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('span')
    const tl = gsap.timeline()

    tl
      .to(letters, {
        duration: 0.6,
        y: 0,
        stagger: 0.05,
        ease: Power2.easeOut,
      })
      .to(letters, {
        css: { '--clipPath': 'inset(0% 0 0 0)' },
        duration: 0.8,
        delay: 0.3,
        ease: Power1.easeInOut,
      })
      .to(letters, {
        duration: 0.6,
        y: 100,
        stagger: 0.05,
        delay: 0.5,
      })

    return () => tl.kill()
  }, [])

  const chars = Array.from('MISS CHEESECAKE')

  return (
    <div
      className="flex items-center justify-center h-screen bg-[#111] overflow-hidden font-[emiken]"
    >
      <div
        ref={textRef}
        className="flex relative overflow-hidden text-[6.5rem] font-extrabold leading-none"
      >
        {chars.map((char, i) => (
          <span
            key={i}
            data-text={char}
            className={`
              relative inline-block text-[rgba(255,255,255,0.2)] leading-none
              translate-y-[100px]
              before:content-[attr(data-text)] before:absolute before:inset-0
              before:bg-gradient-to-br
              before:from-[#ff0000] before:via-[#ff3333] before:via-[#ff6600] before:to-[#cc0000]
              before:bg-clip-text before:text-transparent
              before:[clip-path:var(--clipPath)] before:[-webkit-clip-path:var(--clipPath)]
              before:transition-none
            `}
            style={{ '--clipPath': 'inset(100% 0 0 0)' }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
