import React from 'react';
import Card from '../../ui/Card';
import { theme } from '../../../styles/theme';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <Card hover className="p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: theme.colors.accent }}>
        {number}
      </div>
      <div className="text-white text-sm md:text-base">{label}</div>
    </Card>
  );
};

export default StatCard;