import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function EmptyCartState() {
  const { closeCart } = useCart();

  return (
    <motion.div
      className="empty-cart"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Illustrated empty cart SVG */}
      <motion.svg
        className="empty-cart-icon"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {/* Plate / base */}
        <ellipse cx="60" cy="95" rx="45" ry="8" fill="#F0D5C8" opacity="0.5" />
        {/* Cake dome */}
        <path
          d="M25 70 C25 40, 95 40, 95 70 L90 85 C90 88, 30 88, 30 85 Z"
          fill="#FCEDDE"
          stroke="#C8654E"
          strokeWidth="2"
        />
        {/* Cherry on top */}
        <circle cx="60" cy="40" r="8" fill="#FF6B6B" />
        <path
          d="M60 32 C62 24, 68 26, 65 32"
          stroke="#4CAF50"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Slice cut lines */}
        <line x1="60" y1="48" x2="60" y2="85" stroke="#C8654E" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="52" x2="50" y2="85" stroke="#C8654E" strokeWidth="1" opacity="0.2" />
        <line x1="80" y1="52" x2="70" y2="85" stroke="#C8654E" strokeWidth="1" opacity="0.2" />
        {/* Sparkle dots */}
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Your cart is empty
      </motion.h3>

      <motion.p
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
          className="empty-cart-cta"
          onClick={closeCart}
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </Link>
      </motion.div>
    </motion.div>
  );
}
