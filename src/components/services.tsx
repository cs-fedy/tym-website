import ServiceCard from "./service-card"

export default function Services() {
  return (
    <section className="px-36 py-28 w-full">
      <div className="w-full flex flex-col items-center space-y-16">
        <div className="items-center flex flex-col space-y-4">
          <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
            explorez nos services
          </h2>
          <p className="w-full max-w-3xl text-junior-gray mt-5 text-lg leading-7 text-center font-medium">
            Libérez le potentiel de votre marque avec des stratégies marketing
            sur mesure. Nos services propulsent votre succès dans le paysage
            concurrentiel d&apos;aujourd&apos;hui.
          </p>
        </div>

        <div className="grid grid-cols-4 space-x-10 items-start">
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
