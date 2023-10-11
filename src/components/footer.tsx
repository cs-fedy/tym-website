import Image from "next/image"
import Link from "next/link"
import FooterItem from "./footer-item"

export default function Footer() {
  return (
    <footer className="w-full bg-junior-black px-36 pb-8 pt-28">
      <div className="flex w-full flex-col items-center space-y-28">
        <div className="grid w-full grid-cols-4 items-start">
          <div className="flex h-full w-full items-center">
            <div className="h-44 w-44">
              <Image
                src="/svg/tym-logo-vertical.svg"
                alt="tunisian youth marketers logo"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-9">
            <span className="uppercase leading-9 tracking-[0.3px] text-junior-white/60">
              menu
            </span>
            <nav className="flex flex-col items-start space-y-4">
              <FooterItem to="/services">services</FooterItem>
              <FooterItem to="/about">a propos</FooterItem>
              <FooterItem to="/news">actualités</FooterItem>
              <FooterItem to="/portfolio">portfolio</FooterItem>
            </nav>
          </div>
          <div className="flex flex-col items-start space-y-9">
            <span className="uppercase leading-9 tracking-[0.3px] text-junior-white/60">
              services
            </span>
            <nav className="flex flex-col items-start space-y-4">
              <FooterItem to="#">etude de marché</FooterItem>
              <FooterItem to="#">etude de marketing</FooterItem>
              <FooterItem to="#">communication digitale</FooterItem>
              <FooterItem to="#">événementiel</FooterItem>
            </nav>
          </div>
          <div className="flex h-full w-full items-center justify-end text-white">
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
        <div className="flex w-full items-center justify-between">
          <span className="mb-4 w-full max-w-2xl text-lg font-medium leading-7 text-junior-white/80">
            Copyright © 2023 Tunisian Youth Marketers. All Rights Reserved.
          </span>
          <div className="flex items-center space-x-4 text-junior-white/80">
            <Link
              href="#"
              className="mb-4 text-center text-lg font-medium leading-7 text-junior-white/80"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="mb-4 text-center text-lg font-medium leading-7 text-junior-white/80"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
