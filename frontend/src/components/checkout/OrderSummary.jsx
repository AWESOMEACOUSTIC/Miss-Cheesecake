import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function OrderSummary({ shippingCost, onApplyDiscount }) {
  const { items, subtotal, itemCount } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discountStatus, setDiscountStatus] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;
    setDiscountStatus('loading');
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
    <div className="sticky top-6">
      {/* Product list */}
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <img src={item.imageSrc} alt={item.title} className="w-14 h-14 object-contain rounded-xl bg-[#FDF2EA] p-1.5" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C8654E] text-white text-[0.68rem] font-[satoshi-bold] flex items-center justify-center">{item.quantity}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-[satoshi] text-[0.88rem] text-[#2D1810] whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</div>
              <div className="text-[0.78rem] text-[#C47F6E]">{item.weight}</div>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={`${item.id}-${item.quantity}`}
                className="font-[satoshi-bold] text-[0.9rem] text-[#2D1810] shrink-0"
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
      <div className="flex gap-2.5 mb-6">
        <input
          type="text"
          className="flex-1 py-3 px-4 border-[1.5px] border-[rgba(196,127,110,0.25)] rounded-xl bg-white font-[satoshi] text-[0.88rem] text-[#2D1810] outline-none transition-colors duration-300 focus:border-[#C8654E]"
          placeholder="Discount code"
          value={discountCode}
          onChange={(e) => {
            setDiscountCode(e.target.value);
            if (discountStatus === 'error') setDiscountStatus(null);
          }}
        />
        <motion.button
          className="py-3 px-6 border-[1.5px] border-[#C8654E] rounded-xl bg-transparent text-[#C8654E] font-[satoshi-bold] text-[0.88rem] cursor-pointer transition-all duration-300 whitespace-nowrap hover:bg-[#C8654E] hover:text-[#FCEDDE]"
          onClick={handleApplyDiscount}
          disabled={discountStatus === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {discountStatus === 'loading' ? '...' : 'Apply'}
        </motion.button>
      </div>

      {discountStatus === 'success' && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[0.8rem] text-[#4CAF50] -mt-3 mb-4 font-[satoshi]">
          ✓ Discount applied — 10% off!
        </motion.p>
      )}

      {discountStatus === 'error' && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[0.8rem] text-[#E74C3C] -mt-3 mb-4 font-[satoshi]">
          Invalid discount code. Try CHEESECAKE10
        </motion.p>
      )}

      {/* Price Breakdown */}
      <div className="border-t border-[rgba(196,127,110,0.15)] pt-5">
        <div className="flex justify-between items-center mb-2.5 text-[0.9rem] text-[#5A3A2E]">
          <span>Subtotal · {itemCount} items</span>
          <AnimatePresence mode="wait">
            <motion.span key={subtotal} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -6, opacity: 0 }} transition={{ duration: 0.25 }}>
              ₹{subtotal.toFixed(2)}
            </motion.span>
          </AnimatePresence>
        </div>

        {discountAmount > 0 && (
          <motion.div className="flex justify-between items-center mb-2.5 text-[0.9rem] text-[#4CAF50]" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
            <span>Discount</span>
            <span>-₹{discountAmount.toFixed(2)}</span>
          </motion.div>
        )}

        <div className="flex justify-between items-center mb-2.5 text-[0.9rem] text-[#5A3A2E]">
          <span>
            Shipping
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#C47F6E] text-[0.6rem] text-[#C47F6E] ml-1 cursor-help">ⓘ</span>
          </span>
          <span>{shipping > 0 ? `₹${shipping.toFixed(2)}` : 'Enter shipping address'}</span>
        </div>

        <div className="flex justify-between items-center font-[satoshi-bold] text-[1.1rem] text-[#2D1810] mt-3 pt-3 border-t border-[rgba(196,127,110,0.15)]">
          <span>Total</span>
          <span>
            <span className="text-[0.72rem] text-[#C47F6E] mr-1">INR</span>
            <AnimatePresence mode="wait">
              <motion.span key={total} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -6, opacity: 0 }} transition={{ duration: 0.25 }} className="inline-block">
                ₹{total.toFixed(2)}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>
    </div>
  );
}
