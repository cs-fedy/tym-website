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
      <div className="text-junior-black text-xs mt-3">{icon}</div>
      <div className="flex w-full flex-col">
        <label
          htmlFor={id}
          className="text-xs leading-5 font-medium text-junior-black"
        >
          {label}
        </label>
        <textarea
          id={id}
          {...props}
          className="mt-0.5 grow bg-transparent resize-none text-xs placeholder:text-xs leading-5 text-gray-500 focus:outline-none"
        />
      </div>
    </div>
  )
}
