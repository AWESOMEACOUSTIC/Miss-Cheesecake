import Button from './Button'
import cheesecake from '../assets/images/big_tiramisu.avif'
import noodle from '../assets/images/noodle_illustration.png'

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

export default function WhyUs() {
  return (
    <section className="relative w-full bg-[#F9E7CF] py-10 px-2 md:px-4">
      <img
        src={noodle}
        alt="Noodle Illustration"
        className="
          absolute inset-0
          w-full h-full
          object-cover object-center
          opacity-5
          z-0
          pointer-events-none
          select-none
        "
      />
      <div className="relative z-10">
        <h2 className="text-center text-xl md:text-[3.7em] mb-4 md:mb-12 leading-[0.97em] font-[saans]">
          <span className='font-bold'>Why </span> <span className="text-[#FF6B6B] font-[emiken]">MISS CHEESECAKE</span> <span className='font-bold'>Is </span> <br />
         <span className='font-bold'>So Special For Customers</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-8 md:gap-y-0 md:gap-x-30 py-10">
          <div className="flex flex-col items-center space-y-8 md:space-y-12">
            {features.slice(0, 2).map(f => (
              <div key={f.title} className="text-start md:text-center">
                <div className="text-2xl md:text-4xl text-center md:text-end">{f.emoji}</div>
                <h3 className="mt-1 text-xl md:text-2xl font-[saans] text-black text-center md:text-end">{f.title}</h3>
                <p className="mt-2 text-sm text-[#8F8C8C] font-[satoshi] max-w-xs text-center md:text-end">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={cheesecake}
              alt="Cheesecake"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-center space-y-12">
            {features.slice(2).map(f => (
              <div key={f.title} className="text-start">
                <div className="text-2xl md:text-4xl text-center md:text-end">{f.emoji}</div>
                <h3 className="mt-1 text-xl md:text-2xl font-[saans] text-black text-center md:text-end">{f.title}</h3>
                <p className="mt-2 text-sm text-[#8F8C8C] font-[satoshi] max-w-xs text-center md:text-end">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button btn = "Learn More"/>
        </div>
      </div>
    </section>
  )
}
