import { ComponentProps } from 'react'

export type BoxProps = ComponentProps<'div'>

export function Box(props: BoxProps) {
  return (
    <div
      className="p-4 rounded-md border border-gray-600 bg-gray-800"
      {...props}
    />
  )
}
