import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

/**
 * Team Component
 * @param {{ members: { name: string; img: string; }[]; defaultName: string; }} props
 */
export default function Team({ members = [], defaultName = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({ smooth: true, duration: 1.2, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const el = containerRef.current;
    if (!el) return;

    // DOM elements
    const profileImagesContainer = el.querySelector('.profile-images');
    const profileImages = el.querySelectorAll('.profile-images .img');
    const nameElements = el.querySelectorAll('.profile-names .name');
    const nameHeadings = el.querySelectorAll('.profile-names .name h1');

    // Split each heading into chars and set inline-block for each letter
    nameHeadings.forEach((heading) => {
      const split = new SplitText(heading, { type: 'chars' });
      split.chars.forEach((char) => char.classList.add('letter', 'inline-block'));
    });

    // Collect letter arrays: index 0 = defaultName, others = members
    const lettersArrays = Array.from(nameElements).map((el) =>
      Array.from(el.querySelectorAll('.letter'))
    );
    const defaultLetters = lettersArrays[0];
    const memberLettersList = lettersArrays.slice(1);

    // Initial state: show default name, hide all member names
    gsap.set(defaultLetters, { y: '0%' });
    memberLettersList.forEach((letters) => gsap.set(letters, { y: '100%' }));

    // Hide/show default name on container hover
    profileImagesContainer.addEventListener('mouseenter', () => {
      gsap.to(defaultLetters, { y: '-100%', ease: 'power4.out', duration: 0.6 });
    });
    profileImagesContainer.addEventListener('mouseleave', () => {
      gsap.to(defaultLetters, { y: '0%', ease: 'power4.out', duration: 0.6 });
    });

    // Hover animations for each profile image (desktop only)
    if (window.innerWidth >= 900) {
      profileImages.forEach((img, idx) => {
        const letters = memberLettersList[idx];

        img.addEventListener('mouseenter', () => {
          // enlarge image using vw units
          gsap.to(img, { width: '30vw', height: '30vw', duration: 0.5, ease: 'power4.out' });
          // show this member's name
          gsap.to(letters, {
            y: '0%',
            ease: 'power4.out',
            duration: 0.75,
            stagger: { each: 0.025, from: 'center' },
          });
        });

        img.addEventListener('mouseleave', () => {
          // shrink image back
          gsap.to(img, { width: '25vw', height: '25vw', duration: 0.5, ease: 'power4.out' });
          // hide this member's name
          gsap.to(letters, {
            y: '100%',
            ease: 'power4.out',
            duration: 0.75,
            stagger: { each: 0.025, from: 'center' },
          });
        });
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="mt-10 relative w-full py-4 text-[#e3e3db] flex flex-col justify-center items-center gap-10 overflow-hidden"
    >
      {/* Profile Names */}
      <div className="profile-names w-full h-[4em] overflow-hidden relative">
        {/* Default name */}
        <div className="name default absolute top-0 w-full">
          <h1 className="absolute w-full text-center uppercase font-[emiken] text-[4rem] font-black text-[#f66161] select-none">
            {defaultName}
          </h1>
        </div>

        {/* Member names */}
        {members.map((m, idx) => (
          <div key={idx} className="name absolute top-0 w-full">
            <h1 className="absolute w-full text-center uppercase font-[emiken] text-[4rem] font-black text-[#f93535] select-none">
              {m.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Profile Images */}
      <div className="profile-images flex justify-center items-center flex-wrap max-w-[90%]">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="img relative w-[25vw] h-[25vw] p-[0.5vw] cursor-pointer will-change-[width,height]"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
