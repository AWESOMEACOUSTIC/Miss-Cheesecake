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
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.9],
    [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 34% 40%, 34% 83%, 72% 83%, 72% 40%, 32% 40%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    ]
  );

  const slideUp = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  const imageDown = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    // Tall parent gives the sticky child room to animate
    <div ref={scrollRef} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Image Wrapper */}
        <div className="absolute inset-0 -z-10">
          <motion.img
            src="https://misscheesecakestoragebucket.s3.us-east-1.amazonaws.com/outlets/central_bakery.jpg"
            alt="Background"
            className="w-full h-screen object-cover object-top"
            style={{ y: imageDown }}
          />
        </div>

        {/* Masked Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-start pt-26 bg-[#F6E0DE] text-neutral-950"
          style={{ clipPath }}
        >
          <motion.h1
            className="text-[7vw] text-[#FF6E6E] font-[emiken] uppercase tracking-tighter text-center"
            style={{ y: slideUp }}
          >
            MISS CHEESECAKE
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}