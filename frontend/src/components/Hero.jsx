import heroImage from '../assets/images/hero_image.png' 
import Button from './Button'

export default function Hero() {
  const headings = [
    { text: "You Don't Need A Solution" },
    { text: "You Need A ", highlight: "CHEESECAKE" }
  ]

  return (
    <section className="w-full h-40 md:h-auto flex overflow-hidden">
      <div className="flex flex-col justify-center w-[20vw] md:w-1/2 px-4 md:px-16">
        {headings.map((h, idx) => (
          <h1
            key={idx}
            className="text-black font-[saans] text-sm md:text-6xl mb-2 leading-[0.78em] md:leading-[1em] w-290 whitespace-nowrap"
          >
            {h.text}
            {h.highlight && (
              <span className="text-[#FF6B6B] font-[emiken]">
                {" "}{h.highlight}
              </span>
            )}
          </h1>
        ))}

        <Button btn="Explore Menu"/>
      </div>

      <div className="flex-1 ml-30 flex justify-center items-center">
        <img
          src={heroImage}
          alt="hero image"
          className="w-full h-full md:max-w-full md:max-h-[100%] object-cover"
        />
      </div>
    </section>
  )
}
