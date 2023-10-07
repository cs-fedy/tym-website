"use client"

import Service from "@/models/service"
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

export type SelectedServiceDetails = {
  serviceId: string
  count: number
}

type ServicesStore = {
  services: Array<Service>
  totalPrice: number
  selectedServices: Array<SelectedServiceDetails>
  handleNewSelectedServices: (selected: Array<SelectedServiceDetails>) => void
}

const ServicesContext = createContext({} as ServicesStore)

export function useServices() {
  return useContext(ServicesContext)
}

type ServicesProviderProps = { services: Array<Service> }

export default function ServicesProvider({
  services,
  children,
}: PropsWithChildren<ServicesProviderProps>) {
  const [selectedServices, setSelectedServices] = useState<
    Array<SelectedServiceDetails>
  >([])

  const handleNewSelectedServices = useCallback(
    (selected: Array<SelectedServiceDetails>) => {
      setSelectedServices((prev) => [...prev, ...selected])
    },
    [],
  )

  const totalPrice = useMemo(
    () =>
      selectedServices.reduce((prev, curr) => {
        const service = services.find((item) => item.id === curr.serviceId)
        if (!service) return prev

        const serviceCount = service.onlyOnce ? 1 : curr.count
        return prev + serviceCount * service.price
      }, 0),
    [selectedServices, services],
  )

  const store = useMemo(() => {
    return { services, selectedServices, handleNewSelectedServices, totalPrice }
  }, [services, selectedServices, handleNewSelectedServices, totalPrice])

  return (
    <ServicesContext.Provider value={store}>
      {children}
    </ServicesContext.Provider>
  )
}
