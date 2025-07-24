
export default function StorySection() {
  return (
    <section className="bg-[#F6E0DE] py-16 mt-10 px-4">
      <div className="max-w-[90vw] mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/6f1/19e9310c6d619472e0a5c8ca8d4eb6f1.jpg"        
            alt="left-image"
            className="w-40 h-40 md:w-58 md:h-58 rounded-full -rotate-18 object-cover"
          />
        </div>

        <div className="mt-8 md:mt-0 text-center">
          <h3 className="text-[1.43em] md:text-[2em] font-[satoshi-bold] text-[#FF6B6B]">
            The Story Behind
          </h3>
          <h2 className="mt-2 text-4xl md:text-[3.44em] font-[emiken] text-[#FF6B6B]">
            Miss Cheesecake
          </h2>
          <p className="text-lg md:text-[1.43em] text-[#E68400] font-[samarkan]">
            apni kahani
          </p>
        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/669/0a227ea4ed2c653ecbb278f5f112e669.jpg"      
            alt="Right-image"
            className="w-40 h-40 md:w-58 md:h-58 rounded-full rotate-18 object-cover"
          />
        </div>
      </div>

      <div className="mt-12 max-w-[78vw] mx-auto text-center font-[satoshi] text-base md:text-lg text-gray-900 leading-relaxed">
        <p>
          Miss cheesecake is a delightful dessert brand founded by two passionate individuals, <span className="text-[#E68400] font-[samarkan]">pooja balaji</span> and <span className="text-[#E68400] font-[samarkan]">narpat singh rathore</span>. Behind every delicious treat is a team of passionate bakers, decorators, and service staff who pour 
          their hearts into their work. From our master bakers with decades of experience to our enthusiastic apprentices, everyone at miss cheesecake shares a love for creating memorable experiences through food. Together, we envisioned
          miss cheesecake as a haven for cheesecake lovers, offering a variety of rich, flavorful, and uniquely crafted cheesecakes that cater to every taste. From classic flavors to innovative twists, miss cheesecake stands as a symbol 
          of indulgence, quality, and a perfect fusion of creativity and tradition.
        </p>
      </div>
    </section>
  )
}
