import Link from "next/link"
import { PropsWithChildren } from "react"

type FooterItemProps = { to: string }

export default function FooterItem({
  to,
  children,
}: PropsWithChildren<FooterItemProps>) {
  return (
    <Link
      href={to}
      className="capitalize text-junior-white font-medium text-base leading-normal"
    >
      {children}
    </Link>
  )
}
