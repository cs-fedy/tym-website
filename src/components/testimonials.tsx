import Slider from "./slider"
import TestimonialsCard from "./testimonials-card"

export default function Testimonials() {
  return (
    <section className="mx-auto w-4/5 py-10">
      <div className="flex w-full flex-col items-center space-y-10">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="w-full max-w-sm text-center text-xl font-bold capitalize leading-tight text-junior-black sm:text-2xl md:max-w-lg md:text-3xl">
            Témoignages
          </h2>

          <p className="mt-5 w-full max-w-md text-center text-base font-medium leading-6 text-junior-gray md:max-w-lg lg:max-w-2xl lg:text-lg lg:leading-7">
            Découvrez les expériences authentiques de nos clients, exprimant
            leur reconnaissance.
          </p>
        </div>

        <div className="block w-full lg:hidden">
          <Slider>
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
          </Slider>
        </div>

        <div className="hidden grid-cols-3 items-start gap-10 lg:grid">
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
