export default function Numbers() {
  return (
    <section className="px-36 py-28 w-full">
      <div className="w-full flex flex-col items-center space-y-16">
        <div className="items-center flex flex-col space-y-4">
          <h2 className="font-bold capitalize text-4xl leading-tight text-center text-junior-black w-full max-w-xl">
            Notre vocation!
          </h2>
          <p className="w-full max-w-3xl text-junior-gray mt-5 text-lg leading-7 text-center font-medium">
            we make it happen better
          </p>
        </div>

        <div className="flex justify-around gap-10 items-center w-full">
          <div className="flex flex-col space-y-4 items-center">
            <span className="text-8xl font-bold text-junior-red">97%</span>
            <span className="text-junior-red font-bold text-2xl w-full text-center capitalize">
              satisfaction clients
            </span>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <span className="text-8xl font-bold text-junior-black">+35</span>
            <span className="text-junior-black font-bold text-2xl w-full text-center capitalize">
              projets livrés
            </span>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <span className="text-8xl font-bold text-junior-black">+55</span>
            <span className="text-junior-black font-bold text-2xl w-full text-center capitalize">
              consultants
            </span>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <span className="text-8xl font-bold text-junior-black">+7</span>
            <span className="text-junior-black font-bold text-2xl w-full text-center capitalize">
              evénements
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
