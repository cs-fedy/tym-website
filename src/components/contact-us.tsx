import Link from "next/link"

export default function ContactUs() {
  return (
    <section className="w-full bg-junior-red py-28">
      <div className="mx-auto flex w-4/5 flex-col items-center">
        <p className="mb-4 w-full max-w-xs text-center text-sm font-medium leading-5 text-junior-white/80 sm:text-base md:max-w-sm md:text-lg md:leading-7 lg:max-w-md">
          Contactez-nous pour des solutions marketing sur mesure et inspirantes.
        </p>

        <h2 className="mb-9 w-full max-w-sm text-center text-lg font-bold leading-tight text-junior-white sm:text-xl md:max-w-lg md:text-2xl lg:text-3xl">
          Échangez avec nos Experts pour Transformer vos Idées en Stratégies
          Marketing Gagnantes
        </h2>

        <Link
          href="mailto:tymjuniorentreprise@gmail.com"
          className="rounded-md bg-junior-white px-16 py-3 text-center text-sm font-bold capitalize text-junior-black"
        >
          contactez nous
        </Link>
      </div>
    </section>
  )
}
