import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: ['bg-ignite-300 py-2 px-4 font-bold text-white rounded-sm'],
  variants: {
    variant: {
      small: 'text-sm',
      big: 'py-3 px-6',
    },
  },
  defaultVariants: {
    variant: 'small',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, ...props }: ButtonProps) => (
  <button className={button({ variant })} {...props} />
)
