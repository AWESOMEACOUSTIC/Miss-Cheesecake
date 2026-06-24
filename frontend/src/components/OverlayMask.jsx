import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function OverlayMask() {
  // Ref for the scroll position (scoped to THIS section)
  const scrollRef = useRef(null);

  // Track scroll progress only within this element
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // transforms (same as scroll-project)
  const clipPath = useTransform(scrollYProgress, (progress) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const xMinStart = isMobile ? 10 : 34;
    const xMaxStart = isMobile ? 90 : 72;
    const yMinStart = isMobile ? 25 : 40;
    const yMaxStart = isMobile ? 75 : 83;

    // progress goes from 0 to 0.9, map to 0 to 1 for interpolation
    const ratio = Math.min(progress / 0.9, 1);

    const xMin = xMinStart - xMinStart * ratio;
    const xMax = xMaxStart + (100 - xMaxStart) * ratio;
    const yMin = yMinStart - yMinStart * ratio;
    const yMax = yMaxStart + (100 - yMaxStart) * ratio;

    // The last coordinate closes the cutout loop properly
    const closeX = xMin - (isMobile ? 2 : 2);

    return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${xMin}% ${yMin}%, ${xMin}% ${yMax}%, ${xMax}% ${yMax}%, ${xMax}% ${yMin}%, ${closeX}% ${yMin}%)`;
  });

  const slideUp = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  const imageDown = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    // Tall parent gives the sticky child room to animate
    <div ref={scrollRef} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Image Wrapper */}
        <div className="absolute inset-0 -z-10">
          <motion.img
            src="https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/central_bakery.avif"
            alt="Background"
            className="w-full h-screen object-cover object-top"
            style={{ y: imageDown }}
          />
        </div>

        {/* Masked Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-start pt-16 md:pt-26 bg-[#F6E0DE] text-neutral-950"
          style={{ clipPath }}
        >
          <motion.h1
            className="text-[12vw] md:text-[7vw] text-[#FF6E6E] font-[emiken] uppercase tracking-[0.001em] text-center"
            style={{ y: slideUp }}
          >
            MISS CHEESECAKE
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}