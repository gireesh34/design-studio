import { theme } from './theme';

export const gradients = {
  primary: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
  overlay: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%)',
  card: `linear-gradient(135deg, ${theme.colors.primary}99 0%, ${theme.colors.secondary}99 100%)`,
} as const;