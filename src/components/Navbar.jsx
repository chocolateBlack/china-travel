import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/travel-guide', label: 'Travel Guide' },
  { path: '/about', label: 'About' },
]

const destinationLinks = [
  { path: '/beijing', label: 'Beijing' },
  { path: '/chengdu', label: 'Chengdu' },
]

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
            <span className="text-2xl">🏯</span>
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
          </div>
        </div>
      )}
    </nav>
  )
}
