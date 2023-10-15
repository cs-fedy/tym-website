"use client"
import React, { PropsWithChildren, useCallback, useState } from "react"

export default function Slider({ children }: PropsWithChildren) {
  const [current, setCurrent] = useState(0)
  const items = React.Children.toArray(children)

  const handleSlide = useCallback(
    (newPage: number) => setCurrent(Math.abs(newPage) % items.length),
    [items.length],
  )

  return (
    <div className="mx-auto flex w-max items-center space-x-4">
      <button type="button" onClick={() => handleSlide(current - 1)}>
        <i className="fa-solid fa-chevron-left text-xs"></i>
        <span className="hidden">previous page</span>
      </button>

      <div className="flex w-full items-center space-x-4">{items[current]}</div>

      <button type="button" onClick={() => handleSlide(current + 1)}>
        <i className="fa-solid fa-chevron-right text-xs"></i>
        <span className="hidden">next page</span>
      </button>
    </div>
  )
}
