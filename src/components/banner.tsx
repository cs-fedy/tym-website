import Image from "next/image"
import Link from "next/link"

export default function Banner() {
  return (
    <header className="relative overflow-x-hidden">
      <div className="absolute -right-28 bottom-0 hidden h-40 w-40 lg:block">
        <Image src="/svg/dots.svg" alt="dots" width={400} height={400} />
      </div>

      <div className="absolute -left-28 top-44 hidden h-40 w-40 lg:block">
        <Image src="/svg/dots.svg" alt="dots" width={400} height={400} />
      </div>

      <div className="mx-auto flex w-4/5 flex-col items-center justify-between space-y-10 lg:flex-row lg:space-y-0">
        <div className="relative flex w-full flex-col items-start lg:w-6/12">
          <div className="absolute right-0 top-0 hidden -translate-x-80 -translate-y-6 rotate-[325deg] lg:block">
            <Image src="/svg/arrow.svg" alt="arrow" width={150} height={150} />
          </div>

          <h1 className="w-full max-w-[16rem] text-2xl font-bold leading-tight text-junior-black lg:max-w-xl lg:text-5xl">
            Boostez <span className="text-junior-red">Votre Stratégie</span>{" "}
            Marketing
          </h1>

          <p className="mt-5 w-full max-w-sm text-sm font-medium leading-6 text-junior-gray lg:max-w-xl lg:text-lg lg:leading-7">
            Explorez de nouvelles opportunités avec nous - là où la jeunesse et
            le marketing se rejoignent
          </p>

          <Link
            href="/project_estimation"
            className="mt-6 rounded-md bg-junior-red px-6 py-3 text-center text-sm font-bold capitalize text-junior-white"
          >
            Élevez Votre Stratégie, Demandez un Devis
          </Link>
        </div>

        <div className="w-full lg:w-6/12">
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
