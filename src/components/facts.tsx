import Image from "next/image"
import ProgressCircle from "./progress-circle"

export default function Facts() {
  return (
    <section className="mx-auto flex w-2/4 flex-col items-start space-y-16 py-28">
      <div className="flex flex-col items-start space-y-8">
        <div className="aspect-video h-80 overflow-hidden rounded-3xl border-2 border-junior-black">
          <Image
            width={680}
            height={680}
            alt="france selected map"
            src="/images/france-selected.png"
            className="object-contain"
          />
        </div>

        <p className="max-w-xl text-xl font-semibold leading-8 tracking-wide text-junior-gray">
          &quot;Junior entreprise&quot; est mouvement international qui a débuté
          en 1969 en France
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-10">
        <div className="mx-auto flex w-full items-center space-x-10">
          <ProgressCircle progress={92} />
          <p className="w-full max-w-xl text-lg font-semibold leading-7 text-junior-gray">
            92% des Junior-Entrepreneurs trouvent leur premiers emplois en moins
            de 3 mois avant l&apos;obtention de leur diplôme.
          </p>
        </div>
        <div className="mx-auto flex w-full items-center space-x-10">
          <ProgressCircle progress={98} />
          <p className="w-full max-w-xl text-lg font-semibold leading-7 text-junior-gray">
            98% des Junior-Entrepreneurs ont fondé leur propres entreprises.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center space-x-10 border border-junior-black px-16 py-8">
        <div className="flex w-full flex-col items-start space-y-4">
          <div className="flex w-full flex-wrap items-center space-x-5">
            <div className="flex w-max items-center space-x-2">
              <span className="text-xl font-bold text-junior-red">+180</span>
              <span className="text-lg font-semibold text-junior-black">
                Projets par an
              </span>
            </div>

            <div className="flex w-max items-center space-x-2">
              <span className="text-xl font-bold text-junior-red">+2500</span>
              <span className="text-lg font-semibold text-junior-black">
                Juniors entrepreneurs
              </span>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center space-x-5">
            <div className="flex w-max items-center space-x-2">
              <span className="text-xl font-bold text-junior-red">
                +420 TND
              </span>
              <span className="text-lg font-semibold text-junior-black">
                Chiffres d&apos;affaire annuel
              </span>
            </div>

            <div className="flex w-max items-center space-x-2">
              <span className="text-xl font-bold text-junior-red">+500</span>
              <span className="text-lg font-semibold text-junior-black">
                Formations par an
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/4 grow-0">
          <Image
            src="/images/jet-logo.png"
            width={2376}
            height={1323}
            alt="junior entreprise tunisie logo"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-start space-y-8">
        <h2 className="text-4xl font-bold uppercase leading-tight text-junior-red">
          tym junior entreprise
        </h2>

        <div className="flex w-full items-start space-x-16">
          <Image
            width={240}
            height={312}
            alt="tunisia map"
            className="object-contain"
            src="/svg/tunisia-map.svg"
          />

          <div className="mt-8 flex flex-col items-start space-y-8">
            <h3 className="text-3xl font-bold leading-10 tracking-wide text-junior-black">
              Les jeunes marketeurs tunisiens junior est l&apos;association
              junior entreprise de l&apos;ESCT (Ecole Supérieure de Commerce de
              Tunis)
            </h3>

            <p className="max-w-xl text-xl font-semibold leading-8 tracking-wide text-junior-gray">
              Il s&apos;agit d&apos;un{" "}
              <span className="text-xl font-bold text-junior-red">
                cabinet de conseil
              </span>{" "}
              spéciqlisé en marketing qui offre une variété de services
              répondant aux attentes de ses{" "}
              <span className="text-xl font-bold text-junior-red">clients</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
