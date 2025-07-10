import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'//Importacao de Plugins do GSAP
import { gsap } from 'gsap'
import Navbar from './Components/navbar.jsx' //Importacao do Componente Navbar
import Hero from './Components/Hero.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText) //Registro dos Plugins do GSAP (Sem isso não funciona)
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App
