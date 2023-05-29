import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonStyles = cva(
  'flex items-center justify-center gap-1 rounded-md transition w-full',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-yellow hover:bg-yellow-dark px-2 py-3 font-bold text-sm',
        secondary:
          'text-base-text text-sm bg-base-button px-2 py-1 hover:bg-base-hover',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ButtonProps = {
  children: ReactNode;
  prefix?: ReactNode;
} & VariantProps<typeof buttonStyles> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'prefix'>;

export function Button({ children, variant, prefix, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={buttonStyles({ variant })}>
      {prefix}
      {children}
    </button>
  );
}
