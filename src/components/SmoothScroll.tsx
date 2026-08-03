import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type Props = { children: ReactNode }

export function SmoothScroll({ children }: Props) {
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduce(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  if (reduce) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.35,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
