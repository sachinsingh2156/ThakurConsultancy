import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import type { NavItem, NavVariant } from '../../types/navigation'
import MaterialIcon from '../ui/MaterialIcon'

interface NavbarProps {
  activeItem: NavItem
  variant?: NavVariant
  ctaLabel?: string
}

const serviceLinks = [
  { to: '/services/hr-compliance', label: 'HR & Compliance' },
  { to: '/services/accounting-tax', label: 'Accounting & Tax' },
  { to: '/services/audit-certifications', label: 'Audit & Certifications' },
]

const navLinks: { key: NavItem; to: string; label: string }[] = [
  { key: 'home', to: '/', label: 'Home' },
  { key: 'about', to: '/about', label: 'About Us' },
  { key: 'industries', to: '/industries', label: 'Industries' },
  { key: 'process', to: '/process', label: 'Process' },
  { key: 'blog', to: '/blog', label: 'Blog' },
  { key: 'faq', to: '/faq', label: 'FAQ' },
  { key: 'contact', to: '/contact', label: 'Contact' },
]

function linkClass(active: boolean) {
  return active
    ? 'text-primary font-bold border-b-2 border-secondary font-label-md text-label-md py-1 transition-all whitespace-nowrap'
    : 'text-on-surface-variant hover:text-primary font-label-md text-label-md py-1 transition-colors whitespace-nowrap'
}

export default function Navbar({ activeItem, variant = 'default', ctaLabel = 'Get Started' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  useNavbarScroll()

  const closeMenu = () => setMobileOpen(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300 border-b border-white/20 shadow-[0_4px_30px_rgba(0,45,114,0.08)] py-3 md:py-4">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto gap-4">
        <Link
          to="/"
          className="font-headline-md text-base sm:text-headline-sm lg:text-headline-md font-bold text-primary tracking-tight shrink-0"
          onClick={closeMenu}
        >
          <span className="hidden xs:inline">Thakur Consultancy</span>
          <span className="xs:hidden">Thakur</span>
        </Link>

        <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.key} to={link.to} className={linkClass(activeItem === link.key)}>
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 font-label-md text-label-md py-1 transition-colors whitespace-nowrap ${
                activeItem === 'services'
                  ? 'text-primary font-bold border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Services <MaterialIcon icon="expand_more" className="text-[18px]" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-surface border border-outline-variant/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-2">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 text-label-md text-on-surface-variant hover:bg-primary-container/10 hover:text-primary rounded-md transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link key={link.key} to={link.to} className={linkClass(activeItem === link.key)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto xl:ml-0">
          {variant === 'services' && (
            <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 text-on-surface-variant">
              <MaterialIcon icon="search" className="mr-2" />
              <input
                className="bg-transparent border-none focus:ring-0 text-label-md w-32 xl:w-48"
                placeholder="Search services..."
                type="text"
              />
            </div>
          )}

          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-primary text-on-primary px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-label-md text-label-sm lg:text-label-md hover:bg-primary/90 transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            className="xl:hidden text-primary p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <MaterialIcon icon={mobileOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-outline-variant/20 bg-surface/98 backdrop-blur-md px-margin-mobile py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.to}
                className={`block py-3 px-2 font-label-md rounded-lg ${
                  activeItem === link.key
                    ? 'text-primary font-bold bg-primary/5'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 mt-3 border-t border-outline-variant/20">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2 px-2">Services</p>
            {serviceLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="block py-3 px-2 text-on-surface-variant font-label-md rounded-lg hover:bg-surface-container-low"
                onClick={closeMenu}
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="block w-full text-center bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md mt-4"
            onClick={closeMenu}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </nav>
  )
}
