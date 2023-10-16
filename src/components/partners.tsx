import Partner from "./partner"
import Slider from "./slider"

export default function Partners() {
  return (
    <section className="mx-auto w-4/5 py-20">
      <div className="flex flex-col items-center gap-12">
        <h2 className="w-full max-w-sm text-center text-xl font-bold capitalize leading-tight text-junior-black sm:text-2xl md:max-w-lg md:text-3xl">
          nos partenaires
        </h2>

        <div className="block w-full lg:hidden">
          <Slider show={1}>
            <Partner src="/images/opus-lab.png" label="opus lab logo" />
            <Partner
              src="/images/api.png"
              label="agence de promotion de l'industrie et de l'innovation logo"
            />
            <Partner src="/images/junior-cv.png" label="junior cv logo" />
            <Partner
              src="/images/phebus-voyage.png"
              label="phebus voyage logo"
            />
            <Partner
              src="/images/zerda-digital.webp"
              label="zerda digital logo"
            />
            <Partner src="/images/spik.png" label="spik logo" />
            <Partner src="/images/corp.png" label="corp logo" />
            <Partner
              src="/images/startup-village.png"
              label="startup village"
            />
          </Slider>
        </div>

        <div className="hidden w-full lg:block">
          <Slider show={4}>
            <Partner src="/images/opus-lab.png" label="opus lab logo" />
            <Partner
              src="/images/api.png"
              label="agence de promotion de l'industrie et de l'innovation logo"
            />
            <Partner src="/images/junior-cv.png" label="junior cv logo" />
            <Partner
              src="/images/phebus-voyage.png"
              label="phebus voyage logo"
            />
            <Partner
              src="/images/zerda-digital.webp"
              label="zerda digital logo"
            />
            <Partner src="/images/spik.png" label="spik logo" />
            <Partner src="/images/corp.png" label="corp logo" />
            <Partner
              src="/images/startup-village.png"
              label="startup village"
            />
          </Slider>
        </div>
      </div>
    </section>
  )
}
