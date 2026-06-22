import { Plus } from 'lucide-react'
import { motion } from 'motion/react'

export default function ProductCard({
  title,
  price,
  weight,
  imageSrc,
  bgColor,
}) {
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
          <div className="p-2 text-center font-bold">{weight}</div>
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
        <motion.button
          initial={{ x: 0, y: 0, boxShadow: '4px 4px 0px 0px #000' }}
          whileHover={{
            x: -1,
            y: -1,
            boxShadow: '5px 5px 0px 0px #000',
          }}
          whileTap={{
            x: 4,
            y: 4,
            boxShadow: '0px 0px 0px 0px #000',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          className="
            group inline-flex items-center gap-3
            bg-white text-black font-[satoshi] font-semibold
            px-7 py-3 rounded-2xl
            border-2 border-black
          "
        >
          <span>Add</span>
          <span
            className="
              flex items-center justify-center
              w-7 h-7 rounded-full
              bg-black text-white border-2 border-black
            "
          >
            <Plus className="w-4 h-4" strokeWidth={3} />
          </span>
        </motion.button>
      </div>
    </div>
  )
}