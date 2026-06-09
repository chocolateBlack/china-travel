import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { track } from '@vercel/analytics/react'
import LogoMark from './LogoMark'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/china-map', label: 'China Map' },
  { path: '/travel-guide', label: 'Travel Guide' },
  { path: '/about', label: 'About Us' },
]

const destinationLinks = [
  { path: '/beijing', label: 'Beijing' },
  { path: '/chengdu', label: 'Chengdu' },
  { path: '/xinjiang', label: 'Xinjiang' },
  { path: '/zhangjiajie', label: 'Zhangjiajie' },
]

const whatsappLink = 'https://wa.me/8613810338903'
const emailLink = 'mailto:liqiuchi0108@gmail.com'

function trackContactClick(channel) {
  track('contact_click', {
    channel,
    location: 'navbar',
  })
}

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.55 2 2.08 6.43 2.08 11.87c0 1.75.47 3.46 1.35 4.96L2 22l5.32-1.39a10.05 10.05 0 0 0 4.72 1.19h.01c5.49 0 9.96-4.43 9.96-9.87C22 6.43 17.53 2 12.04 2Zm0 18.13h-.01a8.34 8.34 0 0 1-4.25-1.16l-.3-.18-3.15.82.84-3.05-.2-.31a8.14 8.14 0 0 1-1.26-4.38c0-4.52 3.73-8.2 8.32-8.2 2.22 0 4.31.86 5.88 2.41a8.13 8.13 0 0 1 2.44 5.82c.01 4.52-3.72 8.23-8.31 8.23Zm4.56-6.15c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.12-.12.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.36-.78-1.86-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.65 4.24 3.72.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}

function MailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 7 8 6 8-6" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsDestinationsOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const isDestinationActive = destinationLinks.some((link) => location.pathname === link.path)
  const navBg = scrolled || !isHome || isOpen
    ? 'bg-deep-blue/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <LogoMark className="h-9 w-9" />
            <span className="text-xl font-display font-bold text-white">
              China<span className="text-china-red">Travel</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={navLinks[0].path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-china-red-light ${
                location.pathname === navLinks[0].path
                  ? 'text-china-red-light'
                  : 'text-white/90'
              }`}
            >
              {navLinks[0].label}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsDestinationsOpen((open) => !open)}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-china-red-light ${
                  isDestinationActive
                    ? 'text-china-red-light'
                    : 'text-white/90'
                }`}
                aria-expanded={isDestinationsOpen}
                aria-haspopup="true"
              >
                Destinations
                <svg
                  className={`w-4 h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDestinationsOpen && (
                <div className="absolute left-1/2 top-full w-44 -translate-x-1/2 pt-3">
                  <div className="rounded-lg bg-white py-2 shadow-xl ring-1 ring-deep-blue/10">
                    {destinationLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2 text-sm font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'bg-warm-gray text-china-red'
                            : 'text-deep-blue hover:bg-warm-gray hover:text-china-red'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-china-red-light ${
                  location.pathname === link.path
                    ? 'text-china-red-light'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick('whatsapp')}
              aria-label="Open WhatsApp"
              title="WhatsApp"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-[#25D366] px-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1ebe5d] hover:shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={emailLink}
              onClick={() => trackContactClick('email')}
              aria-label="Send email"
              title="Email"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-sm font-semibold text-deep-blue shadow-sm transition-all duration-200 hover:bg-china-red-light hover:text-white hover:shadow-md"
            >
              <MailIcon className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-blue/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link
              to={navLinks[0].path}
              className={`block text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                location.pathname === navLinks[0].path
                  ? 'text-china-red-light bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/5'
              }`}
            >
              {navLinks[0].label}
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setIsDestinationsOpen((open) => !open)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  isDestinationActive
                    ? 'text-china-red-light bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={isDestinationsOpen}
              >
                <span>Destinations</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDestinationsOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {destinationLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-china-red-light bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-china-red-light bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick('whatsapp')}
              aria-label="Open WhatsApp"
              className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="w-4 h-4" />
              </span>
              <span>WhatsApp</span>
            </a>

            <a
              href={emailLink}
              onClick={() => trackContactClick('email')}
              aria-label="Send email"
              className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-deep-blue">
                <MailIcon className="w-4 h-4" />
              </span>
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
