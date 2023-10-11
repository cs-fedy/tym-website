import Link from "next/link"

export default function ContactUs() {
  return (
    <section className="w-full bg-junior-red px-36 py-28">
      <div className="flex flex-col items-center">
        <p className="mb-4 w-full max-w-2xl text-center text-lg font-medium leading-7 text-junior-white/80">
          Contactez-nous pour des solutions marketing sur mesure et inspirantes.
        </p>
        <h2 className="mb-9 w-full max-w-4xl text-center text-3xl font-bold leading-tight text-junior-white">
          Échangez avec nos Experts pour Transformer vos Idées en Stratégies
          Marketing Gagnantes
        </h2>
        <Link
          href="mailto:tymjuniorentreprise@gmail.com"
          className="rounded-md bg-junior-white px-20 py-4 text-center font-bold capitalize text-junior-black"
        >
          contactez nous
        </Link>
      </div>
    </section>
  )
}
