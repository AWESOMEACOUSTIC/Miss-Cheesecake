import React from 'react';
import { motion } from 'motion/react';
import QuantitySelector from './QuantitySelector';
import { useCart } from '../../context/CartContext';

export default function CartItemCard({ item }) {
  const { removeItem } = useCart();

  return (
    <motion.div
      className="flex gap-4 p-4 bg-white rounded-[20px] border border-[rgba(196,127,110,0.12)] relative transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(200,101,78,0.1)] hover:-translate-y-px group"
      layout
      initial={{ opacity: 0, x: 40, height: 0 }}
      animate={{ opacity: 1, x: 0, height: 'auto' }}
      exit={{ opacity: 0, x: -20, height: 0, padding: 0, margin: 0, overflow: 'hidden' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], height: { duration: 0.3, delay: 0.1 } }}
    >
      <div className="shrink-0 w-[90px] h-[90px] max-md:w-[76px] max-md:h-[76px] rounded-2xl overflow-hidden bg-[#FDF2EA] flex items-center justify-center">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-4/5 h-4/5 object-contain transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <h4 className="font-[satoshi-bold] text-[0.95rem] text-[#2D1810] m-0 leading-[1.3]">{item.title}</h4>
        <p className="font-[satoshi] text-[0.8rem] text-[#C47F6E] m-0">{item.weight}</p>

        <div className="flex items-center gap-3 mt-1.5">
          <QuantitySelector id={item.id} quantity={item.quantity} />

          <button
            className="bg-none border-none p-0 font-[satoshi] text-[0.78rem] text-[#C47F6E] cursor-pointer underline underline-offset-2 transition-colors duration-250 ease-in-out hover:text-[#C8654E]"
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.title} from cart`}
          >
            Remove
          </button>
        </div>
      </div>

      <motion.span
        className="font-[satoshi-bold] text-base text-[#C8654E] whitespace-nowrap self-start ml-auto pl-3"
        key={`${item.id}-${item.quantity}`}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        ₹{item.numericPrice * item.quantity}
      </motion.span>
    </motion.div>
  );
}
