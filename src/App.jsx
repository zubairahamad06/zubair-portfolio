import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './herosection/Hero'
import { About } from './about/About'
import { Education } from './education/Education'
import { Skills } from './skills/Skills'
import { Work } from './works/Work'
import { Contact } from './contact/Contact'
import { Service } from './services/Service'
import { Base } from './base/Base'

function App() {


  return (
    <>
    <Hero></Hero>
    <About></About>
    {/* <Education></Education> */}
    <Service></Service>
    <Skills></Skills>
    <Work></Work>
    <Contact></Contact>
    <Base></Base>


    </>
  )
}

export default App
