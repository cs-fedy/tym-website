import Image from "next/image"
import Link from "next/link"

export default function Banner() {
  return (
    <header className="relative overflow-x-hidden">
      <div className="absolute -right-28 bottom-0 h-40 w-40">
        <Image src="/svg/dots.svg" alt="dots" width={400} height={400} />
      </div>

      <div className="absolute -left-28 top-44 h-40 w-40">
        <Image src="/svg/dots.svg" alt="dots" width={400} height={400} />
      </div>

      <div className="flex w-full items-center justify-between px-36 py-10">
        <div className="relative flex w-6/12 flex-col items-start">
          <div className="absolute right-0 top-0 -translate-x-80 -translate-y-6 rotate-[325deg]">
            <Image src="/svg/arrow.svg" alt="arrow" width={150} height={150} />
          </div>
          <h1 className="w-full max-w-xl text-5xl font-bold leading-tight text-junior-black">
            Boostez <span className="text-junior-red">Votre Stratégie</span>{" "}
            Marketing
          </h1>
          <p className="mt-5 w-full max-w-xl text-lg font-medium leading-7 text-junior-gray">
            Explorez de nouvelles opportunités avec nous - là où la jeunesse et
            le marketing se rejoignent
          </p>
          <Link
            href="/project_estimation"
            className="mt-8 rounded-md bg-junior-red px-8 py-4 text-center font-bold capitalize text-junior-white"
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
