import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MEDIA } from '../constants'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'
import './Story.css'

const LINES = [
  'Trei rețete, aceeași familie — fiecare sticlă își spune propria poveste.',
  'Vișină, zmeură și portocală: fructe culese cu grijă, macerate cu răbdare, îmbuteliate artizanal.',
  'Era odată Vișinată, Povești cu Zmeu și Ala Bala Portocala — tradiție în fiecare picătură.',
]

export function Story() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const rightY = useTransform(scrollYProgress, [0, 1], [-50, 70])

  return (
    <section className="story section band" id="poveste" ref={ref} aria-labelledby="story-title">
      <div className="story__backdrop" aria-hidden="true">
        <img src={MEDIA.orchardPath} alt="" loading="lazy" />
      </div>

      <motion.figure className="story__aside story__aside--left" style={{ y: leftY }} aria-hidden="true">
        <img src={MEDIA.harvest} alt="" loading="lazy" />
      </motion.figure>
      <motion.figure
        className="story__aside story__aside--right"
        style={{ y: rightY }}
        aria-hidden="true"
      >
        <img src={MEDIA.festiveStill} alt="" loading="lazy" />
      </motion.figure>

      <div className="section__inner">
        <Reveal className="section__head">
          <p className="eyebrow">A fost odată…</p>
          <h2 id="story-title" className="section__title">
            Povestea noastră
          </h2>
          <Ornament />
        </Reveal>

        <div className="story__lines">
          {LINES.map((line, index) => (
            <Reveal key={line} delay={index * 0.08}>
              <p>{line}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="story__signature script">Familia din spatele fiecărei sticle</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
