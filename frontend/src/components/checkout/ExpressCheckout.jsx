import React from 'react';
import { motion } from 'motion/react';

export default function ExpressCheckout() {
  return (
    <div>
      <p
        style={{
          fontFamily: 'satoshi, sans-serif',
          fontSize: '0.82rem',
          color: '#C47F6E',
          textAlign: 'center',
          marginBottom: 14,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        Express checkout
      </p>

      <div className="express-checkout-btns">
        <motion.button
          className="express-btn gpay"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.992 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#2D1810"/>
          </svg>
          Google Pay
        </motion.button>

        <motion.button
          className="express-btn paypal"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#003087">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
          </svg>
          PayPal
        </motion.button>

        <motion.button
          className="express-btn applepay"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="16" height="18" viewBox="0 0 17 20" fill="#FFFFFF">
            <path d="M13.543 10.507c.02 2.217 1.946 2.954 1.967 2.963-.016.052-.307 1.053-1.014 2.086-.61.893-1.244 1.782-2.242 1.8-.981.019-1.296-.582-2.418-.582s-1.473.563-2.4.6c-.963.036-1.697-.965-2.313-1.855C3.88 13.744 2.887 10.892 4.15 8.961c.627-.958 1.748-1.566 2.965-1.582.946-.018 1.838.636 2.416.636.577 0 1.66-.787 2.8-.671.477.02 1.815.193 2.673 1.452-.069.043-1.595.932-1.579 2.78l.118-.069zM11.174 4.362c.512-.62.857-1.48.763-2.338-.738.03-1.631.492-2.16 1.11-.474.55-.889 1.428-.778 2.271.824.064 1.664-.418 2.175-1.043z"/>
          </svg>
          Apple Pay
        </motion.button>
      </div>

      <div className="checkout-divider">OR</div>
    </div>
  );
}
