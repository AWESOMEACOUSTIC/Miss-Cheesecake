import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import ProductsSection from '../components/ProductSection'
import VideoBanner from '../components/VideoBanner'
import CarasouelSection from '../components/CarasouelSection'
import Banner from '../components/Banner'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <WhyUs />
            <ProductsSection />
            <VideoBanner />
            <CarasouelSection />
            <Banner />
        </div>
    )
}
