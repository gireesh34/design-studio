import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { theme } from '../../styles/theme';

const categories = ['All', 'UI/UX', 'Product', 'AR/VR', 'Branding', 'Web'];

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'UI/UX',
    description: 'A modern e-commerce platform with an intuitive shopping experience',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    stats: { users: '2M+', conversion: '+150%', rating: '4.9' },
  },
  {
    title: 'AR Shopping Experience',
    category: 'AR/VR',
    description: 'Revolutionary AR app for virtual try-ons and product visualization',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    stats: { engagement: '+280%', downloads: '500K+', retention: '78%' },
  },
  {
    title: 'Finance Dashboard',
    category: 'Product',
    description: 'Comprehensive financial management platform for modern businesses',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    stats: { transactions: '$2B+', users: '1M+', growth: '+200%' },
  },
  {
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand overhaul for a leading tech company',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    stats: { reach: '+400%', recognition: '+180%', satisfaction: '96%' },
  },
  {
    title: 'Healthcare Platform',
    category: 'Web',
    description: 'Modern healthcare management system for hospitals',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    stats: { patients: '1M+', efficiency: '+320%', satisfaction: '4.8' },
  },
  {
    title: 'VR Training Solution',
    category: 'AR/VR',
    description: 'Immersive VR training platform for industrial applications',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80',
    stats: { completion: '+150%', retention: '92%', roi: '+280%' },
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: theme.colors.accent }}>
            Featured Work
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses 
            transform their digital presence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category ? 'scale-105' : 'hover:scale-105'
              }`}
              style={{
                background: activeCategory === category ? theme.colors.accent : 'rgba(142, 246, 9, 0.1)',
                color: activeCategory === category ? theme.colors.secondary : theme.colors.text.white,
                border: `1px solid ${activeCategory === category ? 'transparent' : 'rgba(142, 246, 9, 0.2)'}`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;