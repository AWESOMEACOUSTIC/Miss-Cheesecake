
export default function StorySection() {
  return (
    <section className="bg-[#F6E0DE] py-16 mt-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:items-end md:justify-between">
        {/* Left image */}
        <div className="md:w-1/4 flex justify-center md:justify-start">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/6f1/19e9310c6d619472e0a5c8ca8d4eb6f1.jpg"         /* your left image path here */
            alt="left-image"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
          />
        </div>

        {/* Heading */}
        <div className="mt-8 md:mt-0 md:w-1/2 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#FF6B6B]">
            The Story Behind
          </h3>
          <h2 className="mt-2 text-4xl md:text-6xl font-[emiken] text-[#FF6B6B]">
            Miss Cheesecake
          </h2>
          <p className="mt-1 text-lg md:text-xl text-[#FFC65E]">
            apni kahani
          </p>
        </div>

        {/* Right image */}
        <div className="md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/669/0a227ea4ed2c653ecbb278f5f112e669.jpg"         /* your right image path here */
            alt="Right-image"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Body text */}
      <div className="mt-12 max-w-3xl mx-auto text-center text-base md:text-lg text-gray-900 leading-relaxed">
        <p>
          miss cheesecake is a delightful dessert brand founded by two passionate individuals, poodja balaji and narpat singh rathore. behind every delicious treat is a team of passionate bakers, decorators, and service staff who pour their hearts into their work. from our master bakers with decades of experience to our enthusiastic apprentices, everyone at miss cheesecake shares a love for creating memorable experiences through food. together, we envisioned miss cheesecake as a haven for cheesecake lovers, offering a variety of rich, flavorful, and uniquely crafted cheesecakes that cater to every taste. from classic flavors to innovative twists, miss cheesecake stands as a symbol of indulgence, quality, and a perfect fusion of creativity and tradition.
        </p>
      </div>
    </section>
  )
}
