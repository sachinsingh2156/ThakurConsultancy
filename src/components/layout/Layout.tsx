import { type ReactNode } from 'react'
import type { NavItem, NavVariant } from '../../types/navigation'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
  activeItem: NavItem
  variant?: NavVariant
  ctaLabel?: string
}

export default function Layout({ children, activeItem, variant, ctaLabel }: LayoutProps) {
  return (
    <>
      <Navbar activeItem={activeItem} variant={variant} ctaLabel={ctaLabel} />
      {children}
      <Footer />
    </>
  )
}
