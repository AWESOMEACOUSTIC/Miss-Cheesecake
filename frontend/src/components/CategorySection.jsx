import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCards'

export default function CategorySection({ title, items }) {
  const containerRef = useRef(null)

  return (
    <section className="px-4 md:px-8 py-8 overflow-hidden">
      <h2 className="font-[emiken] text-3xl md:text-[5.4em] text-[#FF6B6B] text-center mb-6">
        {title}
      </h2>
      <div ref={containerRef} className="w-full">
        <motion.div
          className="flex gap-6 md:gap-10 cursor-grab w-max"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.2}
        >
          {items.map(item => (
            <div key={item.title} className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[36vw]">
              <ProductCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
