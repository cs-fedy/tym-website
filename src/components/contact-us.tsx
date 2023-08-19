import Link from "next/link"

export default function ContactUs() {
  return (
    <section className="px-36 py-28 w-full bg-junior-red">
      <div className="flex flex-col items-center">
        <p className="w-full max-w-2xl text-center text-junior-white/80 text-lg leading-7 font-medium mb-4">
          Contactez-nous pour des solutions marketing sur mesure et inspirantes.
        </p>
        <h2 className="font-bold text-3xl leading-tight text-junior-white text-center w-full max-w-4xl mb-9">
          Échangez avec nos Experts pour Transformer vos Idées en Stratégies
          Marketing Gagnantes
        </h2>
        <Link
          href="mailto:tymjuniorentreprise@gmail.com"
          className="px-20 py-4 bg-junior-white font-bold text-junior-black capitalize rounded-md text-center"
        >
          contacter nous
        </Link>
      </div>
    </section>
  )
}
