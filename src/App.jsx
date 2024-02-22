import './App.css'

import { useRef } from 'react';

import Header from './components/header'
import Landing from './components/landing'
import WhatIDO from './components/whatido'
import Featured from './components/featured'
import Experience from './components/experience'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  const contactRef = useRef(null)
  const portfolioRef = useRef(null)

  const handleClick = (refName) => {
    const refToScroll = typeof refName === 'string' ?
    {'contactRef': contactRef, 'portfolioRef': portfolioRef}[refName] : refName;

    refToScroll?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div id='main'>
      <Header onClick={handleClick}/>
      <main>
        <section>
          <Landing onClick={handleClick}/>
        </section>
        <section>
          <WhatIDO />
        </section>
        <section>
          <Featured onClick={handleClick} ref={portfolioRef}/>
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Contact onClick={handleClick} ref={contactRef}/>
        </section>
      </main>
      <footer>
          <Footer />
      </footer>

    </div>
  )
}

export default App
