import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

type Props = { children: ReactNode }

export function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  )
}
