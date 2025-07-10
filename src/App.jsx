import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'//Importacao de Plugins do GSAP
import { gsap } from 'gsap'
import Navbar from './Components/navbar.jsx' //Importacao do Componente Navbar

gsap.registerPlugin(ScrollTrigger, SplitText) //Registro dos Plugins do GSAP (Sem isso não funciona)
const App = () => {
  return (
    <main>
      <Navbar/>
    </main>
  )
}

export default App
