import { ElementType, HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

export type BoxProps = HTMLAttributes<HTMLOrSVGElement> & {
  as?: ElementType
}
export function Box({ className, as: Tag = 'div', ...props }: BoxProps) {
  return (
    <Tag
      className={twMerge(
        'p-4 rounded-md border border-gray-600 bg-gray-800',
        className,
      )}
      {...props}
    />
  )
}
