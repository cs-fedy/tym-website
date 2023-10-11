import Image from "next/image"
import Link from "next/link"
import FooterItem from "./footer-item"

export default function Footer() {
  return (
    <footer className="w-full bg-junior-black py-10">
      <div className="mx-auto flex w-4/5 flex-col items-center space-y-28">
        <div className="grid w-full grid-cols-1 items-start space-y-10 md:grid-cols-3 lg:grid-cols-4 lg:space-y-0">
          <div className="flex h-full w-full items-center justify-center md:justify-start">
            <div className="h-44 w-44">
              <Image
                src="/svg/tym-logo-vertical.svg"
                alt="tunisian youth marketers logo"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="flex flex-col items-start space-y-5">
            <span className="text-sm uppercase leading-9 tracking-[0.3px] text-junior-white/60 md:text-base">
              menu
            </span>
            <nav className="flex flex-col items-start space-y-4">
              <FooterItem to="/services">services</FooterItem>
              <FooterItem to="/about">a propos</FooterItem>
              <FooterItem to="/news">actualités</FooterItem>
              <FooterItem to="/portfolio">portfolio</FooterItem>
            </nav>
          </div>

          <div className="flex flex-col items-start space-y-5">
            <span className="text-sm uppercase leading-9 tracking-[0.3px] text-junior-white/60 md:text-base">
              services
            </span>
            <nav className="flex flex-col items-start space-y-4">
              <FooterItem to="#">etude de marché</FooterItem>
              <FooterItem to="#">etude de marketing</FooterItem>
              <FooterItem to="#">communication digitale</FooterItem>
              <FooterItem to="#">événementiel</FooterItem>
            </nav>
          </div>

          <div className="flex h-full w-full items-center justify-center text-white lg:justify-end">
            <div className="flex items-center space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/TYM.JE.ESC.Mannouba"
                className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-junior-white"
              >
                <Image
                  className="h-6 w-6"
                  src="/svg/facebook.svg"
                  alt="facebook icon"
                  width={100}
                  height={100}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/tunisian_youth_marketers/"
                className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-junior-white"
              >
                <Image
                  className="h-6 w-6"
                  src="/svg/instagram.svg"
                  alt="instagram icon"
                  width={100}
                  height={100}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/tunisian-youth-marketers-tym/"
                className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-junior-white"
              >
                <Image
                  className="h-6 w-6"
                  src="/svg/linkedin.svg"
                  alt="facebook icon"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <span className="mb-4 max-w-xs text-center text-sm font-medium leading-7 text-junior-white/80 sm:text-base md:max-w-max md:text-lg">
            Copyright © 2023 Tunisian Youth Marketers. All Rights Reserved.
          </span>

          <div className="flex items-center space-x-4 text-junior-white/80">
            <Link
              href="#"
              className="mb-4 w-max text-center text-sm font-medium leading-7 text-junior-white/80 sm:text-base md:text-lg"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="mb-4 w-max text-center text-sm font-medium leading-7 text-junior-white/80 sm:text-base md:text-lg"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
