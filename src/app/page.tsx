import AboutUs from "@/components/about-us"
import Banner from "@/components/banner"
import ContactUs from "@/components/contact-us"
import Members from "@/components/members"
import Numbers from "@/components/numbers"
import Partners from "@/components/partners"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="/" />
      </Head>

      <Banner />
      <Services />
      <AboutUs />
      <Members />
      <Numbers />
      <Testimonials />
      <Partners />
      <ContactUs />
    </>
  )
}
