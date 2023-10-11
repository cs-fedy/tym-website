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
    <div className="fixed left-0 right-0 top-0 z-10 border-b border-b-junior-gray/20 bg-junior-white shadow-sm">
      <div className="mx-auto my-2 flex w-4/5 items-center justify-between">
        <div className="flex w-full justify-between lg:w-max">
          {/* logo */}
          <Link href="/" className="w-40">
            <Image
              src="/svg/tym-logo.svg"
              width={400}
              height={400}
              alt="tym logo"
            />
          </Link>

          <button
            className={cn(
              isOpen ? "hidden" : "block",
              "text-junior-black lg:hidden",
            )}
            type="button"
            onClick={() => setOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
            <span className="hidden">open menu</span>
          </button>
        </div>

        <div
          className={cn(
            isOpen ? "fixed inset-0 overflow-auto bg-junior-white" : "hidden",
            " flex-col items-center justify-between gap-10 space-y-10 lg:flex lg:flex-row lg:space-y-0",
          )}
        >
          <div className="mx-auto mt-10 flex w-4/5 justify-end lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={cn(isOpen ? "block" : "hidden", "text-junior-black")}
            >
              <i className="fa-solid fa-xmark"></i>
              <span className="hidden">close menu</span>
            </button>
          </div>

          {/* navigation menu */}
          <nav className="m-auto flex w-4/5 flex-col items-start space-x-0 space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0">
            <NavbarItem to="/">Acceuil</NavbarItem>
            <Dropdown label="services">
              <div className="flex w-full flex-col items-start justify-between space-x-0 space-y-10 lg:space-x-20 lg:space-y-0 lg:py-8">
                <div className="flex flex-col items-start space-y-16">
                  <div className="flex flex-col items-start space-y-4">
                    <span className="text-sm font-bold leading-tight tracking-[0.01px] text-junior-red sm:text-base md:text-lg">
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
                    <span className="text-sm font-bold leading-tight tracking-[0.01px] text-junior-red sm:text-base md:text-lg">
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

                <div className="flex flex-col items-start space-y-16">
                  <div className="flex flex-col items-start space-y-4">
                    <span className="text-sm font-bold leading-tight tracking-[0.01px] text-junior-red sm:text-base md:text-lg">
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
                    <span className="text-sm font-bold leading-tight tracking-[0.01px] text-junior-red sm:text-base md:text-lg">
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
          <div className="m-auto flex w-4/5 flex-col items-start">
            <Link
              href="/project_estimation"
              className="rounded-md bg-junior-black px-4  py-2 text-center text-xs font-bold capitalize text-junior-white hover:bg-gray-950"
            >
              demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
