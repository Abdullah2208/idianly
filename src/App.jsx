import './App.css'

import Header from './components/header'
import Landing from './components/landing'
import WhatIDO from './components/whatido'
import Featured from './components/featured'

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
      </main>

    </div>
  )
}

export default App