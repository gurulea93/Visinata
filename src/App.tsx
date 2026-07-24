import { useEffect, useState } from 'react'
import { AgeGate } from './components/AgeGate'
import { Atmosphere } from './components/Atmosphere'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Gift } from './components/Gift'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { SmoothScroll } from './components/SmoothScroll'
import { Story } from './components/Story'
import { AGE_GATE_KEY } from './constants'
import './App.css'

function App() {
  const [ageOk, setAgeOk] = useState(() => {
    try {
      return localStorage.getItem(AGE_GATE_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.body.classList.toggle('age-locked', !ageOk)
    return () => document.body.classList.remove('age-locked')
  }, [ageOk])

  return (
    <SmoothScroll>
      {!ageOk && <AgeGate onConfirm={() => setAgeOk(true)} />}
      <div className="noise" aria-hidden="true" />
      <div className="page" aria-hidden={!ageOk}>
        <Header />
        <main>
          <Hero />
          <Products />
          <Atmosphere />
          <Gallery />
          <Story />
          <Gift />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
