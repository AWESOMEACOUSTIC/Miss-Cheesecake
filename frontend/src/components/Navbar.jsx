import { Link } from 'react-router-dom'
import logo from '../assets/images/misscheesecake_logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Cheesecakes', to: '/cheesecakes' },
  { label: 'About us', to: '/about' },
]

export default function Navbar() {
  return (
    <nav className="h-[75px] bg-[#FCEDDE] rounded-full flex items-center gap-x-8 px-6 border-2 border-[#FDFDFD]">
      <Link to="/">
        <img
          src={logo}
          alt="Miss Cheesecake Logo"
          className="w-[50px] h-[50px] rounded-full"
        />
      </Link>

      <ul className="flex space-x-8 flex-1">
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

      <button
        className="px-6 py-2 border border-[#C47F6E] rounded-full text-[#C47F6E] font-medium uppercase hover:bg-[#FDE7D8] transition-colors"
      >
        LOGIN
      </button>
    </nav>
  )
}
