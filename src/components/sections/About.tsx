import React from 'react';
import { Users, Target, Zap, Heart, Globe, Lightbulb } from 'lucide-react';
import StatCard from './stats/StatCard';
import ValueCard from './about/ValueCard';
import MissionStatement from './about/MissionStatement';
import { theme } from '../../styles/theme';

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
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: theme.colors.accent }}>
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
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <MissionStatement />
        </div>
      </div>
    </section>
  );
};

export default About;