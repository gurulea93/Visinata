import { motion } from 'framer-motion'
import { AGE_GATE_KEY, LEGACY, MEDIA } from '../constants'
import { Ornament } from './Ornament'
import './AgeGate.css'

type AgeGateProps = {
  onConfirm: () => void
}

export function AgeGate({ onConfirm }: AgeGateProps) {
  const confirm = () => {
    try {
      localStorage.setItem(AGE_GATE_KEY, '1')
    } catch {
      /* storage indisponibil — continuăm oricum */
    }
    onConfirm()
  }

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="age-gate__media" aria-hidden="true">
        <img src={MEDIA.orchardWide} alt="" />
      </div>

      <motion.div
        className="age-gate__panel"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          className="age-gate__logo"
          src={LEGACY.scriptLogoAlt}
          alt="A fost odată…"
          width={240}
          height={68}
        />
        <Ornament />
        <h2 id="age-title">Ai împlinit 18 ani?</h2>
        <p>Site-ul prezintă băuturi alcoolice. Confirmă vârsta pentru a intra.</p>
        <div className="age-gate__actions">
          <button type="button" className="btn btn--solid" onClick={confirm}>
            Da, am 18+
          </button>
          <a className="btn" href="https://www.google.com" rel="noopener noreferrer">
            Nu
          </a>
        </div>
        <p className="age-gate__legal">Consumați responsabil</p>
      </motion.div>
    </div>
  )
}
