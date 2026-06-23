import React from 'react';
import { motion } from 'motion/react';
import { Check, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderSuccess({ orderNumber }) {
  return (
    <motion.div
      className="order-success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="success-checkmark"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Check size={36} strokeWidth={3} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Thank You!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Your order has been placed successfully
      </motion.p>

      <motion.p
        className="order-number"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Order #{orderNumber}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{ marginTop: 8 }}
      >
        Estimated delivery: 3–5 business days
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{ marginTop: 32 }}
      >
        <Link
          to="/"
          className="empty-cart-cta"
          style={{ textDecoration: 'none' }}
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </Link>
      </motion.div>
    </motion.div>
  );
}
