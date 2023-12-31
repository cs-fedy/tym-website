import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Montserrat } from "next/font/google"
import { PropsWithChildren } from "react"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>

      <body className={montserrat.className}>
        <div className="relative w-full">
          <Navbar />
          <main className="w-full pt-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
