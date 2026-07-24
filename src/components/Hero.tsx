import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LEGACY, MEDIA, WHATSAPP_URL } from '../constants'
import { Ornament } from './Ornament'
import './Hero.css'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section className="hero" id="top" ref={ref} aria-labelledby="hero-brand">
      <motion.div className="hero__media" style={{ y: mediaY, scale: mediaScale }}>
        <img src={MEDIA.harvest} alt="" aria-hidden="true" />
      </motion.div>
      <div className="hero__veil" aria-hidden="true" />

      <motion.div className="hero__copy" style={{ y: copyY, opacity: copyOpacity }}>
        <motion.img
          className="hero__wordmark"
          src={LEGACY.scriptLogoAlt}
          alt=""
          aria-hidden="true"
          width={520}
          height={150}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        />
        <h1 id="hero-brand" className="sr-only">
          A fost odată… — licoare artizanale de vișină și zmeură
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Ornament className="hero__ornament" />
        </motion.div>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Licoare artizanale din Moldova · Vișinată &amp; Povești cu Zmeu
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <a className="btn" href="#gusturi">
            Descoperă gusturile
          </a>
          <a className="btn btn--solid" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Comandă
          </a>
        </motion.div>
      </motion.div>

      <a className="hero__scroll" href="#gusturi" aria-label="Derulează">
        <span />
      </a>
    </section>
  )
}
