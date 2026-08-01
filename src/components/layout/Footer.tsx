import { Link } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'

export default function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary border-t border-outline-variant/30 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
        <div className="space-y-6">
          <div className="font-headline-sm text-headline-sm text-secondary-fixed">Thakur Consultancy</div>
          <p className="text-tertiary-fixed-dim/70 text-body-md">
            New Delhi&apos;s premier partner for strategic HR operations and rigorous compliance management since
            2009.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary-fixed/20 transition-colors"
              href="#"
            >
              <MaterialIcon icon="public" className="text-secondary-fixed" />
            </a>
            <Link
              to="/contact"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary-fixed/20 transition-colors"
            >
              <MaterialIcon icon="mail" className="text-secondary-fixed" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Services</h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/services/hr-compliance"
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
              >
                HR Outsourcing
              </Link>
            </li>
            <li>
              <Link
                to="/services/hr-compliance"
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
              >
                Statutory Compliance
              </Link>
            </li>
            <li>
              <Link
                to="/services/hr-compliance"
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
              >
                Payroll Management
              </Link>
            </li>
            <li>
              <Link
                to="/services/accounting-tax"
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
              >
                GST & Income Tax
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-colors underline decoration-transparent hover:decoration-secondary"
                href="#"
              >
                Compliance Standards
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Contact Us</h4>
          <address className="not-italic text-tertiary-fixed-dim/70 space-y-4">
            <p className="flex gap-2">
              <MaterialIcon icon="location_on" className="text-secondary-fixed" />
              Connaught Place, New Delhi 110001
            </p>
            <p className="flex gap-2">
              <MaterialIcon icon="phone" className="text-secondary-fixed" />
              +91 11 2341 XXXX
            </p>
            <p className="flex gap-2">
              <MaterialIcon icon="schedule" className="text-secondary-fixed" />
              Mon - Sat: 10:00 - 18:00
            </p>
          </address>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-tertiary-fixed-dim/50 text-label-sm font-label-md">
          © 2024 Thakur Consultancy. All rights reserved. ISO 9001 Certified. New Delhi Office: Connaught Place,
          New Delhi 110001.
        </p>
      </div>
    </footer>
  )
}
