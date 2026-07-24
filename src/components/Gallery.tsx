import { GALLERY } from '../constants'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'
import './Gallery.css'

export function Gallery() {
  return (
    <section className="gallery section" id="momente" aria-labelledby="gallery-title">
      <div className="section__inner">
        <Reveal className="section__head">
          <p className="eyebrow">Momente</p>
          <h2 id="gallery-title" className="section__title">
            Din culise
          </h2>
          <Ornament />
        </Reveal>

        <div className="gallery__grid">
          {GALLERY.map((item, index) => (
            <Reveal key={item.src} className="gallery__card" delay={index * 0.1}>
              <figure>
                <div className="gallery__media">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <figcaption>
                  <h3>{item.title}</h3>
                  <span className="gallery__rule" aria-hidden="true" />
                  <p>{item.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
