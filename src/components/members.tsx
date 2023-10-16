import MemberCard from "./member-card"
import Slider from "./slider"

export default function Members() {
  return (
    <section className="mx-auto w-4/5 py-20">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="w-full max-w-sm text-center text-xl font-bold capitalize leading-tight text-junior-black sm:text-2xl md:max-w-lg md:text-3xl">
            membres executif
          </h2>

          <p className="mt-5 w-full max-w-md text-center text-base font-medium leading-6 text-junior-gray md:max-w-lg lg:max-w-2xl lg:text-lg lg:leading-7">
            Découvrez les visages qui dirigent notre cabinet de conseil et
            conduisent avec succès. Rencontrez notre équipe dirigeante, symbole
            d&apos;expertise et d&apos;innovation.
          </p>
        </div>

        <div className="block w-full lg:hidden">
          <Slider>
            <MemberCard
              picture="/images/amira-ellouh.jpeg"
              label="image de amira ellouh"
              fullName="amira ellouh"
              role="présidente"
            />
            <MemberCard
              picture="/images/lina-haj-kasem.jpeg"
              label="image de lina haj kacem"
              fullName="lina haj kacem"
              role="vice présidente"
            />
            <MemberCard
              picture="/images/amal-said.jpeg"
              label="image de amal said"
              fullName="amal said"
              role="secrétaire général"
            />
            <MemberCard
              picture="/images/baha-abidi.jpeg"
              label="image de baha abidi"
              fullName="baha abidi"
              role="trésorier"
            />
            <MemberCard
              picture="/images/nessrine-dhieb.jpeg"
              label="image de nessrine dhieb"
              fullName="nessrine dhieb"
              role="responsable resources humaines"
            />
            <MemberCard
              picture="/images/nour-soltani.jpeg"
              label="image de nour soltani"
              fullName="nour soltani"
              role="responsable management de la qualité"
            />
            <MemberCard
              picture="/images/khalil-rjab.jpeg"
              label="image de khalil rjab"
              fullName="khalil rjab"
              role="responsable développement commerciale"
            />
            <MemberCard
              picture="/images/oumaima-rabaoui.jpeg"
              label="image de oumaima rabaoui"
              fullName="oumaima rabaoui"
              role="responsable études et conseil"
            />
            <MemberCard
              picture="/images/amira-ellouh.jpeg"
              label="image de amira ellouh"
              fullName="amira ellouh"
              role="responsable marketing et communication par interim"
            />
            {/* <MemberCard
            picture="/images/mohamed-rezgui.jpg"
            label="image de mohamed rezgui"
            fullName="mohamed rezgui"
            role="responsable marketing et communication"
          /> */}
          </Slider>
        </div>

        <div className="hidden grid-cols-3 items-start gap-10 lg:grid">
          <MemberCard
            picture="/images/amira-ellouh.jpeg"
            label="image de amira ellouh"
            fullName="amira ellouh"
            role="présidente"
          />
          <MemberCard
            picture="/images/lina-haj-kasem.jpeg"
            label="image de lina haj kacem"
            fullName="lina haj kacem"
            role="vice présidente"
          />
          <MemberCard
            picture="/images/amal-said.jpeg"
            label="image de amal said"
            fullName="amal said"
            role="secrétaire général"
          />
          <MemberCard
            picture="/images/baha-abidi.jpeg"
            label="image de baha abidi"
            fullName="baha abidi"
            role="trésorier"
          />
          <MemberCard
            picture="/images/nessrine-dhieb.jpeg"
            label="image de nessrine dhieb"
            fullName="nessrine dhieb"
            role="responsable resources humaines"
          />
          <MemberCard
            picture="/images/nour-soltani.jpeg"
            label="image de nour soltani"
            fullName="nour soltani"
            role="responsable management de la qualité"
          />
          <MemberCard
            picture="/images/khalil-rjab.jpeg"
            label="image de khalil rjab"
            fullName="khalil rjab"
            role="responsable développement commerciale"
          />
          <MemberCard
            picture="/images/oumaima-rabaoui.jpeg"
            label="image de oumaima rabaoui"
            fullName="oumaima rabaoui"
            role="responsable études et conseil"
          />
          <MemberCard
            picture="/images/amira-ellouh.jpeg"
            label="image de amira ellouh"
            fullName="amira ellouh"
            role="responsable marketing et communication par interim"
          />
          {/* <MemberCard
            picture="/images/mohamed-rezgui.jpg"
            label="image de mohamed rezgui"
            fullName="mohamed rezgui"
            role="responsable marketing et communication"
          /> */}
        </div>
      </div>
    </section>
  )
}
