import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function CartHeader() {
  const { closeCart, itemCount } = useCart();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-7 pt-6 pb-4 bg-[#FBF4EE] max-md:px-5 max-md:pt-5 max-md:pb-3.5">
      <motion.h2
        className="font-[emiken] text-[2.2rem] text-[#FF6B6B] m-0 tracking-[0.01em]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        Your Cart
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            className="text-base ml-2 font-[satoshi] text-[#C47F6E]"
          >
            ({itemCount})
          </motion.span>
        )}
      </motion.h2>

      <motion.button
        className="flex items-center justify-center w-10 h-10 border-none bg-transparent rounded-full cursor-pointer text-[#C47F6E] cart-close-hover"
        onClick={closeCart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Close cart"
      >
        <X size={22} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
