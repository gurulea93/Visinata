import { LEGACY } from '../constants'
import { Ornament } from './Ornament'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <img src={LEGACY.scriptLogoAlt} alt="A fost odată…" width={150} height={42} />
        <Ornament />
        <p>Vișinată &amp; Povești cu Zmeu · Licoare artizanale, Moldova</p>
        <p className="site-footer__legal">
          © {year} A fost odată… · Consumați responsabil · Vânzare interzisă minorilor (18+)
        </p>
      </div>
    </footer>
  )
}
