import { useMemo } from "react"
import { useServices } from "./services-context"

export default function PriceProgress() {
  const { totalPrice } = useServices()

  const progress = useMemo(
    () => Math.min((totalPrice / 4000) * 100, 100),
    [totalPrice],
  )

  return (
    <div className="relative w-2/3">
      <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="rounded-full bg-junior-red px-4 py-2 text-center text-xs font-medium leading-none text-gray-100"
          style={{ width: `${progress}%` }}
        >
          {totalPrice} TND
        </div>
      </div>
    </div>
  )
}
