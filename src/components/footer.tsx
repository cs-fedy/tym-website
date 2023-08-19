import Image from "next/image"
import Link from "next/link"
import FooterItem from "./footer-item"

export default function Footer() {
  return (
    <footer className="px-36 pt-28 pb-8 w-full bg-junior-black">
      <div className="flex flex-col space-y-28 w-full items-center">
        <div className="w-full grid grid-cols-4 items-start">
          <div className="w-full h-full items-center flex">
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
            <span className="uppercase text-junior-white/60 tracking-[0.3px] leading-9">
              menu
            </span>
            <nav className="flex flex-col items-start space-y-4">
              <FooterItem to="/services">services</FooterItem>
              <FooterItem to="/about">a propos</FooterItem>
              <FooterItem to="/news">actualités</FooterItem>
              <FooterItem to="/contact">contact</FooterItem>
              <FooterItem to="/portfolio">portfolio</FooterItem>
            </nav>
          </div>
          <div className="flex flex-col items-start space-y-9">
            <span className="uppercase text-junior-white/60 tracking-[0.3px] leading-9">
              services
            </span>
            <nav className="flex flex-col items-start space-y-4">
              <FooterItem to="#">etude de marché</FooterItem>
              <FooterItem to="#">etude de marketing</FooterItem>
              <FooterItem to="#">communication digitale</FooterItem>
              <FooterItem to="#">événementiel</FooterItem>
            </nav>
          </div>
          <div className="w-full h-full items-center flex justify-end text-white">
            <div className="flex items-center space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/TYM.JE.ESC.Mannouba"
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-junior-white"
              >
                <Image
                  className="w-6 h-6"
                  src="/svg/facebook.svg"
                  alt="facebook icon"
                  width={100}
                  height={100}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/tunisian_youth_marketers/"
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-junior-white"
              >
                <Image
                  className="w-6 h-6"
                  src="/svg/instagram.svg"
                  alt="instagram icon"
                  width={100}
                  height={100}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/tunisian-youth-marketers-tym/"
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-junior-white"
              >
                <Image
                  className="w-6 h-6"
                  src="/svg/linkedin.svg"
                  alt="facebook icon"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="w-full max-w-2xl text-junior-white/80 text-lg leading-7 font-medium mb-4">
            Copyright © 2023 Tunisian Youth Marketers. All Rights Reserved.
          </span>
          <div className="flex items-center text-junior-white/80 space-x-4">
            <Link
              href="#"
              className="text-center text-junior-white/80 text-lg leading-7 font-medium mb-4"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-center text-junior-white/80 text-lg leading-7 font-medium mb-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
