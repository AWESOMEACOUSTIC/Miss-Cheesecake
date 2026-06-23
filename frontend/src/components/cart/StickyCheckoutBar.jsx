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
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    closeCart();
    navigate('/checkout');
  };

  return (
    <div className="sticky bottom-0 bg-[#FBF4EE] px-7 pt-5 pb-7 border-t border-[rgba(196,127,110,0.15)] z-10 max-md:px-5 max-md:pt-4 max-md:pb-6">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-[satoshi-bold] text-base text-[#2D1810]">Subtotal</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={subtotal}
            className="font-[satoshi-bold] text-[1.1rem] text-[#2D1810]"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            ₹{subtotal.toFixed(2)}
          </motion.span>
        </AnimatePresence>
      </div>

      <p className="font-[satoshi] text-[0.78rem] text-[#C47F6E] text-right mb-4">Shipping &amp; taxes calculated at checkout</p>

      <motion.button
        className="flex items-center justify-center gap-2 w-full py-4 px-8 border-none rounded-full bg-gradient-to-br from-[#E8A98F] to-[#C8654E] text-[#FCEDDE] font-[satoshi-bold] text-base tracking-[0.06em] uppercase cursor-pointer relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_20px_rgba(200,101,78,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,101,78,0.45)] active:translate-y-0 active:shadow-[0_2px_12px_rgba(200,101,78,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none btn-sheen"
        onClick={handleCheckout}
        disabled={itemCount === 0 || loading}
        whileHover={itemCount > 0 && !loading ? { scale: 1.02 } : {}}
        whileTap={itemCount > 0 && !loading ? { scale: 0.98 } : {}}
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-[rgba(252,237,222,0.4)] border-t-[#FCEDDE] rounded-full animate-spin" />
        ) : (
          'Check Out'
        )}
      </motion.button>
    </div>
  );
}
