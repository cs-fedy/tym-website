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
      className="block w-max text-sm font-medium capitalize leading-normal text-junior-black decoration-junior-red hover:underline"
    >
      {children}
    </Link>
  )
}
