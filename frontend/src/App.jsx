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

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited');
    if (!hasVisited) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('visited', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {/* Loader overlays routes but doesn't prevent them from being mounted */}
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-50"
        >
          <Loader />
        </motion.div>
      )}

      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/signup" element={<AuthPage mode="signup" />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cheesecakes" element={<Cheesecakes />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </motion.div>
    </>
  );
}