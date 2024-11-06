import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        success:
          'border-transparent bg-emerald-500 text-white shadow hover:bg-emerald-500/80',
        smartphones:
          'border-transparent bg-blue-500 text-white shadow hover:bg-blue-500/80',
        tablets:
          'border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-500/80',
        accessories:
          'border-transparent bg-pink-500 text-white shadow hover:bg-pink-500/80',
        laptops:
          'border-transparent bg-gray-500 text-white shadow hover:bg-gray-500/80',
        new: 'border-transparent bg-green-500 text-white shadow hover:bg-green-500/80',
        used: 'border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-500/80',
        refurbished:
          'border-transparent bg-sky-600 text-white shadow hover:bg-sky-600/80',
        outlet:
          'border-transparent bg-rose-700 text-white shadow hover:bg-rose-700/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
