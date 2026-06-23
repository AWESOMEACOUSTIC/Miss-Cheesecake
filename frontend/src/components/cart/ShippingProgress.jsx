import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function ShippingProgress() {
  const { shippingProgress, amountToFreeShipping, hasFreeShipping } = useCart();

  return (
    <div className="pb-5">
      <AnimatePresence mode="wait">
        {hasFreeShipping ? (
          <motion.p
            key="success"
            className="font-[satoshi] text-[0.9rem] text-[#C8654E] text-center font-semibold"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
          >
            🎉 You've unlocked Free Shipping!
          </motion.p>
        ) : (
          <motion.p
            key="progress"
            className="font-[satoshi] text-[0.88rem] text-[#C47F6E] text-center mb-2.5"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
          >
            Spend <span className="font-bold text-[#C8654E]">₹{Math.ceil(amountToFreeShipping)}</span> more to unlock{' '}
            <span className="font-bold text-[#C8654E]">Free Shipping</span>
          </motion.p>
        )}
      </AnimatePresence>

      <div className="w-full h-2 bg-[#F0D5C8] rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#E8A98F] to-[#C8654E] relative overflow-hidden progress-shimmer"
          initial={{ width: 0 }}
          animate={{ width: `${shippingProgress * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
