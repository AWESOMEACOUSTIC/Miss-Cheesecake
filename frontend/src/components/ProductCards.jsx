import { CiCirclePlus } from "react-icons/ci";
export default function ProductCard({ title, price, weight, imageSrc, bgColor }) {
  return (
    <div className="border-2 border-black">

      <div>
        <div className="p-2 text-center font-semibold border-b-2 bg-white/80 border-black">
          {title}
        </div>
        <div className="grid grid-cols-2 border-b-2 bg-white/80 border-black">
          <div className="p-2 text-center font-bold border-r-2 border-black">
            {price}
          </div>
          <div className="p-2 text-center font-bold">
            {weight}
          </div>
        </div>
      </div>

      <div className={`${bgColor} p-4 flex justify-center items-center`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 md:h-80 object-contain"
        />
      </div>

      <div className="p-4 flex justify-center border-t-2 bg-white/80 border-black">
        <button className="inline-flex items-center gap-2 hover:text-[#fff] hover:bg-black font-[satoshi] px-6 py-2 bg-white border border-black rounded-lg transition">
          <span>Add</span>
            <CiCirclePlus className="w-6 h-6 md:w-7 md:h-7"/>
        </button>
      </div>
    </div>
  )
}
