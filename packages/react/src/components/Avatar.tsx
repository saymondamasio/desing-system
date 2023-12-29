import { ComponentProps } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof AvatarPrimitive.AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarPrimitive.Root className="rounded-full inline-block size-12 overflow-hidden">
      <AvatarPrimitive.Image
        className="size-full object-cover rounded-full"
        {...props}
      />
      <AvatarPrimitive.Fallback
        className="size-full flex items-center justify-center bg-gray-600 text-gray-800"
        delayMs={600}
      >
        <User className="size-6" />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
