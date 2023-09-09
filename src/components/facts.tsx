import Image from "next/image"
import ProgressCircle from "./progress-circle"

export default function Facts() {
  return (
    <section className="w-2/4 py-28 mx-auto flex flex-col items-start space-y-16">
      <div className="flex flex-col items-start space-y-8">
        <div className="aspect-video h-80 rounded-3xl overflow-hidden border-2 border-junior-black">
          <Image
            width={680}
            height={680}
            alt="france selected map"
            src="/images/france-selected.png"
            className="object-contain"
          />
        </div>

        <p className="max-w-xl text-junior-gray text-xl tracking-wide leading-8 font-semibold">
          &quot;Junior entreprise&quot; est mouvement international qui a débuté
          en 1969 en France
        </p>
      </div>

      <div className="w-full flex flex-col items-start space-y-10">
        <div className="w-full mx-auto flex items-center space-x-10">
          <ProgressCircle progress={92} />
          <p className="w-full max-w-xl text-junior-gray text-lg leading-7 font-semibold">
            92% des Junior-Entrepreneurs trouvent leur premiers emplois en moins
            de 3 mois avant l&apos;obtention de leur diplôme.
          </p>
        </div>
        <div className="w-full mx-auto flex items-center space-x-10">
          <ProgressCircle progress={98} />
          <p className="w-full max-w-xl text-junior-gray text-lg leading-7 font-semibold">
            98% des Junior-Entrepreneurs ont fondé leur propres entreprises.
          </p>
        </div>
      </div>

      <div className="border border-junior-black px-16 py-8 w-full flex items-center space-x-10">
        <div className="w-full flex flex-col items-start space-y-4">
          <div className="w-full flex space-x-5 items-center flex-wrap">
            <div className="flex items-center space-x-2 w-max">
              <span className="text-junior-red font-bold text-xl">+180</span>
              <span className="text-junior-black font-semibold text-lg">
                Projets par an
              </span>
            </div>

            <div className="flex items-center space-x-2 w-max">
              <span className="text-junior-red font-bold text-xl">+2500</span>
              <span className="text-junior-black font-semibold text-lg">
                Juniors entrepreneurs
              </span>
            </div>
          </div>
          <div className="w-full flex space-x-5 items-center flex-wrap">
            <div className="flex items-center space-x-2 w-max">
              <span className="text-junior-red font-bold text-xl">
                +420 TND
              </span>
              <span className="text-junior-black font-semibold text-lg">
                Chiffres d&apos;affaire annuel
              </span>
            </div>

            <div className="flex items-center space-x-2 w-max">
              <span className="text-junior-red font-bold text-xl">+500</span>
              <span className="text-junior-black font-semibold text-lg">
                Formations par an
              </span>
            </div>
          </div>
        </div>
        <div className="grow-0 w-1/4">
          <Image
            src="/images/jet-logo.png"
            width={2376}
            height={1323}
            alt="junior entreprise tunisie logo"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-start space-y-8">
        <h2 className="font-bold uppercase text-4xl leading-tight text-junior-red">
          tym junior entreprise
        </h2>

        <div className="w-full flex items-start space-x-16">
          <Image
            width={240}
            height={312}
            alt="tunisia map"
            className="object-contain"
            src="/svg/tunisia-map.svg"
          />

          <div className="flex flex-col items-start space-y-8 mt-8">
            <h3 className="font-bold text-3xl tracking-wide leading-10 text-junior-black">
              Les jeunes marketeurs tunisiens junior est l&apos;association
              junior entreprise de l&apos;ESCT (Ecole Supérieure de Commerce de
              Tunis)
            </h3>

            <p className="max-w-xl text-junior-gray text-xl tracking-wide leading-8 font-semibold">
              Il s&apos;agit d&apos;un{" "}
              <span className="text-junior-red font-bold text-xl">
                cabinet de conseil
              </span>{" "}
              spéciqlisé en marketing qui offre une variété de services
              répondant aux attentes de ses{" "}
              <span className="text-junior-red font-bold text-xl">clients</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
