import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCards'

export default function CategorySection({ title, items }) {
  return (
    <section className="px-4 md:px-8 py-8 overflow-hidden">
      <h2 className="font-[emiken] text-3xl md:text-[5.4em] text-[#FF6B6B] text-center mb-6">
        {title}
      </h2>
      <motion.div
        className="flex gap-10 cursor-grab"
        drag="x"
        dragConstraints={{ left: -((items.length - 1) * 256), right: 0 }}
      >
        {items.map(item => (
          <div key={item.title} className="flex-shrink-0 w-[34vw]">
            <ProductCard {...item} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
