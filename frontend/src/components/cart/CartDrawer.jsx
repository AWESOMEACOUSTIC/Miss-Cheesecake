import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import CartHeader from './CartHeader';
import ShippingProgress from './ShippingProgress';
import CartItemCard from './CartItemCard';
import EmptyCartState from './EmptyCartState';
import StickyCheckoutBar from './StickyCheckoutBar';
import './Cart.css';

export default function CartDrawer() {
  const { isOpen, closeCart, items, itemCount } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 34,
              mass: 0.8,
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <CartHeader />

            {itemCount > 0 ? (
              <>
                <div className="cart-drawer-body">
                  <ShippingProgress />

                  <div className="cart-items-container">
                    <AnimatePresence mode="popLayout">
                      {items.map((item) => (
                        <CartItemCard key={item.id} item={item} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                <StickyCheckoutBar />
              </>
            ) : (
              <div className="cart-drawer-body">
                <EmptyCartState />
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
