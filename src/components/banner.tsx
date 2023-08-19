import Image from "next/image"
import Link from "next/link"

export default function Banner() {
  return (
    <header className="relative overflow-x-hidden">
      <div className="bottom-0 -right-28 absolute w-40 h-40">
        <Image src="/svg/dots.svg" alt="dots" width={400} height={400} />
      </div>

      <div className="top-44 -left-28 absolute w-40 h-40">
        <Image src="/svg/dots.svg" alt="dots" width={400} height={400} />
      </div>

      <div className="flex items-center w-full px-36 py-10 justify-between">
        <div className="flex flex-col items-start w-6/12 relative">
          <div className="absolute rotate-[325deg] -translate-x-80 top-0 -translate-y-6 right-0">
            <Image src="/svg/arrow.svg" alt="arrow" width={150} height={150} />
          </div>
          <h1 className="font-bold text-5xl leading-tight text-junior-black w-full max-w-xl">
            Booster <span className="text-junior-red">Votre Stratégie</span>{" "}
            Marketing
          </h1>
          <p className="w-full max-w-xl text-junior-gray mt-5 text-lg leading-7 font-medium">
            Explorez de nouvelles opportunités avec nous - là où la jeunesse et
            le marketing se rejoignent
          </p>
          <Link
            href="/project-estimation"
            className="px-8 py-4 bg-junior-red mt-8 font-bold text-junior-white capitalize rounded-md text-center"
          >
            Élevez Votre Stratégie, Demandez un Devis
          </Link>
        </div>
        <div className="w-6/12 grow-0">
          <Image
            src="/images/executive-team.jpg"
            alt="executive team cover"
            className="rounded-xl"
            width={1047}
            height={750}
          />
        </div>
      </div>
    </header>
  )
}
