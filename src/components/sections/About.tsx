import React from 'react';
import { Users, Target, Zap, Heart, Globe, Lightbulb } from 'lucide-react';
import { Card } from '../ui/Card';

const values = [
  {
    icon: Users,
    title: 'User-Centered Design',
    description: 'We believe in creating experiences that resonate with users, combining aesthetics with functionality to deliver intuitive solutions.',
  },
  {
    icon: Target,
    title: 'Strategic Thinking',
    description: 'Every design decision is purposeful, aligned with business objectives while maintaining focus on user needs and expectations.',
  },
  {
    icon: Zap,
    title: 'Rapid Innovation',
    description: 'We stay at the forefront of design trends and technology, constantly pushing boundaries to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Passionate Craft',
    description: 'Our team brings enthusiasm and dedication to every project, ensuring exceptional quality in every detail.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We draw inspiration from diverse cultures and perspectives to create universally appealing designs.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'We transform complex challenges into elegant, innovative solutions that exceed expectations.',
  },
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '50+', label: 'Global Clients' },
  { number: '15+', label: 'Design Awards' },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#8ef609' }}>
            Crafting Digital Excellence
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white">
            We're a collective of passionate designers, developers, and creative thinkers dedicated 
            to transforming ideas into exceptional digital experiences. With over a decade of 
            expertise, we've helped businesses across the globe achieve their digital ambitions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg text-center"
              style={{
                background: 'linear-gradient(135deg, #511557 0%, #030c3c 100%)',
                border: '1px solid rgba(142, 246, 9, 0.1)',
              }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#8ef609' }}>
                {stat.number}
              </div>
              <div className="text-white text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="p-6 rounded-lg transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #511557 0%, #030c3c 100%)',
                  border: '1px solid rgba(142, 246, 9, 0.1)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(142, 246, 9, 0.1)' }}
                >
                  <Icon className="h-6 w-6" style={{ color: '#8ef609' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8ef609' }}>
                  {value.title}
                </h3>
                <p className="text-white">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div
            className="p-8 rounded-lg mx-auto max-w-3xl"
            style={{
              background: 'linear-gradient(135deg, #511557 0%, #030c3c 100%)',
              border: '1px solid rgba(142, 246, 9, 0.1)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#8ef609' }}>
              Our Mission
            </h3>
            <p className="text-white text-lg">
              To empower businesses through innovative design solutions that create meaningful 
              connections, drive growth, and shape the future of digital experiences. We're committed 
              to excellence, sustainability, and pushing the boundaries of what's possible in design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;