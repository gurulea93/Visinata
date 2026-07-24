import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import type { MouseEvent } from 'react'
import { useRef } from 'react'
import { PRODUCTS, WHATSAPP_URL } from '../constants'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'
import './Products.css'

export function Products() {
  return (
    <section className="products section" id="gusturi" aria-labelledby="products-title">
      <div className="section__inner">
        <Reveal className="section__head">
          <p className="eyebrow">Colecția</p>
          <h2 id="products-title" className="section__title">
            Gusturile
          </h2>
          <Ornament />
          <p className="section__lead">
            Două licoare, aceeași mână și aceeași tradiție — alegeți după poveste, nu doar după
            gust.
          </p>
        </Reveal>
      </div>

      {PRODUCTS.map((product, index) => (
        <ProductRow key={product.id} product={product} flipped={index % 2 === 1} />
      ))}
    </section>
  )
}

type Product = (typeof PRODUCTS)[number]

function ProductRow({ product, flipped }: { product: Product; flipped: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const sceneY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const bottleY = useTransform(scrollYProgress, [0, 1], [56, -56])
  const bottleRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    flipped ? [6, 0, -5] : [-6, 0, 5],
  )
  const bottleScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.92, 1, 1, 0.96])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.2, 0.7, 0.7, 0.25])

  return (
    <div
      className={`product-row product-row--${product.accent}${flipped ? ' is-flipped' : ''}`}
      ref={ref}
    >
      <div className="product-row__bg" aria-hidden="true">
        <motion.div className="product-row__scene" style={{ y: sceneY }}>
          <img src={product.scene} alt="" loading="lazy" />
        </motion.div>
        <div className="product-row__veil" />
      </div>

      <div className="product-row__inner">
        <BottleStage
          product={product}
          reduce={!!reduce}
          bottleY={bottleY}
          bottleRotate={bottleRotate}
          bottleScale={bottleScale}
          glowOpacity={glowOpacity}
          flipped={flipped}
        />

        <Reveal className="product-row__copy">
          <p className="eyebrow">{product.subtitle}</p>
          <h3 className="product-row__name script">{product.name}</h3>
          <Ornament />
          <p className="product-row__notes">{product.notes}</p>
          <p className="product-row__text">{product.description}</p>
          <p className="product-row__meta">
            <span>{product.alcohol}</span>
            <span aria-hidden="true">·</span>
            <span>{product.volume}</span>
          </p>
          <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Comandă sticla
          </a>
        </Reveal>
      </div>
    </div>
  )
}

function BottleStage({
  product,
  reduce,
  bottleY,
  bottleRotate,
  bottleScale,
  glowOpacity,
  flipped,
}: {
  product: Product
  reduce: boolean
  bottleY: MotionValue<number>
  bottleRotate: MotionValue<number>
  bottleScale: MotionValue<number>
  glowOpacity: MotionValue<number>
  flipped: boolean
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const mouseX = useSpring(0, { stiffness: 70, damping: 18 })
  const mouseY = useSpring(0, { stiffness: 70, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 28)
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 20)
  }

  const onLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      className="product-row__stage"
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className={`product-row__glow product-row__glow--${product.accent}`}
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.14, 1],
              }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="product-row__parallax"
        style={{ y: bottleY, rotate: bottleRotate, scale: bottleScale, x: mouseX }}
      >
        <motion.div
          className="product-row__enter"
          initial={reduce ? false : { opacity: 0, y: 72, rotate: flipped ? 10 : -10, scale: 0.86 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="product-row__bottle" style={{ y: mouseY }}>
            <motion.img
              src={product.image}
              alt={`${product.name} — ${product.subtitle}`}
              loading="lazy"
              width={420}
              height={700}
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotate: flipped ? [0, -1.6, 0] : [0, 1.6, 0],
                    }
              }
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={reduce ? undefined : { scale: 1.045 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
