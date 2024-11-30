import React from 'react';
import Card from '../../ui/Card';
import IconWrapper from '../../ui/IconWrapper';
import { theme } from '../../../styles/theme';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <Card hover variant="dark" className="p-6">
      <IconWrapper icon={icon} />
      <h3 className="text-xl font-semibold mb-3" style={{ color: theme.colors.accent }}>
        {title}
      </h3>
      <p className="text-white">{description}</p>
    </Card>
  );
};

export default ValueCard;