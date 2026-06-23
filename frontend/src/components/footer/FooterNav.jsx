import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const logo = 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/misscheesecake_logo.avif'

function NavGroup({ title, links }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C47F6E]/60">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="group relative inline-block text-[15px] text-[#C47F6E] transition-all duration-300 hover:translate-x-0.5 hover:text-[#a9614f]"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FooterNav() {
  return (
    <div className="flex flex-col items-center space-y-9 md:items-start">
      <Link to="/" aria-label="Miss Cheesecake home">
        <img
          src={logo}
          alt="Miss Cheesecake"
          className="h-24 w-24 rounded-full shadow-sm transition-transform duration-500 hover:scale-105"
        />
      </Link>

      <div className="flex gap-16 text-center md:text-left">
        <NavGroup
          title="Shop"
          links={[
            { label: 'Shop All', to: '/cheesecakes' },
            { label: 'Cheesecakes', to: '/cheesecakes' },
            { label: 'Gift Boxes', to: '/gift-boxes' },
            { label: 'Seasonal', to: '/seasonal' },
          ]}
        />
        <NavGroup
          title="Company"
          links={[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Location', to: '/locations' },
            { label: 'Contact', to: '/contact' },
          ]}
        />
      </div>

      {/* contact details preserved from original */}
      <div className="flex flex-col space-y-2 text-sm text-[#C47F6E]">
        <a
          href="tel:+919886791733"
          className="inline-flex items-center gap-2 transition-colors hover:text-[#a9614f]"
        >
          <FaPhoneAlt /> (+91) 9886791733
        </a>
        <a
          href="mailto:misscheesecake@gmail.com"
          className="inline-flex items-center gap-2 transition-colors hover:text-[#a9614f]"
        >
          <FaEnvelope /> misscheesecake@gmail.com
        </a>
      </div>
    </div>
  )
}
