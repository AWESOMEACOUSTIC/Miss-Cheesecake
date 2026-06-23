import React, { useState } from 'react'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

function SocialButton({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-full border border-[#C47F6E]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#C47F6E] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C47F6E] hover:bg-[#C47F6E] hover:text-white hover:shadow-md"
    >
      <Icon className="transition-transform duration-300 group-hover:scale-110" />
      <span>{label}</span>
    </a>
  )
}

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await new Promise((r) => setTimeout(r, 1200))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left font-[satoshi]">
      <div className="rounded-full bg-[#C47F6E] px-6 py-2 text-sm font-semibold tracking-wide text-white shadow-sm">
        Join the Miss Cheesecake Family
      </div>

      <p className="max-w-sm text-[#8a5a4d] font-[satoshi]">
        Get new launches, seasonal collections, exclusive offers, and
        behind-the-scenes sweetness straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            inputMode="email"
            aria-label="Email address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            className={`w-full rounded-full border bg-white px-5 py-3 text-[#5e3b32] outline-none transition-all duration-300 placeholder:text-[#C47F6E]/50 focus:ring-4 ${status === 'error'
              ? 'border-red-400 focus:ring-red-100'
              : 'border-[#C47F6E]/40 focus:border-[#C47F6E] focus:ring-[#C47F6E]/15'
              }`}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-[#C47F6E] px-7 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a9614f] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'loading' ? 'Joining…' : 'Subscribe'}
          </button>
        </div>

        <div className="mt-2 min-h-[1.25rem] text-sm" aria-live="polite">
          {status === 'error' && (
            <span className="text-red-500">
              Please enter a valid email address.
            </span>
          )}
          {status === 'success' && (
            <span className="text-[#C47F6E]">
              Welcome to the family! 🍰 Check your inbox.
            </span>
          )}
        </div>
      </form>

      {/* Social */}
      <div className="flex flex-wrap justify-center gap-3 md:justify-start">
        <SocialButton
          icon={FaInstagram}
          label="Instagram"
          href="https://www.instagram.com/__misscheesecake/"
        />
        <SocialButton icon={FaFacebookF} label="Facebook" href="#" />
        <SocialButton icon={FaTiktok} label="TikTok" href="#" />
      </div>
    </div>
  )
}
