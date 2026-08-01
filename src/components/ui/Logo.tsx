interface LogoProps {
  className?: string
  /** Header: transparent background logo. Footer: full logo on white panel. */
  variant?: 'header' | 'footer' | 'default'
}

export default function Logo({ className = 'h-10 sm:h-11 md:h-12 w-auto', variant = 'default' }: LogoProps) {
  const src =
    variant === 'header'
      ? `${import.meta.env.BASE_URL}logo-header.png`
      : `${import.meta.env.BASE_URL}logo.png`

  const img = (
    <img
      src={src}
      alt="Thakur Consultancy"
      className={`${className} object-contain object-left`}
      width={220}
      height={48}
    />
  )

  if (variant === 'footer') {
    return <div className="inline-flex rounded-lg bg-white px-3 py-2">{img}</div>
  }

  return img
}
