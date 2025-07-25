import React, { useEffect } from 'react'
import VideoCarousel from '../components/VideoCarousel'
import PosterGallery from '../components/PosterGallery'
import CategorySection from '../components/CategorySection'
import getCheesecakes from '../datas/cheesecakes'
import Banner from '../components/Banner'


export default function CheesecakeSection() {
  const allProducts = getCheesecakes()
  const categories = [
    { key: 'new',   label: 'NEW FLAVORS',     items: allProducts.slice(0, 4) },
    { key: 'best',  label: 'BEST SELLERS',    items: allProducts.slice(4, 8) },
    { key: 'burst', label: 'BURST CHEESECAKE', items: allProducts.slice(0, 4) },
  ]

  return (
    <div className="bg-[#F6E0DE] text-neutral-900">
      <VideoCarousel />
      <PosterGallery />

      {categories.map(cat => (
        <CategorySection
          key={cat.key}
          title={cat.label}
          items={cat.items}
        />
      ))}

      <Banner/>
    </div>
  )
}
