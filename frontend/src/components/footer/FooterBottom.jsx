import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterBottom() {
  return (
    <div className="relative mx-auto mt-16 max-w-7xl border-t border-[#C47F6E]/20 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-[#8a5a4d]">
          © 2026 Miss Cheesecake. Crafted with love.
        </p>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-[#C47F6E]">
            {[
              'Shipping Policy',
              'Refund Policy',
              'Privacy Policy',
              'Terms of Service',
              'Accessibility',
            ].map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="relative transition-colors hover:text-[#a9614f] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
