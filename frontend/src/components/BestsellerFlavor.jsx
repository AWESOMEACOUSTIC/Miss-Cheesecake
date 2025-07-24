import tiramisu from "../assets/images/tiramisu-poster.png"
import biscoff from "../assets/images/biscoff-poster.png"
import strawberry from "../assets/images/strawberry-poster.png"
import blueberry from "../assets/images/blueberry-poster.png"
import HorizontalScroll from './HorizontalScroll'

const cards = [
    { id: 1, url: tiramisu },
    { id: 2, url: biscoff },
    { id: 3, url: strawberry },
    { id: 4, url: blueberry },
]

export default function BestsellerFlavors() {
    return (
        <div className="px-4 bg-[#F6E0DE]">
            <h2 className="text-center font-[emiken] text-4xl text-[#FF6B6B]">
                Bestseller Flavors
            </h2>
            <h3 className="text-lg mb-12 text-center md:text-[1.43em] text-[#E68400] font-[samarkan]">
                Sabse Hit Flavors
            </h3>
            <HorizontalScroll cards={cards} />
        </div>
    )
}
