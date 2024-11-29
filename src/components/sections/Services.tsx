import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import {
  Monitor,
  Smartphone,
  Glasses,
  Layers,
  Palette,
  Code,
  Share2,
  Database,
} from 'lucide-react';
import { theme } from '../../styles/theme';

const services = [
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and beautiful interfaces that users love to interact with. We focus on user research, wireframing, and prototyping.',
    icon: Smartphone,
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
    ],
  },
  {
    title: 'Product Design',
    description:
      'End-to-end product design solutions that solve real business problems. From concept to launch, were with you every step.',
    icon: Layers,
    features: [
      'Product Strategy',
      'Design Systems',
      'MVP Development',
      'Design Sprints',
    ],
  },
  {
    title: 'AR/VR Design',
    description:
      'Immersive experiences that push the boundaries of digital interaction. We create engaging AR/VR solutions for various industries.',
    icon: Glasses,
    features: [
      '3D Modeling',
      'Interactive VR',
      'AR Applications',
      'Spatial Design',
    ],
  },
  {
    title: 'Brand Identity',
    description:
      'Crafting unique and memorable brand identities that stand out. We help businesses build strong, cohesive brand experiences.',
    icon: Palette,
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Strategy',
    ],
  },
  {
    title: 'Web Development',
    description:
      'Building modern, responsive websites that deliver exceptional user experiences across all devices.',
    icon: Code,
    features: ['Responsive Design', 'Performance', 'SEO', 'Analytics'],
  },
  {
    title: 'Digital Strategy',
    description:
      'Strategic planning and execution to help businesses achieve their digital transformation goals.',
    icon: Share2,
    features: [
      'Market Research',
      'Competitive Analysis',
      'Digital Roadmap',
      'KPI Tracking',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: theme.colors.accent }}
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            We offer comprehensive design solutions that help businesses
            transform their digital presence and create meaningful connections
            with their users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
