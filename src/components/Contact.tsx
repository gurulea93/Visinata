import { SOCIAL, WHATSAPP_LABEL, WHATSAPP_URL } from '../constants'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'
import './Contact.css'

const SOCIALS = [
  { href: SOCIAL.instagram, label: 'Instagram' },
  { href: SOCIAL.facebook, label: 'Facebook' },
  { href: SOCIAL.tiktok, label: 'TikTok' },
]

export function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="section__inner">
        <Reveal className="contact__inner">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="section__title">
            Hai să alegem gustul
          </h2>
          <Ornament />
          <p className="contact__lead">
            Scrie-ne pe WhatsApp și îți spunem ce se potrivește mai bine: vișinată sau zmeură,
            pentru masă sau pentru cadou.
          </p>
          <a
            className="btn btn--solid"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {WHATSAPP_LABEL}
          </a>
          <ul className="contact__social">
            {SOCIALS.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
