import TestimonialsCard from "./testimonials-card"

export default function Testimonials() {
  return (
    <section className="w-full bg-junior-gray/5 px-36 py-28">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="w-full max-w-xl text-center text-4xl font-bold capitalize leading-tight text-junior-black">
            Témoignages
          </h2>
          <p className="mt-5 w-full max-w-3xl text-center text-lg font-medium leading-7 text-junior-gray">
            Découvrez les expériences authentiques de nos clients, exprimant
            leur reconnaissance.
          </p>
        </div>

        <div className="flex w-full items-start space-x-10">
          <TestimonialsCard
            fullName="ahmed ben bouzid"
            role="cofondateur et CEO opus lab"
            picture="/images/ahmed-ben-bouzid.jpeg"
            label="ahmed ben bouzid cofondateur et CEO opus lab"
            description="Grâce à Tunisian Youth Marketers, Opus Lab a connu une transformation marketing exceptionnelle. Leur expertise a illuminé notre stratégie, propulsant notre startup vers de nouveaux sommets."
          />
          <TestimonialsCard
            fullName="mehdi cherif"
            role="cofondateur dar al afkar"
            picture="/images/mehdi-cherif.jpeg"
            label="mehdi cherif cofondateur dar al afkar"
            description="Dar Al Afkar a bénéficié de l'expertise remarquable de Tunisian Youth Marketers. Leur partenariat a été décisif pour notre startup, ouvrant des horizons passionnants dans le domaine du marketing."
          />
          <TestimonialsCard
            fullName="samy jaidéne"
            role="CEO & founder juniors CV"
            picture="/images/samy-jaidene.jpeg"
            label="samy jaidéne CEO & founder juniors CV"
            description="Les compétences de Tunisian Youth Marketers ont été un atout majeur pour Juniors CV. Leur collaboration a dynamisé notre startup, créant une véritable différence dans notre approche marketing."
          />
        </div>
      </div>
    </section>
  )
}
