import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#030c3c' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;