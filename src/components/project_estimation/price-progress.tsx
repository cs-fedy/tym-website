import { useMemo } from "react"
import { useServices } from "./services-context"

export default function PriceProgress() {
  const { totalPrice } = useServices()

  const progress = useMemo(() => (totalPrice / 4000) * 100, [totalPrice])

  console.log(totalPrice)
  return (
    <div className="w-2/3 relative">
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-junior-red text-xs font-medium text-gray-100 text-center py-2 px-4 leading-none rounded-full"
          style={{ width: `${progress * 2}%` }}
        >
          {totalPrice} TND
        </div>
      </div>
    </div>
  )
}
