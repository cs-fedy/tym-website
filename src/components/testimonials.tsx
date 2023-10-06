import TestimonialsCard from "./testimonials-card"

export default function Testimonials() {
  return (
    <section className="px-36 py-28 w-full bg-junior-gray/5">
      <div className="w-full flex flex-col items-center space-y-16">
        <div className="items-center flex flex-col space-y-4">
          <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
            Témoignages
          </h2>
          <p className="w-full max-w-3xl text-junior-gray mt-5 text-lg leading-7 text-center font-medium">
            Découvrez les expériences authentiques de nos clients, exprimant
            leur reconnaissance.
          </p>
        </div>

        <div className="flex items-start space-x-10 w-full">
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
