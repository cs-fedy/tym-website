import cn from "@/utils/cn"
import { ComponentProps, ReactNode } from "react"

type ExtraProps = {
  icon: ReactNode
  label: string
}

type TextAreaProps = ComponentProps<"textarea"> & ExtraProps

export default function TextArea({
  icon,
  label,
  id,
  className,
  ...props
}: TextAreaProps) {
  return (
    <div
      className={cn(
        className,
        "flex w-full items-start space-x-4 rounded-lg border border-gray-300 px-6 py-3 text-gray-500 shadow-sm duration-300 ease-out hover:border-gray-900",
      )}
    >
      <div className="mt-3 text-xs text-junior-black">{icon}</div>
      <div className="flex w-full flex-col">
        <label
          htmlFor={id}
          className="text-xs font-medium leading-5 text-junior-black"
        >
          {label}
        </label>
        <textarea
          id={id}
          {...props}
          className="mt-0.5 grow resize-none bg-transparent text-xs leading-5 text-gray-500 placeholder:text-xs focus:outline-none"
        />
      </div>
    </div>
  )
}
