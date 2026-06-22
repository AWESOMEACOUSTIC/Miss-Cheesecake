const tiramisu = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/tiramisu-poster.avif";
const biscoff = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/biscoff-poster.avif";
const strawberry = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/strawberry-poster.avif";
const blueberry = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/blueberry-poster.avif";
import HorizontalScroll from './HorizontalScroll'

const cards = [
    { id: 1, url: tiramisu },
    { id: 2, url: biscoff },
    { id: 3, url: strawberry },
    { id: 4, url: blueberry },
]

export default function BestsellerFlavors() {
    return (
        <div className="px-4">
            <h2 className="text-center font-[emiken] text-3xl md:text-[3.42em] text-[#FF6B6B]">
                Bestseller Flavors
            </h2>
            <h3 className="text-lg mb-10 xl:mb-12 text-center md:text-[1.43em] text-[#E68400] font-[samarkan]">
                Sabse Hit Flavors
            </h3>
            <HorizontalScroll cards={cards} />
        </div>
    )
}
