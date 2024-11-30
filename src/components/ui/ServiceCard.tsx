import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import IconWrapper from './IconWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from './Card';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: React.ElementType;
    features: string[];
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card hover variant="dark" className="p-6">
      <IconWrapper icon={service.icon} />
      
      <h3 className="text-xl font-semibold mt-4 mb-2" style={{ color: theme.colors.accent }}>
        {service.title}
      </h3>
      
      <p className="text-white mb-4">{service.description}</p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-sm"
        style={{ color: theme.colors.accent }}
      >
        {isExpanded ? 'Show Less' : 'Learn More'}
        {isExpanded ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-2">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center space-x-2 text-white text-sm py-1 px-3 rounded-full bg-white/5 backdrop-blur-sm"
            >
              <span>• {feature}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ServiceCard;