import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'dark';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  variant = 'default'
}) => {
  return (
    <div
      className={`
        ${variant === 'default' ? 'glass-card' : 'glass-card-dark'}
        ${hover ? 'hover-card' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;