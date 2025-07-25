import CarouselAnimation from './CarasouelAnimation';

const sampleItems = [
  {
    content: `“I treated myself to Miss Cheesecake’s Classic New York slice and it was the creamiest, dreamiest dessert I’ve ever tasted. Every bite melted in my mouth. I’m officially obsessed!”`,
    imageSrc: "https://i.ytimg.com/vi/c7WFWHfi5zk/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCPqYs8ObOrOwRW9RGrH9Mcx5aNEA",
    name: 'Harsh Sharma',
    handle: '@sharma.harsh',
    subtitle: 'Classic cheesecake addict',
  },
  {
    content: `“The Mango Cheesecake from Miss Cheesecake is like sunshine in a jar. The tropical mango swirl is perfectly balanced with the rich cheesecake base and I order it again and again!”`,
    imageSrc: "https://content3.jdmagicbox.com/v2/comp/jodhpur/b6/0291px291.x291.240610191925.c5b6/catalogue/miss-cheesecake-sardarpura-jodhpur-desserts-bvQ0O7pafx.jpg",
    name: 'Jonita Gandhi',
    handle: '@jonita',
    subtitle: 'Mango flavor fanatic',
  },
  {
    content: `“I shared the Blueberry Cheesecake at a family gathering and everyone went wild. Juicy blueberries, silky filling, and a buttery crust—total crowd‑pleaser!”`,
    imageSrc: "https://content3.jdmagicbox.com/v2/comp/jodhpur/b6/0291px291.x291.240610191925.c5b6/catalogue/miss-cheesecake-sardarpura-jodhpur-desserts-9asF9oNlVR.jpg",
    name: 'AESH',
    handle: '@yooadiwho',
    subtitle: 'Family dessert host',
  },
  {
    content: `“Miss Cheesecake’s Oreo Nutella jar is my new late‑night snack obsession. The cinnamon‑biscoff crumble on top adds just the right crunch—pure comfort in every spoonful!”`,
    imageSrc: "https://content.jdmagicbox.com/v2/comp/jodhpur/b6/0291px291.x291.240610191925.c5b6/catalogue/miss-cheesecake-sardarpura-jodhpur-desserts-b0NdSLaxWj-250.jpg",
    name: 'Mehek Agarwal',
    handle: '@mehek',
    subtitle: 'Midnight snack enthusiast',
  }
]


export default function CarasouelAnimation() {
  return (
    <div className="py-5 md:py-10 w-full bg-[#F9E7CF]">
      <h1 className="text-center text-xl md:text-[3.7em] font-[saans] mb-2 md:mb-3 leading-[1.3em]">
       <span className='font-bold'>What Our Happy Customers</span> <br /> <span className='font-bold'>Are Saying About</span> <span className="block md:inline" /> <span className='font-[emiken] text-[#FF6E6E]'>Miss Cheesecake</span>
      </h1>
      <h2 className="text-center text-[0.88em] md:text-[1.32vw] text-[#f08800] uppercase font-[samarkan] mb-7">logon ki baatein</h2>
      <CarouselAnimation items={sampleItems} />
    </div>
  );
}
