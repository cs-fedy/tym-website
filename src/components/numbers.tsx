export default function Numbers() {
  return (
    <section className="mx-auto w-4/5 py-20">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="w-full max-w-sm text-center text-xl font-bold capitalize leading-tight text-junior-black sm:text-2xl md:max-w-lg md:text-3xl">
            notre vocation
          </h2>

          <p className="mt-5 w-full max-w-md text-center text-base font-medium leading-6 text-junior-gray md:max-w-lg lg:max-w-2xl lg:text-lg lg:leading-7">
            we make it happen better
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-5xl font-bold text-junior-red sm:text-6xl md:text-7xl lg:text-8xl">
              97%
            </span>
            <span className="w-full text-center text-base font-bold capitalize text-junior-red sm:text-lg md:text-xl lg:text-2xl">
              satisfaction clients
            </span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-5xl font-bold text-junior-black sm:text-6xl md:text-7xl lg:text-8xl">
              +35
            </span>
            <span className="w-full text-center text-base font-bold capitalize text-junior-black sm:text-lg md:text-xl lg:text-2xl">
              projets livrés
            </span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-5xl font-bold text-junior-black sm:text-6xl md:text-7xl lg:text-8xl">
              +55
            </span>
            <span className="w-full text-center text-base font-bold capitalize text-junior-black sm:text-lg md:text-xl lg:text-2xl">
              consultants
            </span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-5xl font-bold text-junior-black sm:text-6xl md:text-7xl lg:text-8xl">
              +7
            </span>
            <span className="w-full text-center text-base font-bold capitalize text-junior-black sm:text-lg md:text-xl lg:text-2xl">
              evénements
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
