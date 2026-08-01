import { useEffect } from 'react'

export function useFaqInteractions() {
  useEffect(() => {
    const searchInput = document.querySelector<HTMLInputElement>('input[type="text"]')
    const categoryButtons = document.querySelectorAll('aside button')

    const onFocus = () => searchInput?.parentElement?.classList.add('ring-2', 'ring-primary/20')
    const onBlur = () => searchInput?.parentElement?.classList.remove('ring-2', 'ring-primary/20')

    searchInput?.addEventListener('focus', onFocus)
    searchInput?.addEventListener('blur', onBlur)

    categoryButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        categoryButtons.forEach((b) => {
          b.classList.remove('bg-secondary-container', 'text-on-secondary-container', 'font-bold')
          b.classList.add('text-on-surface-variant')
        })
        btn.classList.add('bg-secondary-container', 'text-on-secondary-container', 'font-bold')
        btn.classList.remove('text-on-surface-variant')
      })
    })

    return () => {
      searchInput?.removeEventListener('focus', onFocus)
      searchInput?.removeEventListener('blur', onBlur)
    }
  }, [])
}

export function toggleAccordion(button: HTMLButtonElement) {
  const item = button.parentElement
  if (!item) return
  item.classList.toggle('active')
}
