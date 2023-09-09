import AboutUs from "@/components/about-us"
import ContactUs from "@/components/contact-us"
import Facts from "@/components/facts"
import Head from "next/head"

export default function AboutPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="/about" />
      </Head>
      <AboutUs />
      <Facts />
      <ContactUs />
    </>
  )
}
