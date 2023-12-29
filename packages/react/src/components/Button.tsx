import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-sm text-sm font-medium teste text-center min-w-[120px] flex items-center justify-center gap-2 px-4  disabled:cursor-not-allowed [&>svg]:size-4',
  ],
  variants: {
    variant: {
      primary:
        'text-white bg-ignite-500 enabled:hover:bg-ignite-300 disabled:bg-gray-200',
      secondary: 'text-ignite-300 border-2 border-ignite-500',
      tertiary: 'text-gray-100',
    },
    size: {
      sm: 'h-[38px]',
      md: 'h-[46px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, size, ...props }: ButtonProps) {
  return <button className={button({ variant, size })} {...props} />
}
