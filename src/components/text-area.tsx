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
        "flex w-full items-start gap-6 rounded-lg border border-gray-300 px-8 py-4 text-gray-500 shadow-sm duration-300 ease-out hover:border-gray-900",
      )}
    >
      <div className="h-5 w-5 text-junior-black">{icon}</div>
      <div className="flex w-full flex-col">
        <label htmlFor={id} className="text-sm leading-5 text-junior-black">
          {label}
        </label>
        <textarea
          id={id}
          {...props}
          className="mt-1 grow resize-none bg-transparent text-sm leading-5 text-gray-500 focus:outline-none"
        />
      </div>
    </div>
  )
}
