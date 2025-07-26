import pooja from "../assets/images/pooja.avif"
import rathore from "../assets/images/rathore.avif"
import aditya from "../assets/images/aditya.avif"
import OverlayMask from '../components/OverlayMask'
import StorySection from '../components/StorySection'
import BestsellerFlavor from '../components/BestsellerFlavor'
import Team from '../components/Team'

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
  </div>
  )
}
