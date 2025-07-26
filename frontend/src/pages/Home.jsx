import noodle from '../assets/images/noodle_illustration.avif'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import ProductsSection from '../components/ProductSection'
import VideoBanner from '../components/VideoBanner'
import CarasouelSection from '../components/CarasouelSection'
import Banner from '../components/Banner'

export default function Home() {
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

                <Hero />
                <WhyUs />
                <ProductsSection />
                <VideoBanner />
                <CarasouelSection />
                <Banner />
            </div>
        </div>
    )
}
