import cn from "@/utils/cn"
import { ComponentProps, ReactNode } from "react"

type ExtraProps = {
  icon: ReactNode
  label: string
}

type InputProps = ComponentProps<"input"> & ExtraProps

export default function Input({
  icon,
  label,
  id,
  disabled,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        className,
        "flex w-full items-center gap-6 rounded-lg border border-gray-300 px-8 py-4 text-gray-500 shadow-sm duration-300 ease-out hover:border-gray-900",
      )}
    >
      <div className="h-5 w-5 text-junior-black">{icon}</div>
      <div className="flex w-full flex-col">
        <label htmlFor={id} className="text-sm leading-5 text-junior-black">
          {label}
        </label>
        <input
          {...props}
          id={id}
          disabled={disabled}
          className="mt-1 grow bg-transparent text-sm leading-5 text-gray-500 focus:outline-none"
        />
      </div>
    </div>
  )
}
