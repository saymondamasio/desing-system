import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="size-6 bg-gray-900 border-2 border-gray-900 rounded-xs overflow-hidden flex justify-center items-center focus:border-ignite-300 data-[state=checked]:bg-ignite-300 data-[state=checked]:border-ignite-300"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        asChild
        className="text-white size-4 data-[state=checked]:animate-slideIn data-[state=unchecked]:animate-slideOut"
      >
        <Check weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
