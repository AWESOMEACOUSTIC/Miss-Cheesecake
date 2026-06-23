const biscoffImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/biscoff_cheesecake.avif";
const blueberryImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Blueberry_Cheesecake-removebg-preview-Picsart-AiImageEnhancer.png";
const strawberryImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Strawberry%20Cheesecale.png";
const mangoImg = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/mango_cheesecake.avif";
const tiramisu = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Tiramisu.png";
const blackCurrant = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/BlackCurrant.png";
const raspberry = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Raspberry.png";
const oreoNutella = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/oreo%20nutella.png";
const classicVanilla = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Classic%20Vanilla.png";
const chocolate = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Chocolate.png";

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
            imageSrc: oreoNutella,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'chocolate',
            title: 'Chocolate Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: chocolate,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'classic-vanilla',
            title: 'Classic Vanilla Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: classicVanilla,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'tiramisu',
            title: 'Tiramisu Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: tiramisu,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'raspberry',
            title: 'Raspberry Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: raspberry,
            bgColor: 'bg-[#FFF6CC]',
        },
        {
            id: 'BlackCurrant',
            title: 'Black Currant Cheesecake',
            price: '₹260',
            numericPrice: 260,
            weight: '200g',
            imageSrc: blackCurrant,
            bgColor: 'bg-[#FFF6CC]',
        },
    ]
}
