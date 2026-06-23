import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function StickyCheckoutBar() {
  const { subtotal, itemCount, closeCart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (itemCount === 0) return;
    setLoading(true);

    // Simulate a brief loading state
    await new Promise((r) => setTimeout(r, 600));

    setLoading(false);
    closeCart();
    navigate('/checkout');
  };

  return (
    <div className="sticky-checkout">
      <div className="checkout-subtotal-row">
        <span className="checkout-subtotal-label">Subtotal</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={subtotal}
            className="checkout-subtotal-value"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            ₹{subtotal.toFixed(2)}
          </motion.span>
        </AnimatePresence>
      </div>

      <p className="checkout-note">Shipping &amp; taxes calculated at checkout</p>

      <motion.button
        className="checkout-btn"
        onClick={handleCheckout}
        disabled={itemCount === 0 || loading}
        whileHover={itemCount > 0 && !loading ? { scale: 1.02 } : {}}
        whileTap={itemCount > 0 && !loading ? { scale: 0.98 } : {}}
      >
        {loading ? (
          <span className="checkout-spinner" />
        ) : (
          'Check Out'
        )}
      </motion.button>
    </div>
  );
}
