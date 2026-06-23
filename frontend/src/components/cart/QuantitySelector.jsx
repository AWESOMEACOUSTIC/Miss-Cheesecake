import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function QuantitySelector({ id, quantity }) {
  const { updateQuantity } = useCart();

  return (
    <div className="qty-selector">
      <motion.button
        className="qty-btn"
        onClick={() => updateQuantity(id, quantity - 1)}
        whileTap={{ scale: 0.85 }}
        aria-label="Decrease quantity"
      >
        <Minus size={15} strokeWidth={2.5} />
      </motion.button>

      <div className="qty-value">
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
        className="qty-btn"
        onClick={() => updateQuantity(id, quantity + 1)}
        whileTap={{ scale: 0.85 }}
        aria-label="Increase quantity"
      >
        <Plus size={15} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
