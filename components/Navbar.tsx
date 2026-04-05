'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Briefcase, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home',         href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Services',     href: '/services' },
  { label: 'Contact',      href: '/contact' },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-[0_2px_24px_rgba(13,27,15,0.09)]'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        {/* Top accent strip — Kenya colors */}
        <div className="h-[3px] bg-gradient-to-r from-[#006B3C] via-[#FCD116] to-[#CE1126]" />

        <div className="container">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-9 h-9 bg-gradient-to-br from-[#006B3C] to-[#004D2A] rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <Briefcase size={17} color="white" strokeWidth={2.5} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FCD116] rounded-full border-2 border-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-[1.12rem] text-[#0D1B0F] tracking-tight">
                  Kazi<span className="text-[#006B3C]">Connect</span>
                </span>
                <span className="block text-[10px] font-semibold text-gray-400 tracking-widest uppercase leading-none">
                  Job Placement Agency
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-4 py-2 text-[14px] font-semibold rounded-lg transition-all duration-200 group ${
                    activeLink === link.href
                      ? 'text-[#006B3C]'
                      : 'text-gray-600 hover:text-[#006B3C] hover:bg-[#006B3C]/5'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-[2px] bg-gradient-to-r from-[#006B3C] to-[#FCD116] rounded-full transition-transform duration-250 origin-left ${
                      activeLink === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/apply"
                className="btn btn-crimson shine text-[13.5px] px-5 py-2.5"
              >
                Apply Now
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-95"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className={`transition-all duration-200 ${menuOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
                <Menu size={20} />
              </div>
              <div className={`transition-all duration-200 ${menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}>
                <X size={20} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100/80 px-5 pt-4 pb-6 shadow-xl">
            <nav className="flex flex-col gap-1 mb-5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMenuOpen(false); setActiveLink(link.href) }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 ${
                    activeLink === link.href
                      ? 'bg-[#E6F4ED] text-[#006B3C]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] active:scale-[0.98]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                    activeLink === link.href ? 'bg-[#FCD116]' : 'bg-gray-200'
                  }`} />
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="btn btn-crimson w-full justify-center shine text-[15px]"
            >
              Apply Now — Get Started
              <ArrowRight size={16} />
            </Link>

            {/* Quick contact in mobile menu */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-6">
              <a href="tel:+254700000000" className="text-xs text-gray-400 hover:text-[#006B3C] transition-colors font-medium">
                📞 +254 700 000 000
              </a>
              <a href="mailto:hello@kaziconnect.co.ke" className="text-xs text-gray-400 hover:text-[#006B3C] transition-colors font-medium">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
