import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import noodle from '../assets/images/noodle_illustration.png'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'   

  return (
    <div className="relative bg-[#F6E0DE] min-h-screen">
      {isHome && (
        <img
          src={noodle}
          alt="Background noodle"
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
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="px-[1vw] py-[2.02vw] flex justify-center">
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
          )}
          <Footer />
        </footer>
      </div>
    </div>
  )
}
