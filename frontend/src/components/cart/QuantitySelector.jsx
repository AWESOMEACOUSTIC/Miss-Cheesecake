import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function QuantitySelector({ id, quantity }) {
  const { updateQuantity } = useCart();

  return (
    <div className="inline-flex items-center border-[1.5px] border-[rgba(196,127,110,0.3)] rounded-xl overflow-hidden bg-[#FBF4EE]">
      <motion.button
        className="flex items-center justify-center w-[34px] h-[34px] border-none bg-transparent cursor-pointer text-[#C47F6E] text-lg transition-all duration-250 ease-in-out select-none hover:bg-[#F0D5C8] hover:text-[#C8654E] active:scale-[0.92]"
        onClick={() => updateQuantity(id, quantity - 1)}
        whileTap={{ scale: 0.85 }}
        aria-label="Decrease quantity"
      >
        <Minus size={15} strokeWidth={2.5} />
      </motion.button>

      <div className="min-w-8 text-center font-[satoshi-bold] text-[0.9rem] text-[#2D1810] relative overflow-hidden h-[34px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={quantity}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {quantity}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.button
        className="flex items-center justify-center w-[34px] h-[34px] border-none bg-transparent cursor-pointer text-[#C47F6E] text-lg transition-all duration-250 ease-in-out select-none hover:bg-[#F0D5C8] hover:text-[#C8654E] active:scale-[0.92]"
        onClick={() => updateQuantity(id, quantity + 1)}
        whileTap={{ scale: 0.85 }}
        aria-label="Increase quantity"
      >
        <Plus size={15} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
