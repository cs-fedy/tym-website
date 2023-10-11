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
      className="text-sm font-medium capitalize leading-normal text-junior-white md:text-base"
    >
      {children}
    </Link>
  )
}
