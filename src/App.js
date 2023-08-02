import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
