import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LEGACY, MEDIA, TELEGRAM_LABEL, TELEGRAM_URL } from '../constants'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'
import './Gift.css'

export function Gift() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section className="gift band" id="cadou" ref={ref} aria-labelledby="gift-title">
      <motion.div className="band__media" style={{ y: bgY }}>
        <img src={MEDIA.festiveHands} alt="" aria-hidden="true" loading="lazy" />
      </motion.div>
      <div className="band__veil" aria-hidden="true" />

      <div className="gift__inner">
        <Reveal className="gift__copy">
          <img
            className="gift__script"
            src={LEGACY.scriptLogoAlt}
            alt=""
            aria-hidden="true"
            width={220}
            height={62}
          />
          <h2 id="gift-title" className="section__title">
            Cadoul potrivit
          </h2>
          <Ornament />
          <p>
            Perfectă pentru a sărbători momente speciale, a încânta musafirii sau a oferi un cadou
            plin de emoție și poveste. Alege Vișinata, Povești cu Zmeu sau Ala Bala Portocala —
            fiecare sticlă spune o istorie a rezistenței și a dragostei pentru autentic.
          </p>
          <ul className="gift__list">
            <li>Ambalaj de sărbătoare</li>
            <li>Livrare în Chișinău</li>
            <li>Comenzi pentru evenimente</li>
          </ul>
          <a
            className="btn btn--solid"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {TELEGRAM_LABEL}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
