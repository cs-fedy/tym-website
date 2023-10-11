import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="flex w-full flex-col items-center px-36 py-28">
      <div className="flex w-full items-center justify-around">
        {/* team picture */}
        <div className="relative w-5/12">
          <Image
            src="/images/tym-team.jpg"
            className="rounded-xl"
            alt="tunisian youth marketer team cover"
            width={1047}
            height={750}
          />
          <div className="absolute bottom-0 right-0 flex w-max translate-x-1/3 translate-y-1/3 flex-col items-center rounded-lg bg-junior-red px-10 py-5">
            <div className="flex items-center space-x-2">
              <span className="text-6xl font-bold text-junior-white">6</span>
              <span className="w-full max-w-[5em] text-center text-xl font-bold capitalize text-junior-white">
                eme
              </span>
            </div>
            <span className="w-full max-w-[5em] text-center text-xl font-bold capitalize text-junior-white">
              generation
            </span>
          </div>
        </div>
        <div className="flex w-5/12 flex-col items-start">
          <span className="mb-5 uppercase leading-9 tracking-[0.3px] text-junior-gray">
            a propos de nous
          </span>
          <h2 className="mb-7 w-full max-w-lg text-5xl font-bold leading-tight text-junior-black">
            Les Jeunes Marketeurs Tunisiens junior
          </h2>
          <p className="mb-9 mt-5 w-full max-w-xl text-lg font-medium leading-7 text-junior-gray">
            Reconnue sous le nom de la TYM Junior Entreprise s&apos;agit
            d&apos;un cabinet de conseil créé en 2017 géré 100% par des
            étudiants de l&apos;école supérieure de commerce de Tunis,
            Spécialisé en Marketing et qui offre une variété de services
            répondant aux attentes des clients.
          </p>
          <Link
            href="/about-us"
            className="font-bold capitalize leading-8 text-junior-black underline"
          >
            en savoir plus
          </Link>
        </div>
      </div>
    </section>
  )
}
