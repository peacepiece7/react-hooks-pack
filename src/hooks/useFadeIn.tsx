import { useEffect, useRef } from 'react'

/**
 * @description React 18의 automatic batching으로 최소 delay 100ms가 주어집니다.
 */
export function useFadeIn<T extends HTMLElement>(duration = 0, delay = 100) {
  const ref = useRef<T>(null)

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = '1'
        ref.current.style.transition = `opacity ${duration}s ease-in-out`
      }
    }, delay)
  }, [])

  return {
    ref,
    style: { opacity: '0' },
  }
}
