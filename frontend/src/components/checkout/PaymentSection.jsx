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
    <div className="checkout-section">
      <div className="checkout-section-title">
        <span>Payment</span>
      </div>

      <p className="payment-note">All transactions are secure and encrypted.</p>

      <div className="payment-methods">
        {PAYMENT_OPTIONS.map((method) => (
          <div key={method.id}>
            <div
              className={`payment-method-option ${selectedMethod === method.id ? 'selected' : ''}`}
              onClick={() => setSelectedMethod(method.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMethod(method.id)}
              style={
                selectedMethod === method.id && method.id === 'card'
                  ? { borderRadius: '14px 14px 0 0' }
                  : {}
              }
            >
              <div className={`shipping-radio ${selectedMethod === method.id ? 'active' : ''}`} />
              <span className="payment-method-name">{method.name}</span>

              {method.id === 'card' && (
                <div className="payment-card-icons">
                  <span className="payment-card-icon" style={{ background: '#1A1F71' }}>VISA</span>
                  <span className="payment-card-icon" style={{ background: '#EB001B' }}>MC</span>
                  <span className="payment-card-icon" style={{ background: '#006FCF' }}>AMEX</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#C47F6E',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    +5
                  </span>
                </div>
              )}

              {method.id === 'paypal' && (
                <span
                  style={{
                    fontFamily: 'satoshi-bold, sans-serif',
                    fontSize: '0.9rem',
                    color: '#003087',
                    fontStyle: 'italic',
                  }}
                >
                  PayPal
                </span>
              )}

              {method.id === 'upi' && (
                <span
                  style={{
                    fontFamily: 'satoshi-bold, sans-serif',
                    fontSize: '0.8rem',
                    color: '#5F259F',
                  }}
                >
                  UPI
                </span>
              )}
            </div>

            {/* Card form - only show when card is selected */}
            <AnimatePresence>
              {selectedMethod === 'card' && method.id === 'card' && (
                <motion.div
                  className="card-form-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FloatingInput
                    label="Card number"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={onChange}
                    error={errors.cardNumber}
                    autoComplete="cc-number"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C47F6E" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    }
                  />

                  <div className="input-row-2">
                    <FloatingInput
                      label="Expiration date (MM / YY)"
                      name="cardExpiry"
                      value={form.cardExpiry}
                      onChange={onChange}
                      error={errors.cardExpiry}
                      autoComplete="cc-exp"
                    />
                    <FloatingInput
                      label="Security code"
                      name="cardCvc"
                      value={form.cardCvc}
                      onChange={onChange}
                      error={errors.cardCvc}
                      autoComplete="cc-csc"
                      icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C47F6E" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      }
                    />
                  </div>

                  <FloatingInput
                    label="Name on card"
                    name="cardName"
                    value={form.cardName}
                    onChange={onChange}
                    autoComplete="cc-name"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Billing Address */}
      <div style={{ marginTop: 20 }}>
        <label className="checkout-checkbox-group">
          <input
            type="checkbox"
            checked={sameAsBilling}
            onChange={() => setSameAsBilling(!sameAsBilling)}
            className="checkout-checkbox"
          />
          <span className="checkout-checkbox-label">
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
              style={{ overflow: 'hidden' }}
            >
              <FloatingInput
                label="Billing address"
                name="billingAddress"
                value={form.billingAddress || ''}
                onChange={onChange}
              />
              <div className="input-row-2">
                <FloatingInput
                  label="City"
                  name="billingCity"
                  value={form.billingCity || ''}
                  onChange={onChange}
                />
                <FloatingInput
                  label="PIN code"
                  name="billingZip"
                  value={form.billingZip || ''}
                  onChange={onChange}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
