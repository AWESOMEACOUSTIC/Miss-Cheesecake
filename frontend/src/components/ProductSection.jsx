import React from 'react'
import ProductCard from './ProductCards'
import getCheesecakes from '../datas/cheesecakes'
import Button from './Button'

export default function ProductsSection() {
  const allProducts = getCheesecakes()
  const products = allProducts.slice(0, 4) 

  return (
    <section className="w-full bg-[#F6E0DE] py-16 px-7 md:px-8">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-1">
        Our <span className="text-[#FF6B6B] font-[emiken]">Products</span>
      </h2>

      <h2 className="text-center text-[0.58em] md:text-[1.32vw] text-[#FBA736] font-[samarkan] mb-10">
        Hamare cheesecakes
      </h2>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((prod) => (
          <ProductCard key={prod.title} {...prod} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button btn="Show More" />
      </div>
    </section>
  )
}
