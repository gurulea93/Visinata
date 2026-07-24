import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MEDIA } from '../constants'
import { Ornament } from './Ornament'
import './Atmosphere.css'

export function Atmosphere() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const letters = useTransform(scrollYProgress, [0.15, 0.6], ['0.5em', '0.16em'])

  return (
    <section className="atmosphere band" ref={ref} aria-labelledby="atmosphere-title">
      <motion.div className="band__media" style={{ y: imgY }}>
        <img src={MEDIA.orchardWide} alt="" aria-hidden="true" loading="lazy" />
      </motion.div>
      <div className="band__veil" aria-hidden="true" />

      <div className="atmosphere__inner">
        <motion.h2
          id="atmosphere-title"
          className="atmosphere__quote"
          style={{ letterSpacing: letters }}
        >
          Din livadă până în pahar
        </motion.h2>
        <Ornament />
        <p className="atmosphere__sub">
          Vișinata și Povești cu Zmeu te invită să redeschizi clipele de altădată, la masa celor
          dragi.
        </p>
      </div>
    </section>
  )
}
