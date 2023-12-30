import { ComponentProps, ElementRef, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: [
    'bg-gray-900  rounded-sm border-2 border-gray-900 flex items-center focus-within:border-ignite-300 has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed',
  ],
  variants: {
    size: {
      sm: 'px-3 py-2',
      md: 'px-3 py-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextInputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    prefix?: string
  }

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  ({ prefix, size, ref, ...props }) => {
    return (
      <div className={input({ size })}>
        {!!prefix && <span className="text-gray-400 text-sm">{prefix}</span>}
        <input
          ref={ref}
          type="text"
          className="disabled:cursor-not-allowed text-sm text-white bg-transparent border-none w-full focus:outline-none placeholder:text-gray-400"
          {...props}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
