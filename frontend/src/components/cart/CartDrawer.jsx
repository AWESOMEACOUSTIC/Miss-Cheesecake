import React, { useEffect, useRef, useCallback } from 'react';
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
  const drawerRef = useRef(null);

  // Prevent scroll events from leaking out to Lenis smooth scroll
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('lenis-stop'));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('lenis-start'));
    }
    return () => {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('lenis-start'));
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) closeCart();
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
            className="fixed inset-0 bg-[rgba(30,20,16,0.45)] backdrop-blur-[4px] z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            ref={drawerRef}
            className="fixed top-0 right-0 bottom-0 w-[38%] max-w-[520px] min-w-[360px] bg-[#FBF4EE] z-[999] flex flex-col shadow-[-12px_0_60px_rgba(120,60,40,0.12)] overflow-hidden max-md:w-full max-md:min-w-0 max-md:max-w-none max-lg:w-[55%] max-lg:min-w-[340px]"
            style={{ touchAction: 'pan-y', overscrollBehavior: 'contain' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34, mass: 0.8 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            onWheel={stopPropagation}
            onTouchStart={stopPropagation}
            onTouchMove={stopPropagation}
          >
            <CartHeader />

            {itemCount > 0 ? (
              <>
                <div className="flex-1 overflow-y-auto overflow-x-hidden px-7 max-md:px-5 cart-scrollbar" style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}>
                  <ShippingProgress />
                  <div className="flex flex-col gap-4 pb-5">
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
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-7 max-md:px-5 cart-scrollbar" style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}>
                <EmptyCartState />
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
