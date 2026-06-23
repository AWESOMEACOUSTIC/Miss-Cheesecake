import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SHIPPING_METHODS = [
  {
    id: 'standard',
    name: 'Standard Delivery',
    time: '5–7 business days',
    price: 49,
    priceLabel: '₹49',
  },
  {
    id: 'express',
    name: 'Express Delivery',
    time: '2–3 business days',
    price: 99,
    priceLabel: '₹99',
  },
  {
    id: 'same-day',
    name: 'Same Day (Jodhpur only)',
    time: 'Today',
    price: 149,
    priceLabel: '₹149',
  },
];

export default function ShippingMethod({ addressFilled, selected, onSelect }) {
  return (
    <div className="checkout-section">
      <div className="checkout-section-title">
        <span>Shipping method</span>
      </div>

      <AnimatePresence mode="wait">
        {!addressFilled ? (
          <motion.div
            key="placeholder"
            className="shipping-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Enter your shipping address to view available shipping methods
          </motion.div>
        ) : (
          <motion.div
            key="methods"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            {SHIPPING_METHODS.map((method) => (
              <div
                key={method.id}
                className={`shipping-option ${selected === method.id ? 'selected' : ''}`}
                onClick={() => onSelect(method.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelect(method.id)}
              >
                <div className="shipping-option-info">
                  <div className={`shipping-radio ${selected === method.id ? 'active' : ''}`} />
                  <div>
                    <div className="shipping-option-name">{method.name}</div>
                    <div className="shipping-option-time">{method.time}</div>
                  </div>
                </div>
                <span className="shipping-option-price">{method.priceLabel}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { SHIPPING_METHODS };
