import React from 'react';
import { motion } from 'motion/react';
import { Check, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderSuccess({ orderNumber }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] text-center py-10 px-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8A98F] to-[#C8654E] flex items-center justify-center mb-6 text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Check size={36} strokeWidth={3} />
      </motion.div>

      <motion.h2
        className="font-[emiken] text-[2rem] text-[#FF6B6B] m-0 mb-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Thank You!
      </motion.h2>

      <motion.p
        className="font-[satoshi] text-[0.95rem] text-[#5A3A2E] m-0 mb-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Your order has been placed successfully
      </motion.p>

      <motion.p
        className="font-[satoshi-bold] text-[1.1rem] text-[#C8654E] m-0 mb-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Order #{orderNumber}
      </motion.p>

      <motion.p
        className="font-[satoshi] text-[0.95rem] text-[#5A3A2E] m-0 mt-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Estimated delivery: 3–5 business days
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-3.5 px-9 rounded-full border-[1.5px] border-[#C8654E] bg-transparent text-[#C8654E] font-[satoshi-bold] text-[0.95rem] tracking-[0.04em] uppercase cursor-pointer no-underline transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#C8654E] hover:text-[#FCEDDE] hover:shadow-[0_6px_24px_rgba(200,101,78,0.35)] hover:-translate-y-0.5"
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </Link>
      </motion.div>
    </motion.div>
  );
}
