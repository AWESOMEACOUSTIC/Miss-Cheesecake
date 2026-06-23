import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer/Footer';
const noodle = "https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/noodle_illustration.avif?updatedAt=1782154931879&tr=w-1000";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="relative bg-[#F6E0DE] min-h-screen">
      <img
        src={noodle}
        alt="Background noodle"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-5 z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="px-4 md:flex md:items-center md:justify-center sm:px-6 lg:px-8 py-4 ">
          <Navbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}