import { useEffect } from 'react'

export function useNavbarScroll() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector('nav')
      if (!nav) return
      if (window.scrollY > 50) {
        nav.classList.add('py-2')
        nav.classList.remove('py-4')
      } else {
        nav.classList.add('py-4')
        nav.classList.remove('py-2')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
