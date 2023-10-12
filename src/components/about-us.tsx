import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="mx-auto flex w-4/5 flex-col items-center py-20">
      <div className="flex w-full flex-col-reverse items-center justify-around space-y-10 lg:flex-row lg:space-y-0">
        {/* team picture */}
        <div className="relative mr-auto mt-8 w-11/12 lg:mt-0 lg:w-6/12">
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

        <div className="flex w-full flex-col items-start lg:w-5/12">
          <span className="text-xs uppercase leading-9 tracking-[0.3px] text-junior-gray lg:mb-5 lg:text-sm">
            a propos de nous
          </span>

          <h2 className="w-full text-2xl font-bold leading-tight text-junior-black lg:mb-7 lg:max-w-lg lg:text-4xl">
            Les Jeunes Marketeurs Tunisiens junior
          </h2>

          <p className="my-5 w-full text-sm font-medium leading-7 text-junior-gray lg:mb-9 lg:max-w-lg lg:text-base lg:text-lg">
            Reconnue sous le nom de la TYM Junior Entreprise s&apos;agit
            d&apos;un cabinet de conseil créé en 2017 géré 100% par des
            étudiants de l&apos;école supérieure de commerce de Tunis,
            Spécialisé en Marketing et qui offre une variété de services
            répondant aux attentes des clients.
          </p>

          <Link
            href="/about-us"
            className="text-sm font-bold capitalize leading-8 text-junior-black underline lg:text-base"
          >
            en savoir plus
          </Link>
        </div>
      </div>
    </section>
  )
}
