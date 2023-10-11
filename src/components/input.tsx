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
        "flex w-full items-center space-x-4 rounded-lg border border-gray-300 px-6 py-3 text-gray-500 shadow-sm duration-300 ease-out hover:border-gray-900",
      )}
    >
      <div className="text-junior-black text-xs">{icon}</div>
      <div className="flex w-full flex-col">
        <label
          htmlFor={id}
          className="text-xs leading-5 font-medium text-junior-black"
        >
          {label}
        </label>
        <input
          {...props}
          id={id}
          disabled={disabled}
          className="mt-0.5 grow bg-transparent text-xs placeholder:text-xs leading-5 text-gray-500 focus:outline-none"
        />
      </div>
    </div>
  )
}
