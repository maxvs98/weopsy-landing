import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementType, FC } from 'react';

const buttonVariants = cva(['cursor-pointer flex justify-center items-center'], {
  variants: {
    variant: {
      primary: 'bg-accent text-white',
      'secondary-dark': 'bg-[#1B1B27] text-white',
      'secondary-light': 'bg-[#1313150D] text-black',
    },
    size: {
      md: 'h-10 px-5 rounded-sm text-xs font-medium',
      lg: 'h-15 px-8 rounded-md text-sm font-medium',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [{}],
});

type ButtonProperties<T extends ElementType = 'button'> = {
  as?: T | FC;
  disabled?: boolean;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof buttonVariants>;

export function Button<T extends ElementType = 'button'>(properties: ButtonProperties<T>) {
  const { as: Component = 'button', className, variant = 'primary', size = 'md', disabled, ...rest } = properties;

  return <Component className={buttonVariants({ className, variant, size, disabled })} disabled={disabled} {...rest} />;
}
