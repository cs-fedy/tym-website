import ServiceCard from "./service-card"

export default function Services() {
  return (
    <section className="w-full px-36 py-28">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="w-full max-w-xl text-center text-4xl font-bold capitalize leading-tight text-junior-black">
            explorez nos services
          </h2>
          <p className="mt-5 w-full max-w-3xl text-center text-lg font-medium leading-7 text-junior-gray">
            Libérez le potentiel de votre marque avec des stratégies marketing
            sur mesure. Nos services propulsent votre succès dans le paysage
            concurrentiel d&apos;aujourd&apos;hui.
          </p>
        </div>

        <div className="grid grid-cols-4 items-start space-x-10">
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
