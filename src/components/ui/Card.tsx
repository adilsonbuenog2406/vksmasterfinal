import clsx from 'clsx';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export function Card({ children, className, padded = true }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-white/5 border border-white/10 shadow-card-soft',
        padded && 'p-6',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
