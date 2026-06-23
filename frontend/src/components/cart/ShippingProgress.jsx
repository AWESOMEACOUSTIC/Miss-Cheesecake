import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function ShippingProgress() {
  const { shippingProgress, amountToFreeShipping, hasFreeShipping } = useCart();

  return (
    <div className="shipping-progress-wrapper">
      <AnimatePresence mode="wait">
        {hasFreeShipping ? (
          <motion.p
            key="success"
            className="shipping-success-msg"
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
            className="shipping-progress-msg"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
          >
            Spend <span>₹{Math.ceil(amountToFreeShipping)}</span> more to unlock{' '}
            <span>Free Shipping</span>
          </motion.p>
        )}
      </AnimatePresence>

      <div className="shipping-progress-track">
        <motion.div
          className="shipping-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${shippingProgress * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
