const pooja = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/pooja.avif";
const rathore = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/rathore.avif";
const aditya = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/aditya.avif";
import OverlayMask from '../components/OverlayMask'
import StorySection from '../components/StorySection'
import BestsellerFlavor from '../components/BestsellerFlavor'
import Team from '../components/Team'

import MemoryWall from '../components/MemoryWall'

export default function About() {
  const teamMembers = [
  {
    name: "Pooja",
    img: pooja,
  },
  {
    name: "Rathore",
    img: rathore,
  },
  {
    name: "Aditya",
    img: aditya,
  },

];
  return (
  <div className="flex flex-col">
    <OverlayMask />
    <StorySection />
    <BestsellerFlavor />
    <Team  defaultName="Team"
      members={teamMembers}/>
    <MemoryWall />
  </div>
  )
}
