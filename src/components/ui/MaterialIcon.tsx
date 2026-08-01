import { type ReactNode } from 'react'

interface MaterialIconProps {
  icon: string
  className?: string
  filled?: boolean
}

export default function MaterialIcon({ icon, className = '', filled = false }: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {icon}
    </span>
  )
}

export function RevealSection({
  children,
  className = '',
  active = false,
}: {
  children: ReactNode
  className?: string
  active?: boolean
}) {
  return <section className={`reveal ${active ? 'active' : ''} ${className}`}>{children}</section>
}
