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
              picture="/images/amira-ellouh.jpg"
              label="image de amira ellouh"
              fullName="amira ellouh"
              role="présidente"
            />
            <MemberCard
              picture="/images/wided-mekki.jpg"
              label="image de wided mekki"
              fullName="wided mekki"
              role="vice présidente"
            />
            <MemberCard
              picture="/images/abir-ouerghi.jpg"
              label="image de abir ouerghi"
              fullName="abir ouerghi"
              role="secrétaire général"
            />
            <MemberCard
              picture="/images/khalil-zouari.jpg"
              label="image de khalil zouari"
              fullName="khalil zouari"
              role="trésorier"
            />
            <MemberCard
              picture="/images/malek-zareglayoun.jpg"
              label="image de malek zareglayoun"
              fullName="malek zareglayoun"
              role="responsable marketing et communication"
            />
            <MemberCard
              picture="/images/mohamed-derbel.jpg"
              label="image de mohamed derbel"
              fullName="mohamed derbel"
              role="responsable dev commercial"
            />
            <MemberCard
              picture="/images/olfa-ben-tkhayat.jpg"
              label="image de olfa ben tkhayat"
              fullName="olfa ben tkhayat"
              role="responsable rh et formations"
            />
            <MemberCard
              picture="/images/siwar-brahmi.jpg"
              label="image de siwar brahem"
              fullName="siwar brahem"
              role="responsable études et conseils"
            />
            <MemberCard
              picture="/images/siwar-brahmi.jpg"
              label="image de siwar brahem"
              fullName="siwar brahem"
              role="responsable études et conseils"
            />
          </Slider>
        </div>

        <div className="hidden grid-cols-3 items-start gap-10 lg:grid">
          <MemberCard
            picture="/images/amira-ellouh.jpg"
            label="image de amira ellouh"
            fullName="amira ellouh"
            role="présidente"
          />
          <MemberCard
            picture="/images/wided-mekki.jpg"
            label="image de wided mekki"
            fullName="wided mekki"
            role="vice présidente"
          />
          <MemberCard
            picture="/images/abir-ouerghi.jpg"
            label="image de abir ouerghi"
            fullName="abir ouerghi"
            role="secrétaire général"
          />
          <MemberCard
            picture="/images/khalil-zouari.jpg"
            label="image de khalil zouari"
            fullName="khalil zouari"
            role="trésorier"
          />
          <MemberCard
            picture="/images/malek-zareglayoun.jpg"
            label="image de malek zareglayoun"
            fullName="malek zareglayoun"
            role="responsable marketing et communication"
          />
          <MemberCard
            picture="/images/mohamed-derbel.jpg"
            label="image de mohamed derbel"
            fullName="mohamed derbel"
            role="responsable dev commercial"
          />
          <MemberCard
            picture="/images/olfa-ben-tkhayat.jpg"
            label="image de olfa ben tkhayat"
            fullName="olfa ben tkhayat"
            role="responsable rh et formations"
          />
          <MemberCard
            picture="/images/siwar-brahmi.jpg"
            label="image de siwar brahem"
            fullName="siwar brahem"
            role="responsable études et conseils"
          />
          <MemberCard
            picture="/images/siwar-brahmi.jpg"
            label="image de siwar brahem"
            fullName="siwar brahem"
            role="responsable études et conseils"
          />
        </div>
      </div>
    </section>
  )
}
