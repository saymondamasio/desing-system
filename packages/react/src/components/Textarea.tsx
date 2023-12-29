import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'bg-gray-900 px-3 py-3 rounded-sm border-2 border-gray-900 flex items-baseline resize-y min-h-20 text-sm focus:outline-none focus:border-ignite-300  disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400 text-white',
        className,
      )}
      {...props}
    />
  )
}
