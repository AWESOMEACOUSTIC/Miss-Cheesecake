import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import sharktank from "../assets/images/Sharktank.avif";

const noodle = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/noodle_illustration.avif?updatedAt=1782154931879&tr=w-1000";

const STORIES = [
  {
    id: "about",
    tab: "About Miss Cheesecake",
    eyebrow: "cheesecake",
    heading: "About Miss Cheesecake",
    description:
      "Starting off as a delivery-first dessert brand and growing through " +
      "countless pop-ups, Miss Cheesecake became a space where indulgence, " +
      "craft, and warmth come together. Every bite is designed to feel " +
      "comforting, memorable, and a little celebratory.",
  },
  {
    id: "crafted",
    tab: "Crafted Miss Cheesecake",
    eyebrow: "crafted with care",
    heading: "Crafted Miss Cheesecake",
    description:
      "From velvety fillings to buttery bases and thoughtfully balanced " +
      "sweetness, every cheesecake is made with patience and precision. " +
      "Classic favourites and creative flavours are finished with the same " +
      "attention to texture, richness, and detail.",
  },
  {
    id: "story",
    tab: "Story Behind Miss Cheesecake",
    eyebrow: "apni kahani",
    heading: "The Story Behind Miss Cheesecake",
    description:
      "Miss Cheesecake was founded by two passionate individuals, Pooja " +
      "Balaji and Narpat Singh Rathore. Backed by a team of bakers, " +
      "decorators, and service staff, the brand was built as a haven for " +
      "cheesecake lovers who appreciate quality, creativity, and heartfelt " +
      "experiences through food.",
  },
];

const AUTO_PLAY_DELAY = 3800;
const RESUME_DELAY = 5000;

const contentVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualPause, setIsManualPause] = useState(false);

  const sectionRef = useRef(null);
  const autoPlayTimeoutRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.45,
    once: false,
  });

  const activeStory = STORIES[activeIndex];

  useEffect(() => {
    if (!isInView || isManualPause) return;

    autoPlayTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % STORIES.length);
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearTimeout(autoPlayTimeoutRef.current);
    };
  }, [activeIndex, isInView, isManualPause]);

  useEffect(() => {
    return () => {
      window.clearTimeout(autoPlayTimeoutRef.current);
      window.clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleTabClick = (index) => {
    window.clearTimeout(autoPlayTimeoutRef.current);
    window.clearTimeout(resumeTimeoutRef.current);

    setActiveIndex(index);
    setIsManualPause(true);

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsManualPause(false);
    }, RESUME_DELAY);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F6E0DE] px-4 py-16 md:px-6 md:py-20"
    >
      <img
        src={noodle}
        alt="Noodle Illustration"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-5 z-0 pointer-events-none select-none"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#F3DEC4]/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[500px_minmax(0,1fr)] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[500px] lg:h-full"
        >
          <div className="relative flex h-full items-center justify-center">
            <div className="absolute -inset-3 rounded-[32px] bg-white/40 blur-2xl" />
            <img
              src={sharktank}
              alt="Miss Cheesecake featured story"
              className="relative h-[430px] w-full rounded-[30px] object-cover shadow-[0_18px_60px_rgba(180,125,97,0.18)] md:h-[630px] lg:h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 28 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex h-full flex-col rounded-[32px] bg-[#F5DEC1] p-4 md:p-6"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
            <div className="absolute left-10 top-4 h-24 w-24 rounded-full border border-white/20" />
            <div className="absolute right-16 top-8 h-40 w-40 rounded-full border border-white/20" />
            <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-full border border-white/15" />
          </div>

          <div className="relative flex h-full flex-1 flex-col rounded-[26px] bg-white/95 px-6 py-6 min-h-[380px] md:min-h-[480px] md:px-8 md:py-7 lg:min-h-[630px]">
            <div className="mb-6 min-h-[240px] md:mb-24 md:min-h-[290px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.id}
                  role="tabpanel"
                  id={`story-panel-${activeStory.id}`}
                  aria-labelledby={`story-tab-${activeStory.id}`}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="font-[emiken] text-[1.65rem] uppercase leading-[1.05] tracking-[0.02em] text-[#FF6B6B] md:text-[2.25rem]"
                  >
                    {activeStory.heading}
                  </motion.h3>

                  <motion.p
                    variants={itemVariants}
                    className="mt-1 font-[samarkan] text-base text-[#E8A14C] md:text-lg"
                  >
                    {activeStory.eyebrow}
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="mt-5 max-w-[44ch] font-[satoshi] text-[1rem] leading-7 text-[#C45A45] md:text-[1.12rem] md:leading-8"
                  >
                    {activeStory.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              role="tablist"
              aria-label="Miss Cheesecake stories"
              className="mt-auto flex flex-col"
            >
              {STORIES.map((story, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={story.id}
                    id={`story-tab-${story.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`story-panel-${story.id}`}
                    onClick={() => handleTabClick(index)}
                    className="relative border-b border-[#EDD8C3] py-3 text-left last:border-b-0"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-story-line"
                        className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#FF6B6B]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}

                    <span
                      className={[
                        "font-[satoshi-bold] text-sm uppercase tracking-[0.02em] transition-colors duration-300 md:text-base",
                        isActive
                          ? "text-[#E06A56]"
                          : "text-[#E06A56]/40 hover:text-[#E06A56]/70",
                      ].join(" ")}
                    >
                      {story.tab}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}