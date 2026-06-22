import { motion } from 'motion/react'
import Button from './Button'

const cheesecake =
  'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/big_tiramisu.avif'
const noodle =
  'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/noodle_illustration.avif?updatedAt=1782154931879&tr=w-1000'

const features = [
  {
    emoji: '🤩',
    title: 'Unique Flavors',
    desc: 'A unique fusion of two artisanal gourmet slices frozen inside the fire',
  },
  {
    emoji: '😍',
    title: 'No Eggs | No Gelatin',
    desc: 'Made in a tough, fine-controlled process, no eggs or gelatin required',
  },
  {
    emoji: '😋',
    title: 'Premium Ingredients',
    desc: 'A unique fusion of two artisanal gourmet slices frozen inside the fire',
  },
  {
    emoji: '😄',
    title: 'Community Engagement',
    desc: 'A unique fusion of two artisanal gourmet slices frozen inside the fire',
  },
]

// Different motion presets so each emoji feels alive & distinct
const emojiAnimations = [
  { rotate: [0, -10, 10, -10, 0], scale: [1, 1.15, 1] }, // wobble
  { scale: [1, 1.2, 1], y: [0, -6, 0] }, // bounce
  { rotate: [0, 12, -12, 0] }, // sway
  { scale: [1, 1.25, 1] }, // pulse
]

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      className="text-start md:text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="text-2xl md:text-4xl text-center md:text-end inline-block w-full"
        animate={emojiAnimations[index % emojiAnimations.length]}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.4, rotate: 0 }}
      >
        {feature.emoji}
      </motion.div>
      <h3 className="mt-1 text-xl md:text-2xl font-[saans] text-black text-center md:text-end">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm text-[#8F8C8C] font-[satoshi] max-w-xs text-center md:text-end">
        {feature.desc}
      </p>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section className="relative w-full bg-[#F9E7CF] py-10 px-2 md:px-4">
      <img
        src={noodle}
        alt="Noodle Illustration"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-5 z-0 pointer-events-none select-none"
      />
      <div className="relative z-10">
        <h2 className="text-center text-xl md:text-[3.7em] mb-4 md:mb-12 leading-[0.97em] font-[saans]">
          <span className="font-bold">Why </span>{' '}
          <span className="text-[#FF6B6B] font-[emiken]">MISS CHEESECAKE</span>{' '}
          <span className="font-bold">Is </span> <br />
          <span className="font-bold">So Special For Customers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-8 md:gap-y-0 md:gap-x-30 py-10">
          <div className="flex flex-col items-center space-y-8 md:space-y-12">
            {features.slice(0, 2).map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={cheesecake}
              alt="Cheesecake"
              className="w-full h-auto object-contain"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <div className="flex flex-col items-center space-y-12">
            {features.slice(2).map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i + 2} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button btn="Learn More" />
        </div>
      </div>
    </section>
  )
}