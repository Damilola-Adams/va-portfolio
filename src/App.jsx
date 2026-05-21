import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SkillsBand from './components/SkillsBand';
import Tools from './components/Tools';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <SkillsBand />
      <Tools />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
