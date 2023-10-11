export default function Numbers() {
  return (
    <section className="w-full px-36 py-28">
      <div className="flex w-full flex-col items-center space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="w-full max-w-xl text-center text-4xl font-bold capitalize leading-tight text-junior-black">
            Notre vocation!
          </h2>
          <p className="mt-5 w-full max-w-3xl text-center text-lg font-medium leading-7 text-junior-gray">
            we make it happen better
          </p>
        </div>

        <div className="flex w-full items-center justify-around gap-10">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl font-bold text-junior-red">97%</span>
            <span className="w-full text-center text-2xl font-bold capitalize text-junior-red">
              satisfaction clients
            </span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl font-bold text-junior-black">+35</span>
            <span className="w-full text-center text-2xl font-bold capitalize text-junior-black">
              projets livrés
            </span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl font-bold text-junior-black">+55</span>
            <span className="w-full text-center text-2xl font-bold capitalize text-junior-black">
              consultants
            </span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl font-bold text-junior-black">+7</span>
            <span className="w-full text-center text-2xl font-bold capitalize text-junior-black">
              evénements
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
