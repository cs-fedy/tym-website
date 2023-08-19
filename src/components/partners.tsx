import PartnersSlider from "./partners-slider"

export default function Partners() {
  return (
    <section className="px-36 py-28 w-full">
      <div className="w-full flex flex-col items-center space-y-16">
        <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
          nos partenaires
        </h2>

        <PartnersSlider
          size={4}
          isInfinite={true}
          items={[
            { src: "/images/opus-lab.png", label: "opus lab logo" },
            {
              src: "/images/api.png",
              label:
                "agence de promotion de l'industrie et de l'innovation logo",
            },
            {
              src: "/images/junior-cv.png",
              label: "junior cv logo",
            },
            {
              src: "/images/phebus-voyage.png",
              label: "phebus voyage logo",
            },
            {
              src: "/images/zerda-digital.webp",
              label: "zerda digital logo",
            },
            {
              src: "/images/spik.png",
              label: "spik logo",
            },
            {
              src: "/images/corp.png",
              label: "corp logo",
            },
            {
              src: "/images/startup-village.png",
              label: "startup village",
            },
          ]}
        />
      </div>
    </section>
  )
}
