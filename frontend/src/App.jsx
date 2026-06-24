import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cheesecakes from './pages/Cheesecakes';
import NotFound from './pages/NotFound';
import Loader from './pages/Loader';
import AuthPage from './pages/AuthPage';
import CheckoutPage from './pages/CheckoutPage';
import CartDrawer from './components/cart/CartDrawer';

export default function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('visited');
  });
  const location = useLocation();

  useEffect(() => {
    if (!loading) return;

    // The Loader's GSAP animation takes exactly 4.2s to complete
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 4200));

    // Wait for all custom fonts to be fully loaded
    const fontsReadyPromise = document.fonts ? document.fonts.ready : Promise.resolve();

    // Wait for the window load event (ensures images like the hero image are downloaded)
    const windowLoadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    // Wait for all conditions to be met before removing the loader
    Promise.all([minTimePromise, fontsReadyPromise, windowLoadPromise])
      .then(() => {
        setLoading(false);
        sessionStorage.setItem('visited', 'true');
      })
      .catch(() => {
        setLoading(false);
        sessionStorage.setItem('visited', 'true');
      });
  }, [loading]);

  return (
    <>
      <motion.div
        key="app"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/signup" element={<AuthPage mode="signup" />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cheesecakes" element={<Cheesecakes />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <CartDrawer />
      </motion.div>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
