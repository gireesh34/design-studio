import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-24 md:pt-30 md:pb-32">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          padding: '8rem 2rem',  
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" style={{ color: '#8ef609' }}>
            We craft digital
            <span className="block" style={{ color: '#ffffff' }}>
              experiences that matter
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
            Transform your ideas into exceptional digital products. We specialize in UI/UX,
            product design, and immersive AR/VR experiences.
          </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-black font-medium transition-all hover:scale-105"
              style={{ background: '#8ef609', boxShadow: '0 0 20px #8ef609' }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 border text-white border-white/20 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              View Our Work
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;