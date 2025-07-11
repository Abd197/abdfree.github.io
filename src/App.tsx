import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Applications from './components/Applications';
import IPTV from './components/IPTV';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Applications />
      <IPTV />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;