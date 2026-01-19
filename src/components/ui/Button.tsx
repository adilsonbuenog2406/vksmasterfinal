import { ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost' | 'glass' | 'light';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[#cfa269] text-navy-900 hover:bg-[#c39653] shadow-[0_12px_28px_rgba(0,0,0,0.24)] font-semibold transition-colors border border-[#cfa269]/85',
  secondary:
    'bg-[#313b48] text-white border border-white/25 hover:border-white/40 hover:bg-[#3a4554] transition-colors',
  ghost:
    'bg-white/10 text-white border border-white/10 hover:bg-white/15 transition-colors',
  glass:
    'border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all',
  light:
    'bg-white text-navy border border-slate-200 shadow-sm hover:bg-slate-100 transition-colors'
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm rounded-md',
  md: 'px-5 py-3 text-sm rounded-lg',
  // mais próximo do print: mais “alto” e radius menor
  lg: 'px-8 py-6 text-lg rounded-md'
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  className,
  href,
  ...props
}: ButtonProps) {
  const commonClasses = clsx(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        {...anchorProps}
        href={href}
        className={commonClasses}
        role="button"
      >
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? 'button'}
      className={commonClasses}
    >
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </button>
  );
}

export default Button;
