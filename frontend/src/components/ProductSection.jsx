// src/components/ProductsSection.jsx
import React from 'react'
import ProductCard from './ProductCards'

// import your actual images here:
import biscoffImg from '../assets/images/biscoff_cheesecake.avif'
import blueberryImg from '../assets/images/blueberry_cheesecake.avif'
import strawberryImg from '../assets/images/strawberry_cheesecake.png'
import mangoImg from '../assets/images/mango_cheesecake.png'
import Button from './Button'

const products = [
  {
    title: 'Lotus Biscoff Cheesecake',
    price: '₹260',
    weight: '100g',
    imageSrc: biscoffImg,
    bgColor: 'bg-[#FDE8C2]',
  },
  {
    title: 'Blueberry Cheesecake',
    price: '₹260',
    weight: '100g',
    imageSrc: blueberryImg,
    bgColor: 'bg-[#E4D4FF]',
  },
  {
    title: 'Strawberry Cheesecake',
    price: '₹260',
    weight: '100g',
    imageSrc: strawberryImg,
    bgColor: 'bg-[#FFE0E0]',
  },
  {
    title: 'Mango Cheesecake',
    price: '₹260',
    weight: '100g',
    imageSrc: mangoImg,
    bgColor: 'bg-[#FFF6CC]',
  },
]

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#F6E0DE] py-16 px-7 md:px-8">
      {/* Section heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Our <span className="text-[#FF6B6B] font-[emiken]">Products</span>
      </h2>

      {/* 2‑column grid on sm+, 1‑col on xs */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((prod) => (
          <ProductCard key={prod.title} {...prod} />
        ))}
      </div>

      {/* Show More button */}
      <div className="mt-12 flex justify-center">
        <Button btn = "Show More"/>
      </div>
    </section>
  )
}
