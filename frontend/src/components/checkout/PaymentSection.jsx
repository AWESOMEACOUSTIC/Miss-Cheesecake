import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FloatingInput from './FloatingInput';

const PAYMENT_OPTIONS = [
  { id: 'card', name: 'Credit card' },
  { id: 'paypal', name: 'PayPal' },
  { id: 'upi', name: 'UPI' },
];

export default function PaymentSection({ form, onChange, errors }) {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [sameAsBilling, setSameAsBilling] = useState(true);

  return (
    <div className="mb-9">
      <div className="font-[satoshi-bold] text-[1.15rem] text-[#2D1810] mb-[18px] flex items-center justify-between">
        <span>Payment</span>
      </div>

      <p className="text-[0.78rem] text-[#C47F6E] mb-4">All transactions are secure and encrypted.</p>

      <div className="flex flex-col gap-2.5">
        {PAYMENT_OPTIONS.map((method) => (
          <div key={method.id}>
            <div
              className={`flex items-center gap-3 py-4 px-5 border-[1.5px] cursor-pointer transition-all duration-300 bg-white
                ${selectedMethod === method.id
                  ? 'border-[#C8654E] bg-[#FDF7F2]'
                  : 'border-[rgba(196,127,110,0.2)] hover:border-[#C8654E]'
                }
                ${selectedMethod === method.id && method.id === 'card'
                  ? 'rounded-t-[14px] rounded-b-none'
                  : 'rounded-[14px]'
                }
              `}
              onClick={() => setSelectedMethod(method.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMethod(method.id)}
            >
              <div className={`w-[18px] h-[18px] rounded-full border-2 border-[#C47F6E] relative shrink-0 ${selectedMethod === method.id ? 'radio-dot' : ''}`} />
              <span className="flex-1 font-[satoshi] text-[0.9rem] text-[#2D1810]">{method.name}</span>

              {method.id === 'card' && (
                <div className="flex gap-1.5">
                  <span className="w-9 h-6 rounded flex items-center justify-center text-[0.6rem] font-bold text-white bg-[#1A1F71]">VISA</span>
                  <span className="w-9 h-6 rounded flex items-center justify-center text-[0.6rem] font-bold text-white bg-[#EB001B]">MC</span>
                  <span className="w-9 h-6 rounded flex items-center justify-center text-[0.6rem] font-bold text-white bg-[#006FCF]">AMEX</span>
                  <span className="text-[0.72rem] text-[#C47F6E] flex items-center">+5</span>
                </div>
              )}

              {method.id === 'paypal' && (
                <span className="font-[satoshi-bold] text-[0.9rem] text-[#003087] italic">PayPal</span>
              )}

              {method.id === 'upi' && (
                <span className="font-[satoshi-bold] text-[0.8rem] text-[#5F259F]">UPI</span>
              )}
            </div>

            <AnimatePresence>
              {selectedMethod === 'card' && method.id === 'card' && (
                <motion.div
                  className="p-5 -mt-px border-[1.5px] border-[rgba(196,127,110,0.2)] border-t-0 rounded-b-[14px] bg-white"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FloatingInput
                    label="Card number" name="cardNumber" value={form.cardNumber} onChange={onChange} error={errors.cardNumber} autoComplete="cc-number"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C47F6E" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    }
                  />
                  <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <FloatingInput label="Expiration date (MM / YY)" name="cardExpiry" value={form.cardExpiry} onChange={onChange} error={errors.cardExpiry} autoComplete="cc-exp" />
                    <FloatingInput
                      label="Security code" name="cardCvc" value={form.cardCvc} onChange={onChange} error={errors.cardCvc} autoComplete="cc-csc"
                      icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C47F6E" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      }
                    />
                  </div>
                  <FloatingInput label="Name on card" name="cardName" value={form.cardName} onChange={onChange} autoComplete="cc-name" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Billing Address */}
      <div className="mt-5">
        <label className="flex items-center gap-2.5 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={sameAsBilling}
            onChange={() => setSameAsBilling(!sameAsBilling)}
            className="w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-[#C47F6E] accent-[#C8654E] cursor-pointer"
          />
          <span className="font-[satoshi] text-[0.88rem] text-[#5A3A2E] select-none">
            Use shipping address as billing address
          </span>
        </label>

        <AnimatePresence>
          {!sameAsBilling && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <FloatingInput label="Billing address" name="billingAddress" value={form.billingAddress || ''} onChange={onChange} />
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                <FloatingInput label="City" name="billingCity" value={form.billingCity || ''} onChange={onChange} />
                <FloatingInput label="PIN code" name="billingZip" value={form.billingZip || ''} onChange={onChange} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
