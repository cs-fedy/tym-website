import AboutUs from "@/components/about-us"
import Head from "next/head"

export default function AboutPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="/about" />
      </Head>
      <AboutUs />
    </>
  )
}
