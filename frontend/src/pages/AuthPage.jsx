// src/pages/AuthPage.jsx
import React from 'react'
import sharktank from "../assets/images/Sharktank.avif"
import noodle from '../assets/images/noodle_illustration.avif'
import logo from "../assets/images/misscheesecake_logo.avif"
import AuthForm from '../components/AuthForm'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function AuthPage({ mode }) {
  const isLogin = mode === 'login'

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left image half */}
      <div className="md:w-1/2 w-full h-80 md:h-full bg-gray-100 flex items-center justify-center relative">
        <img
          src={sharktank}
          alt="sharktank Background"
          className="w-full h-full object-cover md:object-left"
        />
      </div>

      {/* Right form half */}
      <motion.div
        className="md:w-1/2 relative w-full bg-[#F6E0DE] flex flex-col justify-center items-center px-6 md:px-10 py-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Noodle background */}
        <img
          src={noodle}
          alt="Noodle Illustration"
          className="
            absolute inset-0
            w-full h-full
            object-cover object-center
            opacity-5
            z-0
            pointer-events-none
            select-none
          "
        />

        {/* Back button */}
        <Link
          to="/"
          className="absolute top-4 left-4 z-20 text-gray-700 hover:text-gray-900"
        >
          <FiArrowLeft size={24} />
        </Link>

        {/* Logo + form */}
        <div className="w-full max-w-md z-10">
          <img src={logo} alt="Logo" className="w-26 h-26 mb-6" />

          <h5 className="text-black mb-2 font-[saans] text-2xl">
            {isLogin ? 'Log In' : 'Sign Up'}
          </h5>

          <AuthForm mode={mode} />
        </div>
      </motion.div>
    </div>
  )
}
