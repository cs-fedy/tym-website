"use client"

import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Dropdown from "./drop-down"
import NavbarItem from "./navbar-item"

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 bg-junior-white border-b z-10 shadow-sm border-b-junior-gray/20">
      <div className="w-4/5 mx-auto flex items-center py-2 justify-between flex-wrap lg:flex-nowrap">
        {/* logo */}
        <Link href="/" className="w-40 shrink-0">
          <Image
            src="/svg/tym-logo.svg"
            width={400}
            height={400}
            alt="tym logo"
          />
        </Link>

        <div className="flex justify-end lg:hidden grow">
          <button
            className={cn(isOpen ? "hidden" : "block", "text-junior-black")}
            type="button"
            onClick={() => setOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
            <span className="hidden">open menu</span>
          </button>

          <button
            className={cn(isOpen ? "block" : "hidden", "text-junior-black")}
            type="button"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
            <span className="hidden">close menu</span>
          </button>
        </div>

        <div
          className={cn(
            isOpen ? "flex flex-col my-4 w-full" : "hidden  my-0",
            isOpen ? "space-x-0 space-y-5" : "space-x-12 space-y-0",
            "lg:flex lg:flex-row items-center lg:justify-between",
          )}
        >
          {/* navigation menu */}
          <nav className="flex flex-col w-full lg:flex-row items-center space-y-5 space-x-0 lg:space-y-0 md:space-x-10">
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
            className="px-4 py-2 w-full bg-junior-black font-bold text-junior-white capitalize rounded-md text-center"
          >
            demander un devis
          </Link>
        </div>
      </div>
    </div>
  )
}
