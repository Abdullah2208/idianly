import './App.css'

import Header from './components/header'
import Landing from './components/landing'
import WhatIDO from './components/whatido'
import Featured from './components/featured'
import Experience from './components/experience'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <div id='main'>
      <Header />
      <main>
        <section>
          <Landing />
        </section>
        <section>
          <WhatIDO />
        </section>
        <section>
          <Featured />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
          <Footer />
      </footer>

    </div>
  )
}

export default App
