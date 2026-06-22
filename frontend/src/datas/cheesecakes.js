const biscoffImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/biscoff_cheesecake.avif";
const blueberryImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/blueberry_cheesecake.avif";
const strawberryImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/strawberry_cheesecake.avif";
const mangoImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/mango_cheesecake.avif";

export default function getCheesecakes() {
    return [
        {
            title: 'Lotus Biscoff Cheesecake',
            price: '₹260',
            weight: '100g',
            imageSrc: biscoffImg,
            bgColor: 'bg-[#FDE8C2]',
        },
        {
            title: 'Blueberry Cheesecake',
            price: '₹260',
            weight: '100g',
            imageSrc: blueberryImg,
            bgColor: 'bg-[#E4D4FF]',
        },
        {
            title: 'Strawberry Cheesecake',
            price: '₹260',
            weight: '100g',
            imageSrc: strawberryImg,
            bgColor: 'bg-[#FFE0E0]',
        },
        {
            title: 'Mango Cheesecake',
            price: '₹260',
            weight: '100g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            title: 'Oreo Nutella Cheesecake',
            price: '₹260',
            weight: '200g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            title: 'Chocolate Cheesecake',
            price: '₹260',
            weight: '200g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            title: 'Classic Vanilla Cheesecake',
            price: '₹260',
            weight: '200g',
            imageSrc: mangoImg,
            bgColor: 'bg-[#FFF6CC]',
        },
    ]
}
