import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/misscheesecake_logo.avif';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Cheesecakes', to: '/cheesecakes' },
  { label: 'About us', to: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex md:w-[40%] md:h-[75px] items-center justify-between bg-[#FCEDDE] rounded-full px-4 py-2 lg:px-6 lg:py-0 border-2 border-[#FDFDFD] relative">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Miss Cheesecake Logo"
            className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full"
          />
        </Link>
        <span className="ml-3 text-[0.76em] text-[#FF6E6E] font-[emiken] lg:hidden">Miss Cheesecake</span>
      </div>

      <ul className="hidden lg:flex space-x-8 flex-1 justify-center">
        {navItems.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="text-[#C47F6E] text-lg font-[satoshi] font-medium hover:text-[#B0745A] transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Link
          to="/login"
          className="px-6 py-2 border border-[#C47F6E] rounded-full text-[#C47F6E] font-medium uppercase hover:bg-[#FDE7D8] transition-colors"
        >
          LOGIN
        </Link>
      </div>

      <button
        className="lg:hidden ml-auto"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C47F6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#FCEDDE] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C47F6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="space-y-8 text-center">
            {navItems.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block text-2xl text-[#C47F6E] font-[satoshi] hover:text-[#B0745A] transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-6 px-8 py-3 border border-[#C47F6E] rounded-full text-[#C47F6E] uppercase font-medium hover:bg-[#FDE7D8] transition-colors"
            >
              LOGIN
            </Link>
          </nav>
        </div>
      )}
    </nav>
)}