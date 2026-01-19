import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type Variant = 'dark' | 'light';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: ReactNode;
  variant?: Variant;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, icon, className, variant = 'dark', ...props }, ref) => {
    const isLight = variant === 'light';
    const labelColor = isLight ? 'text-navy font-semibold' : 'text-white';
    const helperColor = isLight ? 'text-navy/80' : 'text-white/80';
    const fieldContainer = isLight
      ? 'border border-slate/40 bg-white text-navy focus-within:border-gold/70 focus-within:shadow-card-soft'
      : 'border border-white/10 bg-white/8 text-white focus-within:border-gold/60 focus-within:shadow-glow';
    const inputColor = isLight
      ? 'text-navy placeholder-slate-400'
      : 'text-white placeholder-white/50';

    return (
      <label className={clsx('flex w-full flex-col gap-2 text-sm', helperColor)}>
        {label && <span className={labelColor}>{label}</span>}
        <div
          className={clsx(
            'flex items-center gap-2 rounded-xl px-3 py-3 transition-colors',
            fieldContainer
          )}
        >
          {icon && <span className={isLight ? 'text-gold' : 'text-gold'}>{icon}</span>}
          <input
            ref={ref}
            className={clsx(
              'w-full bg-transparent text-sm outline-none',
              inputColor,
              className
            )}
            {...props}
          />
        </div>
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;
