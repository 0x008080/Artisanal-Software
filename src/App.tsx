import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Components
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
    </>
  )
}

export default App
