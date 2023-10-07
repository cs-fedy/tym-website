"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
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
        <i className="fa-solid fa-chevron-left text-xs"></i>
        <span className="hidden">previous page</span>
      </button>

      <div className="w-full flex items-center space-x-4">
        {page.map((item, index) => (
          <SliderItem key={index} label={item.label} src={item.src} />
        ))}
      </div>

      <button type="button" onClick={() => handleNewPage(currentPage + 1)}>
        <i className="fa-solid fa-chevron-right text-xs"></i>
        <span className="hidden">next page</span>
      </button>
    </div>
  )
}
