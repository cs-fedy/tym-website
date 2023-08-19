"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import ChevronLeft from "./icons/chevron-left"
import ChevronRight from "./icons/chevron-right"
import SliderItem, { SliderItemProps } from "./slider-item"

type PartnersSliderProps = {
  size: number
  items: Array<SliderItemProps>
  isInfinite: boolean
}

export default function PartnersSlider({
  size,
  items,
  isInfinite,
}: PartnersSliderProps) {
  const [currentPage, setCurrentPage] = useState(0)

  const pagesCount = useMemo(
    () => Math.ceil(items.length / size),
    [items.length, size],
  )
  const page = useMemo(
    () => items.slice(currentPage * size, (currentPage + 1) * size),
    [currentPage, items, size],
  )

  const handleNewPage = useCallback(
    (newPage: number) => setCurrentPage(Math.abs(newPage) % pagesCount),
    [pagesCount],
  )

  useEffect(() => {
    let window: NodeJS.Timer

    if (isInfinite) {
      window = setInterval(() => handleNewPage(currentPage + 1), 3000)
    }

    return () => {
      clearInterval(window)
    }
  }, [currentPage, handleNewPage, isInfinite])

  return (
    <div className="w-full flex items-center">
      <button type="button" onClick={() => handleNewPage(currentPage - 1)}>
        <div className="w-5 h-5 text-junior-black">
          <ChevronLeft />
        </div>
      </button>

      <div className="w-full flex items-center space-x-4">
        {page.map((item, index) => (
          <SliderItem key={index} label={item.label} src={item.src} />
        ))}
      </div>

      <button type="button" onClick={() => handleNewPage(currentPage + 1)}>
        <div className="w-5 h-5 text-junior-black">
          <ChevronRight />
        </div>
      </button>
    </div>
  )
}
