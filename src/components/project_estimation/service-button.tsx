import Service from "@/models/service"
import cn from "@/utils/cn"
import { useMemo } from "react"
import { SelectedServiceDetails } from "./services-context"

type ServiceButtonProps = {
  service: Service
  handleClick: (service: Service) => void
  selectedDetails?: SelectedServiceDetails
  handleSelectedDetailsChange: (details: SelectedServiceDetails) => void
}

export default function ServiceButton({
  service,
  handleClick,
  selectedDetails,
  handleSelectedDetailsChange,
}: ServiceButtonProps) {
  const isSelected = useMemo(() => !!selectedDetails, [selectedDetails])

  return (
    <button
      type="button"
      onClick={() => handleClick(service)}
      className={cn(
        "px-8 py-4 mt-8 font-bold text-junior-white capitalize rounded-md flex-col flex items-center space-y-4 text-center",
        isSelected ? "bg-junior-red" : "bg-junior-gray",
      )}
    >
      <i className={service.icon}></i>
      <span>{service.name}</span>
      {selectedDetails && !service.onlyOnce && (
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              handleSelectedDetailsChange({ ...selectedDetails, count: -1 })
            }}
          >
            <i className="fa-solid fa-minus text-xs"></i>
            <span className="hidden">increase count</span>
          </button>
          <span>{selectedDetails.count}</span>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              handleSelectedDetailsChange({ ...selectedDetails, count: +1 })
            }}
          >
            <i className="fa-solid fa-plus text-xs"></i>
            <span className="hidden">decrease count</span>
          </button>
        </div>
      )}
    </button>
  )
}
