import React from 'react';
import Card from '../../ui/Card';
import { theme } from '../../../styles/theme';

const MissionStatement = () => {
  return (
    <Card variant="dark" className="p-8 mx-auto max-w-3xl text-center">
      <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.accent }}>
        Our Mission
      </h3>
      <p className="text-white text-lg">
        To empower businesses through innovative design solutions that create meaningful 
        connections, drive growth, and shape the future of digital experiences. We're committed 
        to excellence, sustainability, and pushing the boundaries of what's possible in design.
      </p>
    </Card>
  );
};

export default MissionStatement;