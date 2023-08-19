import MemberCard from "./member-card"

export default function Members() {
  return (
    <section className="px-36 py-28 w-full">
      <div className="w-full flex flex-col items-center space-y-16">
        <div className="items-center flex flex-col space-y-4">
          <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
            membres executifs
          </h2>
          <p className="w-full max-w-3xl text-junior-gray mt-5 text-lg leading-7 text-center font-medium">
            Découvrez les visages qui dirigent avec vision et conduisent avec
            succès. Rencontrez notre équipe dirigeante, symbole d&apos;expertise
            et d&apos;innovation.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-10 items-start">
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
        </div>
      </div>
    </section>
  )
}
