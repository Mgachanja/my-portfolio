import React from 'react';
import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import StackLine from './components/StackLine';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Exploring from './components/Exploring';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

const App = () => (
  <MotionConfig reducedMotion="user">
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <ScrollProgress />
    <Nav />
    <main id="main">
      <Hero />
      <StackLine />
      <About />
      <Experience />
      <Projects />
      <Exploring />
      <Faq />
      <Contact />
    </main>
    <Footer />
  </MotionConfig>
);

export default App;
