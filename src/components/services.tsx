import ServiceCard from "./service-card"

export default function Services() {
  return (
    <section className="mx-auto w-4/5 py-20">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="w-full max-w-sm text-center text-xl font-bold capitalize leading-tight text-junior-black sm:text-2xl md:max-w-lg md:text-3xl">
            explorez nos services
          </h2>

          <p className="mt-5 w-full max-w-md text-center text-base font-medium leading-6 text-junior-gray md:max-w-lg lg:max-w-2xl lg:text-lg lg:leading-7">
            Libérez le potentiel de votre marque avec des stratégies marketing
            sur mesure. Nos services propulsent votre succès dans le paysage
            concurrentiel d&apos;aujourd&apos;hui.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Etude de marché"
            icon="/svg/chart-line.svg"
            label="chart line icon"
            description="Exploration approfondie du marché pour des décisions stratégiques éclairées."
          />
          <ServiceCard
            title="Etude de marketing"
            icon="/svg/bullhorn.svg"
            label="Etude de marketing icon"
            description="Éclairage stratégique pour cibler, fidéliser et renforcer l'image de votre marque."
          />
          <ServiceCard
            title="Communication digitale"
            icon="/svg/users.svg"
            label="Communication icon"
            description="Stratégie digitale pour rayonner et engager efficacement votre audience en ligne."
          />
          <ServiceCard
            title="Événementiel"
            icon="/svg/calendar-check.svg"
            label="Événementiel icon"
            description="Créez des événements marquants, amplifiant votre impact et votre visibilité."
          />
        </div>
      </div>
    </section>
  )
}
