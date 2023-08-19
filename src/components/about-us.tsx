import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="px-36 py-28 w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-around">
        {/* team picture */}
        <div className="w-5/12 relative">
          <Image
            src="/images/tym-team.jpg"
            className="rounded-xl"
            alt="tunisian youth marketer team cover"
            width={1047}
            height={750}
          />
          <div className="px-10 py-5 rounded-lg flex flex-col bg-junior-red items-center w-max absolute translate-x-1/3 translate-y-1/3 bottom-0 right-0">
            <div className="flex items-center space-x-2">
              <span className="text-6xl font-bold text-junior-white">6</span>
              <span className="text-junior-white font-bold text-xl w-full max-w-[5em] text-center capitalize">
                eme
              </span>
            </div>
            <span className="text-junior-white font-bold text-xl w-full max-w-[5em] text-center capitalize">
              generation
            </span>
          </div>
        </div>
        <div className="w-5/12 flex flex-col items-start">
          <span className="uppercase text-junior-gray tracking-[0.3px] leading-9 mb-5">
            a propos nous
          </span>
          <h2 className="font-bold text-5xl leading-tight text-junior-black w-full max-w-lg mb-7">
            Les Jeunes Marketeurs Tunisiens junior
          </h2>
          <p className="w-full max-w-xl text-junior-gray mt-5 text-lg leading-7 font-medium mb-9">
            reconnue par la TYM Junior Entreprise s&apos;agit d&apos;un cabinet
            de conseil créé en 2017 géré 100% par des étudiants de l&apos;école
            supérieure de commerce Tunis, Spécialisé en Marketing et qui offre
            une variété de services répondant aux attentes des clients.
          </p>
          <Link
            href="/about-us"
            className="underline capitalize leading-8 text-junior-black font-bold"
          >
            learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
