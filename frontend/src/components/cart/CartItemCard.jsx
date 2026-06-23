import React from 'react';
import { motion } from 'motion/react';
import QuantitySelector from './QuantitySelector';
import { useCart } from '../../context/CartContext';

export default function CartItemCard({ item }) {
  const { removeItem } = useCart();

  return (
    <motion.div
      className="cart-item-card"
      layout
      initial={{ opacity: 0, x: 40, height: 0 }}
      animate={{ opacity: 1, x: 0, height: 'auto' }}
      exit={{
        opacity: 0,
        x: -20,
        height: 0,
        padding: 0,
        margin: 0,
        overflow: 'hidden',
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        height: { duration: 0.3, delay: 0.1 },
      }}
    >
      <div className="cart-item-image-wrapper">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="cart-item-image"
          loading="lazy"
        />
      </div>

      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-variant">{item.weight}</p>

        <div className="cart-item-actions">
          <QuantitySelector id={item.id} quantity={item.quantity} />

          <button
            className="cart-remove-btn"
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.title} from cart`}
          >
            Remove
          </button>
        </div>
      </div>

      <motion.span
        className="cart-item-price"
        key={`${item.id}-${item.quantity}`}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        ₹{item.numericPrice * item.quantity}
      </motion.span>
    </motion.div>
  );
}
