import React from 'react';
import { theme } from '../../styles/theme';

interface IconWrapperProps {
  icon: React.ElementType;
  size?: 'sm' | 'md' | 'lg';
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div 
      className={`${sizes[size]} rounded-lg flex items-center justify-center`}
      style={{ background: 'rgba(142, 246, 9, 0.1)' }}
    >
      <Icon className="h-6 w-6" style={{ color: theme.colors.accent }} />
    </div>
  );
};

export default IconWrapper;