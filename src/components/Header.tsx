import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { LEGACY, WHATSAPP_URL } from '../constants'
import { Ornament } from './Ornament'
import './Header.css'

const LINKS = [
  { href: '#gusturi', label: 'Gusturi' },
  { href: '#momente', label: 'Momente' },
  { href: '#poveste', label: 'Povestea' },
  { href: '#cadou', label: 'Cadou' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { scrollY } = useScroll()
  const [pinned, setPinned] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (value) => setPinned(value > 90))

  return (
    <motion.header
      className={`site-header${pinned ? ' is-pinned' : ''}`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="A fost odată… — acasă">
          <img src={LEGACY.scriptLogoAlt} alt="A fost odată…" width={132} height={36} />
        </a>

        <nav className="site-header__nav" aria-label="Navigare principală">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__end">
          <a
            className="site-header__cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comandă
          </a>
          <button
            type="button"
            className={`site-header__burger${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Navigare mobilă"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Ornament />
            {LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.06, duration: 0.45 }}
              >
                {link.label}
              </motion.a>
            ))}
            <Ornament />
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
