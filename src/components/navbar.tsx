import Image from "next/image"
import Link from "next/link"
import NavbarItem from "./navbar-item"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full px-36 py-5 bg-junior-white border z-10 shadow-sm border-b-junior-gray/20">
      <div className="w-full flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="w-40">
          <Image
            src="/svg/tym-logo.svg"
            width={400}
            height={400}
            alt="tym logo"
          />
        </Link>

        {/* navigation menu */}
        <nav className="flex items-center space-x-10">
          <NavbarItem to="/">Acceuil</NavbarItem>
          <NavbarItem to="/services">services</NavbarItem>
          <NavbarItem to="/about">a propos</NavbarItem>
          <NavbarItem to="/news">actualités</NavbarItem>
          <NavbarItem to="/contact">contact</NavbarItem>
          <NavbarItem to="/portfolio">portfolio</NavbarItem>
        </nav>

        {/* order a price */}
        <Link
          href="/project-estimation"
          className="px-8 py-4 bg-junior-black font-bold text-junior-white capitalize rounded-md text-center"
        >
          demander un devis
        </Link>
      </div>
    </div>
  )
}
