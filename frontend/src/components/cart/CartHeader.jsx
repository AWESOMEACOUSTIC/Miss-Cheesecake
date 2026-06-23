import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function CartHeader() {
  const { closeCart, itemCount } = useCart();

  return (
    <div className="cart-header">
      <motion.h2
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
            style={{
              fontSize: '1rem',
              marginLeft: '8px',
              fontFamily: 'satoshi, sans-serif',
              color: '#C47F6E',
            }}
          >
            ({itemCount})
          </motion.span>
        )}
      </motion.h2>

      <motion.button
        className="cart-close-btn"
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
