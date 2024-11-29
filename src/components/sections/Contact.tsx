import React from 'react';
import ContactForm from '../forms/ContactForm';
import ContactInfo from '../contact/ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#8ef609' }}>
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-white">
            Let's discuss how we can help bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;