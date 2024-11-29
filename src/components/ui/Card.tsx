import React from 'react';
import { theme } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`p-6 rounded-lg ${hover ? 'transition-transform hover:scale-105' : ''} ${className}`}
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
        border: `1px solid rgba(${theme.colors.accent}, 0.1)`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;