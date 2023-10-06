import Image from "next/image"
import Link from "next/link"
import Dropdown from "./drop-down"
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
          <Dropdown label="services">
            <div className="max-w-lg w-full flex items-start justify-between space-x-20 py-8">
              <div className="flex items-start flex-col space-y-16">
                <div className="flex flex-col items-start space-y-4">
                  <span className="text-junior-red font-bold tracking-[0.01px] text-lg leading-tight">
                    Etude de marché
                  </span>

                  <div className="flex flex-col items-start space-y-2">
                    <NavbarItem to="/feasibility-study">
                      Etude de faisabilité
                    </NavbarItem>
                    <NavbarItem to="/business-plan">business plan</NavbarItem>
                  </div>
                </div>

                <div className="flex flex-col items-start space-y-4">
                  <span className="text-junior-red font-bold tracking-[0.01px] text-lg leading-tight">
                    Etude de marketing
                  </span>

                  <div className="flex flex-col items-start space-y-2">
                    <NavbarItem to="/satisfaction-study">
                      Etude de satisfaction
                    </NavbarItem>
                    <NavbarItem to="/reputation-plan">
                      Etude de notoriété
                    </NavbarItem>
                  </div>
                </div>
              </div>

              <div className="flex items-start flex-col space-y-16">
                <div className="flex flex-col items-start space-y-4">
                  <span className="text-junior-red font-bold tracking-[0.01px] text-lg leading-tight">
                    Communication
                  </span>

                  <div className="flex flex-col items-start space-y-2">
                    <NavbarItem to="/community-management">
                      Community management
                    </NavbarItem>
                    <NavbarItem to="/graphic-design">
                      Conception graphique
                    </NavbarItem>
                  </div>
                </div>

                <NavbarItem to="/events">
                  <span className="text-junior-red font-bold tracking-[0.01px] text-lg leading-tight">
                    Événementiel
                  </span>
                </NavbarItem>
              </div>
            </div>
          </Dropdown>
          <NavbarItem to="/about">a propos</NavbarItem>
          <NavbarItem to="/news">actualités</NavbarItem>
          <NavbarItem to="/portfolio">portfolio</NavbarItem>
        </nav>

        {/* order a price */}
        <Link
          href="/project_estimation"
          className="px-8 py-4 bg-junior-black font-bold text-junior-white capitalize rounded-md text-center"
        >
          demander un devis
        </Link>
      </div>
    </div>
  )
}
