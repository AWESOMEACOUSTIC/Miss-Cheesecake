import OverlayMask from '../components/OverlayMask'
import noodle from '../assets/images/noodle_illustration.png'

function About() {
  return (
    <div className="relative bg-[#F6E0DE] min-h-screen">
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
      <div className="relative z-10 flex flex-col min-h-screen">

      
        <OverlayMask />

        

      </div>
    </div>
  )
}

export default About