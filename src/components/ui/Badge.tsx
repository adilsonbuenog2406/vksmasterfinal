import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'gold' | 'light' | 'dark';
  className?: string;
};

const variants = {
  gold: 'bg-gold/15 text-gold border border-gold/40',
  light: 'bg-white/10 text-white border border-white/10',
  dark: 'bg-navy text-white border border-white/10'
};

const Badge = ({ children, variant = 'light', className }: Props) => (
  <span
    className={clsx(
      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
      variants[variant],
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
