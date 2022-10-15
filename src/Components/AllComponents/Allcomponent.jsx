import React from 'react'
import Contact from '../SubComponent/Contact'
import Footer from '../SubComponent/Footer'
import Home from '../SubComponent/Home'
import PersonalDetail from '../SubComponent/PersonalDetail'
import Projects from '../SubComponent/Projects'
import Skills from '../SubComponent/Skills'
import Statics from '../SubComponent/Statics'
import TechTools from '../SubComponent/TechTools'

function Allcomponent() {
  return <>
    <Home/>
    <PersonalDetail/>
    <TechTools/>
    <Skills/>
    <Projects/>
    <Statics/>
    <Contact/>
  <Footer/>
  </>
}

export default Allcomponent