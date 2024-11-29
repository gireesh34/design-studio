import React from 'react';
import { ExternalLink } from 'lucide-react';
import { theme } from '../../styles/theme';

interface ProjectProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    stats: Record<string, string>;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image Container */}
      <div className="aspect-video overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(to top, rgba(3, 12, 60, 0.95) 0%, rgba(3, 12, 60, 0.7) 100%)',
        }}
      >
        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold" style={{ color: theme.colors.accent }}>
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5" style={{ color: theme.colors.accent }} />
          </div>
          
          <span className="inline-block px-3 py-1 rounded-full text-sm mb-3"
                style={{ background: 'rgba(142, 246, 9, 0.1)', color: theme.colors.text.white }}>
            {project.category}
          </span>
          
          <p className="text-white mb-4">{project.description}</p>
          
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-semibold" style={{ color: theme.colors.accent }}>
                  {value}
                </div>
                <div className="text-sm text-white capitalize">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;