import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'//Importacao de Plugins do GSAP
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText) //Registro dos Plugins do GSAP (Sem isso não funciona)
const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
    <h1 className='text-3xl text-indigo-500'>Ola</h1>
    </div>
  )
}

export default App
