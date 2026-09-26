import { useEffect } from 'react'

export function useModalFocus({ active, initialFocusRef, onEscape }) {
  useEffect(() => {
    if (!active) return undefined
    const prior = document.activeElement
    const frame = requestAnimationFrame(() => initialFocusRef.current?.focus())
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); onEscape(); return }
      if (event.key !== 'Tab') return
      const controls = [...document.querySelectorAll('.photo-tour [data-tour-focusable]')]
      const first = controls[0]; const last = controls.at(-1)
      if (!first) return
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => { cancelAnimationFrame(frame); document.removeEventListener('keydown', onKeyDown); if (prior instanceof HTMLElement) prior.focus() }
  }, [active, initialFocusRef, onEscape])
}
