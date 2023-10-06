"use client"

import Service from "@/models/service"
import { PropsWithChildren, createContext, useContext, useMemo } from "react"

type ServicesStore = {
  services: Array<Service>
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
  const store = useMemo(() => {
    return { services }
  }, [services])

  return (
    <ServicesContext.Provider value={store}>
      {children}
    </ServicesContext.Provider>
  )
}
