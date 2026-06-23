import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SHIPPING_METHODS = [
  { id: 'standard', name: 'Standard Delivery', time: '5–7 business days', price: 49, priceLabel: '₹49' },
  { id: 'express', name: 'Express Delivery', time: '2–3 business days', price: 99, priceLabel: '₹99' },
  { id: 'same-day', name: 'Same Day (Jodhpur only)', time: 'Today', price: 149, priceLabel: '₹149' },
];

export default function ShippingMethod({ addressFilled, selected, onSelect }) {
  return (
    <div className="mb-9">
      <div className="font-[satoshi-bold] text-[1.15rem] text-[#2D1810] mb-[18px] flex items-center justify-between">
        <span>Shipping method</span>
      </div>

      <AnimatePresence mode="wait">
        {!addressFilled ? (
          <motion.div
            key="placeholder"
            className="p-5 bg-[#FDF7F2] border-[1.5px] border-dashed border-[rgba(196,127,110,0.25)] rounded-[14px] text-center text-[#C47F6E] text-[0.88rem]"
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
                className={`flex items-center justify-between py-4 px-5 border-[1.5px] rounded-[14px] mb-2.5 cursor-pointer transition-all duration-300 bg-white
                  ${selected === method.id
                    ? 'border-[#C8654E] bg-[#FDF7F2]'
                    : 'border-[rgba(196,127,110,0.2)] hover:border-[#C8654E] hover:shadow-[0_2px_12px_rgba(200,101,78,0.08)]'
                  }`}
                onClick={() => onSelect(method.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelect(method.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-[18px] h-[18px] rounded-full border-2 border-[#C47F6E] relative shrink-0 ${selected === method.id ? 'radio-dot' : ''}`} />
                  <div>
                    <div className="font-[satoshi] text-[0.9rem] text-[#2D1810]">{method.name}</div>
                    <div className="text-[0.78rem] text-[#C47F6E]">{method.time}</div>
                  </div>
                </div>
                <span className="font-[satoshi-bold] text-[0.95rem] text-[#2D1810]">{method.priceLabel}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { SHIPPING_METHODS };
