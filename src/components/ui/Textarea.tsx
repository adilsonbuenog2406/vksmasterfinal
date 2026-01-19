import clsx from 'clsx';
import { forwardRef, ReactNode, TextareaHTMLAttributes } from 'react';

type Variant = 'dark' | 'light';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  icon?: ReactNode;
  variant?: Variant;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
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
            'flex gap-2 rounded-xl px-3 py-3 transition-colors',
            fieldContainer
          )}
        >
          {icon && <span className={isLight ? 'mt-1 text-gold' : 'mt-1 text-gold'}>{icon}</span>}
          <textarea
            ref={ref}
            className={clsx(
              'min-h-[120px] w-full resize-none bg-transparent text-sm outline-none',
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

Textarea.displayName = 'Textarea';

export default Textarea;
