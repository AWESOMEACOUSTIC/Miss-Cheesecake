import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function EmptyCartState() {
  const { closeCart } = useCart();

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-15 px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        className="w-[120px] h-[120px] mb-6 opacity-70"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <ellipse cx="60" cy="95" rx="45" ry="8" fill="#F0D5C8" opacity="0.5" />
        <path d="M25 70 C25 40, 95 40, 95 70 L90 85 C90 88, 30 88, 30 85 Z" fill="#FCEDDE" stroke="#C8654E" strokeWidth="2" />
        <circle cx="60" cy="40" r="8" fill="#FF6B6B" />
        <path d="M60 32 C62 24, 68 26, 65 32" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="60" y1="48" x2="60" y2="85" stroke="#C8654E" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="52" x2="50" y2="85" stroke="#C8654E" strokeWidth="1" opacity="0.2" />
        <line x1="80" y1="52" x2="70" y2="85" stroke="#C8654E" strokeWidth="1" opacity="0.2" />
        <circle cx="35" cy="30" r="2" fill="#E8A98F" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="85" cy="25" r="1.5" fill="#FF6B6B" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="55" r="2" fill="#E8A98F" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
      </motion.svg>

      <motion.h3
        className="font-[emiken] text-[1.6rem] text-[#FF6B6B] m-0 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Your cart is empty
      </motion.h3>

      <motion.p
        className="font-[satoshi] text-[0.95rem] text-[#C47F6E] m-0 mb-7 max-w-[260px] leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Looks like you haven't added any cheesecakes yet. Let's fix that!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Link
          to="/cheesecakes"
          className="inline-flex items-center gap-2 py-3.5 px-9 rounded-full border-[1.5px] border-[#C8654E] bg-transparent text-[#C8654E] font-[satoshi-bold] text-[0.95rem] tracking-[0.04em] uppercase cursor-pointer no-underline transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#C8654E] hover:text-[#FCEDDE] hover:shadow-[0_6px_24px_rgba(200,101,78,0.35)] hover:-translate-y-0.5"
          onClick={closeCart}
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </Link>
      </motion.div>
    </motion.div>
  );
}
