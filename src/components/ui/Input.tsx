import React from 'react';
import { theme } from '../../styles/theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={id}
        className="mt-1 block w-full rounded-lg p-3 focus:ring-2 focus:ring-[#8ef609] focus:border-transparent"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: `1px solid rgba(${theme.colors.accent}, 0.2)`,
          color: theme.colors.text.white,
        }}
        {...props}
      />
    </div>
  );
};

export default Input;