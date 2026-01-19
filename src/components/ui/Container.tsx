import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={clsx('mx-auto w-full max-w-6xl px-6 md:px-10', className)}>{children}</div>;
};

export default Container;
