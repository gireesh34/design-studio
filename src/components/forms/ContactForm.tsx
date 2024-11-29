import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputStyles = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(142, 246, 9, 0.2)',
    color: '#ffffff',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg p-3 focus:ring-2 focus:ring-[#8ef609] focus:border-transparent"
          style={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg p-3 focus:ring-2 focus:ring-[#8ef609] focus:border-transparent"
          style={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-lg p-3 focus:ring-2 focus:ring-[#8ef609] focus:border-transparent"
          style={inputStyles}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 rounded-lg font-medium transition-all hover:scale-105"
        style={{ 
          background: '#8ef609',
          color: '#030c3c',
          boxShadow: '0 0 20px rgba(142, 246, 9, 0.3)'
        }}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;