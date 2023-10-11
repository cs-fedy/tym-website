import { PropsWithChildren } from "react"

type DropdownProps = { label: string }

export default function Dropdown({
  children,
  label,
}: PropsWithChildren<DropdownProps>) {
  return (
    <div className="group relative inline-block">
      <div className="flex cursor-pointer items-center space-x-2">
        <span className="text-sm font-medium capitalize leading-normal text-junior-black">
          {label}
        </span>

        <i className="fa-solid fa-chevron-down mt-0.5 text-[0.6rem]"></i>
      </div>

      <div className="relative hidden max-w-xs py-4 group-hover:block md:max-w-screen-sm lg:absolute lg:max-w-lg">
        <div className="flex w-full flex-col items-start space-y-4 rounded-md border-gray-100 bg-white px-8 py-4 text-gray-900 lg:border">
          {children}
        </div>
      </div>
    </div>
  )
}
