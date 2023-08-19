import Link from "next/link"
import { PropsWithChildren } from "react"

type NavbarItemProps = { to: string }

export default function NavbarItem({
  to,
  children,
}: PropsWithChildren<NavbarItemProps>) {
  return (
    <Link
      href={to}
      className="capitalize text-junior-black font-medium text-base leading-normal"
    >
      {children}
    </Link>
  )
}
