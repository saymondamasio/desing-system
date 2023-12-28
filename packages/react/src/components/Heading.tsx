import { ElementType, HTMLAttributes } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const heading = tv({
  base: ['text-gray-100 leading-4'],
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
      '2xl': 'text-5xl',
      '3xl': 'text-6xl',
      '4xl': 'text-7xl',
      '5xl': 'text-8xl',
      '6xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = HTMLAttributes<HTMLOrSVGElement> &
  VariantProps<typeof heading> & {
    as?: ElementType
  }

export function Heading({ size, as: Tag = 'h2', ...props }: HeadingProps) {
  return <Tag className={heading({ size })} {...props} />
}
