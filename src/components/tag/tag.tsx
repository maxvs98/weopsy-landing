import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementType } from 'react';

const tagVariants = cva([], {
  variants: {
    variant: {
      primary: 'bg-accent/15 text-accent',
      secondary: 'dark:bg-white/5 dark:text-white/40 bg-black/2 text-black/40',
    },
    size: {
      xs: 'text-xs px-3 py-1 rounded-xs font-medium',
    },
  },
});

export type TagProperties<T extends ElementType = 'div'> = {
  as?: T;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof tagVariants>;

export function Tag<T extends ElementType = 'div'>(properties: TagProperties<T>) {
  const { as: Component = 'div', className, variant = 'primary', size = 'xs', ...rest } = properties;

  return <Component className={tagVariants({ className, variant, size })} {...rest} />;
}
