import { ComponentProps } from 'react'

export type TextInputProps = ComponentProps<'input'> & {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <div className="bg-gray-900 px-3 py-3 rounded-sm border-2 border-gray-900 flex items-baseline focus-within:border-ignite-300 has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed">
      {!!prefix && <span className="text-gray-400 text-sm">{prefix}</span>}
      <input
        type="text"
        className="disabled:cursor-not-allowed text-sm text-white bg-transparent border-none w-full focus:outline-none placeholder:text-gray-400"
        {...props}
      />
    </div>
  )
}
