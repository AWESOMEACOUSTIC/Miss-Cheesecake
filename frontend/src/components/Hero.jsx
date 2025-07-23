import heroImage from '../assets/images/hero_image.png' 
import Button from './Button'

export default function Hero() {
  const headings = [
    { text: "You Don’t Need A Solution" },
    { text: "You Need A ", highlight: "CHEESECAKE" }
  ]

  return (
    <section className="w-full flex overflow-hidden">
      {/* Left side: heading + button */}
      <div className="flex flex-col justify-center w-1/2 px-16">
        {headings.map((h, idx) => (
          <h1
            key={idx}
            className="text-black font-[saans] text-5xl md:text-6xl mb-2 leading-tight w-290"
          >
            {h.text}
            {h.highlight && (
              <span className="text-[#FF6B6B] font-[emiken]">
                {" "}{h.highlight}
              </span>
            )}
          </h1>
        ))}

       <Button btn = "Explore Menu"/>
      </div>

      {/* Right side: hero image */}
      <div className="flex-1 ml-30 flex justify-center items-center">
        <img
          src={heroImage}
          alt="hero image"
          className="max-w-full max-h-[100%] object-contain"
        />
      </div>
    </section>
  )
}
