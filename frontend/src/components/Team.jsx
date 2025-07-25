import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


gsap.registerPlugin(SplitText);
export default function Team({ members = [], defaultName = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, duration: 1.2, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const el = containerRef.current;
    if (!el) return;
    const profileImagesContainer = el.querySelector('.profile-images');
    const profileImages = el.querySelectorAll('.profile-images .img');
    const nameElements = el.querySelectorAll('.profile-names .name');
    const nameHeadings = el.querySelectorAll('.profile-names .name h1');
    nameHeadings.forEach((heading) => {
      const split = new SplitText(heading, { type: 'chars' });
      split.chars.forEach((char) => char.classList.add('letter', 'inline-block'));
    });

    const lettersArrays = Array.from(nameElements).map((el) =>
      Array.from(el.querySelectorAll('.letter'))
    );
    const defaultLetters = lettersArrays[0];
    const memberLettersList = lettersArrays.slice(1);

    gsap.set(defaultLetters, { y: '0%' });
    memberLettersList.forEach((letters) => gsap.set(letters, { y: '100%' }));
    profileImagesContainer.addEventListener('mouseenter', () => {
      gsap.to(defaultLetters, { y: '-100%', ease: 'power4.out', duration: 0.6 });
    });
    profileImagesContainer.addEventListener('mouseleave', () => {
      gsap.to(defaultLetters, { y: '0%', ease: 'power4.out', duration: 0.6 });
    });
    if (window.innerWidth >= 900) {
      profileImages.forEach((img, idx) => {
        const letters = memberLettersList[idx];

        img.addEventListener('mouseenter', () => {
          gsap.to(img, { width: '30vw', height: '30vw', duration: 0.5, ease: 'power4.out' });
          gsap.to(letters, {
            y: '0%',
            ease: 'power4.out',
            duration: 0.75,
            stagger: { each: 0.025, from: 'center' },
          });
        });

        img.addEventListener('mouseleave', () => {
          gsap.to(img, { width: '25vw', height: '25vw', duration: 0.5, ease: 'power4.out' });
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
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
