import logo from '../assets/images/misscheesecake_logo.png' 

const navItems = ['Home', 'Cheesecakes', 'About us']

export default function Navbar() {
  return (
    <nav className="w-[692px] h-[75px] bg-[#FCEDDE] rounded-full mx-auto flex items-center px-6">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-[50px] h-[50px] rounded-full mr-8"
      />

      {/* Links */}
      <ul className="flex space-x-8 flex-1">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-[#C47F6E] text-lg font-medium hover:text-[#B0745A] transition-colors"
            >
              {item}
            </a>
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
