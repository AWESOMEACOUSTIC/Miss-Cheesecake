import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function OrderSummary({ shippingCost, onApplyDiscount }) {
  const { items, subtotal, itemCount } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discountStatus, setDiscountStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;

    setDiscountStatus('loading');

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));

    if (discountCode.toUpperCase() === 'CHEESECAKE10') {
      const discount = subtotal * 0.1;
      setDiscountAmount(discount);
      setDiscountStatus('success');
      if (onApplyDiscount) onApplyDiscount(discount);
    } else {
      setDiscountStatus('error');
      setDiscountAmount(0);
      if (onApplyDiscount) onApplyDiscount(0);
    }
  };

  const shipping = shippingCost || 0;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="checkout-right-sticky">
      {/* Product list */}
      <div className="order-summary-items">
        {items.map((item) => (
          <div key={item.id} className="order-summary-item">
            <div className="order-summary-thumb">
              <img src={item.imageSrc} alt={item.title} />
              <span className="order-summary-badge">{item.quantity}</span>
            </div>
            <div className="order-summary-item-info">
              <div className="order-summary-item-title">{item.title}</div>
              <div className="order-summary-item-variant">{item.weight}</div>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={`${item.id}-${item.quantity}`}
                className="order-summary-item-price"
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                ₹{(item.numericPrice * item.quantity).toFixed(2)}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="discount-row">
        <input
          type="text"
          className="discount-input"
          placeholder="Discount code"
          value={discountCode}
          onChange={(e) => {
            setDiscountCode(e.target.value);
            if (discountStatus === 'error') setDiscountStatus(null);
          }}
        />
        <motion.button
          className="discount-apply-btn"
          onClick={handleApplyDiscount}
          disabled={discountStatus === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {discountStatus === 'loading' ? '...' : 'Apply'}
        </motion.button>
      </div>

      {discountStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: '0.8rem',
            color: '#4CAF50',
            marginTop: -12,
            marginBottom: 16,
            fontFamily: 'satoshi, sans-serif',
          }}
        >
          ✓ Discount applied — 10% off!
        </motion.p>
      )}

      {discountStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: '0.8rem',
            color: '#E74C3C',
            marginTop: -12,
            marginBottom: 16,
            fontFamily: 'satoshi, sans-serif',
          }}
        >
          Invalid discount code. Try CHEESECAKE10
        </motion.p>
      )}

      {/* Price Breakdown */}
      <div className="price-breakdown">
        <div className="price-row">
          <span>Subtotal · {itemCount} items</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={subtotal}
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              ₹{subtotal.toFixed(2)}
            </motion.span>
          </AnimatePresence>
        </div>

        {discountAmount > 0 && (
          <motion.div
            className="price-row"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{ color: '#4CAF50' }}
          >
            <span>Discount</span>
            <span>-₹{discountAmount.toFixed(2)}</span>
          </motion.div>
        )}

        <div className="price-row">
          <span>
            Shipping
            <span className="info-icon">ⓘ</span>
          </span>
          <span>
            {shipping > 0 ? `₹${shipping.toFixed(2)}` : 'Enter shipping address'}
          </span>
        </div>

        <div className="price-row total">
          <span>Total</span>
          <span>
            <span className="currency-label">INR</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={total}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                ₹{total.toFixed(2)}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>
    </div>
  );
}
