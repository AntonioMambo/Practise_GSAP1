import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'//Importacao de Plugins do GSAP
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText) //Registro dos Plugins do GSAP (Sem isso não funciona)
const App = () => {
  return (
    <div>
      Ola
    </div>
  )
}

export default App
