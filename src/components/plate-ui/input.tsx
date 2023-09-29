import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const inputVariants = cva(
  'flex w-full rounded-md bg-transparent text-sm file:border-0 file:bg-white file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:file:bg-slate-950 dark:placeholder:text-slate-400',
  {
    variants: {
      variant: {
        default:
          'border border-slate-200 ring-offset-white focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
        ghost: 'border-none focus-visible:ring-transparent',
      },
      h: {
        sm: 'h-9 px-3 py-2',
        md: 'h-10 px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      h: 'md',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
