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

  const store = useMemo(() => {
    return { services, selectedServices, handleNewSelectedServices }
  }, [services, selectedServices, handleNewSelectedServices])

  return (
    <ServicesContext.Provider value={store}>
      {children}
    </ServicesContext.Provider>
  )
}
