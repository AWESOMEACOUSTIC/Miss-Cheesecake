import biscoffImg from '../assets/images/biscoff_cheesecake.avif'
import blueberryImg from '../assets/images/blueberry_cheesecake.avif'
import strawberryImg from '../assets/images/strawberry_cheesecake.avif'
import mangoImg from '../assets/images/mango_cheesecake.avif'

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
