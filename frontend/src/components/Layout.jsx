import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import noodle from '../assets/images/noodle_illustration.png';

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="relative bg-[#F6E0DE] min-h-screen">
      {isHome && (
        <img
          src={noodle}
          alt="Background noodle"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-5 z-0 pointer-events-none select-none"
        />
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="px-4 md:flex md:items-center md:justify-center sm:px-6 lg:px-8 py-4 ">
          <Navbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="relative bg-[#F6E0DE]">
          {isHome && (
            <img
              src={noodle}
              alt="Background noodle"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-5 z-0 pointer-events-none select-none"
            />
          )}
          <Footer />
        </footer>
      </div>
    </div>
  );
}