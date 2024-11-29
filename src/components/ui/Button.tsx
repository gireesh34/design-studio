import React from 'react';
import { theme } from '../../styles/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center px-6 py-3 rounded-md font-medium transition-all";
  
  const variantStyles = {
    primary: {
      background: theme.colors.accent,
      color: theme.colors.secondary,
      boxShadow: `0 0 20px ${theme.colors.accent}`,
      hover: 'hover:scale-105',
    },
    secondary: {
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: theme.colors.text.white,
      hover: 'hover:bg-white/10',
    },
  };

  const styles = variantStyles[variant];

  return (
    <button
      className={`${baseStyles} ${styles.hover} ${className}`}
      style={{
        background: styles.background,
        color: styles.color,
        boxShadow: styles.boxShadow,
        border: styles.border,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;