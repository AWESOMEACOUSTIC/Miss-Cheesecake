const biscoffImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/biscoff_cheesecake.avif";
const blueberryImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/blueberry_cheesecake.avif";
const strawberryImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/strawberry_cheesecake.avif";
const mangoImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/mango_cheesecake.avif";

export default function getCheesecakes() {
    return [
        {
            id: 'lotus-biscoff',
            title: 'Lotus Biscoff Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '100g',
            imageSrc: biscoffImg,
            bgColor: 'bg-[#FDE8C2]',
        },
        {
            id: 'blueberry',
            title: 'Blueberry Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '100g',
            imageSrc: blueberryImg,
            bgColor: 'bg-[#E4D4FF]',
        },
        {
            id: 'strawberry',
            title: 'Strawberry Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '100g',
            imageSrc: strawberryImg,
            bgColor: 'bg-[#FFE0E0]',
        },
        {
            id: 'mango',
            title: 'Mango Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '100g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'oreo-nutella',
            title: 'Oreo Nutella Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'chocolate',
            title: 'Chocolate Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'classic-vanilla',
            title: 'Classic Vanilla Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
    ]
}
