import Image from "next/image"
import ProgressCircle from "./progress-circle"

export default function Facts() {
  return (
    <section className="mx-auto flex w-4/5 flex-col items-start space-y-16 py-20 md:w-2/4">
      <div className="flex flex-col items-start space-y-8">
        <div className="aspect-video w-full overflow-hidden rounded-3xl border-2 border-junior-black">
          <Image
            width={680}
            height={680}
            alt="france selected map"
            src="/images/france-selected.png"
            className="object-contain"
          />
        </div>

        <p className="max-w-xl text-sm font-semibold leading-5 tracking-wide text-junior-gray md:text-base md:leading-6 lg:text-lg lg:leading-7">
          &quot;Junior entreprise&quot; est mouvement international qui a débuté
          en 1969 en France
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-10">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <ProgressCircle progress={92} />
          <p className="w-full max-w-lg text-xs font-semibold leading-6 text-junior-gray md:text-sm lg:text-base">
            92% des Junior-Entrepreneurs trouvent leur premiers emplois en moins
            de 3 mois avant l&apos;obtention de leur diplôme.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <ProgressCircle progress={98} />
          <p className="w-full max-w-lg text-xs font-semibold leading-6 text-junior-gray md:text-sm lg:text-base">
            98% des Junior-Entrepreneurs ont fondé leur propres entreprises.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center border border-junior-black p-8 lg:flex-row">
        <div className="flex w-3/4 flex-wrap items-start gap-6 lg:gap-3">
          <div className="flex w-max flex-col items-start gap-2 lg:flex-row lg:items-center">
            <span className="text-lg font-bold text-junior-red">+180</span>
            <span className="font-semibold text-junior-black">
              Projets par an
            </span>
          </div>

          <div className="flex w-max flex-col items-start gap-2 lg:flex-row lg:items-center">
            <span className="text-lg font-bold text-junior-red">+2500</span>
            <span className="font-semibold text-junior-black">
              Juniors entrepreneurs
            </span>
          </div>

          <div className="flex w-max flex-col items-start gap-2 lg:flex-row lg:items-center">
            <span className="text-lg font-bold text-junior-red">+420 TND</span>
            <span className="font-semibold text-junior-black">
              Chiffres d&apos;affaire annuel
            </span>
          </div>

          <div className="flex w-max flex-col items-start gap-2 lg:flex-row lg:items-center">
            <span className="text-lg font-bold text-junior-red">+500</span>
            <span className="font-semibold text-junior-black">
              Formations par an
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <Image
            src="/images/jet-logo.png"
            width={2376}
            height={1323}
            alt="junior entreprise tunisie logo"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-start space-y-8">
        <h2 className="text-xl font-bold uppercase leading-tight text-junior-red sm:text-2xl md:max-w-lg md:text-3xl">
          tym junior entreprise
        </h2>

        <div className="flex w-full flex-col items-start gap-16 lg:flex-row">
          <Image
            width={240}
            height={312}
            alt="tunisia map"
            className="object-contain"
            src="/svg/tunisia-map.svg"
          />

          <div className="mt-0 flex flex-col items-start space-y-8 lg:mt-8">
            <h3 className="text-sm font-bold leading-6 tracking-wide text-junior-black lg:text-3xl lg:leading-10">
              Les jeunes marketeurs tunisiens junior est l&apos;association
              junior entreprise de l&apos;ESCT (Ecole Supérieure de Commerce de
              Tunis)
            </h3>

            <p className="max-w-xl text-sm font-semibold leading-6 tracking-wide text-junior-gray lg:leading-7">
              Il s&apos;agit d&apos;un{" "}
              <span className="font-bold text-junior-red lg:text-xl">
                cabinet de conseil
              </span>{" "}
              spéciqlisé en marketing qui offre une variété de services
              répondant aux attentes de ses{" "}
              <span className="font-bold text-junior-red lg:text-xl">
                clients
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
