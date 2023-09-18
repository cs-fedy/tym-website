import { PropsWithChildren } from "react"
import ChevronDownIcon from "./icons/chevron-down"

type DropdownProps = { label: string }

export default function Dropdown({
  children,
  label,
}: PropsWithChildren<DropdownProps>) {
  return (
    <div className="group relative inline-block">
      <div className="cursor-pointer flex items-center space-x-2">
        <span className="capitalize text-junior-black font-medium text-base leading-normal">
          {label}
        </span>

        <div className="w-3 h-3 text-junior-black">
          <ChevronDownIcon />
        </div>
      </div>
      <div className="hidden group-hover:block absolute py-4">
        <div className="flex flex-col space-y-4 items-start bg-white border border-gray-100 rounded-md w-max text-gray-900 px-8 py-4">
          {children}
        </div>
      </div>
    </div>
  )
}
