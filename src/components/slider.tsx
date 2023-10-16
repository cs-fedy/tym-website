"use client"
import React, { PropsWithChildren, useCallback, useMemo, useState } from "react"

type SliderProps = { show?: number }

export default function Slider({
  children,
  show = 1,
}: PropsWithChildren<SliderProps>) {
  const [current, setCurrent] = useState(0)

  const items = useMemo(() => React.Children.toArray(children), [children])

  const pageItems = useMemo(
    () => items.slice(current * show, (current + 1) * show),
    [current, items, show],
  )

  const handleSlide = useCallback(
    (newPage: number) =>
      setCurrent(Math.abs(newPage) % Math.ceil(items.length / show)),
    [items.length, show],
  )

  return (
    <div className="mx-auto flex w-full items-center space-x-4">
      <button type="button" onClick={() => handleSlide(current - 1)}>
        <i className="fa-solid fa-chevron-left text-xs"></i>
        <span className="hidden">previous page</span>
      </button>

      <div className="flex w-full items-center space-x-4">
        {pageItems.map((item) => item)}
      </div>

      <button type="button" onClick={() => handleSlide(current + 1)}>
        <i className="fa-solid fa-chevron-right text-xs"></i>
        <span className="hidden">next page</span>
      </button>
    </div>
  )
}
