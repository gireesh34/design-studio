import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@designstudio.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 123 456 7890',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: ['123 Design Street', 'Andhra Pradesh, India'],
  },
];

const ContactInfo = () => {
  return (
    <div 
      className="p-8 rounded-lg space-y-8 glass-card-dark"
      style={{ 
        
        border: '1px solid rgba(142, 246, 9, 0.1)',
      }}
    >
      {contactDetails.map((detail) => {
        const Icon = detail.icon;
        return (
          <div key={detail.title} className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center"
               style={{ background: 'rgba(142, 246, 9, 0.1)' }}>
              <Icon className="w-5 h-5" style={{ color: '#8ef609' }} />
            </div>
            <div>
              <h3 className="text-lg font-medium" style={{ color: '#8ef609' }}>
                {detail.title}
              </h3>
              <div className="mt-1 text-white">
                {Array.isArray(detail.content) ? (
                  detail.content.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))
                ) : (
                  <p>{detail.content}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;