import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Montserrat } from "next/font/google"
import { PropsWithChildren } from "react"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-full relative">
          <Navbar />
          <main className="pt-40 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
